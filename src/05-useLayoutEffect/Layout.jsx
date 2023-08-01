import { useFetch } from "../hooks/useFetch"
import { LoadingQuotes, Quotes } from "../03-examplesMultipHooks"


export const Layout = () => {
    
    const {data, isLoading, hasError, onInput} = useFetch('https://api.api-ninjas.com/v1/quotes');
    const {author, quote} = !!data && data[0]; //!! doble negación, cuando el resultado es undefined !! esto lo convierte a false

    return (
        <>
            <h1>Quotes from famous people throughout history</h1>
            <br />
            {
                isLoading
                    ? <LoadingQuotes/>
                    : <Quotes author={author} quote={quote}/>
            }
            <button 
                className="btn btn-dark"
                onClick={onInput} 
            > Next Quote
            </button>
            
        </>
    )
}
