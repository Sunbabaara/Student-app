import {createContext, useReducer} from 'react';
import StudentReducer from "../reducers/studentReducer";


export const StudentContext = createContext();

const StudentContextProvider = ({children}) => { 
    const[state, dispatch]=useReducer(StudentReducer, [])
    return (
        <StudentContext.Provider value={{students:state, dispatch}}>
        {children}
        </StudentContext.Provider>

    );
};

export default StudentContextProvider;
