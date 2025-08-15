# 🎬 MovieDB - Your Personal Movie Database

A modern, responsive web application for discovering, organizing, and managing your favorite movies. Built with cutting-edge web technologies to provide an intuitive movie browsing experience.

[![Website](https://img.shields.io/website?url=https%3A%2F%2Finshabanotmdb.netlify.app%2F&style=for-the-badge)](https://inshabanotmdb.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?style=for-the-badge&logo=github)](https://github.com/NayakSubhransu/MovieDB)

## 📋 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Screenshots](#-screenshots)
- [Technologies Used](#️-technologies-used)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Key Functionalities](#-key-functionalities)
- [Responsive Design](#-responsive-design)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

## ✨ Features

- **Movie Discovery**: Browse trending movies with intuitive navigation
- **Advanced Search**: Find movies by title, genre, or release date
- **Smart Filtering**: Filter movies by genre, ratings, and release dates
- **Personal Watchlist**: Add and manage your favorite movies
- **Rating System**: View and track movie ratings
- **Responsive Design**: Seamless experience across all devices
- **Modern UI**: Clean, dark-themed interface with smooth animations
- **Fast Performance**: Optimized loading and smooth user interactions

## Demo

**Live Website**: [https://inshabanotmdb.netlify.app/](https://inshabanotmdb.netlify.app/)

Experience the full functionality of MovieDB with real-time movie data and interactive features.

## 📸 Screenshots

### 🏠 Home Dashboard - "Discover Your Next Favorite Movie"
*The main landing page showcasing trending movies with an elegant hero section featuring "War 2" and a curated selection of popular films.*

<img width="965" height="571" alt="image" src="https://github.com/user-attachments/assets/2ed2927e-460f-4905-8f59-d3f6e4005423" />


### 📋 Movie Library - "Your Complete Movie Collection at a Glance"
*A comprehensive view of your movie database with advanced sorting, filtering options, and detailed movie information including ratings and release dates.*

<img width="967" height="562" alt="image" src="https://github.com/user-attachments/assets/315787d7-6bc3-400c-9064-72b0e686c072" />


## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with Flexbox/Grid
- **JavaScript (ES6+)** - Interactive functionality and API integration
- **Responsive Design** - Mobile-first approach

### Build Tools & Configuration
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Tailwind CSS** - Utility-first CSS framework

### Development Tools
- **Git** - Version control
- **Netlify** - Deployment and hosting
- **npm** - Package management

### External APIs
- **The Movie Database (TMDB) API** - Movie data and information

## ⚡ Getting Started

### Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 14.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control
- **TMDB API Key** (free registration required)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/inshabano/MovieDB.git

# Navigate to project directory
cd MovieDB

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📁 Project Structure

```
MovieDB/
│
├── 📁 public/                 # Static assets
│   ├── favicon.ico
│   └── index.html
│
├── 📁 src/                    # Source code
│   ├── 📁 components/         # Reusable UI components
│   ├── 📁 styles/             # CSS stylesheets
│   ├── 📁 utils/              # Utility functions
│   ├── 📁 api/                # API integration
│   └── index.js               # Main application entry
│
├── 📄 package.json            # Project dependencies
├── 📄 package-lock.json       # Dependency lock file
├── 📄 vite.config.js          # Vite configuration
├── 📄 tailwind.config.js      # Tailwind CSS configuration
├── 📄 postcss.config.js       # PostCSS configuration
├── 📄 eslint.config.js        # ESLint configuration
├── 📄 .gitignore              # Git ignore rules
├── 📄 netlify.toml            # Netlify deployment config
└── 📄 README.md               # Project documentation
```

## 🔧 Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/NayakSubhransu/MovieDB.git
cd MovieDB
```

### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
```

### Step 3: Environment Setup
Create a `.env` file in the root directory:
```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
```

### Step 4: Development Server
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` to view the application.

### Step 5: Build for Production
```bash
npm run build
# or
yarn build
```

## 💻 Usage

### 🏠 Homepage Navigation
1. **Browse Trending Movies**: Scroll through the featured movie carousel
2. **Quick Genre Access**: Use the genre buttons for instant filtering
3. **Search Functionality**: Use the search bar to find specific movies

### 📋 Movie Management
1. **Add to Watchlist**: Click the bookmark icon on any movie card
2. **View Details**: Click on movie cards for detailed information
3. **Sort & Filter**: Use the dropdown menus to organize your view
4. **Rating System**: View IMDb ratings and user scores

### 🔍 Advanced Features
- **Real-time Search**: Instant results as you type
- **Genre Filtering**: Multiple genre selection support
- **Date Range Filtering**: Filter by release year or date range
- **Responsive Grid**: Automatic layout adjustment for different screen sizes

## 🌟 Key Functionalities

### Movie Discovery Engine
- Integration with TMDB API for real-time movie data
- Trending movies showcase with automatic updates
- Genre-based categorization and filtering
- Advanced search with multiple criteria support

### User Experience Features
- **Watchlist Management**: Personal movie collection
- **Smart Recommendations**: Based on user preferences
- **Quick Actions**: One-click add/remove functionality
- **Detailed Movie Views**: Comprehensive movie information

### Performance Optimizations
- **Lazy Loading**: Images and content load on demand
- **Caching Strategy**: Efficient data management
- **Responsive Images**: Optimized for different screen sizes
- **Fast Navigation**: Smooth transitions and interactions

## 📱 Responsive Design

MovieDB is built with a mobile-first approach, ensuring excellent user experience across all devices:

- **📱 Mobile Devices** (320px - 768px): Optimized touch interfaces
- **📱 Tablets** (768px - 1024px): Enhanced grid layouts
- **💻 Desktop** (1024px+): Full-featured experience
- **🖥️ Large Screens** (1440px+): Maximum content visibility

## 🤝 Contributing

We welcome contributions to MovieDB! Here's how you can help:

### Getting Started with Contributions

1. **Fork the Repository**
   ```bash
   git fork https://github.com/NayakSubhransu/MovieDB.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit Your Changes**
   ```bash
   git commit -m "Add amazing feature"
   ```

4. **Push to Branch**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**

### Contribution Guidelines

- Follow existing code style and conventions
- Add comments for complex functionality
- Test your changes thoroughly
- Update documentation as needed
- Ensure responsive design compatibility

### Areas for Contribution

- 🐛 Bug fixes and improvements
- ✨ New feature development
- 📚 Documentation enhancements
- 🎨 UI/UX improvements
- ⚡ Performance optimizations
- 🧪 Test coverage expansion

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 MovieDB Project

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software")...
```

## 👨‍💻 Author

**Insha Bano**

- 🌐 **Website**: [https://inshabanotmdb.netlify.app/](https://inshabanotmdb.netlify.app/)
- 💼 **GitHub**: [@inshabano](https://github.com/inshabano)
- 📧 **Email**: [Contact via GitHub](https://github.com/inshabano)

---

### 🌟 Show Your Support

If you found this project helpful, please consider:

- ⭐ **Starring the repository** on GitHub
- 🍴 **Forking the project** for your own modifications
- 🐛 **Reporting bugs** to help improve the application
- 💡 **Suggesting new features** for future development

---


**Built with ❤️ for movie enthusiasts worldwide**

*Last Updated: August 2025*
