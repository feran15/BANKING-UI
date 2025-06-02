

export const Subfooter = () => {
    return(
        <div className="mt-32">
            <div className="text-center ">
            <h2 className="text-[rgb(18,34,49)] text-4xl font-bold leading-relaxed">Diverse ways to invest</h2>
            <p className= "text-[rgb(18,34,49)] text-2xl">Grow your money and invest for your future confidently.</p>
            </div>
            <div className="bg-[rgb(121,19,229)] mt-12 rounded-xl shadow-md px-3 py-10 w-full max-w-7xl flex justify-around ms-10">
            <div className="px-2 py-6">
                    <h2 className="text-white font-bold text-2xl sm:text-3xl group-hover:text-white">
                        Earn up to 35% returns
                    </h2>
                    <p className="mt-4 text-white text-base sm:text-lg leading-relaxed">
                        Invest securely and confidently <br/> on the go. Grow your money <br/> confidently by investing in pre- <br/>
                        vetted investment <br/> 
                    </p>
                    <a
                        href="#"
                        className="inline-block mt-45 text-white font-medium group-hover:text-white hover:underline"
                    >
                       Learn about Investments
                    </a>
                </div>
                    <div className="Image-section w-100">
                        <img src="/iphone.avif" alt="Logo" />
                    </div>
                </div>
        </div>
    )
}