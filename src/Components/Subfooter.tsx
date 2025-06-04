export const Subfooter = () => {
    return (
        <div className="mt-32 px-4">
            {/* Header Text */}
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-[rgb(18,34,49)] text-4xl sm:text-5xl font-bold leading-relaxed">
                    Diverse ways to invest
                </h2>
                <p className="text-[rgb(18,34,49)] text-xl sm:text-2xl leading-relaxed mt-2">
                    Grow your money and invest for your future confidently.
                </p>
            </div>

            {/* Highlighted Investment Section */}
            <div className="bg-[rgb(121,19,229)] mt-12 rounded-2xl shadow-md p-6 sm:p-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
                {/* Text Section */}
                <div className="text-white max-w-lg">
                    <h2 className="font-bold text-2xl sm:text-3xl">
                        Earn up to 35% returns
                    </h2>
                    <p className="mt-4 text-base sm:text-lg leading-relaxed font-medium">
                        Invest securely and confidently on the go. <br />
                        Grow your money confidently by investing in <br />
                        pre-vetted investment opportunities.
                    </p>
                    <a
                        href="#"
                        className="inline-block mt-6 text-white font-medium underline hover:text-purple-200"
                    >
                        Learn about Investments
                    </a>
                </div>

                {/* Image Section */}
                <div className="w-full max-w-sm">
                    <img
                        src="/iphone.avif"
                        alt="Investment App Screenshot"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
};
