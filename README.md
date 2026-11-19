# InterviewIQ.AI

**An AI-Powered Interview Preparation Platform**

InterviewIQ.AI is a web-based application designed to help students prepare for technical and HR interviews. Users can upload their resumes, view extracted information such as skills, academic details, and projects, and use the platform to prepare for interviews based on their profiles.

The main goal of this project is to make interview preparation more organised and help students understand their strengths and areas where they can improve.

## Features

- **Resume Upload:** Upload resumes in PDF and DOCX formats.
- **Resume Parsing:** Extract information such as CGPA, skills, and projects from uploaded resumes.
- **Interview Preparation:** Prepare for technical and HR interview questions.
- **User Authentication:** Secure registration and login using JWT authentication.
- **Dashboard:** View resume details and manage interview preparation activities.
- **Interview Management:** Keep track of interview preparation and related information.

## Tech Stack

**Frontend**
- React.js
- Vite
- CSS

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB

**Other Tools and Libraries**
- JWT Authentication
- PDF-Parse
- Mammoth
- Multer
- Postman
- Git and GitHub

## Project Structure

```text
InterviewIQ.AI/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── ...
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd InterviewIQ.AI
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

Open another terminal:

```bash
cd server
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the server folder.

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Add any other environment variables required by your implementation.

### 5. Run the application

Start the backend:

```bash
cd server
npm run dev
```

Start the frontend in another terminal:

```bash
cd client
npm run dev
```

Open the local URL displayed by Vite in your browser.

## What I Learned

While working on this project, I got practical experience with:

- Building a full-stack application using the MERN stack.
- Creating REST APIs with Node.js and Express.js.
- Connecting MongoDB with a React application.
- Implementing JWT-based authentication.
- Uploading and processing PDF and DOCX files.
- Extracting useful information from resumes.
- Connecting frontend components with backend APIs.
- Testing APIs using Postman.

## Future Improvements

- Add more interview categories and question types.
- Improve resume parsing for different resume formats.
- Add interview performance reports.
- Include mock interview sessions.
- Improve the dashboard and user experience.

---

**Developed as a full-stack project to explore web development and build a practical interview preparation application.**
