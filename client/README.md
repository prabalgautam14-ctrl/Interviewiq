<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# 🚀 InterviewIQ.AI

InterviewIQ.AI is a full-stack web application designed to help job seekers prepare for interviews through AI-powered mock interviews, instant performance feedback, analytics, and voice-assisted interactions. Built with a modern tech stack, it features secure authentication, credit-based interview usage, and integrated Razorpay payments.

---

## 🛠️ Tech Stack

### **Frontend**
* **React** (with Vite)
* **Tailwind CSS** for modern, responsive styling
* **Framer Motion** (`motion/react`) for smooth animations
* **Redux Toolkit** for state management
* **Axios** for HTTP requests
* **React Icons** & **React Router DOM**

### **Backend**
* **Node.js** & **Express.js**
* **MongoDB & Mongoose** (Database & ODM)
* **JWT (JSON Web Tokens)** & **Cookie Parser** for secure authentication
* **Razorpay SDK** for payment gateway integration
* **OpenRouter API** for AI interview generation and feedback

---

## ✨ Features

* 🔐 **Secure Authentication:** User registration, login, and cookie-based session management.
* 🎙️ **AI-Powered Mock Interviews:** Interactive technical and behavioral interview practice with resume parsing and voice accessibility.
* 💳 **Credit System & Pricing:** Free tier credits with options to top up via secure Razorpay payment packs (Starter & Pro packs).
* 📊 **Performance Analytics:** Detailed reports, history tracking, and skill trend insights.
* 🎨 **Sleek UI/UX:** Fully responsive, animated design optimized for smooth user experience.

---

## 📁 Project Structure

```text
InterviewIQ.AI/
│
├── frontend/                # React Vite Frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Views (Pricing, Interviews, Auth, etc.)
│   │   ├── redux/           # Redux slices (userSlice, etc.)
│   │   ├── App.jsx          # Root component & server URL config
│   │   └── main.jsx         # Entry point
│   ├── public/              # Static assets & Razorpay script
│   └── package.json
│
└── backend/                 # Node.js Express Backend
    ├── config/              # Database configuration (MongoDB)
    ├── controllers/         # Business logic (Auth, Interview, Payment)
    ├── middlewares/         # Auth & security middleware
    ├── models/              # Mongoose schemas (User, Interview, etc.)
    ├── routes/              # API endpoints (auth, user, interview, payment)
    ├── index.js             # Server entry point
    └── package.json
>>>>>>> 05a2ac4d9cba4a4295e34309e4567325b55cfd93
