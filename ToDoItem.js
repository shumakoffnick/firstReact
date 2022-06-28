import React from "react";

const ToDoItem = ({da, del})=>{
    return(
        <>
        <div>{da.title}</div>
        <button onClick={()=> del(da.id)}>Нажать</button>
        </>
    )
}
export default ToDoItem