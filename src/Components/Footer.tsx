

export const Footer = () => {
    return(
        <div className="mt-30">
            <div className="text-center font-semibold text-3xl">
                <p>As feautured in</p>        
            </div>
            <div className="Img-collection flex gap-10 ms-40 mt-6 w-100 h-10 ">
             <img src="/tclogo.png"  alt="Logo" />
             <img src="/output.png"  alt="Logo" />
             <img src="/brand1.png"  alt="Logo" />
             <img src="/pym.svg"  alt="Logo" />
             <img src="/fast.svg"  alt="Logo" />
             <img src="/cio.svg"  alt="Logo" />
            </div>
            {/* Main Footer section */}
                <div className="flex mt-35 gap-10">
                    <div className="logo-side">
                        <img src="/logo.svg" alt="" />
                    </div>
                    <div className="footer-list flex gap-10">
                        <div className="leading-relaxed">
                            <p className="font-semibold">Products</p> 
                        <ul className="font-light"> 
                            <li>Piggybank</li>
                            <li>Invest</li>
                            <li>Safelock</li>
                            <li>Target Savings</li>
                            <li>FlexNaira</li>
                            <li>FlexDollar</li>
                        </ul>
                        </div>
                        <div>
                            <p className="font-semibold">Company</p>
                            <ul className="font-light"> 
                                <li>About</li>
                                <li>FAQs</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold">Legal</p>
                            <ul className="font-light"> 
                                <li>Terms</li>
                                <li>Privacy</li>
                                <li>Security</li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    )
}