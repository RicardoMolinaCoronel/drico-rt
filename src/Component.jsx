import React, { useState, useEffect } from "react";

const Component = () => {

    const [count, setCount] = useState(0);
    const [items, setItems] = useState([]);
    const [textValue, setTextValue] = useState("")
    const[todos, setTodos] = useState([
        {id: 1, title: "Todo 1", completed: false},
        {id: 2, title: "Todo 2", completed: false},
        {id: 3, title: "Todo 3", completed: false},
    ])
    

    const mockPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4, 5])
        }, 2000)

    })

    const handleTextValue = (e) => {
        setTextValue(e.target.value)
    }

    const handleClickTodo = (e) => {
        e.preventDefault()
        setTodos([...todos, {id: todos.length + 1, title: textValue, completed: false}])
        setTextValue("")
    }

    const handleCheckbox = (id) => {
        setTodos(
            todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo)
        )
    }

    const handleDeleteTodo = (id) => {
        setTodos(
            todos.filter((todo) => todo.id !== id)
        )
    }
        

    useEffect(() => {
        
        
        const obtainItems = async () => {
            try{
                const response = await mockPromise
                setItems(response)
            }catch{
                console.log("Error")
            }
        }
        obtainItems()
    
    }, [items])

    useEffect(() => {
document.title = `${count} times clicked`
    }, [count])

    return(
        <div>
            <h1>Component</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <ol>
                {items.map((item) => <li key={item}>{item}</li>)}
            </ol>
            <ul>
                {todos.map((todo) => <li key={todo.id}>
                    <input type="checkbox" 
                    checked={todo.completed}
                    onChange={() => {
                        handleCheckbox(todo.id)
                    }}
                    />
                    {todo.title}
                    <button onClick={
                        () => handleDeleteTodo(todo.id)
                    }>Delete</button>
                    </li>)}
            </ul>
            <input type="text" 
            value={textValue}
            onChange={handleTextValue}
            placeholder="Enter a todo"
            />
            <button onClick={handleClickTodo}>Add Todo</button>
        </div>
    )
}




export default Component





