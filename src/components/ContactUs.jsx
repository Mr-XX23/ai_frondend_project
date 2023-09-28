import React from 'react'
import { useState } from 'react';

const ContactUs = () => {

    const defaultData = {
        email: "",
        subject: "",
        message: ""
      }

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
          case 'subject':
            message = data['subject'] ? (data['subject'].length < 60 ? '' : "Subject must be less than 50 Character") : "Subject is required";
            break;
    
          case 'email':
            message = data['email'] ? (data['email'].includes('@') ? '' : "Please enter a valid email address") : "Email is required";
            break;
    
          case 'message':
            message = data['message'] ? (data['message'].length < 500 ? '' : "Message must be less than 500 characters") : "Message is required";
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


    return (
        <section>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 body_head_text text-center">Contact Us</h2>
                <p className="mb-8 lg:mb-16 desc_body text-center">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Your email</label>
                        <input type="email" id="Contact_email" name="email" className="shadow-sm bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@syno.com" required onChange={handleChange} />
                    </div>
                    <p className='text-red-500'> {error?.email}</p>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black">Subject</label>
                        <input type="text" id="subject" name="subject" className="block p-3 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required onChange={handleChange} />
                    </div>
                    <p className='text-red-500'> {error?.subject}</p>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-black">Your message</label>
                        <textarea id="message" rows="6" name="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..." onChange={handleChange}></textarea>
                    </div>
                    <p className='text-red-500'> {error?.message}</p>
                    <button type="submit" onClick={() => { formToReset.reset(); alert("Thank you for filling form.") }} className="bg-black text-white py-2 px-4 rounded-full border-black hover:bg-white hover:text-black">Send message</button>
                </form>
            </div>
        </section>
    )
}

export default ContactUs