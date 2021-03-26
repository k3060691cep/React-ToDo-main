import React, {useState, useEffect} from 'react'
import './_normalize.scss'
import './App.scss'
import {Tasks, SidebarList, Header } from './component'
import {
    useHistory,
    useLocation
} from 'react-router-dom'

import styled, {ThemeProvider} from 'styled-components'
import {dark, main} from './styles/themes/index'
import {deleteApiResource, getApiResource, postApiResource, patchApiResource} from './utils/network'
import {DATA,COLORS_DATA, LIST_DATA, TASKS_DATA} from "./constants/api"

const ContainerApp = styled.div`
  
`
const StyledWrapper = styled.div`
    background-color: ${props => props.theme.colors.background};
    box-sizing: border-box;
    display: flex;
    height: calc(100vh - 44px);
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .25)
`

function App() {
    const [lists, setLists] = useState([])
    const [colors, setColors] = useState([])
    const [activeItem, setActiveItem] = useState(null)
    const [toggleModal, setToggleModal] = useState(false)
    const [toggleTheme, setToggleTheme] = useState(false)


    let history = useHistory()
    useLocation()

    useEffect(() => {
        getApiResource(DATA, setLists)
        getApiResource(COLORS_DATA, setColors)
    }, [])

    useEffect(() => {
        const listId = history.location.pathname.split('lists/')[1];
        if (lists) {
            const list = lists.find(list => list.id === Number(listId));
            setActiveItem(list);
        }
    }, [lists, activeItem, history.location.pathname])


    const toggleModalItem = () => {
        setToggleModal(!toggleModal)
    }

    const toggleChangeTheme = () => {
        setToggleTheme(!toggleTheme)
    }

    const onAddTask = (listId, taskObj) => {
        getApiResource(DATA, setLists)
        const newList = lists.map(item => {
            if (item.tasks && item.id === listId) {
                item.tasks = [...item.tasks, taskObj];
            }
            return item;
        })
        setLists(newList)
    }

    const activeList = (item) => {

        history.push(`/lists/${item.id}`)
    }

    const postNewList = (text) => {
        let obj = {
            name: text,
            colorId: 5,
            isActive: false
        }
        postApiResource(LIST_DATA, setLists, lists, obj)
    }

    const addNewList = text => text && postNewList(text);

    const editList = (text, id) => {
        text &&
        patchApiResource(LIST_DATA ,id , text )
        const newList = lists.map((items) => {
                if(items.id === id){
                    items.name = text
                }
               return items
           })
        setLists(newList)
    }


    const onRemoveList = (id) => {
        const newList = lists.filter(item => item.id !== id)
        setLists(newList)
    }

    const onRemoveTask = (itemId) => {
        const newList = lists.map(item => {
            if (activeItem.id === item.id) {
                item.tasks = item.tasks.filter(task => task.id !== itemId)
            }
            return item
        })
        setLists(newList)
    }

    const deleteList = (item) => {
        deleteApiResource(LIST_DATA, onRemoveList, item)
    }
    const deleteTask = (item) => {
        deleteApiResource(TASKS_DATA, onRemoveTask, item)
    }

    return (
        <ThemeProvider theme={ toggleTheme ? dark : main}>
            <ContainerApp>
                <Header toggleTheme={toggleTheme} toggleChangeTheme={toggleChangeTheme}/>
                <StyledWrapper>
                    {lists && (<SidebarList
                        colors={colors}
                        toggleModalItem={toggleModalItem}
                        activeItem={activeItem}
                        list={lists}
                        addNewList={addNewList}
                        deleteList={deleteList}
                        activeList={activeList}
                        editList={editList}

                    />)}
                    {lists && activeItem && (
                        <Tasks
                            deleteTask={deleteTask}
                            activeItem={activeItem}
                            onAddTask={onAddTask}
                            list={activeItem}
                            colors={colors}
                        />


                    )
                    }

                </StyledWrapper>
            </ContainerApp>
        </ThemeProvider>
    );
}

export default App;
