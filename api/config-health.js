export default async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  return response.status(200).json({
    resend_configured: Boolean(process.env.RESEND_API_KEY),
    supabase_url_configured: Boolean(process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL),
    supabase_anon_key_configured: Boolean(process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY),
    supabase_service_role_configured: Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY),
    from_address: process.env.CONTACT_FROM_EMAIL || 'Cliniqeo Hair <info@cliniqeo.com>',
  });
}
