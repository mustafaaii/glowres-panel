
/* Element Indicator Info
/* Element Name : Indicator
/* Element Description : Indicator
/* Element Version : 0.1
*/


import { useState } from "react";
import Card from "./card";
import Image from "./image";


type ElementInducatorData = {
    data: [],
    total: number,
}


export default function Inducator(data: any) {
    const [ElementInducator] = useState<ElementInducatorData>({
        data: data.InducatorData,
        total: data.InducatorTotal,
    });
    return (
        <>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 mt-8">
                    <div className="intro-y flex items-center h-10">
                        <h2 className="text-lg font-medium truncate mr-5">General Report  </h2>
                    </div>
                    <div className="grid grid-cols-12 gap-6 mt-5">
                        {
                            ElementInducator.data.map((item: any) => {
                                return (
                                    <div key={item.id} className="col-span-12 sm:col-span-6 xl:col-span-3 intro-y">
                                        <Card
                                            key={item.id}
                                            cardclass="report-box zoom-in"
                                            bodyclass=""
                                            headerclass=""
                                            footerclass=""
                                            hoverfunc={() => { }}
                                            innerbody={
                                                <div className="box p-5">
                                                    <div className="flex">
                                                        <Image src={item.icon} alt={"alt"} class={"pt-2"} />
                                                        <div className="ml-auto">
                                                            <div className={`report-box__indicator ${Math.floor(item.total / item.range) < 50 ? "bg-danger":"bg-success"} tooltip cursor-pointer`}>

                                                                {item.range}%

                                                                {Math.floor(item.total / 7) < 50 ?
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="chevron-down" data-lucide="chevron-down" className="lucide lucide-chevron-down w-4 h-4 ml-0.5">
                                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                                    </svg>
                                                                    :
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="chevron-up" data-lucide="chevron-up" className="lucide lucide-chevron-up w-4 h-4 ml-0.5">
                                                                        <polyline points="18 15 12 9 6 15"></polyline>
                                                                    </svg>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-3xl font-medium leading-8 mt-6">{item.value}</div>
                                                    <div className="text-base text-slate-500 mt-1">{item.text}</div>
                                                </div>
                                            }
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}