# Welcome to my portfolio website

![App Screenshot](https://cdn.sanity.io/images/yedl08o1/production/080c7f77e81e64c4dd6615c5ad5f4dc23d8bb8ca-1920x952.png)

Welcome to the repository for **My Portfolio Website**! This project showcases my skills, projects, and professional journey, built with modern web technologies and stunning visual effects.

---

## 🚀 **Live Preview**

Check out the live version of my portfolio: [My Portfolio Website](https://my-portfolio-website-orpin.vercel.app/)

---

## 🛠️ **Technologies Used**

This project is built with the following technologies:

### **Core Stack**

- **Vite** (v5.3.4): Blazing-fast build tool and development server.
- **React** (v19.1.0): Cutting-edge React with new features.
- **TypeScript** (v5.8.3): For type-safe development.

### **Styling & Animation**

- **Tailwind CSS** (via @tailwindcss/vite v4.1.4): Utility-first CSS framework.
- **OGL** (v1.0.11): Lightweight WebGL library for 3D effects.
- **Motion** (v12.7.3): Modern animation library.
- **Lenis** (v1.2.3): Smooth scrolling experience.

### **Content & Email**

- **Sanity.io** (@sanity/client v6.29.0): Headless CMS for content management.
- **EmailJS** (@emailjs/browser v4.4.1): Email integration for contact forms.

### **Utilities**

- **React Icons** (v5.5.0): Icon library.
- **React Helmet** (v6.1.0): SEO management.

### **Tooling**

- **ESLint** (v8.57.0): Code quality assurance.
- **TypeScript ESLint**: Linting for TypeScript.

---

## 📂 **Project Structure**

```plaintext
my-portfolio/
├── public/             # Static assets (fonts, images)
├── src/
      ├── assets/
      │   ├── images/         # all .png/.jpg/.svg
      │
      ├── components/
      │   ├── Ui/             # small, reusable “design system” bits
      │   │   ├── Aurora.tsx
      │   │   ├── ListItem.tsx
      │   │   ├── Particles.tsx
      │   │   ├── RotatingText.tsx
      │   │   ├── SectionHead.tsx
      │   │   ├── Spinner.tsx
      │   │   ├── SpotlightCard.tsx
      │   │   └── Squares.tsx
      │   │
      │   ├── layout/ # site-wide wrappers, Header, Footer, Nav, etc.
      │   │   ├── Header.tsx
      │   │   └── Meta.tsx    # SEO / <head> settings
      │   │
      │   ├── sections/ # page sections, each one self-contained
      │   │   ├── About.tsx
      │   │   ├── Contact.tsx
      │   │   ├── Hero.tsx
      │   │   ├── Projects.tsx
      │   │   ├── ProjectCard.tsx
      │   │   ├── Summary.tsx
      │   │   └── Techs.tsx
      │
      ├── lib/                # data fetching, API calls, helpers
      │   ├── api.ts          # getProjects(), getCourses(), etc.
      │   └── utils.ts        # small pure helpers
      │
      ├── styles/
      │   ├── index.css       # global tailwind/custom overrides
├── index.html          # Root HTML template
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md           # Project documentation
```

---

## ⚙️ **Scripts**

Run these scripts to manage the project:

- `npm run dev` - Start the development server.
- `npm run build` - Build the production-ready version of the site.
- `npm run start` - Start the production server.
- `npm run lint` - Run linting for the codebase.

---

## 🌟 **Features**

- Fully responsive design for mobile and desktop.
- Animations and transitions for a smooth user experience.
- Dynamic content powered by Sanity.io.
- Custom email templates for contact forms.

---

## 🎬 Demo

You can try out the live demo of the My portfolio application here:  
[My portfolio Demo](https://my-portfolio-website-orpin.vercel.app/)

---

## 📜 **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 👤 **Author**

**[Adel Yasser](https://github.com/dola5xd)**  
Feel free to reach out or contribute to this project!

---

## 📧 **Contact**

If you have any questions or feedback, contact me at: [dolay6253@gmail.com](mailto:dolay6253@gmail.com)
