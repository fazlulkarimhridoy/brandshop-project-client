import { Link, NavLink } from "react-router-dom";
import { image } from './image'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    // handle logout
    const handleLogOut = () => {
        logout()
            .then()
            .catch()
    }




    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/addProducts">Add Products</NavLink></li>
        <li><NavLink to="/myCart">My Cart</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </>
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <img src={image} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex justify-center gap-3">
                                <p className="text-xl bg-pink-500 rounded-lg p-2 font-medium text-white pt-2">{user.email}</p>
                                <div className="avatar pr-2">
                                    <div className="w-12 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </div>
                                <button onClick={handleLogOut} className="btn btn-error text-white">Logout</button>
                            </div>
                            :
                            <Link to="/register"><button className="btn btn-primary">Register</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;