import React from 'react'
import styled from 'styled-components'

import {Task, AddTask } from  '../index'

const StyledTaskList = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 16px 180px;
  margin: 0 auto;
  position: relative;
  background-color: ${props => props.selectedColor.hex };
  color: ${props => props.theme.colors.text};
`

export const Tasks = ({activeItem, list, onAddTask, deleteTask, colors}) => {
    let colorId = activeItem.colorId
    let selectedColor =  colors[colorId -1 ]

    let task = list.tasks

    return (
        <StyledTaskList selectedColor={selectedColor} >
            <div>
                <h1>{list.name}</h1>
            </div>
            {task && list && (
                list.tasks.map(task => (
                    <Task key={task.id}
                          deleteTask={deleteTask}
                          task={task}
                    />
                ))
            )
            }
            <AddTask
                activeItem={activeItem}
                list={list}
                onAddTask={onAddTask}
            />
        </StyledTaskList>
    )
}

