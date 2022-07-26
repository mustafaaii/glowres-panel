
/* Element Button Info
/* Element Name : Button
/* Element Description : Button
/* Element Version : 0.1
*/
import { useState } from "react"
import Dissmiss from "../icon/dissmis"
import Infocircle from "../icon/infocircle"
export default function AlertElement(data: any) {
    const [sta, setsta] = useState(0)




    return (
        <>
            <div className={`alert alert-${data.data.stats}-soft p-2 mx-auto transition-all ease-in-out duration-400 ${sta === 0 ? "opacity-1" : "opacity-0"}`} style={{ height: "42px" }}>
                <div className="flex">
                    <div className="w-10">
                        <Infocircle class="lucide lucide-alert-circle float-left block mx-auto mr-2" />
                    </div>
                    <div className="w-full">
                        <div className="mt-1">{data.data.data}</div>
                    </div>
                    <div className="w-10 cursor-pointer" onClick={() => {  }}>
                        <Dissmiss class="float-right" />
                    </div>
                </div>
            </div>
        </>
    )
}