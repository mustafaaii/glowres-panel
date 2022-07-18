import { NextPage } from "next";
import Table from "../element/table";
import Header from "../module/header/header";
import Sidebar from "../module/sidebar/sidebar";
const Dash: NextPage = () => {

    const indicator = {
        data: [
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
        ],
        total: 4,
    }
    const TableHead = {
        data: [
            {
                id: 0,
                title: "PRODUCT NAME",
                class: "text-center",

            },
            {
                id: 1,
                title: "PRODUCT NAME",
                class: "text-center",

            },
            {
                id: 2,
                title: "PRODUCT NAME",
                class: "float-left",

            },
            {
                id: 3,
                title: "PRODUCT NAME",
                class: "float-left",

            },
            {
                id: 4,
                title: "PRODUCT NAME",
                class: "float-left",

            },
            {
                id: 5,
                title: "Operasyon",
                class: "float-left",
            },
        ],
        total: 6
    }
    const TableBody = {
        data: [
            {
                id: 0,
                name: "name",
                surname: "surname",
                jobs: "jobs",
                date: "date"
            },
            {
                id: 1,
                name: "name",
                surname: "surname",
                jobs: "jobs",
                date: "date"
            },
            {
                id: 2,
                name: "name",
                surname: "surname",
                jobs: "jobs",
                date: "date"
            },
            {
                id: 3,
                name: "name",
                surname: "surname",
                jobs: "jobs",
                date: "date"
            },
        ],
        total: 4,
    }
    const TableData = {
        data: [
            {
                ColumnId: 0,
                ColumnName: "Name",
                ColumnClass: "text-center",
                icon: "",
                ColumnBody: [
                    {
                        name: "name1",
                    },
                    {
                        name: "name2",
                    },
                    {
                        name: "name3",
                    },
                    {
                        name: "name4",
                    },
                    {
                        name: "name5",
                    }
                ],
                total: 6,
            },
            {
                ColumnId: 1,
                ColumnName: "Name",
                ColumnClass: "text-center",
                icon: "",
                ColumnBody: [
                    {
                        name: "name1",
                    },
                    {
                        name: "name2",
                    },
                    {
                        name: "name3",
                    },
                    {
                        name: "name4",
                    },
                    {
                        name: "name5",
                    }
                ],
                total: 6,
            },
            {
                ColumnId: 2,
                ColumnName: "Surname",
                ColumnClass: "text-center",
                icon: "",
                ColumnBody: [
                    {
                        surname: "surname1",
                    },
                    {
                        surname: "surname2",
                    },
                    {
                        surname: "surname3",
                    },
                    {
                        surname: "surname4",
                    },
                    {
                        surname: "surname5",
                    }
                ],
                total: 6,
            },
            {
                ColumnId: 3,
                ColumnName: "Jobs",
                ColumnClass: "text-center",
                icon: "",
                ColumnBody: [
                    {
                        jobs: "jobs1",
                    },
                    {
                        jobs: "jobs2",
                    },
                    {
                        jobs: "jobs3",
                    },
                    {
                        jobs: "jobs4",
                    },
                    {
                        jobs: "jobs5",
                    }
                ],
                total: 6,
            },
            {
                ColumnId: 4,
                ColumnName: "Date",
                ColumnClass: "text-center",
                icon: "",
                ColumnBody: [
                    {
                        date: "date1",
                    },
                    {
                        date: "date2",
                    },
                    {
                        date: "date3",
                    },
                    {
                        date: "date4",
                    },
                    {
                        date: "date5",
                    }
                ],
                total: 6,
            },

        ],
        op: [
            {
                ColumnId: "OptionsId",
                ColumnName: "ptions",
                ColumnClass: "text-center",
                icon: "",
                ColumnBody: [
                    {
                        date: "date1",
                    },
                    {
                        date: "date2",
                    },
                    {
                        date: "date3",
                    },
                    {
                        date: "date4",
                    },
                    {
                        date: "date5",
                    }
                ],
                total: 6,
            },
        ],
        total: 2,
    }
    //<Inducator InducatorData={indicator.data} InducatorTotal={indicator.total} />
    //<Table HeadData={TableHead.data} BodyData={TableBody.data} total={TableHead.total} demo={TableData.data} />
    return (
        <>

            <div className="grid grid-cols-12 gap-6 mt-5">
                <div className="intro-y col-span-12 lg:col-span-8">

                </div>
                <div className="intro-y col-span-12 lg:col-span-4">

                </div>
            </div>

        </>
    )
}

export default Dash;
