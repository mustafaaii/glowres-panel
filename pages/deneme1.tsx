import { NextPage } from "next"
import Header from "../module/header/header"
import Sidebar from "../module/sidebar/sidebar"

const Deneme1: NextPage = () => {
    return (
        <>

            <Header />
            <div className="flex overflow-hidden">
                <Sidebar />
                <div className="content">
                Deneme1
                </div>
            </div>


        </>
    )
}
export default Deneme1