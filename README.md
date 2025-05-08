# 🛒 Full-Stack eCommerce Platform

This is a full-stack eCommerce web application consisting of:

- **Backend**: `ecommerce-server` – Spring Boot REST API with Swagger UI.
- **Frontend**: `ecommerce_client` – React + Redux application for product browsing and shopping cart functionality.
---

## 📁 Directory Structure
spendtech/

├── ecommerce-server/ # Spring Boot backend with Swagger

└── ecommerce_client/ # React + Redux frontend

## ✅ Features

### Backend (Spring Boot)
- REST APIs for get all Products and create product
- Swagger UI for easy API testing
- Database- PostgreSQL
- CORS support for frontend integration

### Frontend (React + Redux)
- Product catalog and detail pages
- Shopping cart with persistent Redux state
- Add/Remove items from cart
- Checkout page (basic)
- Responsive UI using React Router and tailwind CSS

## 🔧 Prerequisites

- Java 17 or later
- Node.js (v16+ recommended)
- npm or yarn
- Maven or Gradle

## 🚀 Getting Started

### 📌 Important Note
PostgresSQL make sure it is **running first** before starting the Spring Boot server.

### 1. Start the Backend
- cd ecommerce-server
- Open your project with your favorite ide (IntelliJ IDEA,Eclipse)
- Update the project (To add the dependencies)
- Go to EcommerceServerApplication.class file present in package -- src/main/java/com/spendtech/ecommerce_server
- Open and Run EcommerceServerApplication.class (run as java application)

#### other way
```bash
cd ecommerce-server
./mvnw spring-boot:run
```

-Runs at: http://localhost:8080

📘 Swagger UI available at:
http://localhost:8080/swagger-ui.html

### 1. Start the Frontend
```bash
cd ecommerce_client
npm install
npm start
```
The app will run at:
http://localhost:3000

🎥 Application Demo 


https://github.com/user-attachments/assets/22e34e41-54b9-4b88-89d4-ab7816d449c0


