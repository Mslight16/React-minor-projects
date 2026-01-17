import { Link } from "react-router-dom";
import '../App.css'

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="mx-auto w-full max-w-6xl px-6 py-10">
                <div className="md:flex md:justify-between gap-10">

                    {/* Logo */}
                    <div className="mb-8 md:mb-0">
                        <Link to="/" className="flex items-center gap-3">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="h-14"
                                alt="Logo"
                            />
                        </Link>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">

                        {/* Resources */}
                        <div>
                            <h2 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase">
                                Resources
                            </h2>
                            <ul className="space-y-3 text-gray-600 text-sm">
                                <li><Link to="/" className="hover:text-gray-900 transition">Home</Link></li>
                                <li><Link to="/about" className="hover:text-gray-900 transition">About</Link></li>
                                <li><Link to="/contact" className="hover:text-gray-900 transition">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Follow */}
                        <div>
                            <h2 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase">
                                Follow
                            </h2>
                            <ul className="space-y-3 text-gray-600 text-sm">
                                <li>
                                    <a
                                        href="https://github.com/Mslight16/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="hover:text-gray-900 transition"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-gray-900 transition">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h2 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase">
                                Legal
                            </h2>
                            <ul className="space-y-3 text-gray-600 text-sm">
                                <li><Link to="#" className="hover:text-gray-900 transition">Privacy Policy</Link></li>
                                <li><Link to="#" className="hover:text-gray-900 transition">Terms & Conditions</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Divider */}
                <hr className="my-8 border-gray-200" />

                {/* Bottom */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                    <span className="text-sm text-gray-500">
                        © 2023{" "}
                        <a
                            href="https://github.com/Mslight16/"
                            className="hover:text-gray-900 font-medium transition"
                        >
                            Roshni Verma
                        </a>
                        . All Rights Reserved.
                    </span>

                    {/* Social Icons */}
                    <div className="flex space-x-6">
                        {/** icons stay same – just styling */}
                        <Link className="text-gray-500 hover:text-gray-900 transform hover:scale-110 transition" />
                        <Link className="text-gray-500 hover:text-gray-900 transform hover:scale-110 transition" />
                        <Link className="text-gray-500 hover:text-gray-900 transform hover:scale-110 transition" />
                        <Link className="text-gray-500 hover:text-gray-900 transform hover:scale-110 transition" />
                    </div>
                </div>
            </div>
        </footer>

    );
}
