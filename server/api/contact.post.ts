import nodemailer from 'nodemailer';

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // Use TLS
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

export default defineEventHandler(async (event) => {
    try {
        // Parse request body
        const body = await readBody(event);
        const { name, email, subject, message, captchaToken } = body;

        // Validate inputs
        if (!name || !email || !subject || !message) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Missing required fields (name, email, subject, message)'
            });
        }

        // Verify CAPTCHA with Google
        if (captchaToken) {
            try {
                console.log('🔍 Verifying CAPTCHA token...');

                const captchaResponse = await fetch(
                    'https://www.google.com/recaptcha/api/siteverify',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: new URLSearchParams({
                            secret: process.env.RECAPTCHA_SECRET_KEY || '',
                            response: captchaToken
                        }).toString()
                    }
                );

                const captchaData = await captchaResponse.json();

                console.log('✅ CAPTCHA Response:', {
                    success: captchaData.success,
                    score: captchaData.score,
                    action: captchaData.action
                });

                // Check if CAPTCHA verification was successful
                if (!captchaData.success) {
                    console.error('❌ CAPTCHA verification failed');
                    throw createError({
                        statusCode: 400,
                        statusMessage: 'CAPTCHA verification failed. Please try again.'
                    });
                }

                // Optional: Check score for v3 (0.0 to 1.0)
                if (captchaData.score && captchaData.score < 0.5) {
                    console.error('❌ CAPTCHA score too low:', captchaData.score);
                    throw createError({
                        statusCode: 400,
                        statusMessage: 'CAPTCHA score too low. You may be a bot.'
                    });
                }
            } catch (captchaError: any) {
                console.error('🔴 CAPTCHA Error:', captchaError.message);
                throw createError({
                    statusCode: 400,
                    statusMessage: 'CAPTCHA verification failed'
                });
            }
        }

        // Send email
        console.log('📧 Sending email from:', process.env.SMTP_USER);

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.RECIPIENT_EMAIL,
            replyTo: email,
            subject: `📨 New Contact Moblan.dev: ${subject}`,
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #007bff; color: white; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
              .content { background: #f8f9fa; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
              .footer { color: #666; font-size: 12px; border-top: 1px solid #ddd; padding-top: 10px; }
              strong { color: #007bff; }
              .label { font-weight: bold; color: #007bff; margin-top: 10px; display: block; font-size: 14px;}
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
              </div>
              
              <div class="content">
                <p class="label"><strong>Name:</strong><br>${escapeHtml(name)}</p>
                <p class="label"><strong>Email:</strong><br><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
                <p class="label"><strong>Subject:</strong><br>${escapeHtml(subject)}</p>
                <p class="label"><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
              </div>
              
              <div class="footer">
                <p>This email was sent from your portfolio website contact form.</p>
              </div>
            </div>
          </body>
        </html>
      `
        };

        const info = await transporter.sendMail(mailOptions);

        console.log('✅ Email sent successfully:', info.messageId);

        return {
            success: true,
            message: 'Your message has been sent successfully! I will get back to you soon.'
        };
    } catch (error: any) {
        console.error('🔴 Server Error:', error.message);

        // Return user-friendly error messages
        if (error.statusCode) {
            throw error;
        }

        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Failed to send email. Please try again later.'
        });
    }
});

// Helper function to escape HTML
function escapeHtml(unsafe: string): string {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
