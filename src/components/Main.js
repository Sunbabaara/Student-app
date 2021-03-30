import {useState} from 'react'
import AddStudent from "./AddStudent"
import NavBar from "./NavBar"

function Main() {
    const [ show, setShow] = useState(false)

    const toggle =() =>{
        setShow(!show)
    }
    return (
        <>
    <NavBar show={show} toggle={toggle}/>
        <main style={{ display:"flex", justifyContent:"center", width:"100%",}}>
            
            {show && <AddStudent/>}
        </main></>
    )
}

export default Main;
