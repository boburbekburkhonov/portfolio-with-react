import React, {useContext} from 'react';
import dataContext from '../../Context/dataContext';
import video from '../../assets/images/video.png'
import './main.scss'

function index(props) {

  return (
    <section className='hero'>
      <div className="container hero__container">
        <h1 className='hero__heading max-w-[484px] text-[#FFFFFF] text-[35px] leading-[43px] font-bold font-Montserrat'>
        RAQAMLI DUNYO MAHSULOTLARINI YETKAZISH
        </h1>

        <p className='hero__desc max-w-[359px] mt-3 mb-[25px] text-[#FFFFFF] text-[14px] leading-[20px] font-Montserrat font-medium'>
        Biz, jamoamiz bilan birga so'ngi texnologiya va bilimlardan foydalanib, biznesingizga mukammal yechimlar taklif qilamiz.
        </p>

        <div className='hero__link-wrapper max-w-[152px] w-[100%] py-[8px] pl-[15px] pr-[6px] rounded-[4px] border-solid border-[1px] border-[#fff] cursor-pointer'>
        <a className='hero__link textn inline-block bg-[#00094A] rounded-[3px] text-[12px] leading-[15px] text-[#FFFFFF] font-bold font-Montserrat text-center' href="#">Ko'rish</a>

        <img className='hero__link-img' src={video} alt="video" width='27' height='27' />
        </div>
      </div>
    </section>
  );
}

export default index;