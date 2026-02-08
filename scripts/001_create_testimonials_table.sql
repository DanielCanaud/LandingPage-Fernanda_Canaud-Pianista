-- Creating testimonials table with RLS for public viewing and user submissions
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT,
  text TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Anyone can view all testimonials
CREATE POLICY "testimonials_select_all" ON public.testimonials 
FOR SELECT USING (true);

-- Anyone can insert testimonials without authentication
CREATE POLICY "testimonials_insert_public" ON public.testimonials 
FOR INSERT WITH CHECK (true);
