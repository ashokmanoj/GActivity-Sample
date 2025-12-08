# GActivity Web Application
A modern React-based web platform for tracking field executives, managing tasks, expenses, activities, and generating reports. Includes reusable UI components, protected routing, filtering, pagination, and multi-layer popup navigation.

---

## 🚀 Tech Stack
**Frontend:** React 18, Vite, TailwindCSS, Axios, React Router, React Icons, date-fns, react-date-range  
**Backend (Planned):** Node.js, Express, PostgreSQL, Prisma ORM, JWT Auth

---

## 📁 Folder Structure
src/
├── api/
├── components/
│ ├── common/
│ │ ├── DataTable.jsx
│ │ ├── FilterBar.jsx
│ │ ├── Pagination.jsx
│ │ ├── PopupModal.jsx
│ │ └── ImageViewer.jsx
│ ├── cards/
│ └── filters/
├── context/
│ └── PageTitleContext.jsx
├── layout/
│ ├── Sidebar.jsx
│ ├── Header.jsx
│ └── DashboardLayout.jsx
├── pages/
│ ├── Login.jsx
│ ├── Dashboard.jsx
│ ├── Distance.jsx
│ ├── Expenses.jsx
│ ├── TaskList.jsx
│ ├── Activity.jsx
│ ├── TechSummary.jsx
│ ├── AssetTransactions.jsx
│ ├── UserStatus.jsx
│ └── ClassStatus.jsx
├── ProtectedRoute.jsx
├── App.jsx
└── main.jsx

markdown
Copy code

---

## 🔐 Authentication Flow
- Login at `/` stores token in localStorage  
- ProtectedRoute blocks access without token  
- Logout clears token and redirects to login  

---

## 🧩 Reusable Components

### **FilterBar**
Supports:
- Multi dropdown filters  
- Search trigger  
- Date range picker  
- Single date picker  
- Excel export button  
- Fully configurable  

### **Pagination**
- Works with client/server pagination  
- Shows Prev/Next, page numbers, ellipsis  

### **DataTable**
- Dynamic columns  
- Dynamic rows  
- Custom cell renderer  
- Row click → open popup  
- Used across all major pages  

### **PopupModal**
- Reusable modal  
- Supports nested popups  
- Used for record details  

### **ImageViewer**
- Zoom with mouse wheel  
- Drag to move image  
- Rotate  
- Next / Previous  
- Smooth & modern UI  

---

## 📊 Pages Overview
- **Dashboard** – statistics and quick actions  
- **Distance** – track visits and GPS logs  
- **Expenses** – bill management, export, filtering  
- **Task List** – tasks with images, audio, map  
- **Activity** – daily activity logs  
- **Tech Summary** – technician report summary  
- **Asset Transactions** – asset log & history  
- **User Status** – active/deactive users  
- **Class Status** – class run status  

---

## 🛠 Project Setup

### Install Dependencies
```sh
npm install
Start App
sh
Copy code
npm run dev
🗄 Backend Setup (to be created)
sh
Copy code
npm init -y
npm install express cors dotenv pg prisma bcrypt jsonwebtoken
npx prisma init
Example Prisma Model
prisma
Copy code
model Users {
  id        Int      @id @default(autoincrement())
  name      String
  mobile    String
  password  String
  active    Boolean @default(true)
  createdAt DateTime @default(now())
}
📌 Upcoming Features
Column sorting

Column hide/show

Table search

Sticky headers

Role-based access

📄 License
Private project — redistribution is not allowed.

👤 Developer
Manoj H. A
Frontend Developer