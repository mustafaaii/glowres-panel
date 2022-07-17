import Button from "./button";
import Card from "./card";
import Image from "./image";
import Input from "./input";
import Modal from "./modal";
import Select from "./select";
import Textarea from "./textarea";

export default function ElementList() {
    function deneme(data: string) {
        console.log(data)
    }
    return (
        <>



            <Card
                cardclass=""
                bodyclass=""
                headerclass=""
                footerclass=""
                hoverfunc={() => { }}
                innerheader={
                    <>
                        Header
                    </>
                }
                innerbody={
                    <>
                        <Button
                            text={["sadasd", <div key={"Default"}>&euro;</div>]}
                            id={"thisid"}
                            type={"button"}
                            onclick={() => { }}
                            class="pt-2 btn btn-primary asdas"
                        />
                        <Image
                            src={"./vercel.svg"}
                            alt={"alt"}
                            class={"pt-2"}
                        />
                        <Input
                            id={"ElementInput.id"}
                            type={"ElementInput.type"}
                            name={"ElementInput.name"}
                            class={"ElementInput.class"}
                            value={"asdasd"}
                            placeholder={"ElementInput.placeholder"}
                            onclick={() => { }}
                            onchange={() => { }}
                        />
                        <Select
                            id={"id"}
                            name={"name"}
                            class={"class"}
                            odata={[{ id: 1, value: "test1" }, { id: 2, value: "test2" },]}
                            placeholder={""}
                            onclick={() => { }}
                            onchange={(data: any) => { deneme(data.target.value) }}
                        />
                        <Textarea
                            id={"id"}
                            name={"name"}
                            class={"class"}
                            placeholder={"ElementInput.placeholder"}
                            value={"asdasd"}
                            onclick={() => { }}
                            onchange={() => { }}
                        />
                    </>
                }
                innerfooter={
                    <>
                        Footer
                    </>
                }
            />


            <Modal
                id=""
                modalclass=""
                modalbody=""
                modalheader=""
                modalfooter=""
                innerheader=
                {
                    <>
                        Header
                    </>
                }
                innerbody=
                {
                    <>
                        Body
                    </>
                }
                innerfooter=
                {
                    <>
                    Footer
                    </>
                }
                clickfunc={() => { }}
            />



        </>
    )
}