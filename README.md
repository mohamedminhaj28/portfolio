# Portfolio Website

A modern, responsive portfolio website built with React.js and Bootstrap.

## Features

- Responsive design for all devices
- Modern UI with smooth animations
- Filterable projects section
- Contact form with validation
- Interactive skills section
- Clean and professional design

## Tech Stack

- React.js
- Bootstrap 5
- React Bootstrap
- React Icons
- CSS3

## Project Structure

```
portfolio-website/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── App.css
│   │   │   ├── index.css
│   │   │   ├── Header.css
│   │   │   ├── Hero.css
│   │   │   ├── About.css
│   │   │   ├── Skills.css
│   │   │   ├── Projects.css
│   │   │   ├── Contact.css
│   │   │   └── Footer.css
│   │   └── images/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── reportWebVitals.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository or download the source code
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open your browser and visit `http://localhost:3000`

## Customization

- Replace placeholder images with your own images in the components
- Update personal information in Hero, About, and Contact components
- Add your own projects in the Projects component
- Customize colors in the App.css file by changing CSS variables

## Deployment

To build the project for production:

```bash
npm run build
```

This will create a `build` folder with optimized production files that can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.

## Bootstrap Customization

- Custom styling applied to Bootstrap components for a unique look
- Custom navbar with smooth scrolling
- Custom card components with hover effects
- Responsive grid system for all sections
- Custom form styling with validation
