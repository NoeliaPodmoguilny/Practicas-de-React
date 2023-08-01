import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef()
    
    
    const onFocus = () => {
        inputRef.current.select();
    }


    return (
        <>
        <h1>useRef Focus Screen</h1>
        <br />

        <input 
                ref={inputRef}
                type="email" 
                className="form-control mt-2"
                placeholder="focus screen"
        />
        <button className="btn btn-primary mt-2"
                onClick={onFocus}
        >
            Set Focus
        </button>


        </>
    )
}
