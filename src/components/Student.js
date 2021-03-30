import{useContext} from "react";
import {StudentContext} from "../context/StudentContext";
function Student() {
    const {students, dispatch} = useContext(StudentContext);
    return (
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gridGap:"10px", padding:"0px 100px"}}>
            {students.map((student)=>(
                <div className="student-card">
                    <h2>{student.name}</h2>
                    <h3>{student.level}</h3>
                    <h3>{student.date}</h3>
                    <h3>{student.indexNo}</h3>
                    <button onClick={()=>dispatch({type:"DELETE", payload:student.indexNo})}>X</button>
                </div>
            ))}
        </div>
    );
}

export default Student;
