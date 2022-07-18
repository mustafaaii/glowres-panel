import { NextPage } from "next"
import Header from "../module/header/header"
import Sidebar from "../module/sidebar/sidebar"

const Checkin: NextPage = () => {
    return (
        <>

            <Header />
            <div className="flex overflow-hidden">
                <Sidebar />
                <div className="content">
                    Checkin
                </div>
            </div>


        </>
    )
}
export default Checkin