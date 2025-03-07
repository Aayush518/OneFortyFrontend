import { Outlet } from 'react-router-dom';
import RetroNav from '../RetroNav';
import Footer from './Footer';

export default function ClientLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <RetroNav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}