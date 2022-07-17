/* Element Image Info
/* Element Name : Button
/* Element Description : Button
/* Element Version : 0.1
*/


import { useState } from "react";


type ElementImageData = {
    id: any,
    alt: string,
    class: string,
    src: any,
    clickfunc?: () => void,
}


export default function Image(data: any) {
    const [ElementImage] = useState<ElementImageData>({
        id: data.id,
        alt: data.alt,
        class: data.class,
        src: data.src,
        clickfunc: data.onclick,
    });
    return (
        <>

            <img src={ElementImage.src} className={ElementImage.class} alt={ElementImage.alt} />
        </>
    )
}