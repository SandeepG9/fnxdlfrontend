import React, { useState } from 'react';
import HeadingImage from "../Assets/HeadingImage.jpeg";
import percentpatch from "../Assets/percentpatch.png";
import axios from 'axios';

const Heading = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [graduationYear, setGraduationYear] = useState('');
    const [city, setCity] = useState('');
    const [termsCondition, setTermsCondition] = useState(false);

    async function handleFormData(event) {
        event.preventDefault();

        const studentData = {
            firstName,
            lastName,
            email,
            phone,
            graduationYear,
            city,
            termsCondition,
        };

        try {
            const response = await axios.post(
                "https://finxdl.onrender.com/downloadBroucher",
                studentData
            );
            console.log("Server Response:", response.data);

            // Clear the form after successful submission
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setGraduationYear('');
            setCity('');
            setTermsCondition(false); // Reset checkbox
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    }

    return (
        <div className="relative">
            <img src={HeadingImage} alt="" className="w-full h-full object-cover" />
            <div className='absolute flex inset-0 '>
                <div className="bg-indigo-950 w-1/2">
                    <h1 className='text-white text-6xl ml-16 mb-8 mt-20'>Welcome to <span className='font-extrabold'>FBS</span></h1>
                    <h1 className='text-white text-4xl ml-16'>On Job Practical</h1>
                    <h1 className='text-yellow-300 text-7xl ml-16 font-extrabold'>MBA in Finance</h1>
                    <img src={percentpatch} alt="" />
                    <h2 className='text-white text-2xl ml-16'>
                        Designed for students and working professionals that helps develop
                        World-class, Management Business Administration in Finance acumen
                        that attracts Global opportunities.
                    </h2>
                </div>

                <div className="inset-0 bg-gradient-to-r from-indigo-950 to-transparent w-1/2">
                    <div className='bg-white mt-16 w-2/3 ml-10 p-10 opacity-75'>
                        <form action="" className='bg-white' onSubmit={handleFormData}>
                            <h2 className='text-2xl font-bold text-[#FD7335] opacity-100'>Get Program Info</h2>
                            <br />
                            <div className='flex'>
                                <div>
                                    <input onChange={(e) => setFirstName(e.target.value)} className='mr-3 border-solid border-2 border-black opacity-100 p-1 rounded pl-2' type="text" value={firstName} placeholder='First Name' />
                                    <input onChange={(e) => setLastName(e.target.value)} type="text" className='mr-3 border-solid border-2 border-black opacity-100 p-1 rounded pl-2' value={lastName} placeholder='Last Name' />
                                </div>
                            </div>

                            <input onChange={(e) => setEmail(e.target.value)} type="text" className='mb-6 mt-6 border-solid border-2 border-black opacity-100 p-1 rounded pl-2' value={email} placeholder='Email' />

                            <input onChange={(e) => setPhone(e.target.value)} type="text" className='mb-6 border-solid border-2 border-black opacity-100 p-1 rounded pl-2' value={phone} placeholder='Phone No' />

                            <input onChange={(e) => setGraduationYear(e.target.value)} type="text" className='mb-6 w-96 border-solid border-2 border-black opacity-100 p-1 rounded pl-2' value={graduationYear} placeholder='Graduation complete year' />

                            <input onChange={(e) => setCity(e.target.value)} type="text" className='border-solid border-2 border-black opacity-100 p-1 rounded pl-2' value={city} placeholder='City' />

                            <div className='mr-20 w-96 mt-6'>
                                <p> By clicking the button below, you agree to receive communications via Email/Call/WhatsApp/SMS from FBS-FINXL Business School.</p>
                            </div>

                            <div className='mt-10'>
                                <input onChange={(e) => setTermsCondition(e.target.checked)} type="checkbox" className='border-[#FD7335]' checked={termsCondition} /> I have read and agree to FBS's terms & conditions.
                            </div>

                            <div className='mt-6 ml-8'>
                                <button type="submit" className='text-white w-80 bg-[#FD7335] p-2 rounded opacity-100'>DOWNLOAD BROCHURE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Heading;
