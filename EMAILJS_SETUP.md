# EmailJS Setup Instructions

This document explains how to set up EmailJS for the contact form functionality.

## 1. Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Demo Request from {{from_name}}

Hello,

You have received a new demo request from your website:

Name: {{from_name}}
Email: {{from_email}}
Clinic Name: {{clinic_name}}
Phone: {{phone}}

Message: {{message}}

Please contact them as soon as possible.

Best regards,
The Smile OS Website
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** in the API Keys section

## 5. Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_actual_service_id',
  TEMPLATE_ID: 'your_actual_template_id', 
  PUBLIC_KEY: 'your_actual_public_key',
  BUSINESS_EMAIL: 'sales@thesmileos.com'
};
```

## 6. Test the Form

1. Start your development server: `npm run dev`
2. Go to the contact form on your website
3. Fill out and submit the form
4. Check your email for the form submission

## Template Variables

The following variables are available in your EmailJS template:

- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{clinic_name}}` - Clinic name (or "Not provided")
- `{{phone}}` - Phone number (or "Not provided")
- `{{to_email}}` - Your business email
- `{{message}}` - Formatted message with all details

## Troubleshooting

- **Form not sending**: Check that all IDs and keys are correct
- **Emails not received**: Check your spam folder and email service settings
- **Template errors**: Ensure all template variables are spelled correctly

## Security Notes

- Never commit your actual EmailJS credentials to version control
- Consider using environment variables for production
- The public key is safe to use in frontend code
