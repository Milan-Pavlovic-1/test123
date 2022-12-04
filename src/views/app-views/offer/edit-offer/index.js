import React from 'react'
import Wizard from '../offer-wizard/wizard';

function EditOffer(props) {
  return <Wizard mode="EDIT" localization={true} params={props.match.params}/>;
}

export default EditOffer