import { useEffect } from "react"


export const Message = () => {
    
    useEffect(() => {
        console.log('message mounted o montado, renderizado');
    
        return () => {
            console.log('message desmontado');
        }
    }, [])
    

    return (
        <>
            <h4>Usuario ya existe!</h4>
        </>
    )
}
