import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div className='journal__entry-picture'
            style={{
                backgroundSize:'cover',
                backgroundImage:'url(https://s03.s3c.es/imag/_v0/770x420/d/9/e/Un-oso-pardo-con-la-mano-levantada-iStock.jpg)'
            }}></div>
            <div className='journal__entry-body'>
                <p className='journal__entry-title'>Un nuevo dia</p>
                <p className='journal__entry-content'>
                    lorem ipsum dolor et augusta emerita mir ec tronus vangalore 
                </p>
            </div>
            <div className='journal_entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>
    </div>
  )
}
