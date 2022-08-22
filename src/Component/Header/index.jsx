import React, {useRef} from 'react';
import logo from '../../assets/images/logo.svg'
import phoneCall from '../../assets/images/phone-call.png'
import './main.scss'

function index(props) {

  const header = useRef()

  function toggle() {
    header.current.classList.toggle('header--open')
  }

  return (
    <header ref={header} className='header py-3'>
      <div className="container mx-auto flex items-center justify-between">
        <a className='header__link no-underline' href="#">
          <img className='header-logo' src={logo} alt="126" width='186' height='44' />
        </a>

        <nav className='sitenav'>
          <ul className='list-none sitenav__list flex items-center'>
            <li className='sitenav__item'>
              <a className='sitenav__list-link text-[#00094A] text-[12px] font-semibold leading-[15px] font-Montserrat' href="tel:+998901234567">
                +998 90 123 45 67
              </a>
            </li>

            <li className='sitenav__item'>
              <div className='sitenav__list-line'>

              </div>
            </li>

            <li className='sitenav__item'>
              <button className='sitenav__list-dark'>Dark</button>
            </li>

            <li className='sitenav__item'>
              <select className='sitenav__list-select font-Montserrat text-[#00094A]
              text-[12px] leading-[15px] font-semibold bg-none' name='lan'>
                <option value="uz">uz</option>
                <option value="ru">ru</option>
                <option value="en">en</option>
              </select>
            </li>

            <li className='sitenav__item sitenav__item-active'>
              <button className='sitenav__list-btn bg-[#00094A] rounded-[3px] text-[#ffffff] text-[12px] leading-[15px] font-bold font-Montserrat px-[30px] py-[14px]'>Bog'lanish</button>
            </li>
          </ul>
        </nav>

        <div onClick={() => toggle()} className='header__hamburger'>
          <span className='text-[#00094A] text-[12px] leading-[15px] font-semibold font-Montserrat mr-2'>MENYU</span>
        <button className='header__hamburger-img'></button>
        </div>
      </div>
    </header>
  );
}

export default index;