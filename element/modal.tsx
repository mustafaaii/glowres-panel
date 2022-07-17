/* Element Modal Info
/* Element Name : Modal
/* Element Description : Modal
/* Element Version : 0.1
*/
import { useState } from "react";
type ElementModalData = {
    id: any,
    modalclass: string,
    modalbody: string,
    modalheader: string,
    modalfooter: string,
    innerheader: any,
    innerbody: any,
    innerfooter: any,
    clickfunc?: () => void,
}
export default function Modal(data: any) {
    const [ElementModal] = useState<ElementModalData>({
        id: data.id,
        modalclass: data.modalclass,
        modalbody: data.modalbody,
        modalheader: data.modalheader,
        modalfooter: data.modalfooter,
        innerheader: data.innerheader,
        innerbody: data.innerbody,
        innerfooter: data.innerfooter,
        clickfunc: data.onclick,
    });

    const [Modal, setmodal] = useState(0)
    ElementModal.clickfunc = () => { setmodal(1); }

    return (
        <>
            <div className={`${ElementModal.modalclass} ${Modal === 0 ? "hidden" : "show"}`}>
                <div className={ElementModal.modalheader}>
                    {ElementModal.innerheader}
                </div>
                <div className={ElementModal.modalbody}>
                    {ElementModal.innerbody}
                </div>
                <div className={ElementModal.modalfooter}>
                    {ElementModal.innerfooter}
                </div>
            </div>
        </>
    )
}