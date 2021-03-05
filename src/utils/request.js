import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/6edfa78cfe748dbe238a2afaaf8ec5cf/jddj'
})

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      resolve(response.data)
    }).catch((err) => {
      reject(err)
    })
  })
}

export const get = (url, params) => {
  return new Promise((resolve, reject) => {
    instance.get(url, { params }).then((response) => {
      resolve(response.data)
    }).catch((err) => {
      reject(err)
    })
  })
}
