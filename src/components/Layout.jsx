import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This renders child routes */}
      </main>
    </>
  );
}