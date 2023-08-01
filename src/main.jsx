import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp'
import { CounterApp } from './01-useState/CounterApp'
import { CounterCustomHook } from './01-useState/CounterCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormCustomHook } from './02-useEffect/FormCustomHook.jsx'
import { MultipleHooks } from './03-examplesMultipHooks/MultipleHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-memos/Memorize'
import { CallbackHook } from './07-useCallback/CallbackHook'
import { Padre } from './07-tarea-memo/07-tarea-memo/Padre'
import { TodoApp } from './08-useReducer/TodoApp'
// import "./08-useReducer/intro-reducer";

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <HooksApp /> */}
    {/* <CounterApp/> */}
    {/* <CounterCustomHook/> */}
    {/* <SimpleForm/> */}
    {/* <FormCustomHook/> */}
    {/* <MultipleHooks/> */}
    {/* <FocusScreen/> */}
    {/* <Layout/> */}
    {/* <Memorize/> */}
    {/* <CallbackHook/> */}
    {/* <Padre/> */}
    <TodoApp/>
  </>,
)
