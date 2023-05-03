import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BreadCrumbs from "../../Components/Breadcrumbs";

import { Viewer, Worker } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';

import { UPLOAD_EDIT_DELETE_DATA, START_UPLOAD_EDIT_DELETE_DATA } from "../../Redux/Actions";


const AddResources = () => {
    const dispatch = useDispatch();
    const uploadState = useSelector((a: any) => a.upload_edit_delete_data.res);

    const breadCrumbs = ['Management', 'Add Resources'];
    const courses: Array<string> = ['BSCS', 'BSIT', 'BSCpE', 'BSBA', 'BSAIS', 'BSA', 'BSRTCS', 'BACOMM', 'BSTM', 'ACT', 'ART'];

    //Toolbar_____________________________________________
    const toolbarPluginInstance = toolbarPlugin();
    const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;

    const transform = (slot:any) => ({
        ...slot,
        // These slots will be empty
        SwitchTheme: () => <></>,
        Open: () => <></>,
        Print: () => <></>,
        Download: () => <></>,
    });

    useEffect(() => {
        dispatch({ type: START_UPLOAD_EDIT_DELETE_DATA });
    }, []);

    const uploadDouc = () => {
        dispatch({ type: UPLOAD_EDIT_DELETE_DATA });
    }

    return (
        <>
        <div>
            <BreadCrumbs pathBread={breadCrumbs} />
            <div className='p-8'>
                <div className='rounded-md shadow-md p-7 bg-white'>
                    <p className='text-[26px] text-black font-bold'>Upload <span className='text-[#1790E0]'>Resources</span> here</p>
                    <p className='w-[65%] text-[14px] mt-1'>In this section you can now add thesis documents any time you wanted. By hitting the submit button it will automatically add into Inventory resources.</p>
                
                    <div className="flex mt-9">
                        {/*__Left side___*/}
                        <div className="w-[50%] pr-8">
                            <p className="font-bold text-[16px] text[#291943] mb-2">Title:</p>
                            <textarea placeholder="Title of thesis..." className="mb-3 w-full h-[150px] rounded-xl p-4 font-inter border-2 border-[#EAEAEA] bg-[#f9f9f9] outline-none"></textarea>
                            <div className="grid grid-cols-2 mb-3">
                                <div className="pr-2">
                                    <p className="font-bold text-[16px] text[#291943] mb-2">Member:</p>
                                    <input type='text' placeholder='Number of pax' className='bg-gray-50 border-2 outline-none border-[#EAEAEA] text-sm rounded-lg block w-full p-2.5' />
                                </div>
                                <div>
                                    <p className="font-bold text-[16px] text[#291943] mb-2">Year:</p>
                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ">
                                        <option selected>Select a year</option>
                                        <option value="US">2022-2023</option>
                                        <option value="CA">2023-2024</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 mb-3">
                                <p className="font-bold text-[16px] text[#291943] mb-2">Course:</p>
                                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 ">
                                    <option selected>Select a course</option>
                                    { courses.map(a => <option value={a}>{a}</option>) }
                                </select>
                            </div>
                            <div className="grid grid-cols-1 mb-3">
                                <p className="font-bold text-[16px] text[#291943] mb-2">File document:</p>
                                <input type="file" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2.5" />
                            </div>
                            <div className="grid grid-cols-1 mb-10">
                                <div className="flex items-center">
                                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 " />
                                    <span className="text-[15px] font-medium text-gray-900 ml-2 mt-[2px]">Check to enable comment section</span>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button onClick={ uploadDouc }
                                className="w-[60%] mb-8 p-3 font-bold text-center bg-[#0072BC] text-white text-[15px] rounded-[20px]">
                                    {
                                        (uploadState === 'success' ? 'Upload': 
                                        uploadState === 'start' ? 'Upload':
                                        uploadState === 'error' ? 'Error':'Uploading...')   
                                    }
                                </button>
                            </div>
                        </div>

                        {/*___Ride side___*/}
                        <div className="w-[50%] h-[700px] mb-[50px]">
                            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.min.js">
                              <div style={{ background: '#EFEFEF' }}>
                                <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
                              </div>
                              <Viewer 
                                  enableSmoothScroll={true} 
                                  fileUrl='https://res.cloudinary.com/dutfzeatp/image/upload/v1682504200/Home/needSS_gwdyin.pdf' 
                                  plugins={[toolbarPluginInstance]} 
                              />
                            </Worker>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AddResources;