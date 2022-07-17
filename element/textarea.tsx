/* Element Textarea Info
/* Element Name : Textarea
/* Element Description : Textarea
/* Element Version : 0.1
*/


import { useState } from "react";


type ElementTextareaData = {
    id: any,
    name: string,
    class: string,
    value: any,
    placeholder: string,
    clickfunc?: () => void,
    changefunc?: () => void,
}


export default function Textarea(data: any) {
    const [ElementTextarea] = useState<ElementTextareaData>({
        id: data.id,
        name: data.name,
        class: data.class,
        value: data.value,
        placeholder: data.placeholder,
        clickfunc: data.onclick,
        changefunc: data.onchange,
    });


    const [TextareaValue, setTextareaValue] = useState(ElementTextarea.value);
    const ChangeValue = (event: any) => { setTextareaValue(event.target.value); };

    return (
        <>
            <textarea
                id={ElementTextarea.id}
                name={ElementTextarea.name}
                className={ElementTextarea.class}
                placeholder={ElementTextarea.placeholder}
                value={TextareaValue}
                onClick={ElementTextarea.clickfunc}
                onChange={ChangeValue}
            >

            </textarea>
        </>
    )
}