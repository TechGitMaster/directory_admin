import React, { useState } from 'react';
import BreadCrumbs from '../../Components/Breadcrumbs';
import { search, sample } from '../../utilities/PNG';

const InventoryResources: React.FC = () => {

    const breadCrumbs = ['Management', 'Inventory Resources'];
    const [selected, setSelected] = useState<string>('ALL');
    const courses: Array<string> = ['ALL', 'BSCS', 'BSIT', 'BSCpE', 'BSBA', 'BSAIS', 'BSA', 'BSRTCS', 'BACOMM', 'BSTM', 'ACT', 'ART'];

    const selectedFunc = (str: string) => {
        setSelected(str);
    } 

    return (
        <>
        <div>
            <BreadCrumbs pathBread={breadCrumbs} />

            <div className='p-7'>

                {/*___Header search____*/}
                <div className='rounded-lg shadow-md p-9 bg-white mb-6'>
                    <div className='flex items-center mb-6'>
                        <div className='w-[330px] h-[40px] px-[15px] border-2 rounded-md border-[#D1D5DB] flex items-center bg-[#F9FAFB]'>
                            <img src={search} alt="search" className='w-[21px] h-[21px]' />
                            <input type="text" placeholder='Search for Thesis' className='w-[90%] outline-none ml-3 text-[15px]'  />
                        </div>
                        <div className='ml-5 flex items-center'>
                            <p className='text-[15px] text-[#868789] mr-2'>Filter By:</p>
                            <div>
                                <select className="w-[190px] h-[40px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 ">
                                    <option selected>By Year Posted</option>
                                    <option value="US">2022-2023</option>
                                    <option value="CA">2023-2024</option>
                                </select>
                            </div>
                        </div>
                        <div className='ml-6'>
                            <button className="w-[120px] h-[40px] px-[20px] text-center text-white text-[14px] bg-[#DEAC00] rounded-[12px]">Search</button>
                        </div>
                    </div>

                    <div className='flex flex-wrap ml-[-11px]'>
                        {
                            courses.map(a => <div key={Math.random()} onClick={ () => selectedFunc(a) }
                            className={'text-[15px] p-2 rounded-lg mx-3 cursor-pointer '+(selected === a ? 'bg-[#048BE2] text-white':'text-[#8C8681]')}>{a}</div>)
                        }
                    </div>
                </div>


                {/*__Document Resources__*/}
                <div className='p-5 bg-white rounded-lg grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>

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
        </div>
        </>
    )
}

export default InventoryResources;

