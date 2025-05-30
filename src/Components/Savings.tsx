

export const Savings = () => {
    return (
        <div className="mt-36 px-4">
            {/* Header */}
            <div className="text-center sm:font-semibold max-w-3xl mx-auto">
                <h1 className="font-bold text-3xl sm:text-5xl text-[rgb(18,34,49)]">
                    Many ways to build your savings
                </h1>
                <h3 className="mt-5 text-xl sm:text-2xl text-[rgb(18,34,49)]">
                    Earn 12%–22% when you save with any of these PiggyVest plans.
                </h3>
            </div>

            {/* Cards Carousel */}
            <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
                {/* Card 1 */}
                <div className="bg-white rounded-xl shadow-md px-6 py-10 w-full max-w-md ">
                    <h2 className="text-[rgb(0,51,153)] font-bold text-2xl sm:text-3xl">Automated Savings</h2>
                    <p className="mt-4 text-[rgb(61,79,96)] text-base sm:text-lg leading-relaxed">
                        Build a dedicated savings faster <br/> on your terms, automatically or <br/> manually.
                    </p>
                    <a
                        href="#"
                        className="inline-block mt-45 text-[rgb(0,51,153)] font-medium hover:underline"
                    >
                        Piggybank
                    </a>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl shadow-md px-6 py-10 w-full max-w-md ">
                    <h2 className="text-[rgb(50,150,255)] font-bold text-2xl sm:text-3xl">Fixed Savings</h2>
                    <p className="mt-4 text-[rgb(61,79,96)] text-base sm:text-lg leading-relaxed">
                        Lock money away for a fixed duration without access until maturity. It's like having a
                        custom fixed deposit.
                    </p>
                    <a
                        href="#"
                        className="inline-block mt-45 text-[rgb(50,150,255)] font-medium 2hover:underline"
                    >
                        Safelock
                    </a>
                </div>
            </div>
        </div>
    );
};
