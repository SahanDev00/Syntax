import React, { Suspense, useState } from 'react'
import emailjs from 'emailjs-com';
import useAlert from "../Assets/Hooks/useAlert"
import Alert from '../Components/Alert';
import { Canvas } from '@react-three/fiber';
import {  Environment, Html } from '@react-three/drei';
import AiHead from '../Components/AiHead';
import head from "../Assets/head.glb"
import { Helmet } from 'react-helmet';

const ContactPage = () => {
    
    const [form, setForm] = useState({ name: '', email: '', message: ''})
    const [isLoading, setIsLoading] = useState(false);

    const {alert, showAlert, hideAlert} = useAlert();

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: 'Sahan',
                from_email: form.email,
                to_email: 'Dumidus86@gmail.com',
                message: form.message
            },
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);
            showAlert({show: true, text: 'Meassage sent successfully!', type: 'success'})

            setTimeout(() => {
                hideAlert();
                setForm({ name: '', email: '', message: ''});
            },[3000])
            
        }).catch((error) => {
            setIsLoading(false);
            console.log(error);
            showAlert({show: true, text: "I didn't recieve your message!", type: 'danger'})
        })
    };

    return (
        <section className='relative w-[70%] xl:w-[80%] mx-auto flex lg:flex-row flex-col max-container h-[650px] xl:grid xl:grid-cols-2 '>
        <Helmet>
          <title>SyntaxWare Solutions | Contact Us | Best software company in Sri Lanka, Kurunegala, Colombo.</title>

            {/* Meta Description for Search Engines */}
            <meta name="description" content="SyntaxWare Solutions is the best software company in Sri Lanka, specializing in 3d website development, 3d web development, POS systems, payroll systems, and custom software solutions. Serving Kurunegala, Colombo, and beyond. Using cutting edge technologies. React.JS , Tailwind.CSS , 3d websites, three.js, MERN stack, Web api." />

            {/* Keywords for SEO */}
            <meta name="keywords" content="Syntaxware Solutions, Syntaxware, Syntaxware company, Syntaware software, syntaxware website, best software company in Sri Lanka, Kurunegala software company, Colombo software company, POS systems Sri Lanka, payroll systems Sri Lanka, custom software solutions Sri Lanka, web development company, web development companies in sri lanka, website development companies in sri lanka, website development companies in kurunegala, website development companies in sri lanka, 3d website. MERN stack company." />
        </Helmet>
            <div className=" justify-center items-center h-[700px] mt-4 mx-auto hidden xl:flex">
                <Canvas className='dark:opacity-70'>
                    <ambientLight intensity={0.05} />
                    <pointLight position={[8, 8, 8]} />
                    <Suspense fallback={<Html center>Loading...</Html>}>
                        {/* Use the Model component with the path to your GLB model */}
                        <AiHead modelPath={head}  />
                        <Environment preset="warehouse" />
                    </Suspense>
                </Canvas>
            </div>
            {alert.show && <Alert {...alert}/>}
            <div className='flex-1 min-w-[50%] flex flex-col mt-10'>
                <h1 className='text-xl lg:text-3xl mt-10 font-semibold text-white font-poppins'>Contact Syntaxware and Let's Make a Project!</h1>
                <form className='w-full flex flex-col gap-7 mt-14 font-poppins' onSubmit={handleSubmit}>
                    <label className='text-black-500 font-semibold dark:text-gray-200 text-white'>
                        Name
                        <input type="text" name='name' className='input' placeholder='john' required value={form.name} onChange={handleChange} />
                    </label>
                    <label className='text-black-500 font-semibold dark:text-gray-200 text-white'>
                        Email
                        <input type="email" name='email' className='input' placeholder='john@gmail.com' required value={form.email} onChange={handleChange} />
                    </label>
                    <label className='text-black-500 font-semibold dark:text-gray-200 text-white'>
                        Your Message
                        <textarea name='message' rows={4} className='textarea' placeholder='Let me know how I can help you!' required value={form.message} onChange={handleChange} />
                    </label>
                    <button type='submit'
                    className='btn dark:bg-gradient-to-r dark:to-[#3F0071] dark:from-[#9400FF]' 
                    disabled={isLoading}>
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ContactPage
