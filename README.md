# Nuturition – Menu & Nutrition Facts App for Nutu!

> A full-stack demo application that lets you browse a restaurant menu, filter items by category and drill-down into detailed nutrition facts – powered by **React + Vite** on the frontend and **Node.js + Express + PostgreSQL (via Sequelize)** on the backend.

---

## ✨ Features

- Modern single-page application built with React 19, Vite, MUI and TanStack React-Query
- Browse visually rich menu cards with images, description and price
- Filter menu items by category (e.g. Breakfast, Dessert, Pizza …)
- Click any item to view a dedicated **Nutrition Facts** panel (calories, protein, carbs, fat)
- REST API served by Express 5 with PostgreSQL & Sequelize ORM
- Auto-generated interactive API docs via Swagger (available at `/api-docs`)
- Fully typed DB schema with relations (Food ⇄ Category, Food ⇄ Ingredient (many-to-many), Food ⇄ Nutrition (1-to-1))

---

## 🗂️ Repository layout

```
nuturition/
 ├── client/        # React ‑ Vite frontend (source in client/src)
 │   └── …
 ├── server/        # Express backend + Sequelize models & routes
 │   ├── config/    # DB config & env handling
 │   ├── models/    # Sequelize models & associations
 │   ├── routes/    # Route files (category, food, nutrition)
 │   └── swagger/   # Swagger spec definition
 └── README.md      # ← you are here
```

---

## 🏗️ Tech stack

Frontend
- React 19 + Vite
- Material-UI (MUI)
- TanStack React Query
- React-Router-DOM 6

Backend
- Node.js ≥18 (tested with 20.x)
- Express 5
- Sequelize 6
- PostgreSQL (any recent 13/14/15 version works)
- Swagger-UI-Express & swagger-jsdoc
- dotenv & cors

---

## 🚀 Getting Started

### 1. Prerequisites

- **Node.js** ≥ 18 & **npm** (or Yarn/PNPM)
- **PostgreSQL** running locally or remotely

### 2. Clone & install

```bash
# clone the repo
git clone https://github.com/your-username/nuturition.git
cd nuturition

# install backend deps
cd server && npm install

# install frontend deps (in another terminal)
cd ../client && npm install
```

### 3. Configure environment variables

Create a file `server/.env` and add your DB credentials:

```dotenv
# server/.env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=nuturition_db
DB_USER=postgres
DB_PASSWORD=postgres
```

🔐  _The server is configured to use SSL by default (`rejectUnauthorized: false`). Remove the `dialectOptions` in `server/config/db.config.js` if you are connecting to a local DB without SSL._

### 4. Prepare the database

The project relies on Sequelize **sync** to create tables automatically on start-up.

<img width="1162" height="550" alt="db" src="https://github.com/user-attachments/assets/b5e96261-993c-4ba2-95d5-e92ecad5af4e" />


### 5. Run the backend

```bash
cd server
npm start        # starts on http://localhost:3000
# or
node index.js
```

Swagger API docs will be available at <http://localhost:3000/api-docs>.

### 6. Run the frontend

```bash
cd client
npm run dev      # Vite dev server (default http://localhost:5173)
```

Open your browser at `http://localhost:5173` – you should see the menu UI. Selecting an item navigates to `/nutrition/:id` and fetches nutrition facts from the backend.

---

## 📑 API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/food` | List all food items (joins category, ingredients & nutrition) |
| GET | `/food/{id}/nutrition` | Nutrition facts for a single food item |
| GET | `/categories` | List all categories |

For full, interactive docs go to `/api-docs` once the server is running.

---
