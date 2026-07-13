import { Outlet } from 'react-router-dom';
import Nav from '@/components/shared/nav/Nav';
import Footer from '@/components/shared/footer/Footer';
import { cn } from "@/lib/utils";
export default function MainLayout() {
  return (
    <div className={cn('flex', 'flex-col', 'min-h-screen')}>
      <Nav padding="px-4 sm:px-6 md:px-10 lg:px-20" />
      <main className={cn('flex-1', 'w-full', 'max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'md:px-10', 'lg:px-20')}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}


