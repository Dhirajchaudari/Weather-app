import React, {useRef} from 'react';
import emailjs from '@emailjs/browser'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// import contact data
import {contact} from '../data';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_dstqk1d', 'template_qb9schh', form.current, '8WaoLz7oIoZl_vloZ')
          .then((result) => {
              console.log(result.text);
              toast('💌 Email sent successfully!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
          }, (error) => {
              console.log(error.text);
              console.log(error)
              toast(error, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
          });
      };
    


  return (
    <section id='contact' className='section bg-primary'>
        <div className="container mx-auto">
            {/* section title */}
            <div className="flex flex-col items-center text-center">
                <h2 className='relative section-title before:content-contact before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>Contact Me</h2>
                <p className='text-gray-500 subtitle'>Thank you for visiting my portfolio! 😊 I'm thrilled to connect with fellow enthusiasts, potential collaborators, and curious minds. Whether you're interested in discussing a project 🚀, sharing insights 💡, or simply want to say hello 👋, I'd love to hear from you. Feel free to reach out using the form below. Let's embark on a journey of creativity 🎨 and knowledge 📚 together!</p>
            </div>

            <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
                {/* info */}
                <div className='flex flex-col items-start flex-1 mb-12 space-y-8 lg:mb-0 lg:pt-2'>
                    {contact.map(( item, index) => {
                        const {icon, title, subtitle, description} = item;
                        return <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                            <div className='flex items-start justify-center mt-2 mb-4 text-2xl rounded-sm text-accent w-14 h-14 lg:mb-0'>{icon}</div>
                            <div>
                                <h4 className='mb-1 text-xl font-body'>{title}</h4>
                                <p className='mb-1'>{subtitle}</p>
                                <p className='font-normal text-accent'>{description}</p>
                            </div>
                        </div>
                    })}
                </div>

                {/* form  */}
                <form className='space-y-8 w-full max-w-[780px]' ref={form} onSubmit={sendEmail} >
                    <div className='flex gap-8'>
                        <input className='input' type="text" placeholder='Your name' name='user_name' />
                        <input className='input'  type="email" placeholder='Your email' name='user_email' />
                    </div>
                    <input type="text" className="input" placeholder='subject' name="user_subject"/>
                    <textarea className='textarea' placeholder='Your message' name='message'></textarea>
                    <button className='btn btn-lg bg-accent hover:bg-accent-hover' type='submit' value="send">Send message</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact