import { useCounter } from "../hooks/UseCounter"
import { Small } from "./Small";

export const Memorize = () => {

const {counter, increment} = useCounter(10);

    return (
        <>
        <h1>Memorize</h1>
        <br />
        <h2>Counter: <Small value={counter}/> </h2>
        <button
            className="btn btn-dark mt-2"
            onClick={() => increment ()}    
        >
                +1
        </button>
        </>
    )
}
