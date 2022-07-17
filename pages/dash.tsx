import { NextPage } from "next";
import { useState } from "react";
import Card from "../element/card";
import Image from "../element/image";
import Table from "../element/table";
const Dash: NextPage = () => {

    const [indicator] = useState([
        {
            id: 0,
            icon: "../assets/img/sales.svg",
            value: "asdasd",
            text: "Item Sales",
            percent: "",
            range: "../assets/img/icon/range-down.svg",
        },
        {
            id: 1,
            icon: "../assets/img/icon/sales.svg",
            value: "",
            text: "New Orders",
            percent: "",
            range: "../assets/img/icon/range-down.svg",
        },
        {
            id: 2,
            icon: "../assets/img/icon/sales.svg",
            value: "",
            text: "Total Products",
            percent: "Unique Visitor",
            range: "../assets/img/icon/range-down.svg",
        },
        {
            id: 3,
            icon: "../assets/img/icon/sales.svg",
            value: "",
            text: "",
            percent: "",
            range: "../assets/img/icon/range-down.svg",
        },
    ])

    return (
        <>

            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 mt-8">
                    <div className="intro-y flex items-center h-10">
                        <h2 className="text-lg font-medium truncate mr-5">General Report  </h2>
                    </div>
                    <div className="grid grid-cols-12 gap-6 mt-5">
                        {
                            indicator.map((item: any) => {
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
                                                            <div className="report-box__indicator bg-success tooltip cursor-pointer"> 33% </div>
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
            <Table />
        </>
    )
}

export default Dash;
