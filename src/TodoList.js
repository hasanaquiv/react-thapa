import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const TodoList = () => {
    const [item, setItem] = useState('')

    const itemEvent = (event) => {
        setItem(event.target.value)
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h2>Todo List</h2>
                    <br/>
                    <input type="text" placeholder="Add Todo List" onChange={itemEvent} />
                    <br/>
                    <Button className="newBtn">
                        <AddIcon />
                    </Button>
                    <br />
                    <ol>
                        <li>{item}</li>
                    </ol>
                </div>
            </div>
        </>
    );
}

export default TodoList;
