import axios from "axios";
import CONFIG from "config/config";
// const API_AUTH_REFRESH_TOKEN = "auth/refresh-token";

const httpClient = () => {
  /**
   * Chuyen doi, format du lieu tu api tra ve cho dong bo
   * @param {Object|null} data
   * @return {Object|null}
   */
  const convertApiErrData = (data) => {
    if (data) {
      let { errors: errArr } = data;

      if (Array.isArray(errArr) && errArr.length) {
        let errors = [];
        errArr.forEach((err) => {
          errors = errors.concat(err.messages || []);
        });
        Object.assign(data, { errors });
      }
    }
    return data;
  };

  const instance = axios.create({
    baseURL: CONFIG.API_URL_ROOT_PAYMENT,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.request.use(
    (config) => {
      // const token = getAccessToken();
      // //If refresh token then update Token Request
      // if (token) {
      //   // console.log({ token, url: config.url })
      //   config.headers['Authorization'] = 'Bearer ' + token;
      // }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      const { config } = response;

      if (config.responseType && config.responseType === "blob") {
        return response;
      }
      // let { data: apiData } = response.data;
      return response.data;
    },
    async (err) => {
      let { data: apiData = {}, status } = err.response || {};
      apiData = Object.assign(apiData, { status });
      if (!apiData.status) {
        return Promise.reject("Vui lòng kiểm tra lại kết nối.");
      }
      if (status === 501 || status === 400 || status === 404) {
        return Promise.reject(convertApiErrData(apiData));
      }
      if (status === 500) {
        return Promise.reject("Lỗi kết nối đến máy chủ");
      }
      return Promise.reject(apiData);
    }
  );
  return instance;
};

export default httpClient();
