import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import useAlert from "../Assets/Hooks/useAlert"
import Alert from '../Components/Alert';

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
        <section className='relative w-[70%] xl:w-[50%] mx-auto flex lg:flex-row flex-col max-container h-[650px] '>
            {alert.show && <Alert {...alert}/>}
            <div className='flex-1 min-w-[50%] flex flex-col'>
                <h1 className='text-xl lg:text-3xl mt-10 font-semibold dark:text-white'>Contact Us and Let's Make a Project!</h1>
                <form className='w-full flex flex-col gap-7 mt-14 ' onSubmit={handleSubmit}>
                    <label className='text-black-500 font-semibold dark:text-white'>
                        Name
                        <input type="text" name='name' className='input' placeholder='john' required value={form.name} onChange={handleChange} />
                    </label>
                    <label className='text-black-500 font-semibold dark:text-white'>
                        Email
                        <input type="email" name='email' className='input' placeholder='john@gmail.com' required value={form.email} onChange={handleChange} />
                    </label>
                    <label className='text-black-500 font-semibold dark:text-white'>
                        Your Message
                        <textarea name='message' rows={4} className='textarea' placeholder='Let me know how I can help you!' required value={form.message} onChange={handleChange} />
                    </label>
                    <button type='submit'
                    className='btn'
                    disabled={isLoading}>
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ContactPage
