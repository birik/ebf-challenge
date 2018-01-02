import URI from 'urijs';

const API_ROOT = '/api/';

export function fetchFormData(url, formData, responseKey = '') {
  
  let fullUrl = url;
  if (url.indexOf(API_ROOT) === -1) {
    fullUrl = API_ROOT + url;
  }

  return fetch(fullUrl, formData).then(response => {
    if (response.status >= 500 && response.status < 600) {
      throw 'server is not responding: ' + fullUrl;
    }
    if (response.status >= 400 && response.status < 500) {
      return response.json().then(json => {
        if (json.error) {
          throw json;
        } else {
          throw 'error loading ' + fullUrl;
        }
      });
    }
    return response.json().then(json => {
      if (json.status && json.status === 'ERROR') {
        throw json;
      }
      if (responseKey) {
        let responseObj = {};
        responseObj[responseKey] = json;
        return responseObj;
      } 
      return json;
    });
  });
}

export function fetchGet(url, params = {}, responseKey = '') {

  let fullUrlParams = URI(url).query(params);
  return fetchFormData(fullUrlParams.href(), {
    method: 'get',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }, responseKey);
}

export function fetchPost(url, params = {}, responseKey = '') {
  return fetchFormData(url, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }, responseKey);
}

export function fetchPut(url, params = {}, responseKey = '') {
  return fetchFormData(url, {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }, responseKey);
}

export function fetchDelete(url, params = {}, responseKey = '') {
  let fullUrlParams = URI(url).query(params);
  return fetchFormData(fullUrlParams.href(), {
    method: 'delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }, responseKey);
}