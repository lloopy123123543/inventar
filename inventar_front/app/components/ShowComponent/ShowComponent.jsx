"use client"

import {useEffect, useState} from "react";

export default function ShowComponent(props){
    const {
        counter,
    } = props
    
    useEffect(() => {
        console.log(counter)
    }, [counter]);

    const [inventoryes, setInventoryes] = useState([])
    useEffect(() => {
        const gets = async () => {

            fetch(`http://localhost:8000/api/test/get`,{
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => response.json())
                .then(data => {
                    setInventoryes(data)
                })
                .catch(error => console.log('Failed: ' + error.message));
        }
        gets()
    }, [counter]);

    return(
        <div>
            {inventoryes.map((inventory) =>
                <div style={{display:"flex", gap:"5px", border:"2px solid red", padding:"2px"}}>
                    <div>{inventory.serial}</div>
                    <div>{inventory.name}</div>
                    <div>{inventory.info}</div>
                </div>
            )}


        </div>
    )
}