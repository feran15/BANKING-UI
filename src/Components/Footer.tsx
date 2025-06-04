import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

export const Footer = () => {
    return (
        <footer className="bg-gray-100 mt-[30px] px-6 py-10 text-[rgb(18,34,49)]">
            {/* Featured Logos */}
            <div className="text-center font-semibold text-2xl sm:text-3xl">
                <p>As featured in</p>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap justify-center gap-6 mt-6 overflow-x-auto">
                <img src="/tclogo.png" alt="TechCrunch Logo" className="h-8 sm:h-10" />
                <img src="/output.png" alt="Media Logo" className="h-8 sm:h-10" />
                <img src="/brand1.png" alt="Brand Logo" className="h-8 sm:h-10" />
                <img src="/pym.svg" alt="PYM Logo" className="h-8 sm:h-10" />
                <img src="/fast.svg" alt="Fast Company Logo" className="h-8 sm:h-10" />
                <img src="/cio.svg" alt="CIO Logo" className="h-8 sm:h-10" />
            </div>

            {/* Main Footer */}
            <div className="flex flex-col lg:flex-row justify-around mt-12 gap-10">
                {/* Logo and Links */}
                <div className="flex flex-col items-center lg:items-start">
                    <img src="/logo.svg" alt="Company Logo" className="w-32 mb-6" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
                        <div>
                            <p className="font-semibold text-lg mb-2">Products</p>
                            <ul className="font-light space-y-1 text-sm">
                                <li>Piggybank</li>
                                <li>Invest</li>
                                <li>Safelock</li>
                                <li>Target Savings</li>
                                <li>FlexNaira</li>
                                <li>FlexDollar</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold text-lg mb-2">Company</p>
                            <ul className="font-light space-y-1 text-sm">
                                <li>About</li>
                                <li>FAQs</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold text-lg mb-2">Legal</p>
                            <ul className="font-light space-y-1 text-sm">
                                <li>Terms</li>
                                <li>Privacy</li>
                                <li>Security</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Contact Info and Socials */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="flex gap-6 text-xl text-blue-900">
                        <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                            <FaFacebookF />
                        </a>
                        <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                            <FaInstagram />
                        </a>
                        <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500">
                            <FaTwitter />
                        </a>
                        <a href="#" aria-label="TikTok" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                            <FaTiktok />
                        </a>
                        <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                            <IoLogoYoutube />
                        </a>
                    </div>
                    <p className="font-light mt-4 max-w-sm text-sm">
                        Tesmot House, Abdulrahman Okene Close, Victoria Island, Lagos, Nigeria.
                    </p>
                    <p className="font-light mt-2 text-sm">contact@piggyvest.com</p>
                    <p className="font-light mt-1 text-sm">+234 700 933 9339</p>
                </div>
            </div>

            {/* Copyright */}
            <p className="text-sm text-center text-gray-500 mt-10">
                &copy; {new Date().getFullYear()} PiggyVest. All rights reserved.
            </p>
        </footer>
    );
};
