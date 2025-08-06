# Figma Clone – Modified Version

This is a collaborative design tool inspired by Figma, built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Liveblocks**.  
It allows multiple users to draw, comment, and interact in real-time on a shared canvas.

---

## 🚀 Features

- Real-time collaboration
- Multi-user cursor and chat
- Drawing tools using Fabric.js
- Add, move, and delete shapes
- Comments and reactions
- Undo / Redo functionality
- Export canvas as image

---

## 🛠️ Tech Stack

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Liveblocks**
- **Fabric.js**
- **Shadcn UI**

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/figma-clone-modified.git
cd figma-clone-modified
2. Install Dependencies
bash
npm install
3. Setup Environment Variables
Create a file named .env.local in the root directory and add the following:

env
Copy
Edit
NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_public_key
#Replace your_liveblocks_public_key with your actual public key from Liveblocks.io.

4. Start the Development Server
bash
npm run dev
Open http://localhost:3000 to view the app in your browser.

📁 Project Structure
php
Copy
Edit
├── components      # Reusable UI components
├── hooks           # Custom hooks
├── lib             # Utility logic and canvas helpers
├── pages           # Next.js routing
├── public          # Static assets
├── types           # TypeScript types
├── .env.local      # Environment variables
├── tailwind.config.js
├── tsconfig.json
└── README.md
