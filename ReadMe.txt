# API Using SOLID Principles

This project is a showcase of a RESTful API built using Node.js, following the **SOLID principles**. It serves as a portfolio project to demonstrate my understanding and application of clean architecture and design patterns in software development.

---

## **Project Objectives**
- Implement all **SOLID principles** in the design and development of the API.
- Showcase modular, scalable, and maintainable code.
- Provide a clear and detailed explanation of the application structure.
- Enable easy testing and extensibility.

---

## **Features**
- Follows **Clean Architecture** for better separation of concerns.
- Fully **testable** with unit and integration tests.
- Implements:
  - **Dependency Injection** for loose coupling.
  - **Interface Segregation** through precise service abstractions.
  - **Open/Closed Principle** for extensible and non-breaking changes.
  - **Single Responsibility** for each module and class.
  - **Liskov Substitution Principle** to ensure system stability when replacing components.
- Built with:
  - **Node.js** (Backend runtime)
  - **Express.js** (Web framework)
  - **TypeScript** (Optional, for type safety)

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

## **Contributing**
Feel free to fork this project, submit pull requests, or open issues for suggestions.

---