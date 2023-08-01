
import { useState, useEffect } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: 'sarasa',
        email: 'sarasa@gmail.com',
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        // console.log(event.target.value); del evento puedo desestructurar el target -> y del taget, el name y el value
        const {name, value} = target
        // console.log({name,value});
        setformState({
            ...formState,
            [name]: value,
        })
    }

    useEffect(()=> {
        console.log('Email changed');
    }, [email])

    return (
        <>
            <h1>Simple Form</h1>
            <input 
                type="text" 
                className="form-control"
                placeholder="User name"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="sarasa@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

        {
            (username === 'sarasa2') && <Message/>
        }


        </>
    )
}
