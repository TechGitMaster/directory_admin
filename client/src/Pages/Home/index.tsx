import React, { useEffect, useState } from 'react';
import { addR, invenR, topR, admin } from '../../utilities/PNG';
import { Outlet, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const navi = useNavigate();
    const [naviState, setNaviState] = useState<boolean>(false);

    useEffect(() => {
        if(!naviState){
            /*'/home/addResource'*/
            navi('/home/addResource');
        }
    }, [navi])

    const clickNavi = (path: string) => {
        setNaviState(true);
        navi(path);

        setTimeout(() => {
            setNaviState(false);
        }, 50)
    }

    return (
        <>
        <div className='flex'>
            <div className='w-[350px] min-h-[100vh] bg-[#181716] p-5 text-white'>
                <div className='flex items-center mb-9'>
                    {/*<img src={logocircle} className='w-[45px] h-[45px]' alt='logo' />*/}
                    <div className='w-[45px] h-[45px] rounded-[50%] bg-[gold]'></div>
                    <p className='text-[17px] text-[#DEAC00] font-bold ml-[11px]'>THESISARY</p>
                </div>

                {/*__Navigation__*/}
                <div>
                    <p className='text-[16px] text-[#DEAC00]'>Management</p>
                    <div className='flex items-center my-5 cursor-pointer' onClick={ () => clickNavi('addResource') }>
                        <img src={addR} className='w-[27px] h-[27px]' alt='logo' />
                        <p className='text-[14px] text-white ml-[15px]'>Add Resources</p>
                    </div>
                    <div className='flex items-center my-5 cursor-pointer' onClick={ () => clickNavi('inventoryResources') }>
                        <img src={invenR} className='w-[27px] h-[27px]' alt='logo' />
                        <p className='text-[14px] text-white ml-[15px]'>Inventory Resources</p>
                    </div>
                    <div className='flex items-center my-5 cursor-pointer' onClick={ () => clickNavi('topyearResources') }>
                        <img src={topR} className='w-[27px] h-[27px]' alt='logo' />
                        <p className='text-[14px] text-white ml-[15px]'>Top-year Resources</p>
                    </div>
                </div>
            </div>
            <div className='w-full min-h-full bg-[#F3F4F6]'>
                <div className='py-2 px-9 flex justify-between bg-white mb-[2px]'>
                    <div className='w-[50%]'></div>
                    <div>
                        <div className='flex items-center'>
                            <p className='text-[15px] text-[#DEAC00] mr-[5px]'>Administrator</p>
                            <img src={admin} alt="admin" className='w-[41px] h-[41px]' />
                        </div>
                    </div>
                </div>

                <Outlet context={{ clickNavi }} />
            </div>
        </div>
        </>
    )
}

export default Home;