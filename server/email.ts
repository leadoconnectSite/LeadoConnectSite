import nodemailer from 'nodemailer';

// Email configuration
export const createEmailTransporter = () => {
  // Create transporter with your email service
  // For Gmail, you'll need to use an "App Password" (not your regular password)
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can change this to 'outlook', 'yahoo', etc.
    auth: {
      user: process.env.EMAIL_USER, // Your email address
      pass: process.env.EMAIL_PASSWORD, // Your email password or app password
    },
  });

  return transporter;
};

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData) => {
  const transporter = createEmailTransporter();

  // Email to your business
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Your business email
    subject: `New Contact Form Submission from ${formData.name}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #023043 0%, #034d65 100%); padding: 30px 40px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #00d4ff; margin: 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h2>
        </div>
        
        <!-- Content -->
        <div style="background-color: #f8f9fa; padding: 40px; border-radius: 0 0 8px 8px;">
          <!-- Contact Details -->
          <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                  <strong style="color: #023043; font-size: 14px; font-weight: 600;">Name:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; text-align: right;">
                  <span style="color: #495057; font-size: 14px;">${formData.name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                  <strong style="color: #023043; font-size: 14px; font-weight: 600;">Email:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; text-align: right;">
                  <a href="mailto:${formData.email}" style="color: #00d4ff; text-decoration: none; font-size: 14px;">${formData.email}</a>
                </td>
              </tr>
              ${formData.company ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                  <strong style="color: #023043; font-size: 14px; font-weight: 600;">Company:</strong>
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; text-align: right;">
                  <span style="color: #495057; font-size: 14px;">${formData.company}</span>
                </td>
              </tr>
              ` : ''}
              ${formData.service ? `
              <tr>
                <td style="padding: 12px 0;">
                  <strong style="color: #023043; font-size: 14px; font-weight: 600;">Service Interest:</strong>
                </td>
                <td style="padding: 12px 0; text-align: right;">
                  <span style="color: #495057; font-size: 14px;">${formData.service}</span>
                </td>
              </tr>
              ` : ''}
            </table>
          </div>
          
          <!-- Message Section -->
          <div style="margin-top: 25px;">
            <div style="background-color: #ffffff; padding: 25px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
              <strong style="color: #023043; font-size: 14px; font-weight: 600; display: block; margin-bottom: 12px;">Message:</strong>
              <p style="color: #495057; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${formData.message}</p>
            </div>
          </div>
          
          <!-- Quick Action -->
          <div style="margin-top: 25px; background-color: #e7f5ff; border-left: 4px solid #00d4ff; padding: 15px 20px; border-radius: 4px;">
            <p style="margin: 0; color: #023043; font-size: 13px;">
              💡 <strong>Quick Action:</strong> Reply directly to this email to respond to ${formData.name}
            </p>
          </div>
          
          <!-- Footer -->
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; text-align: center;">
            <p style="color: #6c757d; font-size: 12px; margin: 0;">
              This email was sent from your website contact form
            </p>
          </div>
        </div>
      </div>
    `,
    replyTo: formData.email, // This allows you to reply directly to the customer
  };

  // Auto-reply to the customer
  const autoReplyOptions = {
    from: process.env.EMAIL_USER,
    to: formData.email,
    subject: 'Thank you for contacting us!',
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #023043 0%, #034d65 100%); padding: 30px 40px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #00d4ff; margin: 0; font-size: 24px; font-weight: 600;">Thank You for Reaching Out!</h2>
        </div>
        
        <!-- Content -->
        <div style="background-color: #f8f9fa; padding: 40px; border-radius: 0 0 8px 8px;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <p style="color: #023043; font-size: 16px; line-height: 1.6; margin: 0 0 15px 0;">
              Hi <strong>${formData.name}</strong>,
            </p>
            <p style="color: #495057; font-size: 14px; line-height: 1.6; margin: 0 0 15px 0;">
              We've received your message and our team will get back to you within 24 hours.
            </p>
            
            <!-- Message Summary -->
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #00d4ff;">
              <p style="color: #023043; font-size: 13px; font-weight: 600; margin: 0 0 10px 0;">Your Message:</p>
              <p style="color: #495057; font-size: 13px; line-height: 1.5; margin: 0; white-space: pre-wrap;">${formData.message}</p>
            </div>
            
            <p style="color: #495057; font-size: 14px; line-height: 1.6; margin: 20px 0 0 0;">
              Best regards,<br/>
              <strong style="color: #023043;">LeadConnect Team</strong>
            </p>
          </div>
          
          <!-- Footer -->
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; text-align: center;">
            <p style="color: #6c757d; font-size: 12px; margin: 0 0 5px 0;">
              This is an automated response confirming we received your message.
            </p>
            <p style="color: #6c757d; font-size: 12px; margin: 0;">
              Please do not reply to this email. We will contact you directly.
            </p>
          </div>
        </div>
      </div>
    `,
  };

  try {
    // Send email to business
    await transporter.sendMail(mailOptions);
    
    // Send auto-reply to customer
    await transporter.sendMail(autoReplyOptions);
    
    return { success: true, message: 'Emails sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};
