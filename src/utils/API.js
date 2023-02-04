import axios from "axios"

const ROOTURL = "https://msm.techelectron.com/"

// defining method
const get = (path) => {
  return axios.get(`${ROOTURL}${path}`).then((response) => {
    if (response.error_code === 403) return { success: false, error_code: 403 }
    else {
      return response
    }
  })
  .catch((error) => {
    return error
  })
}

const post = (path, body) => {
  return axios
    .post(`${ROOTURL}${path}`, body)
    .then((response) => {
      if (response.error_code === 403) return { success: false, error_code: 403 }
      else {
        return { success: true, data: response }
      }
    })
    .catch((error) => {
      return error
    })
}

const put = (path, body) => {
    return axios
      .put(`${ROOTURL}${path}`, body)
      .then((response) => {
        if (response.error_code === 403) return { success: false, error_code: 403 }
        else {
          return { success: true, data: response }
        }
      })
      .catch((error) => {
        return error
      })
  }

  const deleteApi = (path, body) => {
    return axios
      .delete(`${ROOTURL}${path}`, body)
      .then((response) => {
        if (response.error_code === 403) return { success: false, error_code: 403 }
        else {
          return { success: true, data: response }
        }
      })
      .catch((error) => {
        return error
      })
  }

// Function for handling api operations
export const API = async (method, path, body) => {
  switch (method) {
    case "get":
      return await get(path).then((response) => {
        return response
      })
    case "post":
      return await post(path, body).then((response) => {
        return response
      })
    case "put":
      return await put(path, body).then((response) => {
        return response
      })
    case "delete":
      return await deleteApi(path, body).then((response) => {
        return response
      })
    default:
      break
  }
}

export default API
