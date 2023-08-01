import { TodoList, AddTodos } from "./";
import { useTodo } from "../hooks";

export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodo();

    return (
        <>
            <h1>TodoApp: {todosCount}, <small>pendientes: {pendingTodosCount}</small></h1>
            <hr />
                <div className="row">
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                    <AddTodos onNewTodo={handleNewTodo}/>
                </div>
        </>
    )
}
