import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Api.css'
const Api = () => {
    const [num,setNum] = useState();
    const [nameOf,setName] = useState();
    const [moveOf,setMove] = useState();
    const getNum = (event) => {
            setNum(event.target.value);
    }
    useEffect(() => {
    async function getData(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
        setName(res.data.name);
        setMove(res.data.moves.length);
    }
    getData();
    });
    return(
        <>
        <div id='main'>
            <h1>You Have Selected : <span>{num}</span></h1>
            <input type='number' name='number' value={num} onChange={getNum}/>
           {
               /* <select onChange={getNum}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
            */
            }
            <h3>Name : <span>{nameOf}</span></h3>
            <h3>Moves : <span>{moveOf}</span></h3>
        </div>
        </>
    )
}
export default Api;