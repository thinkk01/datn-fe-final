import React, { useState, useEffect } from "react";
import { getOrderById, getOrderDetailByOrderId } from "../api/OrderApi";
import { getPendingVnPay, getUrlVnpay } from "../api/VnPayApi";
import { useLocation } from "react-router-dom";
import axios from "axios";

const OrderDetail = (props) => {
  const [orderDetail, setOrderDetail] = useState([]);
  const [order, setOrder] = useState({});
  const [amount, setAmount] = useState();
  const [sale, setSale] = useState();
  const [total, setTotal] = useState();
  const [payment, setPayment] = useState();
  const [paymentUrl, setPaymentUrl] = useState("");
  const [oderId, setOrderId] = useState();
  const [voucher, setVoucher] = useState(null);
  const encode = atob(
    window.location.href.substring(window.location.href.lastIndexOf("/") + 1)
  );

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const orderResp = await getOrderById(encode);
        const orderDetailResp = await getOrderDetailByOrderId(encode);

        const orderData = orderResp.data;
        const orderDetails = orderDetailResp.data;

        setOrder(orderData);
        setSale(orderData.voucher ? orderData.voucher.discount : 0);
        setTotal(orderData.total);
        // setVoucher(
        //   orderData.voucher ? orderData.voucher.code : orderData.voucher.code
        // );

        setOrderDetail(orderDetails);
        const result = orderDetails.reduce(
          (price, item) => price + item.sellPrice * item.quantity,
          0
        );
        setPayment(orderDetails[0].order.payment);
        setAmount(result);
      } catch (error) {
        console.error("Error loading data", error);
      }
    };

    fetchOrderData();
  }, [encode]);

  useEffect(() => {
    if (total && order.id) {
      getUrlVnpay(total, order.id).then((response) => {
        setPaymentUrl(response.data);
      });
    }
  }, [total, order.id]);
  // GET pending
  const [isPending1, setIsPending1] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const fetchPendingStatus = async () => {
      try {
        const response = await getPendingVnPay();
      } catch (error) {
        console.error("Error fetching pending status:", error);
      }
    };

    fetchPendingStatus();
  }, [location]);
  const formatDate = (dateString) => {
    return dateString.split("T")[0];
  };
  return (
    <div className="container-fluid padding mb-5">
      <div className="col-10 offset-1 text ">
        <p
          className="display-4 text-primary"
          style={{
            fontSize: "34px",
            fontWeight: "bolder",
            textAlign: "center",
          }}
        >
          Thông tin chi tiết Đơn hàng #{order.id}
        </p>
      </div>
      <div
        className=" mb-5 mt-5"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <div className=" offset-1 text ">
          <p className="display-4 text-primary" style={{ fontSize: "24px" }}>
            Thông tin mua hàng
          </p>
          <p>Ngày tạo: {order.createDate}</p>
          <p>Người nhận: {order.fullname}</p>
          <p>Email: {order.email}</p>
        </div>
        <div className=" offset-1 text ">
          <p className="display-4 text-primary" style={{ fontSize: "24px" }}>
            Địa chỉ nhận hàng
          </p>
          <p>SDT: {order.phone}</p>
          <p>DC: {order.address}</p>
        </div>
      </div>
      <div className=" welcome mb-5 mt-5">
        <div className="col-full offset-1 mb-5">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Ngày tạo</th>
                <th scope="col">Size</th>
                <th scope="col">Giá</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Tổng</th>
                <th scope="col">Trạng thái thanh toán</th>
              </tr>
            </thead>
            <tbody>
              {orderDetail &&
                orderDetail.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{item.attribute.name}</th>
                    <td>{order.createDate}</td>
                    <td>{item.attribute.size}</td>
                    <td>{item.sellPrice.toLocaleString()}₫</td>
                    <td>{item.quantity}</td>
                    <td>
                      {(item.sellPrice * item.quantity).toLocaleString()}₫
                    </td>
                    <td>
                      {" "}
                      <div className="col text ">
                        <p
                          className="status-success"
                          style={{ fontWeight: "bolder" }}
                        >
                          {order && order.isPending ? (
                            "Đã thanh toán"
                          ) : payment === "Chuyển khoản qua VNPAY" ? (
                            <div className="text-black">
                              <p className="text-danger">Chưa Thanh Toán </p>
                              Vui lòng thanh toán{" "}
                              <a
                                className="text-primary"
                                href={paymentUrl ? paymentUrl : "#"}
                              >
                                Tại Đây
                              </a>
                            </div>
                          ) : (
                            <p className="text-danger">Chưa Thanh Toán </p>
                          )}
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="row mb-5">
            {/* <div className="col offset-8 text ">
              <p>Tạm tính: {amount && amount.toLocaleString()} đ</p>
              <p>
                Giảm giá: -{" "}
                {sale ? ((amount * sale) / 100).toLocaleString() : 0} đ
              </p>
              <p className="text-danger">
                Tổng cộng: {total && total.toLocaleString()} đ
              </p>
            </div> */}
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">Tổng tiền sản phẩm</th>
                  <th scope="col">Voucher sử dụng</th>
                  <th scope="col">Giảm giá / Voucher</th>
                  <th scope="col">Tổng tiền phải trả</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{amount && amount.toLocaleString()} đ</td>
                  <td>
                    {order.voucher?.code
                      ? order.voucher.code
                      : "Không có voucher nào sử dụng!"}
                    {/* {order.voucher !== null
                      ? order.voucher.code
                      : "Không có voucher nào sử dụng!"} */}
                  </td>
                  <td>
                    {" "}
                    {sale ? ((amount * sale) / 100).toLocaleString() : 0} đ
                  </td>
                  <td className="text-danger" style={{ fontWeight: "bolder" }}>
                    {total && total.toLocaleString()} đ
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row mb-5">
            {/* <div className="col text ">
              <p
                className="display-4 text-primary"
                style={{ fontSize: "24px" }}
              >
                Trạng thái thanh toán
              </p>
              <p className="text-danger" style={{ fontWeight: "bolder" }}>
                {order && order.isPending ? (
                  "Đã thanh toán"
                ) : payment === "Chuyển khoản qua VNPAY" ? (
                  <div className="text-black">
                    <p className="text-danger">Chưa Thanh Toán </p>
                    Vui lòng thanh toán{" "}
                    <a
                      className="text-primary"
                      href={paymentUrl ? paymentUrl : "#"}
                    >
                      Tại Đây
                    </a>
                  </div>
                ) : (
                  "Chưa Thanh Toán"
                )}
              </p>
            </div> */}
            {/* <div className="col text ">
              <p
                className="display-4 text-primary"
                style={{ fontSize: "24px" }}
              >
                Trạng thái đơn hàng
              </p>
              <p className="text-danger" style={{ fontWeight: "bolder" }}>
                {order.orderStatus && order.orderStatus.name}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col text ">
              <p
                className="display-4 text-primary"
                style={{ fontSize: "24px" }}
              >
                Phương thức thanh toán
              </p>
              <p className="text-danger" style={{ fontWeight: "bolder" }}>
                {order && order.payment}
              </p>
            </div>
          </div> */}
            <h4 class="offset-1  card-title text-newproduct mb-0 fw-bolder">
              Thông tin vận chuyển
            </h4>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">Shipment</th>
                  <th scope="col">Mã vận đơn</th>
                  <th scope="col">Ngày dự kiến giao hàng</th>
                  <th scope="col">Phương thức thanh toán</th>
                </tr>
              </thead>
              <tbody>
                {orderDetail &&
                  orderDetail.map((item, index) => (
                    <tr key={index}>
                      <td>
                        {order.shipment ? order.shipment : "Chưa có thông tin"}
                      </td>
                      <td>{order.code ? order.code : "Chưa có thông tin"}</td>

                      <td>
                        {" "}
                        {order.shipDate
                          ? formatDate(order.shipDate)
                          : "Chưa có thông tin"}
                      </td>
                      <td>
                        <p className="" style={{ fontWeight: "bolder" }}>
                          {order && order.payment}
                        </p>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
