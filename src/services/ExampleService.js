import fetch from 'auth/FetchInterceptor'

const exampleService = {}

exampleService.getActivities = function (params) {
  return fetch({
    url: 'https://localhost:44364/api/Activities',
    method: 'get',
		data: {
		  results: 5,
		  ...params,
		},
		type: 'json',
  })
}

exampleService.setPost = function (data) {
  return fetch({
    url: '/posts',
    method: 'post',
    data: data
  })
}

export default exampleService