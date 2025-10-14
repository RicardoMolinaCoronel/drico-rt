import { useMemo } from "react"

const Component3 = ({target}) => {
    const oneMillion = 1000000
   /* const value = useMemo(() => Array.from({length: oneMillion}, (_, index) => index + 1).filter((item) => {
        return item % 2 === 0
    }).reduce((acc, item) => {
        return acc + item
    }, 0), [])*/
    const value = Array.from({length: oneMillion}, (_, index) => index + 1).filter((item) => {
        return item % 2 === 0
    }).reduce((acc, item) => {
        return acc + item
    }, 0)
    return (
        <div>
            <h1>Componente 3</h1>
            <p>{target.name}</p>
            <p>{value}</p>
        </div>
    )
}

export default Component3