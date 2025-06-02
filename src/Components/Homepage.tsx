import React from 'react';

export const Homepage: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-12 lg:px-24 py-10 gap-10">
            {/* Left Side: Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="bg-blue-500 rounded-lg py-2 px-4 font-bold text-white inline-block text-sm sm:text-base">
                    <p>The 2024 PiggyVest Savings Report</p>
                </div>

                <h1 className="text-[rgb(18,34,49)] font-semibold text-4xl sm:text-5xl mt-4 leading-tight">
                    The Better Way to <br /> Save & Invest
                </h1>

                <p className="text-[rgb(61,79,96)] mt-4 text-base sm:text-lg leading-relaxed">
                    Piggyvest helps over 5 million customers <br />
                    achieve their financial goals by helping <br />
                    them save and invest with ease.
                </p>

                {/* Buttons */}
                <div className="mt-5 flex gap-5 font-semibold text-white">
                    <button className="flex items-center bg-[rgb(18,34,49)] hover:bg-black transition duration-300 ease-in-out cursor-pointer transform hover:scale-105 rounded-lg px-3 py-3 subtle-bounce">
                        <img src="/white-logo.svg" className="w-5 me-2" alt="Apple logo" />
                        Get on iPhone
                    </button>
                    <button className="flex items-center bg-[rgb(18,34,49)] hover:bg-black transition duration-300 ease-in-out cursor-pointer transform hover:scale-105 rounded-lg px-3 py-3 subtle-bounce">
                        <img src="/google-icon.svg" className="w-5 me-2" alt="Google Play logo" />
                        Get on Android
                    </button>
                </div>
            </div>

            {/* Right Side: Image */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src="/Bank.avif"
                    alt="Illustration of a bank with financial elements"
                    className="w-full max-w-[400px] h-auto object-contain subtle-bounce"
                />
            </div>
        </div>
    );
};
