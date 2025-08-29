# Library-Management-System-
A modular Express.js API for managing books and borrowings in a library. Features include adding, updating, deleting books, checking availability, and managing borrow/return actions. Designed with a clean structure for easy learning, customization, and testing with Postman.

---

## 🚀 Features

* Add, update, delete, and fetch books.
* Validate book data with **Zod**.
* Filter books by `status` and `title`.
* Recommendation system based on `genre` & `status`.
* Modular folder structure for scalability.

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **Zod** (validation)
* **Dotenv** (env config)

---

## 📂 Project Structure

```
LIBRARY-MANAGEMENT-SYSTEM
│── src
│   ├── api
│   │   └── v1
│   │       ├── controllers
│   │       │   └── librarySystem.controller.js
│   │       ├── model
│   │       │   └── librarySystem.model.js
│   │       ├── routes
│   │       │   └── librarySystem.routes.js
│   │       ├── schema
│   │       │   └── librarySystem.schema.js
│   │       ├── services
│   │       │   └── librarySystem.service.js
│   │       └── index.js
│   ├── config
│   │   └── db.js
│   └── index.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Setup & Installation

1. **Clone the repo:**

   ```bash
   git clone https://github.com/MOHAMEDAHSAN/Library-Management-System
   cd LIBRARY-MANAGEMENT-SYSTEM
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment:**
   Create a `.env` file:

   ```env
   PORT=3000
   MONGODB_URI="your-mongo-uri-here"
   ```

   👉 Get `MONGO_URI` from your MongoDB Atlas cluster (Connection string).
   👉 Remember to allow **Network Access for all users (0.0.0.0/0)** in MongoDB Atlas so your app can connect during testing.

4. **Run the server:**

   ```bash
   npm run dev
   ```

---

## 📡 API Endpoints

### Books

* `POST /api/v1/books` → Add a new book
* `GET /api/v1/books` → Get all books
* `GET /api/v1/books/:id` → Get book by ID
* `PUT /api/v1/books/:id` → Update book
* `DELETE /api/v1/books/:id` → Delete book

### Recommendations

* `GET /api/v1/books/recommendations?genre=Fantasy&status=available` → Get filtered recommendations

---

## ✅ Example Request (POST)

```json
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "publishedYear": 1937,
  "genre": "Fantasy",
  "status": "issued",
  "remarks": "Popular in fantasy section"
}
```
## Have Fun Customizing ,Testing & Building !!!

### Tip : Use Alt+Shift+F to Format everything neatly 
---
