# Contact Form Setup Guide

## Overview
Your contact form is now fully functional with:
- ✅ Element Plus UI components
- ✅ Form validation with Element Plus rules
- ✅ reCAPTCHA v3 integration (invisible bot protection)
- ✅ Nodemailer for email delivery
- ✅ Support for both Gmail and custom SMTP servers

## Prerequisites Setup

### 1. Set Up reCAPTCHA v3
1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click "Create" and add your site:
   - **Name**: Your site name
   - **reCAPTCHA Type**: Select `reCAPTCHA v3`
   - **Domains**: Add your domain(s)
3. Copy your **Site Key** and **Secret Key**

### 2. Set Up SMTP (Gmail Example)

#### For Gmail:
1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password:
   - Visit [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows Computer" (or your OS)
   - Generate and copy the password

#### For Custom SMTP:
Use your email provider's SMTP settings.

### 3. Create `.env` File
Copy `.env.example` to `.env` and fill in your credentials:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
RECIPIENT_EMAIL=your-receiving-email@gmail.com

# reCAPTCHA v3
NUXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
```

## How It Works

### Frontend (ContactForm.vue)
1. User fills out the form (Name, Email, Subject, Message)
2. Element Plus validates the fields:
   - Name: Required
   - Email: Required and valid email format
   - Subject: Required
   - Message: Required
3. On submit:
   - reCAPTCHA v3 silently generates a token (no visible widget)
   - Form data + CAPTCHA token sent to backend API
   - Loading state shows "Sending..."
   - Success/Error messages displayed

### Backend (server/api/contact.post.ts)
1. Validates form fields
2. Verifies reCAPTCHA token with Google:
   - Checks if token is valid
   - Checks if user score is above 0.5 (0 = bot, 1 = human)
3. Sends email via Nodemailer
4. Returns success or error response

## File Structure

```
/
├── app/
│   ├── components/
│   │   └── ContactForm.vue          # Main contact form component
│   └── pages/
│       └── contact.vue               # Contact page
├── server/
│   └── api/
│       └── contact.post.ts           # Email API route
├── .env                              # Environment variables (not in git)
├── .env.example                      # Template for .env
├── nuxt.config.ts                    # Nuxt config with reCAPTCHA
├── shared/
│   └── utils/
│       └── global.js                 # Menu with contact link
└── package.json                      # Dependencies
```

## Testing the Form

1. **Local Development**:
   ```bash
   npm run dev
   ```
   - Navigate to `http://localhost:3000/contact`
   - Fill out and submit the form
   - Check server console for logs (🔍 Verifying CAPTCHA, ✅ Email sent, etc.)
   - Check your email inbox

2. **Check Server Logs**:
   - 🔍 Verifying CAPTCHA token...
   - ✅ CAPTCHA Response: { success, score, action }
   - 📧 Sending email from: your-email@gmail.com
   - ✅ Email sent successfully: messageId

## Troubleshooting

### "Invalid key type" Error
- **Cause**: reCAPTCHA key type mismatch
- **Fix**: Ensure you created a **v3** key (not v2)

### Email Not Sending
- **Check**: SMTP credentials in `.env`
- **Check**: `RECIPIENT_EMAIL` is correct
- **Check**: Gmail app password (not regular password)
- **Check**: Server logs for error messages

### CAPTCHA Token Not Generated
- **Cause**: reCAPTCHA script not loaded
- **Fix**: Ensure `NUXT_PUBLIC_RECAPTCHA_SITE_KEY` is set correctly
- **Fix**: Check browser console for script errors

### Form Validation Not Working
- **Cause**: Element Plus not registered
- **Status**: Already configured in `nuxt.config.ts` with `@element-plus/nuxt` module

## Security Features

✅ **Server-side validation**: All fields validated on backend
✅ **reCAPTCHA v3**: Bot detection with score-based verification
✅ **HTML escaping**: Prevents injection attacks
✅ **CORS protected**: API only accepts POST requests
✅ **Environment variables**: Secrets never exposed to frontend

## Customization

### Change Email Template
Edit `server/api/contact.post.ts` lines 89-121 to customize the email HTML.

### Change Validation Rules
Edit `app/components/ContactForm.vue` lines 65-73 to modify validation rules.

### Change reCAPTCHA Score Threshold
Edit `server/api/contact.post.ts` line 65 to adjust the minimum score (0-1).

## Dependencies

```json
{
  "nodemailer": "^8.0.7",
  "element-plus": "^2.13.7",
  "@element-plus/nuxt": "^1.1.5",
  "@element-plus/icons-vue": "^2.3.2"
}
```

## Next Steps

1. ✅ Set up `.env` with your credentials
2. ✅ Test the form locally (`npm run dev`)
3. ✅ Deploy to production
4. ✅ Verify emails are being received

---

**Need help?** Check server console logs and browser DevTools for debugging.

