
import React from 'react'

function Sidebar({handleToggleModal ,data}) {
  return (
      <div className='sidebar'>
          <div className='bgOverlay' onClick={handleToggleModal}></div>
          <div className='sidebarContents'>
              
              <h2>{data?.title}</h2>
              <div className='descriptionContainer'>
                  <p className='desciptionTitle'>{ data?.date }</p>                      
                        <p>{data?.explanation}</p>
              </div>
              <button onClick={handleToggleModal}>
                  <i>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>

                  </i>
              </button>
          </div>
      </div>
  )
}

export default Sidebar