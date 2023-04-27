import React, { useState } from 'react'

const Sts = () => {
    const [data, setdata] = useState(false)
    return (
        <div>

            <p>{data}</p>
            {
                data && <h1>drgfiy7  <span onClick={() => {
                    setdata(false)
                }}>x</span></h1>
            }
            <button onClick={() => {
                setdata(() => {
                    setdata(true)
                })
            }
            }>vbrejlgboue5r</button>
        </div>
    )
}

export default Sts