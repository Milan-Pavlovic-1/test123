import CreateEditGroup from "views/app-views/CreateEditGroup";

function EditGroup(props) {
  return (
    <CreateEditGroup
      mode="EDIT"
      params={props.match.params}
      localization={true}
      ß
    />
  );
}

export default EditGroup;
