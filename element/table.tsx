
/* Element Table Info
/* Element Name : Table
/* Element Description : Table
/* Element Version : 0.1
*/
import { useState } from "react";
type ElementTable = {
    HeadData: [],
    BodyData: [],
    BodyOp: any,
}
export default function Table(data: any) {
    const [ElementTable] = useState<ElementTable>({
        HeadData: data.HeadData,
        BodyData: data.BodyData,
        BodyOp: data.BodyOp,
    });
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
                                {
                                    ElementTable.HeadData.map((item: any) => { return (<th key={`${item.id + item.HeadTitle}`} className={`whitespace-nowrap ${ElementTable.BodyOp.HeaderPositionClass}`}>{item.HeadTitle}</th>) })
                                }
                                {
                                    ElementTable.BodyOp.LastColumn === false ? "" : <th className={`whitespace-nowrap ${ElementTable.BodyOp.HeaderPositionClass}`}>
                                        {ElementTable.BodyOp.LastColumnName}
                                    </th>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ElementTable.BodyData.map((item: any) => {
                                    return (
                                        <tr key={item.id} className={`${ElementTable.BodyOp.HeaderPositionClass}`}>
                                            <td>{item.tarih}</td>
                                            <td>{item.nakliye}</td>
                                            <td>{item.kargo}</td>
                                            <td>{item.hg}</td>
                                            <td>{item.numune}</td>
                                            <td>{item.ssh}</td>
                                            <td>{item.toplam}</td>
                                            <td>{item.yuzde}</td>
                                            <td className={`${ElementTable.BodyOp.LastColumn === false ? "hidden" : ""}`}>
                                                <div className="flex lg:justify-center items-center">
                                                    <a className={`edit flex items-center mr-3 ${ElementTable.BodyOp.Edit.EditButtonStatus === false ? "hidden" : ""}`} href="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="check-square" data-lucide="check-square" className="lucide lucide-check-square w-4 h-4 mr-1">
                                                            <polyline points="9 11 12 14 22 4"></polyline>
                                                            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                                                        </svg>
                                                        {ElementTable.BodyOp.Edit.EditButton}
                                                    </a>

                                                    {ElementTable.BodyOp.Delete.DeleteButton === "" ? "" : <div className="mr-2 ml-2"></div>}

                                                    <a className={`delete flex items-center text-danger ${ElementTable.BodyOp.Delete.DeleteButtonStatus === false ? "hidden" : ""}`} href="">

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="trash-2" data-lucide="trash-2" className="lucide lucide-trash-2 w-4 h-4 mr-1">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                                        </svg>
                                                        {ElementTable.BodyOp.Delete.DeleteButton}
                                                    </a>


                                                    {ElementTable.BodyOp.View.ViewButton === "" ? "" : <div className="mr-2 ml-2"></div>}
                                                    <a className={`delete flex items-center text-primary  ${ElementTable.BodyOp.View.ViewButtonStatus === false ? "hidden" : ""}`} href="">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="eye" data-lucide="eye" className="lucide lucide-trash-2 w-4 h-4 mr-1">
                                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                            <circle cx="12" cy="12" r="3"></circle>
                                                        </svg>
                                                        {ElementTable.BodyOp.View.ViewButton}
                                                    </a>


                                                </div>

                                            </td>
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