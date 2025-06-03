import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
export const Footer = () => {
    return (
        <footer className="bg-gray-100 mt-[30px] px-6 py-10 text-[rgb(18,34,49)]">
            {/* Featured Logos */}
            <div className="text-center font-semibold text-2xl sm:text-3xl">
                <p>As featured in</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-6">
                <img src="/tclogo.png" alt="TechCrunch Logo" className="h-8 sm:h-10" />
                <img src="/output.png" alt="Media Logo" className="h-8 sm:h-10" />
                <img src="/brand1.png" alt="Brand Logo" className="h-8 sm:h-10" />
                <img src="/pym.svg" alt="PYM Logo" className="h-8 sm:h-10" />
                <img src="/fast.svg" alt="Fast Company Logo" className="h-8 sm:h-10" />
                <img src="/cio.svg" alt="CIO Logo" className="h-8 sm:h-10" />
            </div>

            {/* Main Footer Grid */}
            <div className="flex flex-col lg:flex-row justify-between mt-12 gap-10">
                {/* Logo */}
                <div className="flex justify-center lg:justify-start">
                    <img src="/logo.svg" alt="Company Logo" className="w-32" />
                </div>

                {/* Navigation Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
                    <div>
                        <p className="font-semibold text-lg mb-2">Products</p>
                        <ul className="font-light space-y-1">
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
                        <ul className="font-light space-y-1">
                            <li>About</li>
                            <li>FAQs</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-lg mb-2">Legal</p>
                        <ul className="font-light space-y-1">
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Security</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Contact Info and Social Icons */}
            <div className="mt-12 flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left">
                {/* Contact Info */}
                <div>
                    <p className="font-semibold text-lg">Contact Us</p>
                    <p className="font-light mt-2 max-w-md">
                        Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.
                    </p>
                    <p className="font-light mt-2">contact@piggyvest.com</p>
                    <p className="font-light mt-1">+234 700 933 9339</p>
                </div>

                {/* Social Links */}
                <div className="flex gap-6">
                    <a href="#" aria-label="Facebook">
                        <FaFacebookF />
                        {/* <img src="/icons/facebook.svg" alt="Facebook" className="h-6 w-6" /> */}
                    </a>
                    <a href="#" aria-label="Instagram">
                        <FaInstagram />
                        {/* <img src="/icons/instagram.svg" alt="Instagram" className="h-6 w-6" /> */}
                    </a>
                    <a href="#" aria-label="Twitter">
                            <FaTwitter />
                        {/* <img src="/icons/twitter.svg" alt="Twitter" className="h-6 w-6" /> */}
                    </a>
                    <a href="#" aria-label="TikTok">
                            <FaTiktok />
                        {/* <img src="/icons/tiktok.svg" alt="TikTok" className="h-6 w-6" /> */}
                    </a>
                    <a href="#" aria-label="YouTube">
                            <IoLogoYoutube />
                        {/* <img src="/icons/youtube.svg" alt="YouTube" className="h-6 w-6" /> */}
                    </a>
                </div>
            </div>
        </footer>
    );
};
