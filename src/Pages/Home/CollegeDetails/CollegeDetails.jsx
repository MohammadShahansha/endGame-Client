import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const CollegeDetails = () => {
    const college = useLoaderData();
    console.log(college)
    // const param = useParams();
    const { name, admission_dates, admission_process, website, events, image, research_history, research_works, sports, sports_category, _id } = college

    return (
        <div className='bg-[--bg-color]'>
            <div className="py-5 bg-[--bg-color] shadow-xl">
                <h1 className='text-[--text-color] font-bold text-5xl text-center mb-4'>{name}</h1>
                <figure className='text-center mx-auto flex justify-center'><img className=' rounded-md' src={image} alt="Album" /></figure>
                <div className="mx-[160px] text-[--text-color] ">
                    <p className='font-bold text-xl'>Admission: <span className='font-normal text-lg'>{admission_dates}</span></p>
                    <p className='font-bold text-xl'>Admission Process: <span className='font-normal text-lg'>{admission_process} <a href="#" className='text-[--main-color]'>visit here</a> to apply </span></p>
                </div>

            </div>
            {/* ----------------------------Research work---------------------------------
            -------------------------------------------------------------------
            ----------------------------Research work-------------------------------- */}
            <div className='bg-[--second-bg-color] pb-5'>
                <h2 className='font-bold text-[--text-color] text-5xl text-center py-5'>Research <span className='text-[--main-color]'>Works</span></h2>
                <div className=''>
                    {
                        research_works.map((item, index) => <VerticalTimeline key={index}>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#081b29', color: '#ededed' }}
                                contentArrowStyle={{ borderRight: '7px solid  #081b29' }}
                                date={item.publication_date}
                                iconStyle={{ background: '#081b29', color: '#fff' }}
                            // icon={<WorkIcon />}
                            >
                                <h3 className="text-xl font-bold ">Title of Resurce: <span className='font-normal text-lg'>{item.title}</span></h3>
                                <h4 className="text-xl font-bold">Author: <span className='font-normal text-lg'>{item.author}</span></h4>
                                <h3 className="text-xl font-bold">Publication date: <span className='font-normal text-lg'>{item.publication_date} </span> </h3>
                            </VerticalTimelineElement>
                        </VerticalTimeline>)
                    }
                </div>
            </div>

            <div className='pb-5'>
                <h2 className='font-bold text-[--text-color] text-5xl text-center py-5'>Eve<span className='text-[--main-color]'>nts</span></h2>
                <div className='md:mx-[160px]'>
                    {
                        events.map((item, index) => <div key={index}>
                            <div className="grid grid-cols-1 md:grid-cols-2 bg-[--second-bg-color] rounded-md items-center shadow-xl mb-5">
                                <figure className='p-7'><img className='md:h-[250px] md:w-[450px] rounded-md' src={item.image} alt="Album" /></figure>
                                <div className=" text-[--text-color]">
                                    <h3 className="text-xl font-bold ">Events Name: <span className='font-normal text-lg'>{item.name}</span></h3>
                                    <h3 className="text-xl font-bold ">Location of Events: <span className='font-normal text-lg'>{item.location}</span></h3>
                                    <h3 className="text-xl font-bold "> Date: <span className='font-normal text-lg'>{item.date}</span></h3>
                                   
                                </div>

                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default CollegeDetails;