

import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
           
            
            <div className="nav-bar">
                <div className="nav-logo">
                    
                    <h1>CMS</h1>
                </div>
                <div className="nav">
                    <Link to="home" className="com">Home</Link>
                    <Link to="login" className="com">Login</Link>
                    <Link to="register" className="com">Register</Link>
                    <Link to="contact" className="com">Contact </Link>
                </div>
            </div>
            
            <Outlet />

        </>
    );
}
export default Layout;