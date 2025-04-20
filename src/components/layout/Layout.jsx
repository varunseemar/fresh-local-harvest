
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-store-bg">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default Layout;
