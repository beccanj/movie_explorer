import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';



const SignUpPage = () => {
    const location = useLocation();

    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        localStorage.setItem('token', 'dummy');
        navigate('/');
    };
    return (
        <>
            <div className='flex flex-row justify-between items-center p-12 font-["Inter"] gap-6'>
                <div className="w-full max-w-[302px] max-h-[528px]  items-center justify-between">
                    <div className='flex flex-row items-center justify-center w-full text-center '>
                        <h2 className='text-[54px] font-semibold text-white  '>Welcome</h2>

                    </div>

                    <div className='flex flex-row items-center justify-between w-full px-12 py-4 mb-4 text-white'>
                        <Link
                            to="/login"
                            className={`text-[24px] transition-all hover:underline underline-offset-4 ${location.pathname === '/login'
                                ? 'text-cyan-500 font-bold border-b-2 border-cyan-500'
                                : 'text-white'
                                }`}
                        >
                            LOGIN
                        </Link>
                        <Link
                            to="/signup"
                            className={`text-[24px] transition-all hover:underline underline-offset-4 ${location.pathname === '/signup'
                                ? 'text-cyan-500 font-bold border-b-2 border-cyan-500'
                                : 'text-white'
                                }`}
                        >
                            SIGN UP
                        </Link>

                    </div>
                    <form onSubmit={handleSignup}>
                        <div className='flex flex-col items-center gap-6 justify-between mt-4 '>
                            <input className='w-[278px] h-[58px] border rounded-sm p-4 text-white ' type="text" placeholder='Full Name' />
                            <input className='w-[278px] h-[58px] border rounded-sm p-4 text-white' value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
                            <input className='w-[278px] h-[58px] border rounded-sm p-4 text-white' type="password" placeholder="Password" />
                            <input className='w-[278px] h-[58px] border rounded-sm p-4 text-white' type="password" placeholder="Confirm Password" />
                            <p className='text-center text-white'>
                                Have an account?{' '}
                                <Link to="/login" className='text-cyan-500 hover:underline'>
                                    Login
                                </Link>
                            </p>

                            <button type="submit" className='rounded-sm bg-[#228EE5] w-[160px] h-[48px] text-white hover:bg-cyan-500 transition-colors'>SIGN UP</button>

                        </div>

                    </form>
                </div>

                <div className=' w-[773.09px] h-[428px] mx-auto items-center justify-between flex mr-[15px] mt-12   '>
                    <img className='w-[773.09px] h-[528px] bg-cover bg-center rounded-sm' src="/movie_poster.jpg" alt="" />

                </div>
            </div>


        </>




    )
}

export default SignUpPage
