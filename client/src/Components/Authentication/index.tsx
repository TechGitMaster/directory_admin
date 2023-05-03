import React, { useEffect, useState } from 'react';
import { useLocation, Outlet, useNavigate } from 'react-router-dom';
import checkingAuth from './auth';

const Auth: React.FC = () => {
    const navi = useNavigate();
    const location = useLocation();
    const [outlet, setOutlet] = useState<boolean>(false); 


    useEffect(() => {
        const url = location.pathname;
        
        setTimeout(async () => {
            if(url.toLocaleLowerCase().split('/').includes('login')){
                (await checkingAuth() === 'false' ? setOutlet(true):navi('/home'))
            }else if(url.toLocaleLowerCase().split('/').includes('home')){
                (await checkingAuth() === 'false' ? navi('/login'): setOutlet(true))
            }
        }, .1)

    }, [location])

    return (
        <>
           {
                outlet ? <Outlet />:'Loading...' 
           }
        </>
    )
}

export default Auth;