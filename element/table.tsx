
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




    return (
        <>
            <div className="intro-y box p-5 mt-5">
                <div className="overflow-x-auto scrollbar-hidden">
                    <div className="mt-5 table-report table-fixed table-report--tabulator tabulator">


                        <div className="tabulator-header" style={{ paddingRight: "0px", marginLeft: "0px" }}>
                            <div className="tabulator-headers " style={{ marginLeft: "0px" }}>
                                {
                                    ElementTable.HeadData.map((item: any, index) => {
                                        return (
                                            <div className="tabulator-col tabulator-sortable"
                                                style={{
                                                    minWidth: "200px",
                                                    height: "44px",
                                                    textAlign: "left",
                                                    width: `${100 / Total}%`,
                                                }}>
                                                <div className="tabulator-col-content">
                                                    <div className="tabulator-col-title-holder">
                                                        <div className={`tabulator-col-title ${item.class}`}>{item.title}</div>
                                                        <div className="tabulator-col-sorter">
                                                            <div className="tabulator-arrow"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tabulator-col-resize-handle"></div>
                                                <div className="tabulator-col-resize-handle prev"></div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="tabulator-frozen-rows-holder"></div>
                        </div>

                        <div className="tabulator-tableHolder" tabIndex={0} style={{ height: "658px" }}>
                            <div className="tabulator-table" style={{ paddingTop: "0px", paddingBottom: "0px" }}>
                                {

                                }
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}