import React,{useContext} from 'react';
import { Userc } from "../context/Usercontext";

function Listuser(props) {
    const { addUser } = useContext(Userc);
    const { udata } = props;
    const setvalue = () => {
        addUser(udata._id );
    }
    return (
      <div key={udata._id} className="d-flex flex-column border border-primary d-inline-block" onClick={setvalue} value={udata._id} >
        <p>{udata.name}</p>
        <p>{udata.email}</p>
        <br />
      </div>
    );
}

export default Listuser;
