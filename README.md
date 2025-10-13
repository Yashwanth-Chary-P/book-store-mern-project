# 📚 Book Store MERN Project

A full-stack e-commerce book store application built with the MERN stack (MongoDB, Express.js, React.js, Node.js). This project provides a modern, responsive interface for browsing, purchasing, and managing books online.

## 🚀 Features

### Frontend Features
- **Modern UI/UX**: Clean, responsive design built with React and Tailwind CSS
- **Book Catalog**: Browse books with filtering by categories (Business, Fiction, Horror, Adventure)
- **Shopping Cart**: Add/remove books with persistent cart state using Redux
- **User Authentication**: Login and registration forms with Google OAuth integration
- **Responsive Design**: Mobile-first approach with Swiper.js for smooth carousels
- **Interactive Components**: Sweet alerts for user feedback, form validation with React Hook Form

### Backend Features
- **RESTful API**: Complete CRUD operations for book management
- **MongoDB Integration**: Persistent data storage with Mongoose ODM
- **CORS Configuration**: Secure cross-origin resource sharing
- **Error Handling**: Comprehensive error handling and validation

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling and validation
- **Swiper.js** - Touch slider component
- **SweetAlert2** - Beautiful alerts and notifications
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js 5.1.0** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 8.19.1** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
book-store-mern-project/
├── backend/
│   ├── src/
│   │   ├── books/
│   │   │   ├── book.controller.js    # Book CRUD operations
│   │   │   ├── book.model.js         # Book schema definition
│   │   │   └── book.route.js         # Book API routes
│   │   ├── middleware/               # Custom middleware (empty)
│   │   ├── orders/                   # Order management (empty)
│   │   ├── stats/                    # Analytics (empty)
│   │   └── users/                    # User management (empty)
│   ├── index.js                      # Server entry point
│   └── package.json
├── frontend/
│   ├── public/
│   │   ├── books.json               # Sample book data
│   │   └── fav-icon.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer.jsx           # Footer component
│   │   │   ├── Login.jsx            # Login form
│   │   │   ├── Navbar.jsx           # Navigation bar
│   │   │   └── Register.jsx         # Registration form
│   │   ├── pages/
│   │   │   ├── books/
│   │   │   │   ├── BookCard.jsx     # Individual book card
│   │   │   │   ├── CartPage.jsx     # Shopping cart page
│   │   │   │   └── CheckOutPage.jsx # Checkout page
│   │   │   └── home/
│   │   │       ├── Banner.jsx       # Hero banner
│   │   │       ├── Home.jsx         # Home page layout
│   │   │       ├── News.jsx         # News section
│   │   │       ├── Recommend.jsx    # Recommended books
│   │   │       └── TopSellers.jsx   # Top selling books
│   │   ├── redux/
│   │   │   ├── features/
│   │   │   │   └── cart/
│   │   │   │       └── cartSlice.js # Cart state management
│   │   │   └── store.js             # Redux store configuration
│   │   ├── routers/
│   │   │   └── router.jsx           # Application routing
│   │   ├── utils/
│   │   │   └── getImgUrl.js         # Image URL utility
│   │   ├── App.jsx                  # Main app component
│   │   └── main.jsx                 # Application entry point
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd book-store-mern-project
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   DB_URL=your_mongodb_connection_string
   ```

5. **Start the development servers**

   **Backend (Terminal 1):**
   ```bash
   cd backend
   npm start
   ```
   Server will run on `http://localhost:5000`

   **Frontend (Terminal 2):**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:5173`

## 📖 API Endpoints

### Books API (`/api/books`)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get all books |
| GET | `/:id` | Get single book by ID |
| POST | `/create-book` | Create a new book |
| PUT | `/edit/:id` | Update book by ID |
| DELETE | `/:id` | Delete book by ID |

### Book Schema
```javascript
{
  title: String (required),
  description: String (required),
  category: String (required),
  trending: Boolean (required),
  coverImage: String (required),
  oldPrice: Number (required),
  newPrice: Number (required),
  createdAt: Date (default: Date.now)
}
```

## 🎨 UI Components

### Key Components
- **BookCard**: Displays book information with add to cart functionality
- **Navbar**: Navigation with search, user menu, and cart counter
- **CartPage**: Shopping cart with item management
- **TopSellers**: Filterable book carousel by category
- **Recommend**: Recommended books carousel
- **Banner**: Hero section with call-to-action

### Styling
- **Tailwind CSS** for utility-first styling
- **Custom color palette**: Primary (#FFCE1A), Secondary (#0D0842)
- **Typography**: Montserrat and Nunito Sans fonts
- **Responsive design** with mobile-first approach

## 🛒 Shopping Cart Features

- Add/remove books from cart
- Persistent cart state with Redux
- Cart item counter in navbar
- Total price calculation
- Clear cart functionality
- Sweet alerts for user feedback

## 🔐 Authentication

- Login form with email/password validation
- Registration form
- Google OAuth integration (UI ready)
- Form validation with React Hook Form
- Protected routes (structure ready)

## 📱 Responsive Design

- Mobile-first approach
- Swiper.js for smooth carousels
- Responsive navigation with dropdown
- Adaptive layouts for different screen sizes
- Touch-friendly interface

## 🚧 Future Enhancements

### Backend
- [ ] User authentication and authorization
- [ ] Order management system
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Search and filtering
- [ ] Book reviews and ratings
- [ ] Wishlist functionality
- [ ] Email notifications

### Frontend
- [ ] User profile management
- [ ] Order history
- [ ] Book search functionality
- [ ] Advanced filtering options
- [ ] Wishlist page
- [ ] Book detail pages
- [ ] Reviews and ratings
- [ ] Dark mode toggle

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

Created with ❤️ for learning and development purposes.

## 🆘 Support

If you have any questions or need help with the project, please open an issue in the repository.

---

**Happy Reading! 📚**
