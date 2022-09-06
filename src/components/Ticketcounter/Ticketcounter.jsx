import React from 'react';
import "./Ticketcounter.scss";

const Ticketcounter = () => {
  return (
    <div className='counter'>
        <h1 className='counter__title'>Counter</h1>
        <p className='counter__count'>0</p>
        <section className="buttons">
        <button className='plus'>+</button>
        <button className='minus'>-</button>
        </section>
    </div>
  )
}

export default Ticketcounter