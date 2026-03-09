
-- Create user_roles table if not exists
CREATE TABLE IF NOT EXISTS public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role text NOT NULL CHECK (role IN ('admin')),
    UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Only service_role can manage user_roles (no client access)
-- No RLS policies = only service_role can access

-- Create has_role function
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role text)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Revoke execute from public, grant only to authenticated and service_role
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, text) TO authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, text) TO service_role;

-- Drop all existing permissive policies on contact_submissions
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can delete contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can update contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Only authenticated users can view contact submissions" ON public.contact_submissions;

-- contact_submissions: service_role inserts (via edge function), admins can read/delete
CREATE POLICY "Admins can view contact submissions"
ON public.contact_submissions FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete contact submissions"
ON public.contact_submissions FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- No INSERT/UPDATE policy for authenticated - inserts go through edge function with service_role

-- Drop all existing permissive policies on blog_posts
DROP POLICY IF EXISTS "Anyone can view published blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authenticated users can delete blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authenticated users can insert blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authenticated users can update blog posts" ON public.blog_posts;

-- blog_posts: public read published, admin CRUD
CREATE POLICY "Anyone can view published blog posts"
ON public.blog_posts FOR SELECT TO anon, authenticated
USING (published = true);

CREATE POLICY "Admins can view all blog posts"
ON public.blog_posts FOR SELECT TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert blog posts"
ON public.blog_posts FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update blog posts"
ON public.blog_posts FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete blog posts"
ON public.blog_posts FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Drop all existing permissive policies on testimonials
DROP POLICY IF EXISTS "Anyone can view testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Authenticated users can delete testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Authenticated users can insert testimonials" ON public.testimonials;
DROP POLICY IF EXISTS "Authenticated users can update testimonials" ON public.testimonials;

-- testimonials: public read, admin CRUD
CREATE POLICY "Anyone can view testimonials"
ON public.testimonials FOR SELECT TO anon, authenticated
USING (true);

CREATE POLICY "Admins can insert testimonials"
ON public.testimonials FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update testimonials"
ON public.testimonials FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete testimonials"
ON public.testimonials FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Revoke direct table privileges from anon on contact_submissions
REVOKE INSERT, UPDATE, DELETE ON public.contact_submissions FROM anon;
REVOKE UPDATE ON public.contact_submissions FROM authenticated;
REVOKE INSERT ON public.contact_submissions FROM authenticated;
