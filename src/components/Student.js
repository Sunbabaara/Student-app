import{useContext} from "react";
import {StudentContext} from "../context/StudentContext";
function Student() {
    const {students, dispatch} = useContext(StudentContext);
    return (
        <div>
            {students.map((student)=>(
                <div>
                    <h2>{student.name}</h2>
                    <h3>{student.level}</h3>
                    <h3>{student.date}</h3>
                    <button onClick={()=>dispatch({type:"DELETE", payload:student.indexNo})}>X</button>
                    </div>
            ))}
        </div>
    );
}

export default Student;
