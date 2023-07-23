import React, { useEffect, useState, useRef } from 'react';
import BreadCrumbs from '../../Components/Breadcrumbs';
import axios from 'axios';

const AdminAccount = () => {
    const passStrength = [['Worst', '#FF2323', 20], ['Bad', '#FF4A4A', 40], ['Weak', '#D75601', 60], ['Not Strong', '#FACA51', 80], ['Strong', '#3F8F00', 100]];
    const [numSetStrength, setNumSetStrength] = useState(0);
    const [acc, setAcc] = useState({ username: '', password: '' });
    
    const currentPassRef = useRef<any>(''); 
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        
        const getAcc = async () => {
            try{

                let obj = {
                    method: 'POST',
                    url: 'https://directory-admin-server.vercel.app/getAccount',
                    params: {},
                    data: {},
                    headers: {
                        'Content-type': 'application/json'
                    }
                }

                const { data } = await axios(obj);

                setAcc({ username: data.data.username, password: data.data.password });
            }catch(e){
                window.location.reload();
            }
        }

        getAcc();

    }, [])

    const newPassFunc = (e: any) => {
        setNewPassword(e.target.value.toString());

        let lengthD = e.target.value.toString().length > 7 ? 1:0;

        let arrStrength = [/[A-Z]/.test(e.target.value.toString()), /[a-z]/.test(e.target.value.toString()), /\d/.test(e.target.value.toString()),
            /[^a-zA-Z0-9]/.test(e.target.value.toString())]

        let countStrength = arrStrength.filter(a => a);
        setNumSetStrength(countStrength.length+lengthD === 5 ? 4:countStrength.length+lengthD);
    }

    const bttnChangePassword = async () => {
        let currentPass = currentPassRef.current.value;
        if(currentPass.trim().length > 0){
            if(numSetStrength === 4){
                if(currentPass === acc.password){
                    
                    if(newPassword !== acc.password){
                        try{
                        
                            let obj = {
                                method: 'POST',
                                url: 'https://directory-admin-server.vercel.app/updateAccount',
                                params: {},
                                data: { password: newPassword },
                                headers: {
                                    'Content-type': 'application/json'
                                }
                            }
    
                            const { data } = await axios(obj); 
    
                            currentPassRef.current.value = '';
                            setNewPassword('');
                            setNumSetStrength(0);
                            setAcc({ username: data.data.username, password: data.data.password });
    
                            alert('Password change successfully.');
                        }catch(e){
                            window.location.reload();
                        }
                    }else{
                        alert('New Password is a Current Password.');
                    }

                }else{
                    alert('Current Password is not correct.');
                }
            }else{
                alert('Password Strength must be Strong.');
            }
        }else{
            alert('Please fill up the current password input.');
        }
    }

    return (
        <>
            <BreadCrumbs pathBread={ ['Management', 'Administrator Settings'] } />
            

            <div className='p-11'>
                <p className='text-[26px] font-bold tracking-wide'>Administrator <span className='text-[#D75601]'>Settings</span></p>
                <p className='text-[14px] font-normal tracking-wider w-[80%] mt-2'>In this section you can edit or change the settings of account of the admin. You can change the username and password of the admin account. </p>


                { /*________Current Account________*/ }
                <div className='mt-10 mb-10'>
                    <p className='text-[#3B2D2D] text-[23px] font-bold'>Current Account</p>
                    <div className='mt-5'>
                        <p className='font-semibold text-[14px] tracking-wide my-2'>Username:</p>
                        <input type='text' value={ acc.username } disabled={ true } className='py-1 px-3 w-[300px] border-2 border-[#755C5C] rounded-lg bg-[#F3F4F6] text-[#755C5C]' />
                    </div>

                    <div className='mt-3'>
                        <p className='font-semibold text-[14px] tracking-wide my-2'>Password:</p>
                        <input type='password' value={ acc.password.split('').map(a => '*').join('') } disabled={ true } className='py-1 px-3 w-[300px] border-2 border-[#755C5C] rounded-lg bg-[#F3F4F6] text-[#755C5C]' />
                    </div>
                </div>

                <div className='flex'>

                    { /*_______Change Password LEFT_________*/ }
                    <div>
                        <p className='text-[23px] text-[#3B2D2D] font-bold'>Change Password</p>

                        <div className='mt-5'>
                            <p className='font-semibold text-[14px] tracking-wide my-2'>Current Password:</p>
                            <input ref={ currentPassRef } type='password' className='py-1 px-3 w-[300px] border-2 border-[#755C5C] rounded-lg bg-[#F3F4F6] ' />
                        </div>

                        <div className='mt-3'>
                            <p className='font-semibold text-[14px] tracking-wide my-2'>New Password:</p>
                            <input type='password' value={ newPassword } onChange={ newPassFunc } className='py-1 px-3 w-[300px] border-2 border-[#755C5C] rounded-lg bg-[#F3F4F6] ' />
                        </div>

                        <button onClick={ bttnChangePassword } className='text-center py-3 w-full bg-[#FFD700] rounded-[20px] mt-6 font-medium'>Change Password</button>
                    </div>

                    {/*_______Password Strength________*/}
                    <div className='ml-[5%]'>
                        <p className='text-[23px] font-bold'>Password <span className='text-[#D75601]'>Strength</span></p>
                        <p className='text-[14px] font-normal tracking-wider mt-2'>A strong password is: At least 8 characters long but more is better. A combination of uppercase letters, lowercase letters, numbers, and symbols. Not a word that can be found in a dictionary or the name of a person, character, product, or organization.</p>

                        <div className='mt-6'>
                            <p className='text-[18px] font-bold'>{ passStrength[numSetStrength][0] }</p>

                            <div className='w-[100%] h-[17px] bg-[#E4E3DB] rounded-[20px] overflow-hidden mt-1'>
                                <div className={`h-full ease-in duration-150`} style={{ width: passStrength[numSetStrength][2]+'%', background: passStrength[numSetStrength][1] }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AdminAccount;