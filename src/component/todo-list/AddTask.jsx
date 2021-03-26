import React, {useState} from 'react'
import styled from 'styled-components'
import {postTaskApiResource} from "../../utils/network"
import {TASKS_DATA} from "../../constants/api"

const InputTask = styled.div`

`

export const AddTask = ({ activeItem, list, onAddTask}) => {
    const [textTask, setTextTask] = useState('')

    const handleChangeTask = (e) => {
        const newText = e.target.value
        setTextTask(newText)
    }

    const addTask = () => {
        const obj = {
            listId: list.id,
            text: textTask,
            completed: false
        }
        postTaskApiResource(TASKS_DATA, onAddTask, list, obj)
        setTextTask('')
    }

    return (
            <InputTask >
                <input value={textTask} onChange={handleChangeTask}  type="text"/>
                <button onClick={() => addTask(activeItem.id)}>addtask</button>
            </InputTask>
    )
}

