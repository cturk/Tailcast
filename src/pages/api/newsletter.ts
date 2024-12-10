import type { APIRoute } from 'astro';

const MAILCHIMP_API_KEY = import.meta.env.MAILCHIMP_API_KEY;
const MAILCHIMP_AUDIENCE_ID = import.meta.env.MAILCHIMP_AUDIENCE_ID;
const MAILCHIMP_API_SERVER = import.meta.env.MAILCHIMP_API_SERVER;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const { email } = data;

  try {
    const response = await fetch(
      `https://${MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
        }),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.detail);
    }

    return new Response(JSON.stringify({
      message: 'Successfully subscribed!'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      message: error.message || 'Error subscribing to newsletter'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}; 