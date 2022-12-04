import { message } from 'antd'
import fetch from 'auth/FetchInterceptor'
import { API_BASE_URL } from 'constants/ApiConstant'
import StatusCode from 'configs/StatusCode'
const JwtAuthService = {
	
}

JwtAuthService.login = function (data) {
	return fetch({
		url: `${API_BASE_URL}Account/login`,
		method: 'post',
		headers: {
			'public-request': 'true'
		},
		data: data
	})
}

JwtAuthService.signUp = function (data) {
	return fetch({
		url: `${API_BASE_URL}Account/register`,
		method: 'post',
		headers: {
			'authorization': 'true'
		},
		data: data
	}).then((d)=>{
		if(d.statusCode === StatusCode.Successfully){message.success("User successfully created!")}
		else if(d.statusCode === StatusCode.UserExist){message.warning(`User with the "${d.email}" exists!`)}
		else if(d.statusCode === StatusCode.UserExistInAnotherAggency){message.warning(`User with the "${d.email}" exists in another agency!`)}
	})
}


export default JwtAuthService