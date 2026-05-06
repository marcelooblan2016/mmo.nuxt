<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Http;

class ContactController extends Controller
{
    /**
     * Send contact form email
     */
    public function send(Request $request)
    {
        try {
            // Validate incoming data
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'subject' => 'required|string|max:255',
                'message' => 'required|string|max:5000',
                'captchaToken' => 'required|string',
            ]);

            // Verify reCAPTCHA token
            $recaptchaResponse = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
                'secret' => config('services.recaptcha.secret'),
                'response' => $validated['captchaToken'],
            ]);

            $recaptchaData = $recaptchaResponse->json();

            // Check reCAPTCHA score (v3 returns score between 0-1)
            if (!$recaptchaData['success'] || ($recaptchaData['score'] ?? 0) < 0.5) {
                return response()->json([
                    'success' => false,
                    'message' => 'reCAPTCHA verification failed. Please try again.',
                ], 422);
            }

            // Prepare email data
            $emailData = [
                'name' => $validated['name'],
                'email' => $validated['email'],
                'subject' => $validated['subject'],
                'message' => $validated['message'],
            ];

            // Send email to recipient
            Mail::raw(
                "Name: {$emailData['name']}\n" .
                "Email: {$emailData['email']}\n" .
                "Subject: {$emailData['subject']}\n\n" .
                "Message:\n{$emailData['message']}",
                function ($mail) use ($emailData) {
                    $appName = config('app.name');
                    $mail->to(config('services.recaptcha.recipient_email'))
                        ->from(config('mail.from.address'), config('mail.from.name'))
                        ->subject("New Contact Form Submission: {$emailData['subject']} {$appName}")
                        ->replyTo($emailData['email']);
                }
            );

            // Optional: Send confirmation email to user
            /*
             * Disabled

            Mail::raw(
                "Hi {$emailData['name']},\n\n" .
                "Thank you for contacting us. We have received your message and will get back to you as soon as possible.\n\n" .
                "Best regards,\n" .
                "Moblan.dev Team",
                function ($mail) use ($emailData) {
                    $mail->to($emailData['email'])
                        ->from(config('mail.from.address'), config('mail.from.name'))
                        ->subject('We received your message');
                }
            );
             */

            return response()->json([
                'success' => true,
                'message' => 'Your message has been sent successfully. We will get back to you soon!',
            ], 200);

        } catch (\Illuminate\Validation\ValidationException $e) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {
            \Log::error('Contact form error: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'An error occurred while sending your message. Please try again later.',
            ], 500);
        }
    }
}

