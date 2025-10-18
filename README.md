# 📝 Blog Application

A full-stack **Blog Application** built using **Spring Boot (Backend)** and **React (Frontend)**.
This project allows users to read, create, and manage blog posts with authentication and category/tag support, all powered by a RESTful API and JWT-based security.

---

## 🚀 Features

* User authentication with **JWT tokens**
* Role-based access control
* CRUD operations for posts, categories, and tags
* Filter posts by **category** or **tag**
* Secure API endpoints with **Spring Security**
* Responsive frontend UI built with **React + Tailwind CSS**
* Connected to **PostgreSQL** database via JPA/Hibernate

---

## 🧠 Tech Stack

### **Backend (Spring Boot)**

* Spring Boot 3
* Spring Security (JWT Authentication)
* Spring Data JPA
* PostgreSQL
* Lombok
* MapStruct

### **Frontend (React)**

* React.js + TypeScript
* Tailwind CSS
* Axios for API calls
* React Router

---

## ⚙️ Setup & Installation

### 1. **Clone the repository**

```bash
git clone https://github.com/yourusername/blog-application.git
cd blog-application
```

### 2. **Backend setup**

```bash
cd backend
```

#### Create a `.env` or `application.properties` file with:

```
spring.datasource.url=jdbc:postgresql://localhost:5432/blogdb
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
jwt.secret=your_secret_key
```

#### Run the backend:

```bash
./mvnw spring-boot:run
```

It’ll start running on **[http://localhost:8080](http://localhost:8080)**

---

### 3. **Frontend setup**

```bash
cd frontend
npm install
npm start
```

Frontend runs on **[http://localhost:5173](http://localhost:5173)** (or the port your React app uses).

---

## 🔐 Authentication

* A default user gets created on startup:

  ```
  Email: user@test.com
  Password: password
  ```
* On successful login, you receive a **JWT token** used for authorized requests.

---

## 🧩 API Endpoints (Sample)

| Method | Endpoint             | Description                       |
| ------ | -------------------- | --------------------------------- |
| POST   | `/api/v1/auth/login` | User login & JWT generation       |
| GET    | `/api/v1/posts`      | Get all published posts           |
| POST   | `/api/v1/posts`      | Create a new post (Auth required) |
| GET    | `/api/v1/categories` | List all categories               |
| GET    | `/api/v1/tags`       | List all tags                     |

---

## 🖼️ Demo Video

🎥 Watch the full walkthrough here:
[**Working Demo**](https://drive.google.com/file/d/1zms_uRTExX9y08y6BIEPha05fPT-7C2O/view?usp=sharing)

---

## 🧑‍💻 Author

**Madhan Kumar K**
Frontend & Backend Developer | Computer Science Undergraduate

* 🌐 [LinkedIn](https://www.linkedin.com/in/madhankumar-karthikeyan/)
* 💻 [Portfolio](https://madhannmady.github.io/Responsive-Portfolio/)

---

## 💡 Future Improvements

* Add admin dashboard for content management
* Implement comment and like system
* Enhance user profile customization
* Add pagination and search filters

---

## 🏁 Conclusion

This project helped me understand how the **frontend** and **backend** communicate, how **JWT authentication** works, and how to build a complete full-stack system from scratch.

If you find this useful, consider leaving a ⭐ on the repo!
