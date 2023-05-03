import React from 'react';
import BreadCrumbs from '../../Components/Breadcrumbs';
import { sample } from '../../utilities/PNG';

const TopyearResources: React.FC = () => {
    const breadCrumbs = ['Management', 'Top-year Resources'];

    return (
        <>
        <div>
            <BreadCrumbs pathBread={breadCrumbs} />
            <div className='p-8'>
                <div className='rounded-md shadow-md p-7 bg-white'>
                    <p className='text-[26px] text-black font-bold'>Top-year <span className='text-[#1790E0]'>Resources</span></p>
                    <p className='w-[65%] text-[14px] mt-1'>In this section you can see the current top 3 thesis of the year and other selected research. You can also add a thesis/research as you will.</p>

                    <div className='flex mt-5'>
                        <button className='px-[25px] py-[10px] text-[14px] text-white bg-[#DEAC00] rounded-lg mr-3'>+Top Thesis</button>
                        <button className='px-[25px] py-[10px] text-[14px] text-white bg-[#DEAC00] rounded-lg'>+Other Research</button>
                    </div>

                    {/*____Top 3 Thesis___*/}
                    <div className='mt-9'>
                        <p className='text-[24px] font-bold my-[5px]'>Top 3 Thesis</p>

                        {/*__Document Resourecs__*/}
                        <div className='bg-white rounded-lg grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>

                        { '.'.repeat(3).split('')
                        .map(a => 
                        <div className='p-1'>
                            <div className='min-h-[300px] bg-[#2A2A2C] p-2 flex rounded-md'>
                                <div className='w-[45%]'>
                                    <img src={sample} alt="doucment" className='w-full h-full object-cover rounded-l-md' />
                                </div>
                                <div className='w-[55%] p-3 flex content-between flex-wrap'>
                                    <div className='m'>
                                        <p className='text-[#FFF200] text-[17px]'>BSIT</p>
                                        <p className='text-white text-[14px] mb-3'>2022-2023</p>
                                        <p className='text-white text-[14px] mb-3'>Member: 04</p>

                                        <p className='text-white text-[15px] mb-3 line-clamp-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                    </div>
                                    <div className='w-full'>
                                    <button className='w-full py-[6px] rounded-[11px] mt-2 bg-[#28A745] text-white text-[13px] cursor-pointer'>Click to View</button>
                                    <button className='w-full py-[6px] rounded-[11px] mt-2 bg-[#DC3545] text-white text-[13px] cursor-pointer'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}

                        </div>
                    </div>

                    {/*____Other Research___*/}
                    <div className='mt-9'>
                        <p className='text-[24px] font-bold my-[5px]'>Other Research</p>

                        {/*__Document Resourecs__*/}
                        <div className='bg-white rounded-lg grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>

                        { '.'.repeat(3).split('')
                        .map(a => 
                        <div className='p-1'>
                            <div className='min-h-[300px] bg-[#2A2A2C] p-2 flex rounded-md'>
                                <div className='w-[45%]'>
                                    <img src={sample} alt="doucment" className='w-full h-full object-cover rounded-l-md' />
                                </div>
                                <div className='w-[55%] p-3 flex content-between flex-wrap'>
                                    <div className='m'>
                                        <p className='text-[#FFF200] text-[17px]'>BSIT</p>
                                        <p className='text-white text-[14px] mb-3'>2022-2023</p>
                                        <p className='text-white text-[14px] mb-3'>Member: 04</p>

                                        <p className='text-white text-[15px] mb-3 line-clamp-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered</p>
                                    </div>
                                    <div className='w-full'>
                                        <button className='w-full py-[11px] rounded-[11px] bg-[#0072BC] text-white text-[13px] cursor-pointer'>Click to View</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TopyearResources;