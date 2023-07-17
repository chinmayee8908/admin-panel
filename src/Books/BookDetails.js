import { Card } from '@mui/material'
import React from 'react'

const BookDetails = ({open,handleClose,children}) => {
    return (
<>
{open && 
        <div  handleClose={handleClose} style={{position: "absolute",top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        maxHeight: "fit-content",
        boxShadow: 14,
        padding: "10px",
        background: "whitesmoke",}}>{children}</div>
}
      </>
    )
}

export default BookDetails