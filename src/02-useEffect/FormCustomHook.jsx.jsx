

import { useForm } from "../hooks/useForm";


export const FormCustomHook = () => {

    const {onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        password: '',
        email: '',
    });


    // const {username, email, password} = formState; -> ya no es necesario, lo desestructuro en el useForm()

    return (
        <>
            <h1>Form con Custom Hook</h1>
            <input 
                type="text" 
                className="form-control"
                placeholder="User name"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="ejemplo@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <button 
                className="btn btn-primary mt-2"
                onClick={onResetForm}
            >Reset
            </button>
        


        </>
    )
}
