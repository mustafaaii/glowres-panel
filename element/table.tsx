
/* Element Table Info
/* Element Name : Table
/* Element Description : Table
/* Element Version : 0.1
*/


import { useState } from "react";


type ElementButtonData = {
    id: any,
    text: string,
    class: string,
    type: any,
    clickfunc?: () => void,
}


export default function Table(data: any) {
    const [ElementButton] = useState<ElementButtonData>({
        id: data.id,
        text: data.text,
        class: data.class,
        type: data.type,
        clickfunc: data.onclick,
    });


    const TableHead = {
        data: [
            {
                id: 1,
                title: "PRODUCT NAME",

            },
            {
                id: 2,
                title: "PRODUCT NAME",

            },
            {
                id: 3,
                title: "PRODUCT NAME",

            },
            {
                id: 4,
                title: "PRODUCT NAME",

            },
            {
                id: 5,
                title: "PRODUCT NAME",

            },
            {
                id: 6,
                title: "PRODUCT NAME",
            },
            {
                id: 7,
                title: "PRODUCT NAME",

            },
        ],
        op: [
            {
                id: 0,
                icon: "Icon",
                title: "Delete",
            },
            {
                id: 1,
                icon: "Icon",
                title: "Edit",
            },
            {
                id: 2,
                icon: "Icon",
                title: "View",
            }
        ],
        total: 8,
    }


    const TableData = {
        data: [
            {
                id: 0,
            },
            {
                id: 1,
            },
            {
                id: 2,
            },
            {
                id: 3,
            },
            {
                id: 4,
            },
            {
                id: 5,
            },
            {
                id: 6,
                data: [],
            },

        ],
        total: 8,
    }


    return (
        <>
            <div className="intro-y box p-5 mt-5">


                <div className="flex flex-col sm:flex-row sm:items-end xl:items-start" hidden>
                    <form id="tabulator-html-filter-form" className="xl:flex sm:mr-auto">
                        <div className="sm:flex items-center sm:mr-4">
                            <label className="w-12 flex-none xl:w-auto xl:flex-initial mr-2">Field</label>
                            <select id="tabulator-html-filter-field"
                                className="form-select w-full sm:w-32 2xl:w-full mt-2 sm:mt-0 sm:w-auto">
                                <option value="name">Name</option>
                                <option value="category">Category</option>
                                <option value="remaining_stock">Remaining Stock</option>
                            </select>
                        </div>
                        <div className="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
                            <label className="w-12 flex-none xl:w-auto xl:flex-initial mr-2">Type</label>
                            <select id="tabulator-html-filter-type" className="form-select w-full mt-2 sm:mt-0 sm:w-auto">
                                <option value="like" >like</option>
                                <option value="=">=</option>
                                <option value="<">&lt;</option>
                                <option value="<=">&lt;=</option>
                                <option value=">">&gt;</option>
                                <option value=">=">&gt;=</option>
                                <option value="!=">!=</option>
                            </select>
                        </div>
                        <div className="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
                            <label className="w-12 flex-none xl:w-auto xl:flex-initial mr-2">Value</label>
                            <input id="tabulator-html-filter-value" type="text" className="form-control sm:w-40 2xl:w-full mt-2 sm:mt-0" placeholder="Search..." />
                        </div>
                        <div className="mt-2 xl:mt-0">
                            <button id="tabulator-html-filter-go" type="button" className="btn btn-primary w-full sm:w-16">Go</button>
                            <button id="tabulator-html-filter-reset" type="button"
                                className="btn btn-secondary w-full sm:w-16 mt-2 sm:mt-0 sm:ml-1">Reset</button>
                        </div>
                    </form>
                    <div className="flex mt-5 sm:mt-0">
                        <button id="tabulator-print" className="btn btn-outline-secondary w-1/2 sm:w-auto mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                icon-name="printer" data-lucide="printer" className="lucide lucide-printer w-4 h-4 mr-2">
                                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                                <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"></path>
                                <rect x="6" y="14" width="12" height="8"></rect>
                            </svg> Print
                        </button>
                        <div className="dropdown w-1/2 sm:w-auto">
                            <button className="dropdown-toggle btn btn-outline-secondary w-full sm:w-auto" aria-expanded="false"
                                data-tw-toggle="dropdown">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    icon-name="file-text" data-lucide="file-text" className="lucide lucide-file-text w-4 h-4 mr-2">
                                    <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <line x1="10" y1="9" x2="8" y2="9"></line>
                                </svg> Export <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" icon-name="chevron-down" data-lucide="chevron-down"
                                    className="lucide lucide-chevron-down w-4 h-4 ml-auto sm:ml-2">
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                            </button>
                            <div className="dropdown-menu w-40">
                                <ul className="dropdown-content">
                                    <li>
                                        <a id="tabulator-export-csv" href="" className="dropdown-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" icon-name="file-text" data-lucide="file-text"
                                                className="lucide lucide-file-text w-4 h-4 mr-2">
                                                <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                                <line x1="10" y1="9" x2="8" y2="9"></line>
                                            </svg> Export CSV
                                        </a>
                                    </li>
                                    <li>
                                        <a id="tabulator-export-json" href="" className="dropdown-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" icon-name="file-text" data-lucide="file-text"
                                                className="lucide lucide-file-text w-4 h-4 mr-2">
                                                <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                                <line x1="10" y1="9" x2="8" y2="9"></line>
                                            </svg> Export JSON
                                        </a>
                                    </li>
                                    <li>
                                        <a id="tabulator-export-xlsx" href="" className="dropdown-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" icon-name="file-text" data-lucide="file-text"
                                                className="lucide lucide-file-text w-4 h-4 mr-2">
                                                <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                                <line x1="10" y1="9" x2="8" y2="9"></line>
                                            </svg> Export XLSX
                                        </a>
                                    </li>
                                    <li>
                                        <a id="tabulator-export-html" href="" className="dropdown-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" icon-name="file-text" data-lucide="file-text"
                                                className="lucide lucide-file-text w-4 h-4 mr-2">
                                                <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                                <line x1="10" y1="9" x2="8" y2="9"></line>
                                            </svg> Export HTML
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto scrollbar-hidden">
                    <div className="mt-5 table-report  table-report--tabulator tabulator">
                        <div className="tabulator-header" style={{ paddingRight: "0px", marginLeft: "0px" }}>
                            <div className="tabulator-headers " style={{ marginLeft: "0px" }}>
                                {
                                    TableHead.data.map((item, index) => {
                                        return (
                                            <div className="tabulator-col tabulator-sortable"
                                                style={{
                                                    minWidth: "200px",
                                                    height: "44px",
                                                    textAlign: "left",
                                                    width: `${100 / TableHead.total}%`,
                                                    borderRight: `${(TableHead.total - 1) < TableHead.total ? ("solid 1px #e6e6e6") : ("")}`,
                                                    borderLeft: `${index === 0 ? ("solid 1px #e6e6e6") : (index)}`
                                                }}>
                                                <div className="tabulator-col-content">
                                                    <div className="tabulator-col-title-holder">
                                                        <div className="tabulator-col-title" style={{ textAlign: "left" }}>{item.title}</div>
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
                                    TableData.data.map(() => {
                                        return (
                                            <div className="tabulator-row tabulator-selectable  tabulator-row-odd" role="row" style={{ paddingLeft: "0px", width: "100%" }}>
                                                {
                                                    TableHead.data.map((item, index) => {
                                                        return (
                                                            <div
                                                                className="tabulator-cell"
                                                                role="gridcell"
                                                                tabulator-field="name"
                                                                title=""
                                                                style={{
                                                                    width: `${100 / TableHead.total}%`,
                                                                    height: "64px",
                                                                    borderRight: `${(TableHead.total - 1) < TableHead.total ? ("solid 1px #e6e6e6") : ("")}`,
                                                                    borderLeft: `${index === 0 ? ("solid 1px #e6e6e6") : (index)}`
                                                                }}
                                                            >


                                                                {
                                                                    TableHead.total === index + 1 ?
                                                                        (
                                                                            <>
                                                                                {
                                                                                    (TableHead.op).map((operation) => {
                                                                                        return (
                                                                                            <>
                                                                                                {console.log(operation.title)}
                                                                                            </>
                                                                                        )
                                                                                    })

                                                                                }
                                                                            </>
                                                                        ) :
                                                                        (
                                                                            <>
                                                                                <div>
                                                                                    <div className="font-medium whitespace-nowrap">Samsung Q90 QLED TV</div>
                                                                                    <div className="text-slate-500 text-xs whitespace-nowrap">Electronic</div>
                                                                                </div>
                                                                                <div className="tabulator-col-resize-handle"></div>
                                                                                <div className="tabulator-col-resize-handle prev"></div>
                                                                            </>
                                                                        )
                                                                }


                                                            </div>
                                                        )
                                                    })
                                                }
                                                <div className="tabulator-responsive-collapse"></div>
                                            </div>
                                        )
                                    })
                                }



                            </div>
                        </div>
                        <div className="tabulator-footer">
                            <span className="tabulator-paginator">
                                <label>Page Size</label>
                                <select className="tabulator-page-size" aria-label="Page Size" title="Page Size">
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="40">40</option>
                                </select>
                                <button className="tabulator-page" type="button" role="button" aria-label="First Page" title="First Page" data-page="first" >First</button>
                                <button className="tabulator-page" type="button" role="button" aria-label="Prev Page" title="Prev Page" data-page="prev">Prev</button>
                                <span className="tabulator-pages">
                                    <button className="tabulator-page active" type="button" role="button" aria-label="Show Page 1" title="Show Page 1" data-page="1">1</button>
                                    <button className="tabulator-page" type="button" role="button" aria-label="Show Page 2" title="Show Page 2" data-page="2">2</button>
                                </span>
                                <button className="tabulator-page" type="button" role="button" aria-label="Next Page" title="Next Page" data-page="next">Next</button>
                                <button className="tabulator-page" type="button" role="button" aria-label="Last Page" title="Last Page" data-page="last">Last</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}