import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ComA() {
    const [num, setNum] = useState(1)
    const [name, setName] = useState(1)
    const [moves, setMoves] = useState(1)
    // const select = (e)=>{
    //     return(
    //         setNum(e.target.value)
    //     )
    // }
    useEffect(() => {
        async function getData(){
            const res = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${num}`
                );

            console.log(res.data.name)

            setName(res.data.name)
            setMoves(res.data.moves.length)
        }

        getData();
    })
    return (
        <>
            <p>You have choose {num}</p>
            <p>You have choose {name}</p>
            <p>You have choose {moves}</p>
            <select value={num} onChange={(e) => {
                return (
                    setNum(e.target.value)
                )
            }}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </>
    )
}

export default ComA
