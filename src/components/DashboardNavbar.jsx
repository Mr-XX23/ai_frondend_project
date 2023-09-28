import React from 'react'
import { useState, useRef, useEffect} from 'react';
import { logo } from '../assets';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { NavLink , Navigate, useNavigate} from 'react-router-dom';

const Dashnavbar = () => {

    let [user,setUser] = useState([]);


    let usr = JSON.parse(localStorage.getItem('userData'));
   



  return (
    <div className="flex justify-between items-center w-full mb-10 pt-[2.5rem]">
       <a href='/'> <img src={logo} alt="Logo of Sumz" className="w-28 object-contain"  /> </a>
        <Button type="button" className="black_btn">{usr?.email[0].toUpperCase() == "" ? "GUEST USER" :usr?.email[0].toUpperCase()}</Button>
  
    </div>
  )
}

export default Dashnavbar