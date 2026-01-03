-- Create blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Creative Strategy',
  cover_image TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  quote TEXT NOT NULL,
  client_name TEXT NOT NULL,
  client_role TEXT NOT NULL,
  company TEXT NOT NULL,
  company_logo TEXT,
  featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create contact submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Public read policies for published content
CREATE POLICY "Anyone can view published blog posts" 
ON public.blog_posts 
FOR SELECT 
USING (published = true);

CREATE POLICY "Anyone can view testimonials" 
ON public.testimonials 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can submit contact form" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for blog posts
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample testimonials
INSERT INTO public.testimonials (quote, client_name, client_role, company, featured) VALUES
('Working with Adesoji transformed our content strategy. His creative vision and strategic thinking helped us achieve 300% growth in engagement.', 'Chioma Okwu', 'Marketing Director', 'TechStartup Lagos', true),
('BigSurge brought a fresh perspective to our brand campaign. The results exceeded all expectations - truly a visionary creative director.', 'David Adeyemi', 'CEO', 'AfroBeats Studio', true),
('The event activation he designed was unlike anything we''d seen. Incredible attention to detail and understanding of our audience.', 'Fatima Hassan', 'Brand Manager', 'Campus Connect', true),
('His AI-enhanced content workflows revolutionized how we produce and distribute content. A true innovator in the space.', 'Michael Chen', 'Creative Lead', 'KohoLabs', true);

-- Insert sample blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content, category, published) VALUES
('The Future of Creative Strategy in Africa', 'creative-strategy-africa', 'Exploring how African creatives are reshaping the global creative landscape with unique perspectives and innovative approaches.', 'The African creative industry is experiencing unprecedented growth...', 'Creative Strategy', true),
('AI & African Creativity: A New Renaissance', 'ai-africa', 'How artificial intelligence is empowering African creators to scale their vision while preserving cultural authenticity.', 'As AI tools become more accessible, African creators are finding unique ways to leverage these technologies...', 'AI', true),
('Building Brand Narratives That Resonate', 'brand-narratives', 'The art of crafting stories that connect with audiences on a deeper level and drive meaningful engagement.', 'In today''s saturated media landscape, brands need more than just visibility...', 'Creative Strategy', true);