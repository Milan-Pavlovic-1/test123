import CreateEditPrice from "views/app-views/CreateEditPrice";
function AddPrice() {
  return (
    <div className="price">
      <CreateEditPrice mode="ADD" localization={true} />
    </div>
  );
}

export default AddPrice;
