import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import './main.scss'

function index(props) {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section data-aos="fade-up"
    data-aos-duration="600" className='statistics pt-[60px] mb-[80px]'>
      <div className="container">
        <ul className='statistics__list list-none'>
          <li className='statistics__item text-center'>
            <p className='statistics__list-desc text-[#00094A] text-[70px] leading-[59px] font-bold font-Montserrat'>
              10+
            </p>

            <h3 className='statistics__list-heading text-[#00094A] text-[20px] leading-[18px] font-medium font-Montserrat mt-3'>
              yakunlangan loyihalar
            </h3>
          </li>

          <li className='statistics__item text-center'>
            <p className='statistics__list-desc text-[#00094A] text-[70px] leading-[59px] font-bold font-Montserrat'>
            20+
            </p>

            <h3 className='statistics__list-heading text-[#00094A] text-[20px] leading-[18px] font-medium font-Montserrat mt-3'>
            soha mutaxassislari
            </h3>
          </li>

          <li className='statistics__item text-center'>
            <p className='statistics__list-desc text-[#00094A] text-[70px] leading-[59px] font-bold font-Montserrat'>
            15+
            </p>

            <h3 className='statistics__list-heading text-[#00094A] text-[20px] leading-[18px] font-medium font-Montserrat mt-3'>
            hamkorlik
            </h3>
          </li>

          <li className='statistics__item text-center'>
            <p className='statistics__list-desc text-[#00094A] text-[70px] leading-[59px] font-bold font-Montserrat'>
            5+
            </p>

            <h3 className='statistics__list-heading text-[#00094A] text-[20px] leading-[18px] font-medium font-Montserrat mt-3'>
            xizmat turlari
            </h3>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default index;