import React,{ useState} from 'react'
import './App.css'
function Sweet(){
    
    let [inp,updateinp]=useState('')
    let [todolist,updatetodo] = useState(
                                     [
                                        {
                                        id:1,
                                        task:"learning React"
                                        },
                                        {
                                            id:2,
                                            task:"learning Angular"
                                        }
                                     ]
                                    )
           
    function cretaenewtodo(){
        if(inp===''){
            alert("Please Add Task....!")
        }
        else{
            let newtodos=[
                ...todolist,
                {
                    id:Date.now(),
                    task:inp
                }
            ]
            updatetodo(newtodos)
            updateinp('')
        }
    }
            function deletetodo(id)
            {
                
                let up1 = todolist.filter(todo => todo.id !== id);
                updatetodo(up1)
            }

    return(
        <><div style={{ 
            width: '360px', 
            padding: '15px 5px', // Reduced padding for top and bottom
            backgroundColor: 'lightgray', 
            border: '2px solid black',
            borderRadius: '8px',
            margin: '0 auto', // to center horizontally
            marginTop: '50px'
        }}>
            <h3 style={{textAlign: 'center', color: 'blue'}}>Todo App Using React</h3>
        </div>
        <div className='container mt=5 w-50'>
            <div className='input-group'>
                <input className='form-control mt-5' type="text" onChange={(e)=>{
                    let task=e.target.value;
                    updateinp(task)
                }} value={inp}/>
                <button onClick={()=>{
                    cretaenewtodo()
                }} className='btn-btn-primary mt-5' style={{background:'green',color:"white",border:'none'}}>
                    Add
                </button>
            </div>
            <ul className='list-group'>
                {
                    todolist.map(
                        (todo)=>{
                            return (
                                <li className='list-group-item mt-4' >
                                <p>{todo.task}</p>
                                <button onClick={()=>
                                    {
                                        deletetodo(todo.id)
                                    }
                                    }>❌</button>
                                </li>
                            )
                        }
                    )
                }

               
                    
               
            </ul>
        </div>
        </>
    )
}
export default Sweet;
