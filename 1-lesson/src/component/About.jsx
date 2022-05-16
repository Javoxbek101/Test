import React, { useState } from 'react'

const About = (props) => {

  const [name, setName] = useState("Ismingizni kiriting");

function bos(){
  setName("../audio/Sami Yusuf - ALLAHU ALLA.mp3");
}


  return (
    <div className='text'>
      <h1> {name} </h1>
      <button onClick={bos}>Click</button>
      <p align="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam illum commodi corporis earum atque cum ad dolore necessitatibus ipsam. Cum, dolore repudiandae? Quod temporibus porro voluptate, tempore enim eligendi molestiae!</p>
    </div>
  )
}

export default About