import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientLayout from './components/client/layout/ClientLayout';
import AdminLayout from './components/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';

// Client Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import AdminProducts from './pages/admin/Products';
import AdminServices from './pages/admin/Services';
import AdminBlogs from './pages/admin/Blogs';
import AdminContacts from './pages/admin/Contacts';
import AdminSettings from './pages/admin/Settings';
import AdminLogin from './pages/AdminLogin';

// Initialize mock data
import { initializeMockData } from './lib/mock-data';
initializeMockData();

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <div className="grain-overlay" />
        <Routes>
          {/* Client Routes */}
          <Route element={<ClientLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="blogs" element={<AdminBlogs />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}