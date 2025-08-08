# 🍣 Sushi World
A full-stack application for managing a sushi restaurant, with a backend developed in **Spring Boot + SQL**, and a frontend built using **Angular**.

# 🚀 How to Run the Project
1. Clone the repository:  
git clone https://github.com/tuo-utente/sushi-project.git  
cd project-sushi

# ▶️ Starting the Backend (Spring Boot)
1.  Configure the database: Edit the application.properties (or application.yml) file with your database credentials:  

go to file properties  

spring.datasource.url=jdbc:mysql://localhost:3306/sushi_db  
spring.datasource.username=root  
spring.datasource.password=tuapassword  
spring.jpa.hibernate.ddl-auto=update

2.  Start the Spring Boot application::

cd backend  
./mvnw spring-boot:run

# ▶️ Starting the Frontend (Angular)
1. Install dependencies::  
cd frontend  
npm install  

2. Run the Angular application:  
ng serve  

# 🛠 Main Features

- View the sushi menu  
- Add / edit / delete dishes (admin)  
- Shopping cart and order management  
- Authentication (login/register)  
- Integration between frontend and backend via REST API  
