# InterviewIQ.AI – AI-Powered Interview Preparation Platform

An intelligent interview preparation platform designed to help students and job seekers prepare for technical and HR interviews through personalized interview experiences and resume-based analysis.

## 🚀 Overview

**InterviewIQ.AI** aims to make interview preparation smarter, more structured, and personalized. Users can upload their resumes, analyze their skills and projects, and prepare for interviews based on their professional profiles.

## ✨ Features

- **Resume Upload & Parsing:** Upload PDF and DOCX resumes to extract candidate information.
- **Resume Analysis:** Extract academic details, CGPA, technical skills, and projects.
- **Personalized Interview Preparation:** Prepare interview questions based on candidate profiles.
- **Technical Interview Preparation:** Practice programming and technical questions.
- **HR Interview Preparation:** Prepare for behavioral and HR-related questions.
- **User Authentication:** Secure user registration and login.
- **Interview Management:** Create and manage interview preparation sessions.
- **Interactive Dashboard:** Access interview-related information through a user-friendly interface.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, Vite |
| Styling | CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Authentication | JWT |
| Resume Parsing | PDF-Parse, Mammoth |
| API Testing | Postman |
| Version Control | Git & GitHub |

## 📁 Project Structure

```text
InterviewIQ.AI/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── ...
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

*Note: Adjust the folder structure to match your actual repository.*

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd InterviewIQ.AI
```

### 3. Install Backend Dependencies

```bash
cd server
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Add any additional environment variables required by your application.

### 5. Start the Backend

```bash
npm run dev
```

### 6. Install Frontend Dependencies

Open another terminal:

```bash
cd client
npm install
```

### 7. Start the Frontend

```bash
npm run dev
```

Open the local development URL displayed in your terminal.

## 🔐 Security

- Environment variables are used to protect sensitive configuration.
- Authentication is implemented using JWT.
- Uploaded resumes should be handled securely.
- Never commit `.env` files, API keys, or database credentials to GitHub.

## 🎯 Project Objectives

- Simplify interview preparation for students and freshers.
- Provide personalized interview preparation based on resumes.
- Help candidates identify their technical strengths.
- Improve confidence for technical and HR interviews.
- Create an accessible platform for structured interview practice.

## 🔮 Future Enhancements

- AI-powered mock interview sessions.
- Voice-based interview simulation.
- Real-time interview feedback.
- Resume scoring and improvement suggestions.
- Performance analytics and progress tracking.
- Integration with additional AI models.

## 👨‍💻 Author

**Prabal Gautam**

B.Tech – Computer Science and Engineering  
Specialization: Cyber Security

---

⭐ If you find this project interesting, consider giving the repository a star!

