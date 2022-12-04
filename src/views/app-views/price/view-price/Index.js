import CreateEditPrice from "views/app-views/CreateEditPrice";

function ViewPrice(props) {
  return <CreateEditPrice mode="VIEW" params={props.match.params} />;
}

export default ViewPrice;
