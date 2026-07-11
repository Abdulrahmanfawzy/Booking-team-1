import { Outlet } from 'react-router-dom';
import Nav from '@/components/shared/nav/Nav';
import Footer from '@/components/shared/footer/Footer';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav padding={"px-20"} />
      <main className="flex-1 w-full max-w-7xl mx-auto px-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}