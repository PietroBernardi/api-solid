# API Using SOLID Principles

This project is a showcase of a RESTful API built using Node.js, following the **SOLID principles**. It serves as a portfolio project to demonstrate my understanding and application of clean architecture and design patterns in software development.

---

## **Project Objectives**
- Implement all **SOLID principles** in the design and development of the API.
- Showcase modular, scalable, and maintainable code.
- Provide a clear and detailed explanation of the application structure.
- Enable easy testing and extensibility.

---

## **SOLID Principles in Action**

### 1. **Single Responsibility Principle (SRP)**
Every class or module should have one and only one reason to change. In this API:
- Controllers handle HTTP requests and responses.
- Services contain business logic.
- Repositories manage database interactions.

### 2. **Open/Closed Principle (OCP)**
Software entities should be open for extension but closed for modification. In this API:
- Adding new features involves creating new modules without altering existing code.
- Example: Adding a new payment service by implementing an interface.

### 3. **Liskov Substitution Principle (LSP)**
Objects of a superclass should be replaceable with objects of a subclass without affecting the functionality. In this API:
- Swapping database implementations (e.g., MongoDB, PostgreSQL) works seamlessly by adhering to repository interfaces.

### 4. **Interface Segregation Principle (ISP)**
Clients should not be forced to depend on methods they do not use. In this API:
- Separate interfaces are created for distinct responsibilities, like `UserRepository` and `ProductRepository`.
- Services use only the methods they require.

### 5. **Dependency Inversion Principle (DIP)**
High-level modules should not depend on low-level modules but on abstractions. In this API:
- Controllers depend on services, which depend on repository interfaces rather than concrete implementations.
- Dependency Injection (DI) is used to provide required implementations.

---

# APP Details:
Gympass style APP

## **FR (Functional Requirements)**

- [x] The system shall allow users to register 
- [x] The system shall allow users to authenticate
- [x] The system shall allow users to retrieve their logged-in profile
- [ ] The system shall allow users to retrieve the number of check-ins made by the logged-in user
- [ ] The system shall allow users to retrieve their check-in history.
- [ ] The system shall allow users to search for nearby gyms.
- [ ] The system shall allow users to search for gyms by name.
- [x] The system shall allow users to check in at a gym.
- [ ] The system shall validate a user's check-in.
- [ ] The system shall allow users to register a gym.


## **BL (Business Logic)**

- [x] The system shall prevent users from registering with a duplicate email.
- [ ] The system shall prevent users from making two check-ins on the same day.
- [ ] The system shall allow users to check in only if they are within 100 meters of the gym.
- [ ] The system shall allow check-ins to be validated only within 20 minutes after creation.
- [ ] The system shall allow check-ins to be validated only by administrators.
- [ ] The system shall allow gyms to be registered only by administrators.


## **NFR (Non-Functional Requirements)**

- [x]  The system shall encrypt user passwords.
- [x]  The system shall persist application data in a PostgreSQL database.
- [ ]  The system shall paginate all data lists with 20 items per page.
- [ ]  The system shall identify users using a JSON Web Token (JWT).

---