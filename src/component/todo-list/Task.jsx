import React from 'react';
import styled from 'styled-components'

const StyledTask = styled.label`
margin: 8px 0;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`
const StyledDeleteButton = styled.button`
  cursor: pointer;
`
const StyledTaskText = styled.div`
 
    padding: 0 8px 0 8px;
    
    color: ${props => props.theme.colors.text};
    flex-grow: 1;
`

const Input = styled.input`
 cursor: pointer;
`

export const Task = ({task,deleteTask}) => {
    return (
        <StyledTask key={task.id}>
            <Input type="checkbox"/>
            <StyledTaskText>{task.text}</StyledTaskText>
            <StyledDeleteButton onClick={() => deleteTask(task)}>delete</StyledDeleteButton>
        </StyledTask>
    )
}

