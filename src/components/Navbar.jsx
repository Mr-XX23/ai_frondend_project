import React from 'react'
import { useState, useRef, useEffect } from 'react';
import { logo } from '../assets';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate();
  const defaultData = {
    email: "",
    password: ""
  }

  const [openModal, setOpenModal] = useState();
  const [opensignUPModal, setOpensignUPModal] = useState();
  const emailInputRef = useRef(null);
  const props = { openModal, setOpenModal, emailInputRef };
  const props1 = { opensignUPModal, setOpensignUPModal, emailInputRef };
  let [data, setData] = useState(defaultData);
  let [error, setError] = useState(defaultData);



  const handleChange = (event) => {
    const { type, name, value } = event.target;
    setData((prevData) => {
      data = {
        ...prevData,
        [name]: value
      }
      validateForm(name);
      return data;
    })
  }


  const validateForm = (fields) => {
    let message = "";

    switch (fields) {
      case 'username':
        message = data['username'] ? (data['username'].length > 5 ? '' : "Username must be 5 Character") : "Username is required";
        break;

      case 'email':
        message = data['email'] ? (data['email'].includes('@') ? '' : "Please enter a valid email address") : "Email is required";
        break;

      case 'password':
        message = data['password'] ? (data['password'].length > 8 ? '' : "Password must be at least 8 characters") : "Password is required";
        break;
    }

    setError((preState) => {
      error = {
        ...preState,
        [fields]: message
      }
      return error
    })

  }


  const SubmitForm = (event) => {
    event.preventDefault();

    let userData = {
      email: data['email'].split('@'),
      password: data['password']
    }
    localStorage.setItem('userData', JSON.stringify(userData));

    navigate('/dashboard');
  }


  const SubmitSignUpForm = (event) => {
    event.preventDefault();
    document.location.href="/";
    alert("Sign Up Successfully");
  }

  return (
    <div className="flex justify-between items-center w-full mb-10 pt-[2.5rem]">
      <a href='/'> <img src={logo} alt="Logo of Sumz" className="w-28 object-contain" /> </a>
      <Button type="button" onClick={() => props.setOpenModal('initial-focus')} className="black_btn">Log In / Sign Up</Button>
      <Modal
        show={props.openModal === 'initial-focus'}
        size="md"
        popup
        onClose={() => props.setOpenModal(undefined)}
        initialFocus={props.emailInputRef}
        className="z-10 bg-black bg-opacity-50"
      >
        <Modal.Header />
        <Modal.Body>

          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput id="email" name="email" placeholder="name@company.com" onChange={handleChange} required />
            </div>
            <p className='text-red-500'> {error?.email}</p>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" name="password" type="password" onChange={handleChange} required />
            </div>
            <p className='text-red-500'> {error?.password}</p>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a href="/modal" className="text-sm text-indigo-600 hover:underline dark:text-cyan-500">
                Lost Password?
              </a>
            </div>
            <div className="w-full">

              <Button className="login_btn border-none" onClick={SubmitForm}>Log in to your account
              </Button>
            </div>
          </div>
          <div className="flex justify-between text-sm font-medium text-gray-500 mt-5">
            Not registered?&nbsp;


            <Button className="button_text border-none text-indigo-600" onClick={() => props1.setOpensignUPModal('initial-focus')}>
              Create account
            </Button>
            <Modal
              show={props1.opensignUPModal === 'initial-focus'}
              size="lg"
              popup
              onClose={() => props1.setOpensignUPModal(undefined)}
              initialFocus={props1.emailInputRef}
              className="z-10 bg-black bg-opacity-50"
            >
              <Modal.Header />
              <Modal.Body>
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">Sign Up to our platform</h3>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="text" value="Username" />
                    </div>
                    <TextInput id="username" name="username" placeholder="Enter the Username" onChange={handleChange} required />
                  </div>
                  <p className='text-red-500'> {error?.username}</p>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email" value="Email" />
                    </div>
                    <TextInput id="sign_up_email" name="email" type="email" placeholder="name@syno.com" onChange={handleChange} required />
                  </div>
                  <p className='text-red-500'> {error?.email}</p>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="password" value="Your password" />
                    </div>
                    <TextInput id="Sign_up_password" name="password" type="password" onChange={handleChange} required />
                  </div>
                  <p className='text-red-500'> {error?.password}</p>
                  <Button className="login_btn border-none" onClick={SubmitSignUpForm}>Sign Up to Go</Button>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Navbar