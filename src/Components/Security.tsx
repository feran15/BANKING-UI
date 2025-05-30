

export const Security = () => {
    return (
        <div className="mx-auto max-w-5xl mt-18 flex flex-col md:flex-row items-center md:items-start gap-6 px-4 text-center md:text-left">
            {/* Icon */}
            <div className="flex-shrink-0">
                <img
                    src="/securitylock.svg"
                    alt="Security lock icon"
                    className="w-16 h-16 md:w-30 md:h-20 mx-auto md:mx-0"
                />
            </div>

            {/* Text */}
            <div>
                <h1 className="text-2xl md:text-3xl font-bold text-[rgb(18,34,49)]">
                    Your security is our priority
                </h1>
                <p className="mt-3 text-[rgb(61,79,96)] text-base md:text-lg leading-relaxed">
                    PiggyVest uses the highest level of Internet Security and is secured by 256-bit SSL <br />
                    encryption to ensure that your information is completely protected from fraud.
                </p>
                <h5 className="mt-3 text-[rgb(18,34,49)] font-semibold text-base md:text-lg">
                    More on our security measures
                </h5>
            </div>
        </div>
    );
};
