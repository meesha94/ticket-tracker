import React from 'react'
import "./Ticketcard.scss"
import Ticketcounter from '../Ticketcounter/Ticketcounter';


const Ticketcard = (props) => {
const {name, role} = props;


  return (
    <>
    <div className="information">
        <h1 className='name' >{name}</h1>
        <h2 className='role' >{role}</h2>
    </div>
    <Ticketcounter/>
    </>
  );
};


export default Ticketcard