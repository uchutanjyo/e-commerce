import React, {useState} from 'react';

const Modal = ({show, onClose, album, children}) => {

    if (!show) {
        return null
    }
  return (
    <div className='modal'>
    {children} 
{album}
</div>
  );
};

export default Modal;


