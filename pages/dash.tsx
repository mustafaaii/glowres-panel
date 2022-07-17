import { NextPage } from "next";
import Card from "../element/card";

const Dash: NextPage = () => {
    return (
        <>

            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 mt-8">
                    <div className="intro-y flex items-center h-10">
                        <h2 className="text-lg font-medium truncate mr-5">General Report  </h2>
                    </div>
                    <div className="grid grid-cols-12 gap-6 mt-5">
                        <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                            <Card
                                cardclass="report-box zoom-in"
                                bodyclass=""
                                headerclass=""
                                footerclass=""
                                hoverfunc={() => { }}
                                innerbody={
                                    <>
                                        <div className="box p-5">
                                            <div className="flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="shopping-cart" data-lucide="shopping-cart" className="lucide lucide-shopping-cart report-box__icon text-primary"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"></path></svg>
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-success tooltip cursor-pointer">
                                                        33% <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="chevron-up" data-lucide="chevron-up" className="lucide lucide-chevron-up w-4 h-4 ml-0.5"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">4.710</div>
                                            <div className="text-base text-slate-500 mt-1">Item Sales</div>
                                        </div>
                                    </>
                                }
                            />
                        </div>
                        <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                            <Card
                                cardclass="report-box zoom-in"
                                bodyclass=""
                                headerclass=""
                                footerclass=""
                                hoverfunc={() => { }}
                                innerbody={
                                    <>
                                        <div className="box p-5">
                                            <div className="flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="credit-card" data-lucide="credit-card" className="lucide lucide-credit-card report-box__icon text-pending"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-danger tooltip cursor-pointer">
                                                        2% <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="chevron-down" data-lucide="chevron-down" className="lucide lucide-chevron-down w-4 h-4 ml-0.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">3.721</div>
                                            <div className="text-base text-slate-500 mt-1">New Orders</div>
                                        </div>
                                    </>
                                }
                            />
                        </div>
                        <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                            <Card
                                cardclass="report-box zoom-in"
                                bodyclass=""
                                headerclass=""
                                footerclass=""
                                hoverfunc={() => { }}
                                innerbody={
                                    <>
                                        <div className="box p-5">
                                            <div className="flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="monitor" data-lucide="monitor" className="lucide lucide-monitor report-box__icon text-warning"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-success tooltip cursor-pointer">
                                                        12% <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="chevron-up" data-lucide="chevron-up" className="lucide lucide-chevron-up w-4 h-4 ml-0.5"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">2.149</div>
                                            <div className="text-base text-slate-500 mt-1">Total Products</div>
                                        </div>
                                    </>
                                }
                            />
                        </div>
                        <div className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                            <Card
                                cardclass="report-box zoom-in"
                                bodyclass=""
                                headerclass=""
                                footerclass=""
                                hoverfunc={() => { }}
                                innerbody={
                                    <>
                                        <div className="box p-5">
                                            <div className="flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="user" data-lucide="user" className="lucide lucide-user report-box__icon text-success"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                                <div className="ml-auto">
                                                    <div className="report-box__indicator bg-success tooltip cursor-pointer">
                                                        22% <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="chevron-up" data-lucide="chevron-up" className="lucide lucide-chevron-up w-4 h-4 ml-0.5"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-3xl font-medium leading-8 mt-6">152.040</div>
                                            <div className="text-base text-slate-500 mt-1">Unique Visitor</div>
                                        </div>
                                    </>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dash;
