import { Skeleton } from '@mui/material'
import React from 'react'

const Loading = ({children}) => {
  return (
    <Skeleton>{children}</Skeleton>
  )
}

export default Loading