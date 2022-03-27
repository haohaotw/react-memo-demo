import React, {useEffect, useRef, useState} from "react";
import Edit from "./components/Edit";
import List from "./components/List";
import './index.css'
import {API_GET_DATA} from "../../global/constants";
import {Data} from "./typing";


async function fetchData(setData: { (value: Data[]): void; (arg0: any): void; }) {
    const res = await fetch(API_GET_DATA)
    const {data} = await res.json()
    setData(data)
}

async function fetchSetData(data: Data[]) {
    await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({data})
    })
}

const HOME: React.FC = () => {

    const [data, setData] = useState<Data[]>([])
    const submittingStatus = useRef<boolean>(false)

    useEffect(() => {
        if (!submittingStatus.current) {
            return
        }

        fetchSetData(data).then(
            data => submittingStatus.current = false
        )
    }, [data])

    useEffect(() => {
        fetchData(setData).then()
    }, [])


    return (
        <div className="app">
            <Edit add={setData} submittingStatus={submittingStatus}/>
            <List listData={data} deleteData={setData} submittingStatus={submittingStatus}/>
        </div>
    );
}

export default HOME