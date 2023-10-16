import {FaTrash} from 'react-icons/fa';
function Item(props){
    return(

        <div style={{display:"flex",width:"100%",justifyContent:"space-between",paddingRight:"20px",paddingLeft:"20px"}}>
          
            <h2>{props.name}</h2>
            <FaTrash style={{height:"70px",justifyContent:"flex-end"}} onClick={(e)=>props.delete(props.name)} />
        </div>
    )
}
export default Item