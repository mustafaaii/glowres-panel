import { NextPage } from "next"
import Header from "../module/header/header"
import Sidebar from "../module/sidebar/sidebar"

const Isplani: NextPage = () => {
    return (
        <>

            <Header />
            <div className="flex overflow-hidden">
                <Sidebar />
                <div className="content">
                    asdasd
                </div>
            </div>


        </>
    )
}
export default Isplani