import { Avatar } from '@mui/material'
import React from 'react'

const ContactSingleIcon = ({Icons}) => {
    return (
        <>
            <Avatar sx={{
                width: "18px", height: "18px",fontSize:"12px", padding:"10px",backgroundColor: "transparent", border: "2px solid #fff"
            }}>{Icons}</Avatar>
        </>
    )
}

export default ContactSingleIcon