import { Outlet } from 'react-router-dom';
import Nav from '@/components/shared/nav/Nav';
import Footer from '@/components/shared/footer/Footer';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-1 max-w-7xl mx-auto px-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}