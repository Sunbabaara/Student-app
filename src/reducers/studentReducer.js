import React from 'react'

function studentReducer(state, action) {
    const {name, level, date, indexNo}=action.payload;
    switch (action.type){
        case "ADDSTUDENT":
        const {name, level, date, indexNo}=action.payload;
            return[...state,{name, level, date, indexNo }];
    
    case "DELETE":
            return state.filter((student)=>student.indexNo !==action.payload)
            default:
            return state;
        }
    }


export default studentReducer;
