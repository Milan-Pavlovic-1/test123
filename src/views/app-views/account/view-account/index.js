import React, { useEffect, useState } from 'react'
import CreateEditUser from 'views/app-views/CreateEditUser'
import ApiService from 'services/ApiService';

function ViewUser(props) {
  return (
    <CreateEditUser mode="VIEW" localization={true} params={props.match.params}/>
  )
}

export default ViewUser