import React from "react";

const Item: React.FC<any> = ({id, note, date, time, deleteData, submittingStatus}) => {

    function deleteItem() {
        submittingStatus.current = true
        deleteData(function (prev: any[]) {
            return prev.filter((item: { id: any; }) => item.id !== id)
        })
    }

    return <div className="item">
        <div>
            <p>{note}</p>
            <p>{`${date} ${time}`}</p>
        </div>
        <button onClick={deleteItem} className="remove">刪除</button>
    </div>
}

export default Item