import { Outlet } from 'react-router-dom';

import Navigation from '@/components/Navigation';

export default function Root() {
  return (
    <>
      <header className="bg-pink px-8 py-8 text-off-black">
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
