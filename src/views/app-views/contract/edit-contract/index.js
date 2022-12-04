import React from "react";
import CreateEditContract from "../CreateEditContract";

function EditContract(props) {
  return <CreateEditContract mode="EDIT" params={props.match.params} />;
}

export default EditContract;
