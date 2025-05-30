

export const Section = () => {
    return (
        <div>
            <div className="">
                 {/* Cards Carousel */}
            <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
                {/* Card 1 */}
                <div className="group bg-white rounded-xl shadow-md px-6 py-10 w-full max-w-md hover:bg-[rgb(6,155,64)] cursor-pointer transition duration-800 ease-in-out">
                    <h2 className="text-[rgb(6,155,64)] font-bold text-2xl sm:text-3xl group-hover:text-white">
                       Goal-oriented Savings
                    </h2>
                    <p className="mt-4 text-[rgb(61,79,96)] text-base sm:text-lg leading-relaxed group-hover:text-white">
                        Reach all your savings goals faster. <br /> Save towards mutiple goals on<br /> your own or with a group.
                    </p>
                    <a
                        href="#"
                        className="inline-block mt-45 text-[rgb(6,155,64)] font-medium group-hover:text-white hover:underline"
                    >
                        Target Savings  
                    </a>
                </div>

                {/* Card 2 */}
                <div className="group bg-white rounded-xl shadow-md px-6 py-10 w-full max-w-md hover:bg-[rgb(229,72,155)] cursor-pointer transition duration-800 ease-in-out">
                    <h2 className="text-[rgb(229,72,155)] font-bold text-2xl sm:text-3xl group-hover:text-white">
                        Flex Naira
                    </h2>
                    <p className="mt-4 text-[rgb(61,79,96)] text-base sm:text-lg leading-relaxed group-hover:text-white">
                       Save, transfer, manage, organise, <br/> and withdraw your money at any <br/> time.
                    </p>
                    <a
                        href="#"
                        className="inline-block mt-45 text-[rgb(229,72,155)] font-medium group-hover:text-white hover:underline"
                    >
                       Flex Naira
                    </a>
                </div>


            </div>
            </div>
        </div>
    )
}