
import { useState } from 'react';
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import Item from './Item';
function List() {
    const [modal, setModal] = useState(false); 
    const [items, setitems] = useState([]);
    const [input, setinput] = useState('');
    function savefunc(e){
        setitems(val=>[...val,input])
        setModal(false)
    }
    function deleted(val){
        setitems(
            items.filter(item => item !== val)
        )
    }
    return(
        <div>
            <div style={{ height:"100vh", display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
            <h1 style={{textAlign:"center",flex:"0"}}>To-do List</h1>
            <div style={{backgroundColor:"pink",width:"50%",flex:"2",borderRadius:"20px"}}>
                {
                    items.map((val)=><Item key={val} name={val} delete={deleted}/>)
                }
            </div>
            <div style={{flex:"0",padding:"20px"}}>
                <button onClick={()=>{
                    setModal(old=>!old)
                }} style={{width:"60px",height:"60px",fontSize:"30px",borderRadius:"50%"}}>+</button>
            </div>
        </div>
        <PureModal
        header="Add an item"
        footer={
            <div>
            <button onClick={console.log(items)}>Cancel</button>
            <button onClick={(e)=>savefunc(e)}>Save</button>
            </div>
        }
        isOpen={modal}
        //closeButton="close"
        closeButtonPosition="bottom"
        onClose={() => {
            setModal(false);
            return true;
        }}
        >
        <input placeholder='Write something' onChange={(e)=>{setinput(e.target.value)}}/>
        </PureModal>
        </div>
    )
}

export default List