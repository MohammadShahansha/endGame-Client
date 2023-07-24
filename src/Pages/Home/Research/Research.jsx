import React from 'react';
import img1 from '../../../assets/images/research1.pdf-p1.jpeg'
import img2 from '../../../assets/images/wheather.pdf-p1.jpeg'
import img3 from '../../../assets/images/cva.jpeg'
import img4 from '../../../assets/images/soc.jpeg'
import img5 from '../../../assets/images/climate.jpeg'

const Research = () => {
    return (
        <div className='bg-[--second-bg-color] py-10'>
            <h2 className='text-5xl font-bold text-[--text-color] mb-5 text-center'>Research <span className='text-[--main-color]'>Paper</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 md:mx-20'>
                <div className='text-[--text-color]'>
                    <a href="https://www.iied.org/sites/default/files/pdfs/2023-07/21551iied.pdf">
                        <div className="card card-compact md:h-[470px] bg-[--bg-color] shadow-xl">
                            <figure><img className='w-full h-[300px]' src={img1} alt="research" /></figure>
                            <div className="card-body">
                                <h2 className="text-3xl">Towards queer-centred urban development</h2>

                            </div>
                            <div className='pb-2 px-5'>
                                <p>13 july 2023</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='text-[--text-color]'>
                    <a href="https://www.iied.org/sites/default/files/pdfs/2023-07/21546iied.pdf">
                        <div className="card card-compact  md:h-[470px]  bg-[--bg-color] shadow-xl">
                            <figure><img className='w-full h-[300px]' src={img2} alt="research" /></figure>
                            <div className="card-body">
                                <h2 className="text-3xl">Beyond inclusion: a queer response to climate justice</h2>

                            </div>
                            <div className='pb-2 px-5'>
                                <p>12 july 2023</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='text-[--text-color]'>
                    <a href="https://www.iied.org/sites/default/files/pdfs/2023-07/21526IIED.pdf">
                        <div className="card card-compact  md:h-[470px]  bg-[--bg-color] shadow-xl">
                            <figure><img className='w-full h-[300px]' src={img1} alt="research" /></figure>
                            <div className="card-body">
                                <h2 className="text-3xl">Shock-responsive social protection in fragile and conflict-affected states</h2>

                            </div>
                            <div className='pb-2 px-5'>
                                <p>15 july 2023</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='text-[--text-color]'>
                    <a href="https://www.iied.org/sites/default/files/pdfs/2023-07/21541iied.pdf">
                        <div className="card card-compact  md:h-[470px]  bg-[--bg-color] shadow-xl">
                            <figure><img className='w-full h-[300px]' src={img1} alt="research" /></figure>
                            <div className="card-body">
                                <h2 className="text-3xl">CBA17 key messages</h2>

                            </div>
                            <div className='pb-2 px-5'>
                                <p>16 july 2023</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='text-[--text-color]'>
                    <a href="https://www.iied.org/sites/default/files/pdfs/2023-06/21516iied.pdf">
                        <div className="card card-compact  md:h-[470px]  bg-[--bg-color] shadow-xl">
                            <figure><img className='w-full h-[300px]' src={img1} alt="research" /></figure>
                            <div className="card-body">
                                <h2 className="text-3xl"> Assessing and addressing climate-related losses and damages</h2>

                            </div>
                            <div className='pb-2 px-5'>
                                <p>18 july 2023</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Research;