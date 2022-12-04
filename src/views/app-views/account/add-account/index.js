import React from 'react'
import CreateEditUser from 'views/app-views/CreateEditUser'

function AddUser() {
  return (
   <CreateEditUser accountSettings={false} mode="ADD" localization={true} />
  )
}

export default AddUser