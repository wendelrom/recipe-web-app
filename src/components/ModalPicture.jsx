import React from 'react'

const ModalPicture = ({ handleClose, isOpen, selectedMealImage }) => {
    if(!isOpen) {
        return null;
    }

  return (
    <div 
        className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50`}
        onClick={handleClose}
    >
        <div 
            className='w-[250px] md:w-[500px] bg-white shadow-2xl transform transition-transform duration-1000 scale-95' 
            onClick={e => e.stopPropagation()}  //stopPropagation is a function that prevents the child to inherit the event that is being applied to its parent element, in out case this element won't be affected by being the element close when it's clicked
        > 
            <div>
                <img src={selectedMealImage} alt="img" />
            </div>
        </div>
    </div>
  )
}

export default ModalPicture