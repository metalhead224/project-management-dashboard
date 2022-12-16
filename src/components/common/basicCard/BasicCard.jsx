import { Card, CardContent } from '@mui/material'
import React from 'react'

const BasicCard = ({header, content}) => {

const cardStyles = {
  width: '1000px',
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%)',
  borderRadius: '8px',
};

  return (
    <Card sx={cardStyles}>
    {header}
    <CardContent>
        {content}
    </CardContent>
    </Card>
  )
}

export default BasicCard