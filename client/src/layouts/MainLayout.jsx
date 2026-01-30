import { Link, Outlet } from "react-router";


const MainLayout = () => {
    return (
    <div className= "layout-container ">
        <nav className ="sticky top-0 z-50 flex justify-between items-center p-4 border-2 border-brand-boundary bg-brand-bg/90 backdrop-blur-md shadow-sm">
            <Link to="/" className="font-bold text-lg">My Portfolio</Link>

            {/*Navigation link on the far right*/}
            <div className="flex gap-6">
                <Link to="/">Home</Link> 
                <Link to="/about">About</Link>
                <Link to="/project">Project</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>

        <main>
            <Outlet />
        </main>
        <footer className="bg-brand-bg  p-4  text-center">
            <p>© {new Date().getFullYear()} Yeremi Navarrete. All rights reserved.</p>
        </footer>
    </div>
    );
};

export default MainLayout;