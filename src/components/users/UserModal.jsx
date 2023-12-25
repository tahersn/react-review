import React from 'react'

function UserModal({user, close}) {

  return (
    <dialog open className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Hello! {user.firstName}</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
                <button className="btn" onClick={close}>Close</button>
            </div>
        </div>
    </dialog>
  )
}

export default UserModal