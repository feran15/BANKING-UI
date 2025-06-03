export const Subfooter = () => {
    return (
        <div className="mt-32">
            <div className="text-center">
                <h2 className="text-[rgb(18,34,49)] text-4xl font-bold leading-relaxed">
                    Diverse ways to invest
                </h2>
                <p className="text-[rgb(18,34,49)] text-2xl leading-relaxed">
                    Grow your money and invest for your future confidently.
                </p>
            </div>
            <div className="bg-[rgb(121,19,229)] mt-12 rounded-2xl shadow-md px-2 py-6 w-full max-w-6xl flex justify-around ml-6">
                <div className="px-2 py-6">
                    <h2 className="text-white font-bold text-2xl sm:text-3xl mt-5">
                        Earn up to 35% returns
                    </h2>
                    <p className="mt-4 text-white text-base sm:text-lg leading-relaxed font-medium">
                        Invest securely and confidently <br /> on the go. Grow your money <br /> confidently by investing in pre- <br />
                        vetted investment <br /> opportunities.
                    </p>
                    <a
                        href="#"
                        className="inline-block mt-8 text-white font-medium hover:underline"
                    >
                        Learn about Investments
                    </a>
                </div>
                <div className="Image-section w-full mt-12 max-w-md">
                    <img src="/iphone.avif" alt="Investment App Screenshot" className="max-w-full h-auto" />
                </div>
            </div>
        </div>
    );
}
