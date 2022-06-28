import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

const ToDo = ()=>{
    const data = [
        {
            title: "Finish essay collaboration",
            isCompleted: false,
            id: 1
        },
        {
            title: "Read next chapter of the book",
            isCompleted: false,
            id: 2
        },
        {
            title: "Send the finished assignment",
            isCompleted: false,
            id: 3
        },]

    const [st, setSt] = useState(data)
    const del = (id)=>{
        const copy = [...st]
        const current = copy.filter(t=> t.id !==id)
        setSt(current)
        console.log(current)
    }

    return(
        <>
        {data.map(d=><ToDoItem key={d.id} da={d} del={del}/>)} 
        </>
    )
}
export default ToDo