import Instance from "../axios/Instance";

export const getUrlVnpay = (price, billID) => {
  const url = `/api/site/pay-bill?price=${price}&orderId=${billID}`;
  return Instance.get(url);
};
export const getPendingVnPay = () => {
  const url = "/api/site/get-pending-status";
  return Instance.get(url);
};
