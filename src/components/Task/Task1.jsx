import React, { useState } from 'react'
import { useEffect } from 'react';

export default function Task1() {

    const apifetch = "https://jsonplaceholder.typicode.com/todos";
    const[data,setData] = useState([]);
    useEffect (() => {
        fetch(apifetch)
        .then((res) =>res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => console.log(err));
    } ,[]);

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) =>(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.completed ? "Done" : "Pending"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
