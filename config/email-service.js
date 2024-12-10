import mailchimp from '@mailchimp/mailchimp_marketing';

// If using Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX // e.g., 'us1'
});

export const addSubscriberToList = async (email) => {
  try {
    const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID, {
      email_address: email,
      status: 'subscribed'
    });
    return response;
  } catch (error) {
    console.error('Mailchimp error:', error);
    throw new Error('Failed to add subscriber to mailing list');
  }
}; 