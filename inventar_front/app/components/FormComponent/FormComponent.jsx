"use client"
import InputComponent from "@/app/components/FormComponent/components/InputComponent/InputComponent";
import {useRef, useState} from "react";
import ShowComponent from "@/app/components/ShowComponent/ShowComponent";

export default function FormComponent(){
    const refSerial = useRef();
    const refName = useRef();
    const refInfo = useRef();

    const [serialValidation, setSerialValidation] = useState(1)
    const [nameValidation, setNameValidation] = useState(1)
    const [infoValidation, setInfoValidation] = useState(1)
    const [counter, setCounter] = useState(0)


    const click = () => {
        setCounter(counter + 1)
        const fetching = async () => {
            let fetchedData = {
                serial: refSerial.current.value,
                name: refName.current.value,
                info: refInfo.current.value,
            };
            await fetch('http://localhost:8000/api/test/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(fetchedData)
            });
        }

        const validation = () => {
            if(!!refSerial && refSerial.current.value.length > 2){
                setSerialValidation(3)
                console.log("test")
                fetching()
            }else{
                setSerialValidation(2)
            }
        }
        validation()
    }


    return(
        <>
            <ShowComponent render={counter}/>
            <div>
                <InputComponent type={"number"} title={"Серийник"} isValid={serialValidation} reference={refSerial}/>
                <InputComponent title={"Наименование"} isValid={nameValidation} reference={refName}/>
                <InputComponent title={"Информация"} isValid={infoValidation} reference={refInfo}/>
                <button onClick={() =>
                {
                    click()
                }
                } type={"button"}>sdfsdf</button>
            </div>
        </>
    )
}