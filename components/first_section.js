/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image'
import React, { useState } from "react";
import Modal from 'react-modal';
import { FaRegWindowClose } from "react-icons/fa";

const First_Section = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };
      

    return (
        <div className="flex flex-col md:flex-row pt-12 pb-12 md:pt-24 lg:pt-0 lg:h-screen lg:items-center">
            <div className="max-w-screen-sm sm:max-w-screen-md md:max-w-screen-sm w-full"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <div className="pb-6 uppercase text-sm md:text-xl text-red-600 font-bold">
                    Best Destinations around the world
                </div>
                <div className="pb-8 text-5xl sm:text-6xl lg:text-84 font-extrabold">
                    Travel, enjoy and live a new and full life
                </div>
                <div className="pb-8 text-base leading-7 font-semibold">
                    Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                </div>

                <div className="pb-9 flex flex-col md:flex-row">
                
                    <div className="md:pr-5">
                        <div>
                            <button onClick={openModal} className="bg-yellow-400 hover:bg-yellow-600 w-full md:w-40 lg:w-44 h-14 rounded-xl text-white font-semibold">Find out More</button>
                            <Modal
                                isOpen={modalIsOpen}
                                onAfterOpen={afterOpenModal}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >
                                {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
                                <button onClick={closeModal}><FaRegWindowClose /></button>
                                <div>We are still working on it</div>
                            </Modal>
                        </div>
                    </div>
                    <div className="pt-4 md:pt-0 flex flex-row">
                        <button onClick={openModal} className="mx-auto w-full md:w-40 lg:w-44 h-14 rounded-xl text-red-500 font-semibold">                            
                            Play Demo
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-md w-full mx-auto lg:absolute"
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <img src="https://ik.imagekit.io/icvij1rszoy/travel_agency/New_Project__2__ZDtAo-ASv.png?updatedAt=1634695474309" className="max-w-screen-sm w-full md:pt-16 posimgs1" alt="test" />
            </div>
        </div>

    )
}

export default First_Section;