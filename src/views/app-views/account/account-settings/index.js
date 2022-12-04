import React from "react";
import CreateEditUser from "views/app-views/CreateEditUser";

function AccountSettings(props) {
  return (
    <CreateEditUser accountSettings={true} localization={true} mode="EDIT" params={props.match.params}/>
  )
}

export default AccountSettings;
