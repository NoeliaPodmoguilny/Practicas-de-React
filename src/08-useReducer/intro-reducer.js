
//como quiero que se encuentre la app o un mod de la app...etc
const initialState = [{
    id: 1,
    todo: 'recolectar la piedra del alma',
    done: false,
}];
// action es quien va a decirle al reducer (o todoReducer) cómo quiero que cambie el estado
const todoReducer = (state = initialState, action = {}) => {

        //para regresar un nuevo estado (o modificar)
    if(action.type === '[TODO] add todo'){
        return [ ...state, action.payload ]
    }

    return state;
};
let todos = todoReducer();

//para hacer una modificacion al reducer, debemos mandarle una accion que le diga cómo modificarse
//creamos un nuevo todo, que vamos a mandar al reducer para que cambie el estado, y el nuevo estado tenga los 2 todos.
const newTodo = {
    id: 2,
    todo: 'recolectar la piedra del poder',
    done: false,
}

//las acciones lucen de la siguiente manera:
const addTodoAction = {
    type: '[TODO] add todo', //accion propieamente dicha
    payload: newTodo //lo que va dentro de la accion
}
todos = todoReducer( todos, addTodoAction)

console.log({state: todos});