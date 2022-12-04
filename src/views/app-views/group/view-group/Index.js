import CreateEditGroup from "views/app-views/CreateEditGroup";
function ViewGroup(props) {
  return (
    <CreateEditGroup
      mode="VIEW"
      localization={true}
      params={props.match.params}
    />
  );
}

export default ViewGroup;
