/* Element Input Info
/* Element Name : Input
/* Element Description : Input
/* Element Version : 0.1
*/
import { useState } from "react";
type ElementInputData =
{
    id: any,
    type: string,
    name: string,
    class: string,
    value: any,
    placeholder: string,
    clickfunc?: () => void,
    changefunc?: () => void,
}
export default function Input(data: any)
{
    const [ElementInput] = useState<ElementInputData>({
        id: data.id,
        type: data.type,
        name: data.name,
        class: data.class,
        value: data.value,
        placeholder: data.placeholder,
        clickfunc: data.onclick,
        changefunc: data.onchange,
    });

    const [InputValue, setInputValue] = useState(ElementInput.value);
    const ChangeValue = (event: any) => { setInputValue(event.target.value); };

    return(
        <>
            <input
                id={ElementInput.id}
                type={ElementInput.type}
                name={ElementInput.name}
                className={ElementInput.class}
                value={InputValue || ""}
                placeholder={ElementInput.placeholder}
                onClick={ElementInput.clickfunc}
                onChange={ChangeValue}
            />
        </>
    )
}