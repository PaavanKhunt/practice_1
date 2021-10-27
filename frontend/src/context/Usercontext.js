import { createContext, useState } from "react";
export const Userc = createContext();


function Usercontext(props) {
    const [user, setuser] = useState('');
    const addUser = (id) => {
        setuser(id);
        return { id };
    }
    return (
        <Userc.Provider value={{ user, addUser }}>
            {props.children}
        </Userc.Provider>
    );
}

export default Usercontext;
