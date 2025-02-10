# MovieVerse 🎬

## Overview
MovieVerse is a **full-stack movie platform** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. It allows users to **discover, search, and organize movie information**, leave reviews, and manage a personalized watchlist.

## Features 🚀
- 🔍 **Search & Filter**: Easily find movies with an advanced search and filter system.
- 🎞️ **Movie Details**: View information about movies, including cast, genre, and ratings.
- 🔐 **User Authentication**: Secure login and signup using **JWT authentication**.
- 📝 **User Reviews**: Users can leave reviews and rate movies.
- 📌 **Watchlist**: Add movies to a personal watchlist.
- 🎬 **Admin Panel**: Admins can manage movies and moderate user reviews.
- ⚡ **Optimized Performance**: API response times reduced through efficient database queries.

## Tech Stack 🛠️
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **API Integration**: Third-party movie database APIs

## Installation 🏗️

### Prerequisites
- Node.js & npm installed
- MongoDB installed locally or using MongoDB Atlas

### Steps
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/movieverse.git
   cd movieverse
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment variables** (`.env` file in backend)
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   API_KEY=your_movie_api_key
   ```

4. **Run the backend**
   ```sh
   cd backend
   npm start
   ```

5. **Run the frontend**
   ```sh
   cd frontend
   npm start
   ```

6. **Access the app**
   - Backend runs on: `http://localhost:5000`
   - Frontend runs on: `http://localhost:5173`

