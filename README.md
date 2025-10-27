ToyTopia – A Local Kids Toy Store Platform
🎯 Project Purpose

ToyTopia is a vibrant and playful online marketplace for kids' toys.
It helps parents and families discover, browse, and purchase toys from local toy sellers with ease.
Users can log in, explore toys by category, view detailed information, and manage their cart.

Live Demo

👉 ToyTopia Live Website

( https://kids-toys-cute-projects.web.app)

🚀 Key Features

🔐 User Authentication – Register, Login, and Logout using Firebase Authentication.

🧠 Private Routes – Some pages are protected; only logged-in users can access them.

🔍 Toy Search & Filtering – Browse all toys or filter by category.

🛒 Shopping Cart System – Add toys to your cart using Context API.

💬 Real-time Notifications – Toast messages for success/error (via react-hot-toast).

🌈 Responsive UI – Beautiful and mobile-friendly layout with Tailwind CSS.

☁️ Firebase Hosting – Deployed and served from Firebase for fast, secure delivery.


🧰 Technologies Used
Category  -	Tools / Libraries
Frontend Framework -	React (Vite)
Routing	- React Router
Authentication -	Firebase Auth
State Management	- React Context API
Styling -	Tailwind CSS + DaisyUI
Notifications -	react-hot-toast
Icons	- react-icons
Deployment - 	Firebase Hosting

⚙️ NPM Packages Used
npm install react-router-dom firebase react-hot-toast daisyui react-icons

🧩 Folder Structure (Simplified)
src/
 ├── assets/              # Images and logos
 ├── components/          # Shared UI components
 ├── pages/               # All main pages (Home, Login, Register, etc.)
 ├── provider/            # AuthProvider & CartProvider
 ├── routes/              # Router setup
 ├── App.jsx
 ├── main.jsx
 └── index.css

How to Run Locally

Clone this repository

git clone https://github.com/your-username/toytopia.git


Navigate into the project

cd toytopia


Install dependencies

npm install


Create a .env.local file and add your Firebase config:

VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_sender_id
VITE_appId=your_app_id


Run the app

npm run dev


Build for production

npm run build


Deploy to Firebase

firebase deploy

👑 Developer

Amana Akter
📧 [your-proff.kona@gmail.com
]
🌍 Passionate Frontend Developer | React Enthusiast

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
