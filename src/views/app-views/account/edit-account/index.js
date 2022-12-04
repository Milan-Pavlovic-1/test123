import React from "react";
import CreateEditUser from "views/app-views/CreateEditUser";

function EditUser(props) {
  return (
    <CreateEditUser accountSettings={false} localization={true} mode="EDIT" params={props.match.params}/>
  )
}

export default EditUser;
