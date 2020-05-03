import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

function handleResError (statusCode, commit, types) {
  switch (statusCode) {
    case 500:
      return commit(types.ERROR_500)
    case 401:
      return commit(types.ERROR_401)
  }
}

export { axios, handleResError }
