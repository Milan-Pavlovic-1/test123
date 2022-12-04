import fetch from 'auth/FetchInterceptor'
import { API_BASE_URL } from "../constants/ApiConstant";

const ApiService = {}
const header = {
	'Accept': 'application/json, text/plain',
	'Content-type': 'application/json,multipart/form-data',
    'authorization':'true'
}
ApiService.Get = function (controller){
  
    return fetch({
        url: API_BASE_URL + controller,
        method: 'get',
        headers:header,
    })
}

ApiService.GetById = function (controller, id){
    return fetch({
        url: API_BASE_URL + controller +'/'+ id,
        method: 'get',
        headers: header
    })
}
ApiService.Post = function(controller, formData) {
    return fetch({
        url: API_BASE_URL + controller + '/',
        method: 'post',
        headers: header,
        data:  formData
    })
}
ApiService.Put = function(controller, formData, id) {
    return fetch({
        url: API_BASE_URL + controller + '/' + id,
        method: 'put',
        headers: header,
        data: formData
    })
}
ApiService.Delete = function(controller, id) {
    return fetch({
        url: API_BASE_URL + controller + '/' + id,
        method: 'delete',
        header: header
    })
}
ApiService.Test= function(func){
    func(false)
}

export default ApiService;