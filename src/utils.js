import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
/* 
 function in progess implementation that manages all
 api error calls in client side through displaying
 pertinent error response views.
*/
function handleResError(commit, $router) {
  switch (statusCode) {
    case 500:
      return commit(types.ERROR_500, { $router })
    case 401:
      return commit(types.ERROR_401, { $router })
  }
}

export { axios, handleResError }
