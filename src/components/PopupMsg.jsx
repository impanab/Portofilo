import React from 'react'
import './css/Popup.css'

const PopupMsg = ({isOpen,closePopup,msg,style}) => {
   
    return (
      <div>
        {/* <button onClick={openPopup}>Open Popup</button> */}
        {isOpen && (
          <div className="popup-overlay">
            <div className={style}>
              {/* <h2></h2> */}
              <h5>{msg}</h5>
              <button onClick={closePopup} className='btn'>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  }

export default PopupMsg