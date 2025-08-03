# CampusConnect Platform

**CampusConnect** is a modern web platform that unifies essential campus services — **Dormitories**, **Restaurants**, and **Administration** — into a single digital solution. It simplifies student life by centralizing housing management, dining services, and communication with administration in one place.

---

## 🌟 Key Features

### 🏠 Dormitory Module
- Online room booking and allocation tracking
- Maintenance request submission and history
- Dorm announcements and policy access

### 🍽️ Restaurant Module
- Browse and filter menus
- Online meal ordering (optional)
- Feedback and satisfaction ratings

### 🏢 Administration Module
- Central dashboard for documents and notices
- Complaint/request submission and tracking
- Access to personal and academic information

---

## 🔐 Authentication & Security

CampusConnect uses **Keycloak** for secure authentication and role-based access management.

- SSO (Single Sign-On) integration with Keycloak
- Role-based access control (Admin / Staff / Student)
- Access tokens via **OpenID Connect (OIDC)** and **JWT**

---

## 🛠 Tech Stack

| Layer         | Technology         |
|---------------|--------------------|
| Frontend      | Angular             |
| Backend       | Spring Boot         |
| Authentication| Keycloak (OIDC)     |
| Database      | MySQL               |
| API Protocol  | REST                |
| Security      | JWT (via Keycloak)  |

---

## 🚀 Getting Started

### ✅ Prerequisites

- Java 17+
- Node.js 18+
- Angular CLI
- MySQL
- Docker (for Keycloak, optional)
- Keycloak Server (v24+ recommended)

---
