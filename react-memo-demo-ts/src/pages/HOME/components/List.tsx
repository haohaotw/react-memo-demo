import React from "react";
import Item from "./Item";
import {Data} from "../typing";

const List: React.FC<any> = ({listData, deleteData, submittingStatus}) => {
    return <div className="list">
        {
            listData.map((item: Data) => {
                const {note, date, time, id} = item
                return <Item
                    key={id}
                    id={id}
                    note={note}
                    date={date}
                    time={time}
                    deleteData={deleteData}
                    submittingStatus={submittingStatus}
                />
            })
        }
    </div>
}

export default List