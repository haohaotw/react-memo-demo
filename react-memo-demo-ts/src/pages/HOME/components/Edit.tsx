import React, {useState} from "react";
// @ts-ignore
import {v4} from 'uuid'
import {Data} from "../typing";

const Edit: React.FC<any> = ({add, submittingStatus}) => {

    const [note, setNote] = useState<string>("")
    const [date, setDate] = useState<string>("")
    const [time, setTime] = useState<string>("")

    function noteChange(e: { target: { value: React.SetStateAction<string>; }; }) {
        setNote(e.target.value)
    }

    function dateChange(e: { target: { value: React.SetStateAction<string>; }; }) {
        setDate(e.target.value)
    }

    function timeChange(e: { target: { value: React.SetStateAction<string>; }; }) {
        setTime(e.target.value)
    }


    function addItem() {
        submittingStatus.current = true
        add(function (prevData: Data[]) {
            return [
                {
                    id: v4(),
                    note,
                    date,
                    time
                },
                ...prevData
            ]
        })
    }

    return (
        <div>
            <h1>備忘錄</h1>
            <p>記事:</p>
            <input type="text" value={note} onChange={noteChange}/>
            <p>日期:</p>
            <input type="date" value={date} onChange={dateChange}/>
            <p>時間:</p>
            <input type="time" value={time} onChange={timeChange}/>
            <button onClick={addItem} className="add">新增</button>
        </div>
    );
}

export default Edit