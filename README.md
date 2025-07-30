# 🏡 Airbnb Clone (Fullstack MERN Project)

A feature-rich fullstack Airbnb-style web application where users can browse stays, list their own properties, and make bookings — built with React, Node.js, Express, and MongoDB.

---

## 🔥 Features

- ✅ User authentication with JWT (stored in cookies)
- 🏘️ Browse all available places on the homepage
- 📝 Add, edit, and delete personal listings
- 📷 Upload photos (drag & drop or file picker)
- 📅 Book places and manage bookings
- 📱 Fully responsive design for mobile and desktop

---

## 🛠 Tech Stack

- **Frontend**: React, Tailwind CSS, Axios
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Auth**: JWT (stored in cookies)
- **File Uploads**: `multer`

---

## 📦 Folder Structure

├── client/ # React frontend
└── api/ # Express backend


---

## 🌐 Live Demo

- Frontend: [https://your-frontend.vercel.app](https://your-frontend.vercel.app)
- Backend: [https://your-backend.onrender.com](https://your-backend.onrender.com)

## 🌐 Live Project

[https://your-frontend.vercel.app](https://your-frontend.vercel.app)

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the repo

```bash
git clone https://github.com/mounikalingala/airbnb.git
cd airbnb-clone
```
### 2. Setup Backend

```bash
cd api
npm install
touch .env
```

inside .env
```bash
MONGO_URL='mongodb+srv://mounika:mounika@cluster0.g2vb63h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
``` 

Run the backend:

```bash
node index.js
```

### 3. Setup Frontend

```bash
cd ../client
npm install
npm run dev
```

## 🧭 Frontend Routes


| Route                   | Description                                  |
| ----------------------- | -------------------------------------------- |
| `/`                     | Homepage with list of all available places   |
| `/place/:id`            | Detailed view of a selected place            |
| `/login`                | Login form                                   |
| `/register`             | User registration form                       |
| `/account`              | User dashboard (profile, listings, bookings) |
| `/account/places`       | View & manage user’s places                  |
| `/account/places/new`   | Add a new listing                            |
| `/account/places/:id`   | Edit a listing                               |
| `/account/bookings`     | View all user bookings                       |
| `/account/bookings/:id` | View single booking details                  |

## 📡 Backend API Endpoints

All backend API endpoints are served from the root (e.g., /account, /places)

### User & Auth

| Method | Endpoint    | Description                     |
| ------ | ----------- | ------------------------------- |
| POST   | `/register` | Register a new user             |
| POST   | `/login`    | Log in and get JWT cookie       |
| GET    | `/account`  | Get current logged-in user info |
| POST   | `/logout`   | Clear the token cookie          |

### 🏠 Places

| Method | Endpoint              | Description                        |
| ------ | --------------------- | ---------------------------------- |
| GET    | `/account/places`     | Get all listings by user           |
| POST   | `/account/places`     | Create a new place listing         |
| GET    | `/account/places/:id` | Get a place by ID for editing      |
| PUT    | `/account/places/:id` | Update place info                  |                   |
| GET    | `/places`             | Get all places (for homepage)      |
| GET    | `/places/:id`         | Get full details of a single place |

### 📆 Bookings

| Method | Endpoint                | Description                  |
| ------ | ----------------------- | ---------------------------- |
| GET    | `/account/bookings`     | Get all bookings by the user |
| POST   | `/bookings`             | Create a new booking         |
| GET    | `/account/bookings/:id` | Get booking details by ID    |

## 📸 Screenshots

### 🏠 Homepage

Shows all available listings.
![Home page](https://res.cloudinary.com/dblomc9cr/image/upload/v1753864743/Screenshot_2025-07-30_140625_wzkvgf.png)

### 🏡 Place Detail

Displays full details of a selected place.
![Place Detail](https://res.cloudinary.com/dblomc9cr/image/upload/v1753864936/Screenshot_2025-07-30_141155_pufwqw.png)

### 👤 Account Dashboard

User dashboard with links to bookings and add new accommodations.
![Account](https://res.cloudinary.com/dblomc9cr/image/upload/v1753865059/Screenshot_2025-07-30_141404_kjy1rl.png)

### 📆 My Bookings

List of all bookings made by the user.
![Bookings](https://res.cloudinary.com/dblomc9cr/image/upload/v1753865305/Screenshot_2025-07-30_141807_a78dvk.png)

### 🏡 Booked Place Detail

Displays full details of a booked place.
![Place Detail](https://res.cloudinary.com/dblomc9cr/image/upload/v1753865664/Screenshot_2025-07-30_142406_yqixow.png)

### ➕ Add New Place

List of accommodations and Form to upload new listings with photos and description.
![Add Place](https://res.cloudinary.com/dblomc9cr/image/upload/v1753865422/Screenshot_2025-07-30_142006_hb0mdp.png)

Form to add new place
![Add Place](https://res.cloudinary.com/dblomc9cr/image/upload/v1753865540/Screenshot_2025-07-30_142207_oehmqp.png)
