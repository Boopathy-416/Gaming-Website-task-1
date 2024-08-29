import React from 'react'
import './Clientpop.css'


function Clientpop({ client, closePopup }) {
  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>{client.name}</h2>
        <img src={client.logo} alt={client.name} className="popup-logo" />
        <p>{client.description}</p>
        <button onClick={closePopup}>Close</button>
      </div>
    </div>
  )
}

export default Clientpop
