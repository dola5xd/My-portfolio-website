-- ==============================================================================
-- Adel Yasser Portfolio - Supabase Database Schema & Data Injection
-- ==============================================================================

-- 1. Create Tables
-- ------------------------------------------------------------------------------

-- Profile & Hero information
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    title TEXT NOT NULL,
    bio TEXT NOT NULL,
    cv_url TEXT,
    avatar_url TEXT,
    email TEXT,
    phone TEXT,
    github_url TEXT,
    linkedin_url TEXT,
    facebook_url TEXT,
    rotating_headlines TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- About Me journey steps
CREATE TABLE IF NOT EXISTS public.about_steps (
    id SERIAL PRIMARY KEY,
    step_number INT NOT NULL,
    text TEXT NOT NULL,
    icon_name TEXT,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Courses and Education
CREATE TABLE IF NOT EXISTS public.courses (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    platform TEXT NOT NULL,
    instructor TEXT NOT NULL,
    from_date TEXT NOT NULL,
    to_date TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Skills & Technologies
CREATE TABLE IF NOT EXISTS public.skills (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Projects
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    image_url TEXT,
    stack TEXT[] DEFAULT '{}',
    demo_url TEXT,
    repo_url TEXT,
    published_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ------------------------------------------------------------------------------
-- 2. Row Level Security (RLS) - Public Read Access
-- ------------------------------------------------------------------------------

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.about_steps ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read profiles" ON public.profiles;
CREATE POLICY "Public read profiles" ON public.profiles FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public read about_steps" ON public.about_steps;
CREATE POLICY "Public read about_steps" ON public.about_steps FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public read courses" ON public.courses;
CREATE POLICY "Public read courses" ON public.courses FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public read skills" ON public.skills;
CREATE POLICY "Public read skills" ON public.skills FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public read projects" ON public.projects;
CREATE POLICY "Public read projects" ON public.projects FOR SELECT USING (true);

-- ------------------------------------------------------------------------------
-- 3. Data Injection
-- ------------------------------------------------------------------------------

-- Clean previous demo data if re-running
TRUNCATE TABLE public.projects CASCADE;
TRUNCATE TABLE public.courses CASCADE;
TRUNCATE TABLE public.about_steps CASCADE;
TRUNCATE TABLE public.skills CASCADE;
TRUNCATE TABLE public.profiles CASCADE;

-- Insert Profile
INSERT INTO public.profiles (
    name,
    title,
    bio,
    cv_url,
    avatar_url,
    email,
    phone,
    github_url,
    linkedin_url,
    facebook_url,
    rotating_headlines
) VALUES (
    'Adel Yasser',
    'Frontend Developer',
    'I craft exceptional digital experiences with a focus on performance, design, and accessibility.',
    'https://drive.google.com/file/d/1bQIMiBs686jE3cHK8vvmNNQfnCBKM3QR/view?usp=sharing',
    '/assets/avatar.webp',
    'adelyasser5002@gmail.com',
    '+20 1069142906',
    'https://github.com/dola5xd',
    'https://www.linkedin.com/in/adel-yasser-a28181242/',
    'https://www.facebook.com/dola2005ti',
    ARRAY[
        'Dynamic UI',
        'Responsive Layouts',
        'Interactive Animations',
        'Pixel-Perfect Designs'
    ]
);

-- Insert About Steps
INSERT INTO public.about_steps (step_number, text, icon_name) VALUES
(1, 'My journey began with a deep passion for computers and video games, which sparked my curiosity about how software works.', 'GrGamepad'),
(2, 'I took my first steps into web development by learning HTML and CSS, building simple pages and experimenting with layouts.', 'DiHtml5'),
(3, 'I joined the Computer Science department at Tanta University, where I began to study programming in a more structured way.', 'PiStudent'),
(4, 'I started diving into JavaScript and algorithms, enjoying the logic and creativity involved in solving problems.', 'IoLogoJavascript'),
(5, 'Soon after, I discovered React.js and became fascinated with building interactive user interfaces.', 'FaReact'),
(6, 'Now I''m exploring Next.js, pushing my skills further by building full-stack applications with modern tools.', 'RiNextjsLine');

-- Insert Courses & Education
INSERT INTO public.courses (name, platform, instructor, from_date, to_date) VALUES
('The Ultimate React Course 2024: React, Next.js, Redux & More', 'Udemy', 'Jonas Schmedtmann', 'February 2024', 'April 2024'),
('The Complete JavaScript Course 2024: From Zero to Expert!', 'Udemy', 'Jonas Schmedtmann', 'October 2023', 'January 2024'),
('HTML, CSS, and JavaScript Courses', 'YouTube', 'Osama Elzero', 'July 2023', 'October 2023'),
('Bachelor''s in Computer Science', 'Tanta University', 'Faculty of Computer and Information, Tanta University', '2023', '2027 (Expected)');

-- Insert Skills
INSERT INTO public.skills (name, category) VALUES
('HTML5', 'Frontend'),
('CSS3', 'Frontend'),
('JavaScript', 'Frontend'),
('TypeScript', 'Frontend'),
('React', 'Frontend'),
('Next.js', 'Frontend'),
('Tailwind CSS', 'Frontend'),
('Framer Motion', 'Frontend'),
('GSAP', 'Frontend'),
('Three.js', 'Frontend'),
('Lenis', 'Frontend'),
('React Query', 'Frontend'),
('Redux', 'Frontend'),
('Styled Components', 'Frontend'),
('Sass', 'Frontend'),
('Bootstrap', 'Frontend'),
('ShadCN', 'Frontend'),
('Supabase', 'Backend / Database'),
('Firebase', 'Backend / Database'),
('Sanity CMS', 'Backend / Database'),
('Git & GitHub', 'Tools / Other');

-- Insert Projects (26 Projects)
INSERT INTO public.projects (id, title, slug, description, image_url, stack, demo_url, repo_url, published_at) VALUES
(
    '16e6594d-6062-49e8-a297-d61dc2f911ef',
    'Monsba',
    'monsba',
    'Monsba is a leading construction company specializing in residential and commercial projects. We deliver quality construction services with a focus on innovation, sustainability, and client satisfaction.',
    'https://cdn.sanity.io/images/yedl08o1/production/ba6386cc8f975b84b40cae9cfdcc07d831875e43-1919x948.png',
    ARRAY['Next.js', 'TypeScript', 'Tailwind.CSS', 'React Hook Form', 'Lenis', 'Framer-motion'],
    'https://monsba.vercel.app/',
    'https://github.com/dola5xd/monsba',
    '2025-10-04T11:19:47.534Z'
),
(
    '40ebc2c5-cbf9-478f-b698-a902596c7fe4',
    'Nike E-commerce',
    'nike-e-commerce',
    'A modern Nike-inspired e-commerce site built with Next.js, React, Tailwind CSS, and GSAP. It offers a sleek, responsive shopping experience with dynamic animations, Firebase authentication, and Cloudinary media storage.',
    'https://cdn.sanity.io/images/yedl08o1/production/c1f4347779ba95d294a977fab52ee9fe4eee298c-1900x946.png',
    ARRAY['Next.js', 'TypeScript', 'Tailwind.CSS', 'ShadCN', 'Gsap', 'React Hook Form', 'Firebase', 'Sanity', 'Stripe', 'Nodemailer', 'React Hot Toast', 'NextAuth', 'Cloudinary'],
    'https://nike-ecommerce-smoky.vercel.app/',
    'https://github.com/dola5xd/Nike-Ecommerce',
    '2025-10-04T11:25:10.251Z'
),
(
    '7bec6bdd-7692-44b3-b23a-d8cb3283fad6',
    'QMenu',
    'qmenu',
    'A modern multilingual café menu platform QR-ready, customizable, and built for restaurants.',
    'https://cdn.sanity.io/images/yedl08o1/production/b0869ac34caa9671dd965fc7a5d17dd513da9ade-1898x943.png',
    ARRAY['Next.js', 'TypeScript', 'Tailwind.CSS', 'React Hook Form', 'Lenis', 'Framer-motion', 'Firebase', 'ShadCN', 'NextAuth'],
    'https://q-menu-delta.vercel.app',
    'https://github.com/dola5xd/QMenu',
    '2025-10-04T11:22:44.570Z'
),
(
    'a82901c4-16b1-4ae2-985c-7571941a3cfd',
    'Estatein Dashboard',
    'estatein-dashboard',
    'Estatein Dashboard: manage clients, properties, ratings, and settings efficiently with a modern real estate platform',
    'https://cdn.sanity.io/images/yedl08o1/production/24506b9c79776f8ed870cf2bfa0ad2142d31fd2f-1755x867.jpg',
    ARRAY['React', 'TypeScript', 'Tailwind.CSS', 'React Router', 'ShadCN', 'React Hook Form', 'React Query', 'Firebase'],
    'https://estatein-dahboard.vercel.app/',
    'https://github.com/dola5xd/Estatein-Dahboard',
    '2025-06-24T10:21:49.226Z'
),
(
    '5164d217-44eb-45bc-938c-0fe67eafe909',
    'Xbox Series X redesign',
    'xbox-series-x-redesign',
    'Experience the power of next-generation gaming with Xbox Series X. 🎮 Explore stunning visuals, immersive 3D experiences, and smooth animations in this interactive showcase of Microsoft''s flagship console.',
    'https://cdn.sanity.io/images/yedl08o1/production/29cd58cce94b7ccad71c0071c3a1ec6e4b3728d9-1881x947.png',
    ARRAY['Next.js', 'Three.Js', 'Gsap', 'Tailwind.CSS', 'TypeScript', 'Lenis', 'React-icons'],
    'https://xbox-series-x.vercel.app/',
    'https://github.com/dola5xd/xbox-series-x',
    '2025-05-31T10:13:33.500Z'
),
(
    'cf6c3f4a-d5c2-4b76-a6f1-f14af5a4cd85',
    'Estatein',
    'estatein',
    'Estatein helps you discover, compare, and buy homes across the U.S. Browse verified listings, get local market insights, and connect with top agents.',
    'https://cdn.sanity.io/images/yedl08o1/production/ac093f9b43d1f85846f4ee1159b35fce3ca9df79-1890x940.png',
    ARRAY['Next.js', 'TypeScript', 'Tailwind.CSS', 'Sanity', 'React Hook Form', 'Lenis', 'Framer-motion'],
    'https://estatein-nu.vercel.app/',
    'https://github.com/dola5xd/Estatein',
    '2025-04-14T13:07:31.697Z'
),
(
    '49ab927e-3550-46f4-b564-962eda8cfaf5',
    'Ui/Ux Designer portfolio',
    'ui-ux-designer-portfolio',
    'Kareem Yasser Ui/Ux Designer portfolio',
    'https://cdn.sanity.io/images/yedl08o1/production/53c56faa733f539e94d9257f508778a257377b6c-1280x916.png',
    ARRAY['React', 'TypeScript', 'Tailwind.CSS', 'Gsap', 'Lenis', 'Sanity'],
    'https://kareem-portfolio-one.vercel.app/',
    'https://github.com/dola5xd/Kareem-portfolio',
    '2025-04-02T16:44:33.067Z'
),
(
    'b9ff9241-a786-445d-958b-53318bec4e46',
    'Krist',
    'krist',
    'Kirst is an innovative e-commerce platform for online clothing shops. It offers a seamless shopping experience with a user-friendly interface, secure payment options, and efficient order management. Perfect for fashion retailers and boutique owners looking to grow their business.',
    'https://cdn.sanity.io/images/yedl08o1/production/36ce1f44825aceb2de4c972debb6aa93470eefcf-1840x4509.jpg',
    ARRAY['Next.js', 'Tailwind.CSS', 'Sanity', 'Firebase', 'React Hook Form', 'AOS', 'Lenis'],
    'https://kirst.vercel.app/',
    'https://github.com/dola5xd/Kirst',
    '2025-02-05T10:38:34.141Z'
),
(
    '443fb36b-7364-4c0d-a0a0-c22a36639b2c',
    'Movies Watcher',
    'movies-watcher',
    'Movies Watcher is a web application designed to help users manage and track their favorite movies. Add movies to your watchlist, mark them as watched, and explore your collection seamlessly with a clean and responsive design.',
    'https://cdn.sanity.io/images/yedl08o1/production/fe13e7b1569e30f9caf90e52760b8cbf882bd734-1755x5490.jpg',
    ARRAY['Next.js', 'Tailwind', 'Swiper', 'Framer-motion', 'React-icons', 'React-Toastify', 'React-Hook-Form'],
    'https://movies-watcher.vercel.app/',
    'https://github.com/dola5xd/movies-watcher',
    '2024-11-26T02:26:17.559Z'
),
(
    '04154118-a5c7-4f50-a6a4-05cec95b68df',
    'Job listings with filtering',
    'job-listings-with-filtering',
    'Job listings with filtering challenge from front-end mentor',
    'https://cdn.sanity.io/images/yedl08o1/production/06d274fcc049717665b17ab7dce2c1d60c02d4a9-1308x816.png',
    ARRAY['React', 'TypeScript', 'Tailwind.css'],
    'https://job-listings-with-filtering-blue.vercel.app/',
    'https://github.com/dola5xd/Job-listings-with-filtering',
    '2024-11-25T06:28:00.000Z'
),
(
    'b6eb3dc5-d7d9-4f5b-ab9d-dbf8fde883ba',
    'The wild oasis website',
    'the-wild-oasis-website',
    'Wild oasis is a great application I do from Next js course!, have authentication and reservation!',
    'https://cdn.sanity.io/images/yedl08o1/production/1d2c79f198dc47989b4749efcb3d0c5bf562f469-1308x816.png',
    ARRAY['Next.js', 'Supabase', 'Tailwind', 'Framer Motion'],
    'https://the-wild-oasis-website-seven-blond.vercel.app',
    'https://github.com/dola5xd/The-wild-oasis-website',
    '2024-11-22T06:27:00.000Z'
),
(
    'c0bd7d69-4bd2-4479-86d0-b5501115f89f',
    'Positivus',
    'positivus',
    'Positivus landing page with great framer-motion animations!',
    'https://cdn.sanity.io/images/yedl08o1/production/fac59a1262f0aea9b944fa9057dde13e061012d2-1308x816.png',
    ARRAY['React', 'Tailwind', 'Framer Motion'],
    'https://positivus-mocha.vercel.app/',
    'https://github.com/dola5xd/Positivus',
    '2024-11-20T06:27:00.000Z'
),
(
    '2b353906-bfe4-4494-82af-f81321ffb07c',
    'Rest Countries Website',
    'rest-countries-website',
    'Frontend Mentor - REST Countries API with color theme switcher',
    'https://cdn.sanity.io/images/yedl08o1/production/ed57b39e42bc2d860d98f020c9f4185a1015cda7-1755x1227.jpg',
    ARRAY['React', 'Framer Motion', 'Styled Components', 'React Query'],
    'https://rest-countries-website-cyan.vercel.app',
    'https://github.com/dola5xd/REST-Countries-Website/tree/react-version',
    '2024-11-19T06:28:00.000Z'
),
(
    '4306f9e0-8eb9-4885-85a9-bb6efe80e61a',
    'To Do List application',
    'to-do-list-application',
    'To do list application with theme changer!',
    'https://cdn.sanity.io/images/yedl08o1/production/2143464c2ea7c5146a30bf6acf30fdcfdb7b04af-1308x816.png',
    ARRAY['React', 'Tailwind'],
    'https://to-do-list-project-roan.vercel.app',
    'https://github.com/dola5xd/To-do-list-Project',
    '2024-11-19T06:28:00.000Z'
),
(
    'edacd0ea-1d6f-42d8-936a-b2f6cb652c65',
    'Multi step form',
    'multi-step-form',
    'Multi step form with save data in local storage from Frontend Mentor',
    'https://cdn.sanity.io/images/yedl08o1/production/55f4b48c337508f3ca24c019ec5345d7aa34b8d6-1308x816.png',
    ARRAY['React', 'Tailwind', 'Framer motion', 'Redux'],
    'https://multi-step-form-murex-gamma.vercel.app',
    'https://github.com/dola5xd/Multi-Step-Form/tree/React-Version',
    '2024-11-18T06:28:00.000Z'
),
(
    '8d833c24-1b15-439e-a421-f7d8a7c5bf7a',
    'Smart Home Landing page',
    'smart-home-landing-page',
    'Smart Home Landing Page Challange with Framer motion great animations!',
    'https://cdn.sanity.io/images/yedl08o1/production/645212372e207b8de30681c4d2a0ca84225b7427-1899x1312.jpg',
    ARRAY['React', 'framer motion', 'Styled components'],
    'https://smart-home-landing-page-gules.vercel.app',
    'https://github.com/dola5xd/Smart-Home-Landing-Page',
    '2024-11-18T06:30:00.000Z'
),
(
    'a6a3c57c-59b2-4d41-9400-126c6292510e',
    'Rock Paper Scissors Game',
    'rock-paper-scissors-game',
    'Rock paper scissors game Challange from frontend mentor',
    'https://cdn.sanity.io/images/yedl08o1/production/4fbe79897df20a366c3114bdf9b95516e7b301a3-1308x816.png',
    ARRAY['Html', 'Tailwind', 'Javascript'],
    'https://rock-paper-scissors-game-phi-one.vercel.app',
    'https://github.com/dola5xd/Rock-paper-scissors-game',
    '2024-11-17T06:28:00.000Z'
),
(
    '0be2ee8a-ed53-445f-bca1-da4f2b0ad877',
    'Easybank Website',
    'easybank-website',
    'Easybank page challenge from frontend-mentor',
    'https://cdn.sanity.io/images/yedl08o1/production/7dc1490940c171f5e8fcce3775433393f8aae8e9-1308x816.png',
    ARRAY['Html', 'Css', 'Javascript', 'Tailwind'],
    'https://easybank-page-black.vercel.app',
    'https://github.com/dola5xd/Easybank-Page',
    '2024-10-28T16:53:54.671Z'
),
(
    'c0e4eec1-1193-4e5d-9869-b83893ee2877',
    'Bankist Website',
    'bankist-website',
    'Bankist Website from Jonas Schmedtmann Javascript course (Not Responsive!)',
    'https://cdn.sanity.io/images/yedl08o1/production/a7e73766996633c2e7e3dee21dceb1f9aba10278-1308x816.png',
    ARRAY['Html', 'Css', 'Javascript', 'Tailwind'],
    'https://bankist-website-alpha.vercel.app',
    'https://github.com/dola5xd/Bankist-Website',
    '2024-10-28T16:52:56.241Z'
),
(
    'ac61f2bd-75e7-47b9-b6ca-e0d52a8a8193',
    'Space Tourism Website',
    'space-tourism-website',
    'Space tourism multipage responsive website',
    'https://cdn.sanity.io/images/yedl08o1/production/3c14b81ede4f864df443b7fb14e11a4598fee491-1755x999.jpg',
    ARRAY['Html', 'Css', 'Javascript', 'Tailwind'],
    'https://space-tourism-indol-omega.vercel.app',
    'https://github.com/dola5xd/Space-tourism',
    '2024-10-28T16:51:56.489Z'
),
(
    'c0e970a4-be27-4467-b1fe-9b7f2e6c808c',
    'Social Media Dashboard',
    'social-media-dashboard',
    'Social media dashboard with theme switcher',
    'https://cdn.sanity.io/images/yedl08o1/production/a6dbd894bd55b0c87bf7752dbdb0835238e1adbc-1308x816.png',
    ARRAY['Html', 'Css', 'Javascript'],
    'https://social-media-dashboard-front-end-mentor.vercel.app',
    'https://github.com/dola5xd/Social-media-dashboard',
    '2024-10-28T16:49:47.894Z'
),
(
    'd14aada7-0140-4269-9457-a80143a41aea',
    'Tip Calculator Application',
    'tip-calculator-application',
    'Tip calculator app Challange from front-end mentor',
    'https://cdn.sanity.io/images/yedl08o1/production/5db2fde25a5d3f1343b1cf3475113b699ec3ee87-1535x944.jpg',
    ARRAY['Html', 'Css', 'Javascript'],
    'https://tip-calculator-app-theta-teal.vercel.app/',
    'https://github.com/dola5xd/Tip-Calculator-App',
    '2024-10-28T16:49:09.734Z'
),
(
    'aeed8e3c-db22-4174-af7f-8aeab2aabfc4',
    'Advice Generator Api App',
    'advice-generator-api-app',
    'Advice Generator Api App mentor project',
    'https://cdn.sanity.io/images/yedl08o1/production/0df3ead8ded3f1ee8a4281d398d561b1a086d5a8-1308x816.png',
    ARRAY['Html', 'Css', 'Javascript', 'Tailwind'],
    'https://advice-generator-api-app-lyart.vercel.app/',
    'https://github.com/dola5xd/Advice-Generator-Api-App',
    '2024-10-28T16:48:16.132Z'
),
(
    '957fd9b0-8662-4172-bce6-ac727a7c7def',
    'Entertainment Website',
    'entertainment-website',
    'Movie and Entertainment application',
    'https://cdn.sanity.io/images/yedl08o1/production/c4ead92e2bfb505ddcefc149f8ffabab945f8a7a-1897x1020.jpg',
    ARRAY['Html', 'Css', 'Javascript', 'Tailwind', 'swiper'],
    'https://entertainment-web-application.vercel.app/',
    'https://github.com/dola5xd/Entertainment-Web-application',
    '2024-10-28T16:47:06.994Z'
),
(
    'c5947ef5-c43b-4c2f-aef9-bfba418488de',
    'IP Address Tracker',
    'ip-address-tracker',
    'Ip Address tracker challange from front-end mentor with leaflet and ip api!',
    'https://cdn.sanity.io/images/yedl08o1/production/3936bf78751304063099cacc523659ca9766b2a2-1308x816.png',
    ARRAY['Html', 'Tailwind', 'Javascript', 'Leaflet'],
    'https://ip-address-tracker-livid.vercel.app',
    'https://github.com/dola5xd/Ip-Address-Tracker',
    '2024-10-28T16:45:59.827Z'
),
(
    'e9ad4199-9b38-4500-8ab1-49d5ead4ab6f',
    'Interactive Comments components',
    'interactive-comments-components',
    'Interactive Comments challenge from front-end mentor',
    'https://cdn.sanity.io/images/yedl08o1/production/ab58300cb6c3c3e2e5ba07426c76499d8439f129-1280x1007.jpg',
    ARRAY['React', 'Tailwind', 'Framer motion', 'Redux'],
    'https://interactive-comments-phi.vercel.app',
    'https://github.com/dola5xd/Interactive-Comments',
    '2024-10-28T16:42:26.983Z'
);
