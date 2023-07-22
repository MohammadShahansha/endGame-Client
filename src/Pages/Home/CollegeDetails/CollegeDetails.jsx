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
            <div className='bg-[--second-bg-color] '>
                <h2 className='font-bold text-[--text-color] text-5xl text-center py-5'>Research <span className='text-[--main-color]'>Works</span></h2>
                <div className=''>
                    {
                        research_works.map(item => <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#081b29', color: '#ededed' }}
                                contentArrowStyle={{ borderRight: '7px solid  #081b29' }}
                                date="2011 - present"
                                iconStyle={{ background: '#081b29', color: '#fff' }}
                            // icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                                <p>
                                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                </p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>)
                    }
                </div>



            </div>

        </div>
    );
};

export default CollegeDetails;