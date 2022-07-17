/* Element Card Info
/* Element Name : Card
/* Element Description : Card
/* Element Version : 0.1
*/


import { Children, useState } from "react";

type ElementCardData = {
    id: any,
    cardclass: string,
    bodyclass: string,
    headerclass: string,
    innerheader: string,
    footerclass: string,
    innerfooter: string,
    innerbody: any,
    hoverfunc?: () => void,
}


export default function Card(data: any) {
    const [ElementCard] = useState<ElementCardData>({
        id: data.id,
        cardclass: data.cardclass,
        bodyclass: data.bodyclass,
        innerbody: data.innerbody,
        headerclass: data.headerclass,
        innerheader: data.innerheader,
        footerclass: data.footerclass,
        innerfooter: data.innerfooter,
        hoverfunc: data.onhover,
    });
    return (
        <>
            <div className={ElementCard.cardclass} onMouseOver={ElementCard.hoverfunc}>
                <div className={ElementCard.headerclass}>
                    {ElementCard.innerheader}
                </div>
                <div className={ElementCard.bodyclass}>
                    {ElementCard.innerbody}
                </div>
                <div className={ElementCard.footerclass}>
                    {ElementCard.innerfooter}
                </div>
            </div>
        </>
    )
}