import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="sticky top-0 z-50 flex justify-between items-center p-4 border-b border-brand-boundary bg-brand-bg/90 backdrop-blur-md shadow-sm">
        <Link to="/" className="font-bold text-lg">
          My Portfolio
        </Link>

        {/*Navigation link on the far right*/}
        <div className="flex gap-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/project">Project</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>
      {/*Footer and the end of the page essentially */}
      <footer className="bg-brand-bg p-6 text-center border-t border-brand-boundary">
        <p>
          © {new Date().getFullYear()} Yeremi Navarrete. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default MainLayout;
