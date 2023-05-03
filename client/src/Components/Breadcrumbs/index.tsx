import React from "react";
import { home } from '../../utilities/PNG';

interface IBreadCrumbs{
    pathBread: Array<string>
}

const BreadCrumbs = ({ pathBread }:IBreadCrumbs) => {
    return (
        <>
        <div className='shadow-md bg-white'>
            <div className='py-3 px-9 flex items-center shadow-2xl'>
                <img src={home} alt='home' className='w-[23px] h-[23px]' />
                {
                    pathBread.map(path => 
                    <div className='flex items-center mt-1'>
                        <p className='text-[#9BA2AE] text-[20px] px-[18px]'>{'>'}</p>
                        <p className='text-[#868789] text-[15px] '>{path}</p>
                    </div>
                    )
                }
            </div>
        </div>
        </>
    )
}

export default BreadCrumbs;