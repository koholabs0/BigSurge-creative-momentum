
ALTER TABLE public.blog_posts ADD COLUMN IF NOT EXISTS medium_url TEXT;

INSERT INTO public.blog_posts (title, slug, content, excerpt, category, published, medium_url, created_at) VALUES
(
  'The Reawakening: Africa''s Future Depends on Its Creators, Culture, and Collaboration',
  'the-reawakening-africas-future',
  'Culture is not a relic – it''s a resource. We''re in the midst of a renaissance: one where our roots, rhythms, and stories are rising again reimagined through modern expression and digital innovation.',
  'We''re in the midst of a renaissance where our roots, rhythms, and stories are rising again — reimagined through modern expression and digital innovation.',
  'African Creator Economy',
  true,
  'https://medium.com/@adenugaadesoji01/the-reawakening-africas-future-depends-on-its-creators-culture-and-collaboration-9e89852f86a3',
  '2025-07-20T00:00:00Z'
),
(
  'The 3Cs Framework: Culture, Creators & Collaboration in Africa''s Creator Economy',
  'the-3cs-framework',
  'How rooting in culture, empowering creators, and fostering collaboration will define success in 2025 and beyond. Africa''s creator economy is at an inflection point.',
  'How rooting in culture, empowering creators, and fostering collaboration will define success in 2025 and beyond.',
  'African Creator Economy',
  true,
  'https://medium.com/@adenugaadesoji01/the-3cs-framework-culture-creators-collaboration-in-africas-creator-economy-4b2c5b831b8b',
  '2025-07-25T00:00:00Z'
),
(
  'The Creator Agency of Record: A New Pillar in Africa''s Marketing Stack',
  'creator-agency-of-record',
  'A new pillar in Africa''s marketing stack — exploring how creator agencies are reshaping the marketing landscape across the continent.',
  'Exploring how creator agencies are reshaping the marketing landscape across Africa.',
  'Creative Strategy',
  true,
  'https://medium.com/@adenugaadesoji01/the-creator-agency-of-record-a-new-pillar-in-africas-marketing-stack-10530c27a486',
  '2025-07-28T00:00:00Z'
),
(
  'Ancestral Echoes: Reclaiming the Forgotten Gods of the Motherland',
  'ancestral-echoes-episode-1',
  'Before the books and the crosses, before the ships came ashore, there were gods here. Gods of iron, water, thunder, and justice. This series revives the stories, symbols, and sacred powers of the African deities once revered across kingdoms.',
  'A series that revives the stories, symbols, and sacred powers of African deities once revered across kingdoms and forest paths.',
  'Culture',
  true,
  'https://medium.com/@adenugaadesoji01/ancestral-echoes-efce4111dce8',
  '2025-08-05T00:00:00Z'
),
(
  'Ancestral Echoes: Episode 2 — Ọ̀ṢUN: The River Never Forgets',
  'ancestral-echoes-episode-2',
  'Ancestral Echoes is more than a journey into mythology; it is a spiritual excavation. In this episode, we flow with Ọ̀ṣun — the goddess of sweetness, seduction, and sacred justice.',
  'In this episode, we flow with Ọ̀ṣun — the goddess of sweetness, seduction, and sacred justice.',
  'Culture',
  true,
  'https://medium.com/@adenugaadesoji01/ancestral-echoes-episode-2-166aa297b52c',
  '2025-08-06T00:00:00Z'
),
(
  'Head Honcho: Leading the New Generation of Work with KohoLabs',
  'head-honcho-koholabs',
  'The world is evolving at lightning speed – powered by Artificial Intelligence, cultural innovation, and an economy where content is currency. What if we designed a new system of work that celebrates creativity, technology, and neurodiversity?',
  'What if we designed a new system of work — one that celebrates creativity, technology, and neurodiversity? The vision behind KohoLabs.',
  'Creative Strategy',
  true,
  'https://medium.com/@adenugaadesoji01/head-honcho-leading-the-new-generation-of-work-with-koholabs-62ffc234f514',
  '2025-08-23T00:00:00Z'
);
