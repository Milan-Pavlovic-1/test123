import CreateEditClient from "views/app-views/CreateEditClient";

function EditUser(props) {
  return <CreateEditClient mode="EDIT" params={props.match.params} />;
}

export default EditUser;
