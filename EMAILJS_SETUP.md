# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** (e.g., `service_portfolio`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and note down your **Template ID** (e.g., `template_contact`)

## Step 4: Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (e.g., `user_xxxxxxxxxxxxx`)

## Step 5: Update Your Code
Replace these values in `src/App.jsx`:

```javascript
const serviceId = 'your_service_id_here' // Replace with your Service ID
const templateId = 'your_template_id_here' // Replace with your Template ID  
const publicKey = 'your_public_key_here' // Replace with your Public Key
```

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Troubleshooting
- Make sure all IDs are correct
- Check browser console for any errors
- Verify your email service is properly connected
- Ensure your template variables match the code

## Free Tier Limits
- 200 emails per month
- Perfect for portfolio websites
- Upgrade if you need more emails
