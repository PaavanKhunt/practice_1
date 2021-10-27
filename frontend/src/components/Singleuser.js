import React from "react";
// import {Userc} from "../context/Usercontext"

function Singleuser(props) {
  // const { addUser } = useContext(Userc);
  const { udata } = props;
  return (
    <div>
     <p>name: {udata.name}</p>
      <p>email: {udata.email}</p>
      <p>city: {udata.city}</p>
    </div>
  );
}

export default Singleuser;
