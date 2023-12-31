import React, { useState } from 'react';
import TranslatedText from './TranslatedText';
import {BsSearch, BsHeart, BsCart2} from 'react-icons/bs'
import {CgMenuRight} from 'react-icons/cg';
import {FaLongArrowAltRight} from 'react-icons/fa'
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showSearch, setShowSearch] = useState(false)
    const [currPage, setCurrPage] = useState(1)

    const navlinks = [
        {
            id: 1,
            text:'Home',
            link: '/'
        },
        {
            id: 2,
            text:'Shop',
            link: '/shop'
        },
        {
            id: 3,
            text:'Blog',
            link: '/blog'
        },
        {
            id: 4,
            text:'Contact',
            link: '/contact'
        },
    ]
  return (
    <div className='contain flex flex-row justify-between py-2 h-[4.5rem] items-center border'>
        <h1 className='tilli text-xl flex text-[30px] flex-row lowercase'>GAD
        <div className='rotate-12 w-[30px] h-[46px] flex flex-col items-center justify-center'>
            <div className='w-[8px] h-[8px] rounded-full bg-blue-400'></div>
        <span className='text-blue-400 relative bottom-2'>GE</span></div>TEE.</h1>


        
      <div className='lg:flex hidden gap-[2rem] items-center flex-row justify-between'>
        {
            navlinks.map((item) => (
                <div key={item.id} className='sans text-[17px] hover:text-blue-900 cursor-pointer'>
                    <p>{item.text}</p>
                </div>
            ))
        }
      </div>

      <div className='flex flex-row items-center gap-5'>
        
        <BsSearch className='flex md:hidden text-[20px] cursor-pointer' onClick={() => (setShowMenu(false), setShowSearch(!showSearch))}/>
        <div className=' hidden md:flex items-center'>
            <input className='border sans px-3 w-[15rem] py-2' placeholder='search...'/>
            <button className='bg-blue-900 text-white px-2 py-[11px]'>
                <BsSearch  className='text-[20px]'/>
            </button>
        </div>
        <div>
            <BsHeart className='text-[20px]' />
        </div>
        <div className='relative'>
            <BsCart2 className='text-[24px]'/>
            <div className='absolute bg-blue-900 py-[1px] px-[4px] right-[-15px] text-white text-center pb text-[14px] top-[-15px]  -0 rounded-full'>0</div>
        </div>


        <div className='flex lg:hidden items-center relative'>
        <CgMenuRight className='text-[24px] cursor-pointer' onClick={() => (setShowMenu(!showMenu), setShowSearch(false))}/>

        
      
      </div>
      {
        showMenu && <div className={`absolute flex justify-evenly items-center  sans text-white lg:hidden w-[100vw]  bg-blue-900 h-[2.5rem] top-[8rem] md:top-[6.5rem]  right-0`}>
            {
            navlinks.map((item) => (
                <div key={item.id} className={`sans text-[17px] hover:underline cursor-pointer ${item.id === currPage ? 'underline' : ''}`} onClick={() => setCurrPage(item.id)}>
                    <p>{item.text}</p>
                </div>
            ))
        }
        </div>
      }

      {
        showSearch && <div className={`absolute flex lg:hidden w-[100vw]  bg- h-[2rem] top-[9rem] md:top-[6.5rem]  right-0`}>
             <input className='border border-white outline-none border-b-gray-500 flex md:hidden sans px-5 w-[90vw] ml-[5vw] py-3' placeholder='search...'/>
        </div>
      }
       
      </div>


     
     
    </div>
  );
}

export default Navbar;
