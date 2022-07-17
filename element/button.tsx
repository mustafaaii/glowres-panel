
/* Element Button Info
/* Element Name : Button
/* Element Description : Button
/* Element Version : 0.1
*/


import { useState } from "react";


type ElementButtonData = {
    id: any,
    text: string,
    class: string,
    type: any,
    clickfunc?: () => void,
}


export default function Button(data: any) {
    const [ElementButton] = useState<ElementButtonData>({
        id: data.id,
        text: data.text,
        class: data.class,
        type: data.type,
        clickfunc: data.onclick,
    });
    return (
        <>
            <button
                onClick={ElementButton.clickfunc}
                id={ElementButton.id}
                type={ElementButton.type}
                className={ElementButton.class}>
                {ElementButton.text}
            </button>
        </>
    )
}