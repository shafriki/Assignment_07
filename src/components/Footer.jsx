import React from 'react';

const Footer = () => {
    return (
        <div className='mt-80 relative'>

            <div className='flex justify-center items-center border-2 border-gray-300 absolute bottom-[30rem] md:bottom-56 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 rounded-2xl w-[20rem] md:w-[60rem]'>

            <div className='bg-cover bg-white bg-no-repeat rounded-3xl w-full max-w-[60rem] h-auto flex flex-col items-center justify-center text-center shadow-lg p-6 md:p-8'
                style={{ backgroundImage: 'url(https://i.ibb.co/3dYtDg2/bg-shadow.png)', backgroundPosition: 'center' }}>
                
                <h2 className='text-lg md:text-2xl font-semibold text-gray-900 mb-2'>
                    Subscribe to our Newsletter</h2>
                
                <p className='text-sm md:text-base text-gray-500 mb-4'>
                    Get the latest updates and news right in your inbox!</p>

                <div className='flex flex-col md:flex-row justify-center items-center w-full gap-2'>
                    <input type='email' placeholder='Enter your email' className='border border-gray-300 p-3 w-full md:w-80 mb-3 md:mb-0 rounded-xl md:rounded-xl  focus:outline-none' />
                    <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold py-3 px-6 w-full md:w-auto rounded-xl md:rounded-xl hover:opacity-90'>
                        Subscribe
                    </button>
                </div>
            </div>

        </div>


        <div className='flex flex-col items-center bg-[#06091A]'>
            <img src="https://i.ibb.co/s9fV0VP/logo.png" alt="" className='mt-36'/>
            
            {/* text */}
            <div className='text-white flex flex-col md:flex-row gap-5 md:gap-40 mt-3 px-3 md:px-0'>
                <div className='flex flex-col'>
                    <p className='font-bold'>About Us</p>
                    <p className='md:w-2/4 text-gray-400'>We are a passionate team dedicated to providing the best services to our customers.</p>
                </div>

                <div className='flex flex-col'>
                    <h1 className='font-bold'>Quick Links</h1>
                    <ul className='list-disc ml-5 text-gray-400'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>

                </div>
                <div className='flex flex-col'>
                    <p className='font-bold'>Subscribe</p>
                    <p className='md:w-2/4 mb-3 text-gray-400'>Subscribe to our newsletter for the latest updates.</p>
                    
                    <div className='flex flex-col md:flex-row justify-center items-center w-full'>
                    <input type='email' placeholder='Enter your email' className='border border-gray-300 rounded-full p-3 w-full md:w-80 mb-3 md:mb-0 md:rounded-r-xl focus:outline-none text-black' />
                    <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold py-3 px-6 w-full md:w-auto rounded-full md:rounded-l-xl hover:opacity-90'>
                        Subscribe
                    </button>
                </div>
                </div>
            </div>
            
            <div className='w-full border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-400'>
                <p>© 2024 Your Company. All rights reserved. SHAFRIKI</p>
    </div>
        </div>
    </div>
    );
};

export default Footer;