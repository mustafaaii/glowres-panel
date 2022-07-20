import { NextPage } from "next";
import Header from "../module/header/header";
import Sidebar from "../module/sidebar/sidebar";
const Category: NextPage = () => {

    return (
        <>


            <Header />
            <div className="flex overflow-hidden">
                <Sidebar />
                <div className="content">
                Category
                </div>
            </div>

        </>
    )
}

export default Category;
