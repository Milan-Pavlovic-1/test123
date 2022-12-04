import { Button, Checkbox, Input } from 'antd';
import { OmitProps } from 'antd/lib/transfer/ListBody';
import _Table from 'components/shared-components/Table';
import navigationConfig from 'configs/NavigationConfig';
import React, { useEffect, useState } from 'react'
import ApiService from 'services/ApiService';
import utils from 'utils';
import { SCOPES } from 'views/auth-views/authentication/permissions/permission-maps';
import PermissionsGate from 'views/auth-views/authentication/permissions/PermissionsGate';
import jwt from 'jwt-decode' // import dependency
const Home = (props) => {

	/* const currentRouteInfo = utils.getRouteInfo(navigationConfig, props.location.pathname)
	const del = () =>{
	ApiService.Get("Activity").then(()=>console.log("success"));
	}; */
	return (
		<div>
			<h1>Home</h1>
		</div>
	)
}
export default Home;