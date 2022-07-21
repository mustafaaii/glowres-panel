import axios from "axios";
import { NextPage } from "next";
import Inducator from "../element/indicator";
import Table from "../element/table";
import SalesIcon from "../src/assets/img/sales.svg"

const Dash: NextPage = () => {
    const indicator = {
        data: [
            {
                id: 0,
                icon: SalesIcon.src,
                value: "33%",
                text: "Item Sales",
                percent: "",
                total: "8000",
                range: "60",
            },
            {
                id: 1,
                icon: SalesIcon.src,
                value: "29%",
                text: "New Orders",
                percent: "",
                total: "5000",
                range: "80",
            },
            {
                id: 2,
                icon: SalesIcon.src,
                value: "49%",
                text: "Total Products",
                percent: "Unique Visitor",
                total: "1258",
                range: "33",
            },
            {
                id: 3,
                icon: SalesIcon.src,
                value: "99%",
                text: "Total Products",
                percent: "Unique Visitor",
                total: "1258",
                range: "33",
            },
        ],
        total: 4,
    }

    const TableSettings = {
        ColumnStatus: true,
        ColumnName: "Test",
        Edit: {
            Status: true,
            Text: "Edit",
            func: (e: any) => { console.log(e.currentTarget.id) },
        },
        Delete: {
            Status: true,
            Text: "Delete",
            func: (e: any) => { console.log(e.currentTarget.id) },

        },
        View: {
            Status: false,
            Text: "View",
            func: (e: any) => { console.log(e.currentTarget.id) },
        },

        HeaderPositionClass: "text-center",
        HeaderTextSize: "text-center",
        BodyPositionClass: "text-center",
        BodyTextSize: "text-center",
    }

    const HeadData = {
        data: [
            {
                HeadId: 20210,
                HeadTitle: "ID",
                HeadClass: "",
            },
            {
                HeadId: 20211,
                HeadTitle: "Nakliye",
                HeadClass: "",
            },
            {
                HeadId: 20212,
                HeadTitle: "Kargo",
                HeadClass: "",
            },
            {
                HeadId: 20213,
                HeadTitle: "HG",
                HeadClass: "",
            },
            {
                HeadId: 20214,
                HeadTitle: "Numune",
                HeadClass: "",
            },
            {
                HeadId: 20215,
                HeadTitle: "SSH",
                HeadClass: "",
            },
            {
                HeadId: 20216,
                HeadTitle: "Toplam",
                HeadClass: "",
            },
            {
                HeadId: 20217,
                HeadTitle: "%",
                HeadClass: "",
            },
            {
                HeadId: 20218,
                HeadTitle: "asd",
                HeadClass: "",
            },
        ],
        total: 9,
    }

    const BodyData = {
        data: [
            {
                val_0: 202212,
                val_1: "Text1",
                val_2: "Text2",
                val_3: "Text3",
                val_4: "Text4",
                val_5: "Text5",
                val_6: "Text6",
                val_7: "Text7",
                val_8: "Text8",
            },
            {
                val_0: 202213,
                val_1: "asd",
                val_2: "Text2",
                val_3: "Texdasasdt3",
                val_4: "asdasdasd",
                val_5: "Teasdxt5",
                val_6: "12",
                val_7: "14",
                val_8: "61",
            },
        ],
    }

    const Tables = {
        table_name: "asdas66666",
        data: [
            {
                data_name: "id",
                data_type: "INT(6)",
                data_null: "",
                data_auis: "UNSIGNED",
                data_prim: "PRIMARY KEY",
                data_auin: "AUTO_INCREMENT",
            },
            {
                data_name: "test2",
                data_type: "VARCHAR(30)",
                data_null: "NOT NULL",
                data_auis: "",
                data_prim: "",
                data_auin: "",
            },
            {
                data_name: "test3",
                data_type: "VARCHAR(40)",
                data_null: "NOT NULL",
                data_auis: "",
                data_prim: "",
                data_auin: "",
            },
            {
                data_name: "test4",
                data_type: "VARCHAR(10)",
                data_null: "NOT NULL",
                data_auis: "",
                data_prim: "",
                data_auin: "",
            },
            {
                data_name: "lasad4",
                data_type: "VARCHAR(10)",
                data_null: "NOT NULL",
                data_auis: "",
                data_prim: "",
                data_auin: "",
            }
        ],


    }
    var api_url = "";
    const create_table = () => { axios.post('https://localhost/api/table/create_table.php', { data: Tables, }).then(({ data }) => { console.log(data) }); }
    return (
        <div className="grid grid-cols-12 gap-6 mt-5">
            <div className="intro-y col-span-12 lg:col-span-12">
                <Inducator InducatorData={indicator.data} InducatorTotal={indicator.total} />
            </div>
            <div className="intro-y col-span-12 lg:col-span-12">
                <Table HeadData={HeadData.data} Total={HeadData.total} BodyData={BodyData.data} BodyOp={TableSettings} />
            </div>
            <button onClick={create_table}>Create Table</button>
        </div>
    )
}

export default Dash;
