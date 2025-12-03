# 💬 Chatzy

<div align="center">
  <img src="client/src/assets/ChatLogo.png" alt="Chatzy Logo" width="200" height="200">
  
  **A modern real-time chat application built with React and Node.js**
  
  [![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://nodejs.org/)
  [![Socket.io](https://img.shields.io/badge/Socket.io-4.8.1-black.svg)](https://socket.io/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen.svg)](https://www.mongodb.com/)
</div>

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Endpoints](#-api-endpoints)
- [Environment Variables](#-environment-variables)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- 🔐 **User Authentication** - Secure login and registration with JWT
- 💬 **Real-time Messaging** - Instant messaging using Socket.io
- 👥 **User Management** - Search and connect with other users
- 📱 **Responsive Design** - Modern UI built with TailwindCSS and DaisyUI
- 🔍 **User Search** - Find and start conversations with other users
- 💾 **Message History** - Persistent message storage with MongoDB
- 🔔 **Notifications** - Toast notifications for better UX
- 🎨 **Modern UI** - Beautiful and intuitive user interface

## 🛠 Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **DaisyUI** - Component library for TailwindCSS
- **Socket.io Client** - Real-time communication
- **Axios** - HTTP client
- **Zustand** - State management
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Socket.io** - Real-time bidirectional communication
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Cookie Parser** - Cookie parsing middleware
- **CORS** - Cross-origin resource sharing

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local or MongoDB Atlas)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Chatzy
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the `server` directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

## 💻 Usage

1. **Start the MongoDB server** (if using local MongoDB)
   ```bash
   mongod
   ```

2. **Start the backend server**
   ```bash
   cd server
   npm start
   # or
   node server.js
   ```
   The server will run on `http://localhost:5000`

3. **Start the frontend development server**
   ```bash
   cd client
   npm run dev
   ```
   The client will run on `http://localhost:5173`

4. **Open your browser**
   Navigate to `http://localhost:5173` to access the application

## 📁 Project Structure

```
Chatzy/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── assets/        # Static assets (images, icons)
│   │   │   └── ChatLogo.png
│   │   ├── chat/          # Chat-related components
│   │   │   ├── chatPage.jsx
│   │   │   ├── left/      # Left sidebar components
│   │   │   └── right/     # Right chat area components
│   │   ├── components/    # Reusable components
│   │   ├── context/       # React context providers
│   │   ├── Manage/        # Custom hooks
│   │   └── Pages/         # Page components
│   ├── package.json
│   └── vite.config.js
│
├── server/                 # Backend Node.js application
│   ├── config/            # Configuration files
│   │   └── db.js          # Database connection
│   ├── jwt/               # JWT utilities
│   ├── middlewares/       # Express middlewares
│   ├── models/            # MongoDB models
│   ├── Routes/            # API routes
│   ├── SocketIO/          # Socket.io server
│   ├── package.json
│   └── server.js          # Entry point
│
└── README.md
```

## 🔌 API Endpoints

### Authentication
- `POST /api/user/register` - Register a new user
- `POST /api/user/login` - Login user
- `GET /api/user/logout` - Logout user
- `GET /api/user/me` - Get current user

### Messages
- `GET /api/message/:conversationId` - Get messages for a conversation
- `POST /api/message` - Send a new message

### Conversations
- `GET /api/conversation` - Get user conversations
- `POST /api/conversation` - Create a new conversation

## 🔐 Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/chatzy
JWT_SECRET=your_super_secret_jwt_key_here
```

## 🎨 Icons & Assets

The project uses the following icon and asset resources:

- **ChatLogo.png** - Main application logo located in `client/src/assets/ChatLogo.png`
- **Lucide React** - Icon library for UI icons
- **DaisyUI** - Component icons and styling

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**Sachin Jurel**

---

<div align="center">
  Made with ❤️ using React and Node.js
</div>

