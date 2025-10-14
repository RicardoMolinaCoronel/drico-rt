import { useState } from "react";

const Component1 = ({ user }) => {
const [name, setName] = useState("")
const [descripcion, setDescripcion] = useState("")
const [precio, setPrecio] = useState(0)


const handleName = (e) => {
    setName(e.target.value)
}
const handleDescripcion = (e) => {
    setDescripcion(e.target.value)
}
const handlePrecio = (e) => {
    setPrecio(e.target.value)
}

return (
    <div style={{display: "flex", flexDirection: "column" , gap: "10px"}}><h1>Componente 1</h1>
    <input type="text" value={name} onChange={handleName} placeholder="Name..."/>
    <input type="text" value={descripcion} onChange={handleDescripcion} placeholder="Descripcion..."/>
    <input type="number" value={precio} onChange={handlePrecio} placeholder="Precio..."/>
    <p>{user.name}</p>
    </div>
)
    
}

export default Component1
