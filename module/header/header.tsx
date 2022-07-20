import Image from "../../element/image";
export default function Header(data: any) {

    return (
        <>
            <div className="top-bar-boxed  h-[70px] md:h-[65px] z-[51] border-b border-white/[0.08] mt-12 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:pt-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent ">
                <div className="h-full flex items-center">
                    <a className="logo -intro-x hidden md:flex xl:w-[180px] ">


                        <Image src={require("../../src/assets/img/logo.png").default.src}  class={"logo__image w-26"}   alt={"glowress"}/>
                        <span className="logo__text text-white text-lg ml-3">
                        </span>
                    </a>
                    <nav aria-label="breadcrumb" className="-intro-x h-[45px] mr-auto">
                        <ol className="breadcrumb breadcrumb-light">
                            <li className="breadcrumb-item">
                                <a href="#">
                                    Dashboard
                                </a>
                            </li>
                            <li className="breadcrumb-item active capitalize" aria-current="page">

                            </li>
                        </ol>
                    </nav>
                    <div className="intro-x relative mr-3 sm:mr-6">
                    </div>
                    <div className="intro-x dropdown mr-4 sm:mr-6">
                        <div className="dropdown-toggle notification notification--bullet cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="bell" data-lucide="bell" className="lucide lucide-bell notification__icon dark:text-slate-500"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 01-3.46 0"></path></svg>
                        </div>

                    </div>
                    <div className="intro-x dropdown w-8 h-8">
                        <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110">
                            <img alt="Midone - HTML Admin Template" src="http://enigma.left4code.com/dist/images/profile-13.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}