import React from 'react'
import Wizard from '../offer-wizard/wizard';

function ViewOffer(props) {
    return <Wizard mode="VIEW" localization={true} params={props.match.params}/>;
}

export default ViewOffer