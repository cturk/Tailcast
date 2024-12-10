import { validateEmail } from '../../utils/validation';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    // Here you would typically:
    // 1. Add the email to your database
    // 2. Send to your email marketing service (e.g., Mailchimp, SendGrid, etc.)
    
    // Example with a hypothetical email service:
    // await addSubscriberToList(email);

    // For demonstration, we'll just simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return res.status(200).json({ message: 'Successfully subscribed!' });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ message: 'Failed to subscribe. Please try again later.' });
  }
} 