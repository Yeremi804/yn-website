import { Link, Outlet } from "react-router";


const MainLayout = () => {
    return (
    <div className="layout-container">
        <nav className ="flex gap-4 p-4 bg-white shadow-sm">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/project">Project</Link>
        </nav>

        <main>
            <Outlet />
        </main>
        <footer className="p-4 bg-brand-primary text-center">
            <p>© {new Date().getFullYear()} Yeremi Navarrete. All rights reserved.</p>
        </footer>
    </div>
    );
};

export default MainLayout;