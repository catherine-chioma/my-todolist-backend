# 🍛 JollofAI Frontend

> AI-powered African recipe generation platform built with React, TypeScript, and modern web technologies.

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4.5-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2.10-purple.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.13-teal.svg)](https://tailwindcss.com/)

## ✨ Features

- 🤖 **AI Recipe Generation** - Transform ingredients into authentic African recipes
- 🔐 **Authentication System** - Secure JWT-based user authentication
- 📱 **Responsive Design** - Mobile-first, professional UI/UX
- 🍽️ **Recipe Management** - Save, view, and manage your recipe history
- 📚 **Ingredient Database** - Comprehensive African ingredients with nutritional info
- 👥 **Team Showcase** - Meet the JollofAI team
- 🎨 **Modern UI** - Clean design with TailwindCSS and custom components

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/catherine-chioma/jollofai-frontend.git
cd jollofai-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3000
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Custom button with variants
│   ├── LoadingSpinner.tsx
│   ├── Toast.tsx       # Notification system
│   ├── Navbar.tsx      # Navigation with auth
│   └── ...
├── contexts/           # React Context providers
│   └── AuthContext.tsx # Authentication state
├── pages/             # Route components
│   ├── Home.tsx       # Landing page
│   ├── About.tsx      # Team & company info
│   ├── SignIn.tsx     # Authentication
│   ├── Dashboard.tsx  # User dashboard
│   ├── RecipeGenerator.tsx
│   └── ...
├── images/            # Static assets
└── App.tsx           # Main app component
```

## 🔌 API Integration

### Authentication Endpoints

- `POST /auth/signup` - Create new user account
- `POST /auth/login` - User login with email/password
- `POST /auth/google` - Google OAuth authentication
- `POST /auth/reset-password` - Password reset functionality

### Recipe Endpoints

- `POST /recipes/match-ingredients` - Generate recipes from ingredients
- `GET /recipes` - Get user's recipe history
- `GET /recipes/foryou` - Get personalized recommendations

### Vendor Endpoints

- `GET /vendors` - Get all vendors
- `GET /vendors/nearby` - Get nearby vendors

### Response Formats

**Auth Response:**

```json
{
  "user": {
    "id": "string",
    "fullName": "string",
    "email": "string"
  },
  "token": "string"
}
```

**Recipe Response:**

```json
{
  "recipes": [
    {
      "id": "string",
      "title": "string",
      "ingredients": ["string"],
      "instructions": ["string"],
      "imageUrl": "string (optional)"
    }
  ]
}
```

## 🎨 Design System

### Brand Colors

- **Primary:** `#16A34A` (Green) - Used for CTAs, links, and brand elements
- **Secondary:** Complementary grays and whites for clean, professional look

### Components

- **Button** - Multiple variants (primary, secondary, outline) with loading states
- **LoadingSpinner** - Consistent loading indicators
- **Toast** - Global notification system
- **ErrorBoundary** - Graceful error handling

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Code Quality

- **TypeScript** - Full type safety
- **ESLint** - Code linting and formatting
- **Responsive Design** - Mobile-first approach
- **Modern React** - Hooks, Context API, functional components

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation updates
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions/updates

## 👥 Team

- **Lucy Chioma Ifitezue** - Managing Director
- **Jiddah Abidemi Elegbede** - Executive Assistant/Project Manager
- **Khalid Yekini** - Team Lead AI Prompt Engineer
- **Martins Babatunde** - Team Lead - Engineers
- **Oluchi Joy Okoro** - Assistant EA/Project Manager

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- React & Vite teams for excellent developer experience
- TailwindCSS for the utility-first CSS framework
- The open-source community for inspiration and tools

---

**Made with ❤️ by the JollofAI Team**
