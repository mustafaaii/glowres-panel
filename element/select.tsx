/* Element Select Info
/* Element Name : Select
/* Element Description : Select
/* Element Version : 0.1
*/


import { useState } from "react";


type ElementInputData = {
    id: any,
    name: string,
    class: string,
    odata: [any],
    clickfunc?: () => void,
    changefunc?: () => void,
}


export default function Select(data: any) {
    const [ElementInput] = useState<ElementInputData>({
        id: data.id,
        name: data.name,
        class: data.class,
        odata: data.odata,
        clickfunc: data.onclick,
        changefunc: data.onchange,
    });
    return (
        <>
            <select className={ElementInput.class} id={ElementInput.id} name={ElementInput.name} onClick={ElementInput.clickfunc} onChange={ElementInput.changefunc}>
                {
                    (ElementInput.odata || []).map((item) => {
                        return (<option key={item.id} value={item.value}>{item.value}</option>)
                    })
                }
            </select>
        </>
    )
}