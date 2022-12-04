import CreateEditPrice from "views/app-views/CreateEditPrice";

function EditPrice(props) {
  return <CreateEditPrice mode="EDIT" params={props.match.params} />;
}

export default EditPrice;
