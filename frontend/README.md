# Real Estate Frontend Application

This is a React-based frontend application for a real estate platform with an integrated admin panel.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation
1. Clone the repository
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 📱 Application Structure

### Public Pages
- **Home** (`/`) - Landing page with hero section and featured properties
- **Properties** (`/properties`) - Browse all available properties
- **Property Detail** (`/property/:id`) - Detailed view of a specific property
- **About** (`/about`) - About us page
- **Contact** (`/contact`) - Contact form and information

### Admin Panel
- **Admin Login** (`/admin/login`) - Admin authentication page
- **Admin Dashboard** (`/admin/dashboard`) - Main admin dashboard with statistics
- **Properties Management** (`/admin/properties`) - Manage all properties (CRUD operations)
- **Users Management** (`/admin/users`) - Manage all users (CRUD operations)

## 🔐 Admin Access

### Login Credentials
- **Email**: admin@example.com
- **Password**: admin123

### Admin Features
- **Dashboard**: View statistics, recent properties, and activity feed
- **Properties Management**: 
  - View all properties in a table format
  - Add new properties
  - Edit existing properties
  - Delete properties
- **Users Management**:
  - View all users in a table format
  - Add new users
  - Edit existing users
  - Delete users

## 🛠️ Technology Stack

- **React** - Frontend framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **Local Storage** - Simple authentication state management

## 📁 Project Structure

```
frontend/
├── public/
├── src/
│   ├── admin/
│   │   ├── components/
│   │   │   ├── AdminLayout.js
│   │   │   ├── Sidebar.js
│   │   │   └── AdminHeader.js
│   │   ├── pages/
│   │   │   ├── AdminDashboard.js
│   │   │   ├── AdminProperties.js
│   │   │   └── AdminUsers.js
│   │   └── utils/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── PropertyCard.js
│   │   └── SearchBar.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Properties.js
│   │   ├── PropertyDetail.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── AdminLogin.js
│   │   └── NotFound.js
│   ├── data/
│   ├── styles/
│   └── App.js
├── package.json
└── README.md
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] Home page loads correctly
- [ ] Properties page displays all properties
- [ ] Property detail page shows correct information
- [ ] Admin login page accepts credentials
- [ ] Admin dashboard displays statistics
- [ ] Properties management page works correctly
- [ ] Users management page works correctly
- [ ] Navigation between admin pages works
- [ ] Logout functionality works

### Running Tests
```bash
npm test
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Production
The build folder contains the optimized production build ready for deployment.

## 🔧 Development Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run tests |
| `npm run eject` | Eject from Create React App |

## 📝 Notes

- The admin panel uses mock data for demonstration purposes
- Authentication is handled via localStorage (not production-ready)
- All components are responsive and mobile-friendly
- The application uses Tailwind CSS for styling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email support@realestateapp.com or create an issue in the repository.
