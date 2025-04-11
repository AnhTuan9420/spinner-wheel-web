import httpClient from "utils/httpClient";

const path = "/pre-orders";

export const submitPreOrder = (data) => httpClient.post(`${path}/submit`, data);

export const sendSms = (data) => httpClient.post(`${path}/sendSms`, data);

export const getProductInfo = (params) =>
  httpClient.get(`${path}/product-info`, { params });

export const getStore = (params) =>
  httpClient.get(`${path}/get-list-store`, { params });

export const getDistrict = (params) =>
  httpClient.get(`${path}/get-district`, { params });

export const getProvince = (params) =>
  httpClient.get(`${path}/get-province`, { params });

export const createAccount = (data) =>
  httpClient.post(`${path}/create-account`, data);

export const createOrder = (data) =>
  httpClient.post(`${path}/create-order`, data);

export const createOrderDetail = (data) =>
  httpClient.post(`${path}/create-order-detail`, data);

export const checkPhone = (data) =>
  httpClient.post(`${path}/check-phone`, data);

export const getDetailPreOrder = (id) =>
  httpClient.get(`${path}/get-pre-order?preOrderId=${id}`);

export const getIpAddress = () =>
  fetch(
    "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
  ).then((response) => response.json());

export const getPaymented = async () =>
  httpClient.get(`${path}/paymented-pre-order`);
//Coming soon
export const submitVoucher = (data) =>
  httpClient.post(`${path}/submit-voucher`, data);

export const getVoucher = () => httpClient.get(`${path}/voucher`);

export const submitSubscribe = (data) =>
  httpClient.post(`${path}/submit-subscribe`, data);
//

export const getDeposit = () => httpClient.get(`${path}/deposit`); // Lay so tien tra trc

//Lấy discount money từ coupon_code
export const getDiscountMoney = (data) =>
  httpClient.post(`${path}/discount-money`, data);

export const checkIp = () => httpClient.get(`${path}/check-ip`);
