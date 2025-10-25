import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold text-3xl text-cyan-800'>Login with</h2>
            <div className='space-y-3 mt-5'>
                <button className='py-7 rounded-2xl btn w-full text-xl font-semibold text-white btn-outline bg-pink-900'><FcGoogle size={30}/>Login with Google</button>
                <button className='py-7 rounded-2xl bg-gray-700 btn w-full text-xl font-semibold text-white btn-outline'><FaGithub size={30}/>Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;