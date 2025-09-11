# HTML + Tailwind CSS Starter Project

A modern HTML project utilizing Tailwind CSS for building responsive web applications with minimal setup.

---

## 🚀 Features

- **HTML5** - Modern HTML structure with best practices  
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development  
- **Custom Components** - Pre-built utility classes for buttons and containers  
- **NPM Scripts** - Easy-to-use commands for development and building  
- **Responsive Design** - Mobile-first approach for all screen sizes  

---

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v12.x or higher)  
- npm or yarn

---

## 🛠️ Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
html_app/
├── css/
│   ├── tailwind.css       # Tailwind source file with custom utilities
│   └── main.css           # Compiled CSS (output by Tailwind)
├── pages/                 # HTML pages
├── index.html             # Main entry point
├── package.json           # Project dependencies and scripts
├── postcss.config.js      # PostCSS config (required by Tailwind)
└── tailwind.config.js     # Tailwind CSS configuration
@tailwind base;
@tailwind components;
@tailwind utilities; 
To run
 live-server digital_healthcare

/* Custom styles */
.btn-primary {
  @apply bg-blue-500 text-white px-4 py-2 rounded;
}
