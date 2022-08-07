import React from 'react'

function List(props) {
    return (
        <>
            <div className="todo_style">
                <i className="fa-times" onClick={()=>{
                    props.onSelect(props.id)
                }}>x</i>
                <li>{props.item}</li>
            </div>
        </>
    )
}

export default List
