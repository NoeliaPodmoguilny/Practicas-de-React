import { useLayoutEffect, useRef, useState } from "react"


export const Quotes = ({author, quote}) => {

    const parrRef = useRef();
    const [boxSize, setBoxSize] = useState({width:0, height:0})
    
    useLayoutEffect(() => {
            const {height,width} = (parrRef.current.getBoundingClientRect());
            setBoxSize({height, width})
        }, [quote])

    return (
        <>
        <blockquote className="blockquote text-end" style={{display:'flex'}}>
            <p ref={parrRef} className="mb-1">{quote}</p>
            <footer className="blockquote-footer mt-2">{author}</footer>
        </blockquote>
        <code>{JSON.stringify(boxSize)}</code>
        </>
    )
}
