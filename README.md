# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, React Router, and Framer Motion.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive for mobile and desktop
- ✨ Smooth animations using Framer Motion
- 🧭 React Router for seamless navigation
- 🎯 Multiple sections: Home, About, Skills, Projects, Education, Certificates, Achievements, and Contact

## Tech Stack

- React 19.2.0
- Vite 7.2.4
- React Router DOM 7.9.6
- Framer Motion 12.23.24
- React Icons 5.5.0

## Project Structure

```
my-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Education.jsx
│   │   ├── Education.css
│   │   ├── Certificates.jsx
│   │   ├── Certificates.css
│   │   ├── Achievements.jsx
│   │   ├── Achievements.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Navigate to the project directory:**
   ```cmd
   cd C:\react\my-portfolio
   ```

2. **Install dependencies:**
   ```cmd
   npm install
   ```

3. **Start the development server:**
   ```cmd
   npm run dev
   ```

4. **Open your browser:**
   The application will be available at `http://localhost:5173` (or the port shown in the terminal)

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check for code issues

## Building for Production

To create a production build:

```cmd
npm run build
```

The built files will be in the `dist` folder. You can preview the production build with:

```cmd
npm run preview
```

## Features Overview

### Home Page
- Name, title, and introduction
- "View Resume" and "Contact Me" buttons
- Social media icons (LinkedIn & GitHub)

### About Page
- Detailed information about background and specialization

### Skills Page
- Technical skills section
- Soft skills section

### Projects Page
- Showcase of completed projects with descriptions

### Education Page
- Timeline view of educational background

### Certificates Page
- Internship information
- List of certificates and achievements

### Achievements Page
- Academic and extracurricular achievements

### Contact Page
- Contact information with icons
- Contact form for sending messages

## Customization

All content is located in the respective page components. You can easily update:
- Personal information in each page component
- Styling in the corresponding CSS files
- Colors and themes in the CSS files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.
