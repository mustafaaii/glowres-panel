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
                    <div className="grid grid-cols-12 gap-6 mt-5">
                        <div className="intro-y col-span-12 lg:col-span-8">
                            asdasd
                        </div>
                        <div className="intro-y col-span-12 lg:col-span-4">

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Isplani