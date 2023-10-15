import React, { useEffect, useState } from 'react';
import {IoIosArrowDown} from 'react-icons/io'
const Dropdown = ({type, items}) => {
    const [selectedItem, setSelectedItem] = useState('')
    const [showOptions, setShowOptions] = useState(false)
    useEffect(() => {
        if (!items) {
            return
        }

        else {
            setSelectedItem(items[0].text)
        }
    }, [])
  return (
    <div>
      <div className='flex flex-row items-center gap-3 cursor-pointer' onClick={() => setShowOptions(true)} >
      {selectedItem}
      <IoIosArrowDown />
      </div>
      {
        showOptions && <div className='absolute mt-3 bg-blue-900 p-2 w- 2' onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
            {
                items.map((item) => (
                    <div key={item.id} className='hover:bg-blue-600 cursor-pointer' onClick={() => (
                        setSelectedItem(item.text),
                        setShowOptions(false)
                    )}>
                        <p>{item.text}</p>
                    </div>
                ))
            }
        </div>
      }
    </div>
  );
}

export default Dropdown;
