import axios from 'axios'

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      baseURL: 'https://www.fastmock.site/mock/6edfa78cfe748dbe238a2afaaf8ec5cf/jddj',
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
