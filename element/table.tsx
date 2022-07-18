
/* Element Table Info
/* Element Name : Table
/* Element Description : Table
/* Element Version : 0.1
*/


import { useState } from "react";


type ElementTable = {
    HeadData: [],
    BodyData: [any],
    TableData: [],
    total: number,
}




export default function Table(data: any) {
    const [ElementTable] = useState<ElementTable>({
        HeadData: data.HeadData,
        BodyData: data.BodyData,
        TableData: data.TableData,
        total: data.total,
    });

    const [Total] = useState(ElementTable.total)
    const [Last] = useState(Total - 2)



    const data1 = {
        data: [
            {
                HeadId: 0,
                HeadTitle: "Tarih",
                HeadClass: "",
            },
            {
                HeadId: 1,
                HeadTitle: "Nakliye",
                HeadClass: "",
            },
            {
                HeadId: 2,
                HeadTitle: "Kargo",
                HeadClass: "",
            },
            {
                HeadId: 3,
                HeadTitle: "HG",
                HeadClass: "",
            },
            {
                HeadId: 4,
                HeadTitle: "Numune",
                HeadClass: "",
            },
            {
                HeadId: 5,
                HeadTitle: "SSH",
                HeadClass: "",
            },
            {
                HeadId: 6,
                HeadTitle: "Toplam",
                HeadClass: "",
            },
            {
                HeadId: 7,
                HeadTitle: "%",
                HeadClass: "",
            },
        ],
        op: false,
        total: 8,
    }


    const data2 = {
        data: [
            {
                id: 0,
                tarih: "18/07",
                nakliye: "0/27",
                kargo: "Header1",
                hg: "Header1",
                numune: "Header1",
                ssh: "",
                toplam: "2/27",
                yuzde: "8%",
                class: "text-center",
            },
            {
                id: 1,
                tarih: "18/07",
                nakliye: "0/27",
                kargo: "Header1",
                hg: "Header1",
                numune: "Header1",
                ssh: "",
                toplam: "2/27",
                yuzde: "8%",
                class: "text-center",
            },
            {
                id: 2,
                tarih: "18/07",
                nakliye: "0/27",
                kargo: "Header1",
                hg: "Header1",
                numune: "Header1",
                ssh: "",
                toplam: "2/27",
                yuzde: "8%",
                class: "text-center",
            },
            {
                id: 3,
                tarih: "18/07",
                nakliye: "0/27",
                kargo: "Header1",
                hg: "Header1",
                numune: "Header1",
                ssh: "",
                toplam: "2/27",
                yuzde: "8%",
                class: "text-center",
            },
            {
                id: 4,
                tarih: "18/07",
                nakliye: "0/27",
                kargo: "Header1",
                hg: "Header1",
                numune: "Header1",
                ssh: "",
                toplam: "2/27",
                yuzde: "8%",
                class: "text-center",
            },
            {
                id: 5,
                tarih: "18/07",
                nakliye: "0/27",
                kargo: "Header1",
                hg: "Header1",
                numune: "Header1",
                ssh: "",
                toplam: "2/27",
                yuzde: "8%",
                class: "text-center",
            },
        ],
        op: false,
        total: 6,
    }




    return (
        <>
            <div className="intro-y box p-1 mt-5">
                <div className="overflow-x-auto scrollbar-hidden">
                    <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60">
                        <h2 className="font-medium text-base mr-auto ml-0">Responsive Table</h2>
                    </div>
                    <table className="table table-bordered md:table-fixed  table table-striped">
                        <thead>
                            <tr>
                                {data1.data.map((item) => { return (<th className={`whitespace-nowrap`}>{item.HeadTitle}</th>) })}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data2.data.map((item) => {
                                    return (
                                        <tr>
                                            <td>{item.tarih}</td>
                                            <td>{item.nakliye}</td>
                                            <td>{item.kargo}</td>
                                            <td>{item.hg}</td>
                                            <td>{item.numune}</td>
                                            <td>{item.ssh}</td>
                                            <td>{item.toplam}</td>
                                            <td>{item.yuzde}</td>
                                            <td className={`${data2.op === false ? "hidden" : ""}`}>edit</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}