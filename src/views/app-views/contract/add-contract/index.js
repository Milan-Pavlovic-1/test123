import React from "react";
import CreateContract from "views/app-views/contract/CreateEditContract";

function AddContract() {
  return <CreateContract mode="ADD" localization={true} />;
}

export default AddContract;
