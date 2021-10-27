import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios';
import Listuser from './Listuser';
import { Userc } from "../context/Usercontext";
import Singleuser from './Singleuser';

function Userlist() {
    const [userdata, setuserdata] = useState('');
    const [suser, setsuser] = useState('')
    const { user } = useContext(Userc);
    let url = "http://localhost:4000/";
    let url2 = `http://localhost:4000/${user}`;
    useEffect(() => {
          axios.get(url)
              .then((response) => {
              if (response.ok) {
                  console.log('can not able to fetch data');
              }
                  return response.data;
              }).then((jsondata) => {
                  setuserdata(jsondata);
              }).catch((err) => {
                  console.log(err);
          })
    }, [url])


    useEffect(() => {
      axios
        .get(url2)
        .then((response) => {
          if (response.ok) {
            console.log("can not able to fetch data");
          }
          return response.data;
        })
        .then((jsondata) => {
          setsuser(jsondata);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [url2]);



    return (
      <div className="row">
        <div className="col-3">
          {userdata &&
            userdata.map((i) => (
              <Listuser udata={i} key={i._id} />
            ))}
        </div>
        <div className="col-9">{suser &&  <Singleuser udata={suser} />}</div>
      </div>
    );
}

export default Userlist
