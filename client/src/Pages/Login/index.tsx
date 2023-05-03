import React, { useRef, useState } from 'react';
import axios from 'axios';
import './index.css';


const Login: React.FC = () => {
    const [logErr, setlogErr] = useState(['', '']);
    const usernameRef = useRef<any>('');
    const passRef = useRef<any>('');

    //Login_______________________________________________________
    const bttn = () => {
        setlogErr(['', '']);
        if(usernameRef.current.value === 'root' && passRef.current.value === 'root'){
            let obj = {
                method: 'POST',
                url: 'http://localhost:4000/login',
                params: { /*this is for req.params */ },
                data: { username: 'root', pass: 'root' },
                headers: {
                    'Content-Type': 'application/json'
                },
            } as any;
    
            axios(obj).then((res: any) => {
                if(res.data.success === 'true'){
                    localStorage.setItem('_SdTok', res.data.token);
                    window.location.reload();
                }
            })
        }else{
            let str1 = '', str2 = '';
            if(usernameRef.current.value.trim().length === 0){
                str1 = 'Input field is empty.';
            }else if(usernameRef.current.value !== 'root'){
                str1 = 'The username might be wrong.';
            }

            if(passRef.current.value.trim().length === 0){
                str2 = 'Input field is empty.';
            }else if(passRef.current.value !== 'root'){
                str2 = 'The password might be wrong.';
            }

            setlogErr([str1, str2]);
        }
    }

    return (
        <>
        <div className='h-[100vh] flex justify-center items-center bg-[#1790E0]'>
            <div className='w-[400px] min-h-[200px] bg-white rounded-md p-5'>
                <p className='text-center text-[#0063A8] text-[28px] font-bold mt-5'>Login Admin</p>
                <div className='mt-10 px-4'>
                    <input type='text' ref={usernameRef} placeholder='Username' className='bg-gray-50 border-2 outline-none border-gray-300  text-sm rounded-lg block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 ' />
                    {
                        logErr[0].length > 0 ? <label className='text-[#ED2E2E] font-bold text-[13px]'>{logErr[0]}</label>:''
                    }

                    <input type='password' ref={passRef} placeholder='Password' className='mt-3 bg-gray-50 border-2 outline-none border-gray-300  text-sm rounded-lg block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 ' />
                    {
                        logErr[1].length > 0 ? <label className='text-[#ED2E2E] font-bold text-[13px]'>{logErr[1]}</label>:''
                    }

                    <button onClick={bttn}
                    className='w-full my-8 p-3 font-bold text-center bg-[#FFD700] rounded-[20px]'>Log in</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login;