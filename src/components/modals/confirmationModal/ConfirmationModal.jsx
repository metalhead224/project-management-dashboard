import React from 'react'
import BasicModal from '../../common/basicModal/BasicModal'

const ConfirmationModal = ({open, onClose, onSubmit}) => {
  return (
    <BasicModal 
        open={open}
        onClose={onClose}
        title='Delete data?'
        firstBtn='Yes'
        secondBtn='No'
        onSubmit={onSubmit}
    />
  )
}

export default ConfirmationModal