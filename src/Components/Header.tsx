

export const Header = () => {
    return(
        <div>
                       {/* Cards Carousel */}
                       <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
                {/* Card 1 */}
                <div className="group bg-white rounded-xl shadow-md px-6 py-10 w-full max-w-md hover:bg-[rgb(12,24,37)] cursor-pointer transition duration-800 ease-in-out">
                    <h2 className="text-[rgb(12,24,37)] font-bold text-2xl sm:text-3xl group-hover:text-white">
                       Flex Dollar
                    </h2>
                    <p className="mt-4 text-[rgb(61,79,96)] text-base sm:text-lg leading-relaxed group-hover:text-white">
                        Save and grow your money in <br /> foreign currencies such as Dollars.
                    </p>
                    <a
                        href="#"
                        className="inline-block mt-45 text-[rgb(12,24,37)] font-medium group-hover:text-white hover:underline"
                    >
                        FlexDollar
                    </a>
                </div>

                {/* Card 2 */}
                <div className="group bg-white rounded-xl shadow-md px-6 py-10 w-full max-w-md hover:bg-[rgb(255,120,60)] cursor-pointer transition duration-800 ease-in-out">
                    <h2 className="text-[rgb(255,120,60)] font-bold text-2xl sm:text-3xl group-hover:text-white">
                        HouseMoney
                    </h2>
                    <p className="mt-4 text-[rgb(61,79,96)] text-base sm:text-lg leading-relaxed group-hover:text-white">
                      Plan for your rent and household <br/>expenses
                    </p>
                    <a
                        href="#"
                        className="inline-block mt-45 text-[rgb(255,120,60)] font-medium group-hover:text-white hover:underline"
                    >
                       House Money
                    </a>
                </div>
        </div>
        </div>
    )
}