import { Link, NavLink } from "react-router-dom";
import '../App.css'


export default function Header() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur bg-white/90 shadow-sm">
            <nav className="border-b border-gray-200 px-6 lg:px-10 py-3">
                <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="h-12 object-contain"
                            alt="Logo"
                        />
                    </Link>

                    {/* Right button */}
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="/login"
                            className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2 transition-all duration-200 shadow-sm"
                        >
                            Log in
                        </Link>
                    </div>

                    {/* Menu */}
                    <div className="hidden lg:flex lg:order-1">
                        <ul className="flex items-center space-x-10 text-sm font-medium">

                            {["/", "/about", "/contact", "/github"].map((path, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={path}
                                        className={({ isActive }) =>
                                            `relative pb-1 transition-all duration-200
                   ${isActive
                                                ? "text-orange-600 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-orange-600"
                                                : "text-gray-700 hover:text-orange-600"
                                            }`
                                        }
                                    >
                                        {path === "/" ? "Home" :
                                            path === "/about" ? "About" :
                                                path === "/contact" ? "Contact" :
                                                    "GitHub"}
                                    </NavLink>
                                </li>
                            ))}

                        </ul>
                    </div>

                </div>
            </nav>
        </header>

    );
}

