import {createContext, useReducer} from 'react';
import StudentReducer from "../reducers/studentReducer";

const students =[{name:"Desmond", level:200, date:"12/12/12", indexNo:"KEW001"},
{name:"Jimah Adams", level:100, date:"12/03/12", indexNo:"KEW004"},
{name:"Rose Dream", level:400, date:"06/02/12", indexNo:"KEW003"},

];
export const StudentContext = createContext();

const StudentContextProvider = ({children}) => { 
    const[state, dispatch]=useReducer(StudentReducer, students)
    return (
        <StudentContext.Provider value={{students:state, dispatch}}>
        {children}
        </StudentContext.Provider>

    );
};

export default StudentContextProvider;
