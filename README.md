# ☕ Buy Me A Chai

> A full-stack crowdfunding platform built with Next.js where creators can receive micro-support payments securely through Razorpay.

Inspired by the "Buy Me a Coffee" model and implemented with modern web technologies.

---

## 🚀 Live Demo

<img width="1911" height="947" alt="Screenshot 2026-02-20 173626" src="https://github.com/user-attachments/assets/5356ce90-3b97-4d14-bcbc-9cc9d4f18c6b" />


[![View Full LinkedIn Post](https://img.shields.io/badge/View%20Full%20Post-LinkedIn-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/feed/update/urn:li:ugcPost:7430485266005655552/)


---

## 📌 Overview

Buy Me A Chai allows supporters to contribute small payments to creators.  
It includes secure authentication, payment processing, and a creator dashboard for tracking earnings.

This project demonstrates full-stack development including frontend, backend APIs, database integration, and third-party payment gateway handling.

---

## ✨ Features

- 🔐 Secure Authentication
- 💳 Razorpay Payment Integration
- 🧾 Payment Order Creation
- 🔒 Webhook Signature Verification
- 👤 Dynamic Creator Profiles
- 📊 Earnings Dashboard
- 📱 Responsive UI
- ⚡ Optimized API Routes

---

## 🏗 Tech Stack

### Frontend
- Next.js (App Router)
- React
- Tailwind CSS

### Backend
- Next.js API Routes
- Node.js

### Database
- MongoDB (Mongoose ODM)

### Payment Gateway
- Razorpay


---

## 🔄 Payment Flow

1. User clicks "Buy Me A Chai"
2. Backend creates Razorpay order
3. Razorpay checkout modal opens
4. User completes payment
5. Razorpay sends webhook to backend
6. Backend verifies payment signature
7. Payment stored in MongoDB
8. Dashboard updates automatically

---

## 🗄 Database Schema

### Users Collection
- _id
- name
- email (unique)
- role (creator/supporter)
- profileImage

### Payments Collection
- _id
- creatorId (indexed)
- supporterId
- amount
- status
- timestamp

Indexes are applied on frequently queried fields to improve dashboard performance.

---

## 🔐 Security Highlights

- Environment variables for secret keys
- Razorpay webhook signature verification
- Protected dashboard routes
- Input validation on APIs

---


