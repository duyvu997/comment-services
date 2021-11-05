const axios = require("axios")

const httpClient = (baseURL) => {
  const config = {
    baseURL,
    timeout: 30000,
  };

  const instance = axios.create(config);

  //Request interceptor
  instance.interceptors.request.use(
    function (config) {
      // Add access token or other config
      return config;
    },
    function (error) {
      console.error(error);
      return Promise.reject(error);
    }
  );

  //Response interceptor
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // Add handler for error
      return Promise.reject(error);
    }
  );

  const methods = {
    /**
     * get.
     * @param {String} url Url
     * @return {Promise} Promise
     */
    get(url, config) {
      return instance.get(url, config);
    },

    /**
     * delete.
     * @param {String} url Url
     * @return {Promise} Promise
     */
    delete(url) {
      return instance.delete(url);
    },

    /**
     * post.
     * @param {String} url Url
     * @param {Object} data Data
     * @return {Promise} Promise
     */
    post(url, data, config = null) {
      return instance.post(url, data, config);
    },

    /**
     * put.
     * @param {String} url Url
     * @param {Object} data Data
     * @return {Promise} Promise
     */
    put(url, data) {
      return instance.put(url, data);
    },

    /**
     * put.
     * @param {String} url Url
     * @param {Object} data Data
     * @return {Promise} Promise
     */
    patch(url, data) {
      return instance.patch(url, data);
    },
  };
  return methods
};

module.exports =  httpClient;
