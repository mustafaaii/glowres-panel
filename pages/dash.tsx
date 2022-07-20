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
        LastColumn: true,
        LastColumnName: "Test",
        Edit: {
            EditButtonStatus: true,
            EditButton: "Edit",
        },
        Delete: {
            DeleteButtonStatus: true,
            DeleteButton: "Delete",
        },
        View: {
            ViewButtonStatus: false,
            ViewButton: "View",
        },

        HeaderPositionClass: "text-center",
        HeaderTextSize: "text-center",
        BodyPositionClass: "text-center",
        BodyTextSize: "text-center",
    }

    const HeadData = {
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
        total: 8,
    }
    const BodyData = {
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
        total: 6,
    }
    return (
        <div className="grid grid-cols-12 gap-6 mt-5">
            <div className="intro-y col-span-12 lg:col-span-12">
                <Inducator InducatorData={indicator.data} InducatorTotal={indicator.total} />
            </div>
            <div className="intro-y col-span-12 lg:col-span-12">
                <Table HeadData={HeadData.data} BodyData={BodyData.data} BodyOp={TableSettings} />
            </div>
        </div>
    )
}

export default Dash;
