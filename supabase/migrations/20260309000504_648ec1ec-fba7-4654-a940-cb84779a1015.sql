-- Add SELECT policy to restrict contact_submissions reads to authenticated users only
-- (admin dashboard will use service role, but this prevents any anon/public reads)
CREATE POLICY "Only authenticated users can view contact submissions"
ON public.contact_submissions
FOR SELECT
USING (auth.role() = 'authenticated');