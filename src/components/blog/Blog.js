import React, { useEffect } from "react";
import "./Blog.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Blog = (props) => {
  useEffect(() => {
    props.changeHeaderHandler(4);
  }, [props]);

  return (
    <div className="col-10 offset-1  mt-7">
      <div className="welcome padding-40px background-color-xam mb-head ">
        <div className="row ">
          {" "}
          <NavLink to="/">
            <u>Trang chủ </u>
          </NavLink>{" "}
          / Chính Sách
        </div>
        <h4 className="card-title text-newproduct mb-0 fw-bolder">
          Chính Sách
        </h4>
      </div>
      <div>
        <h4 className="text-uppercase text-danger">Cam kết sản phẩm</h4>
        <p>
          1 . Tất cả sản phẩm Sneaker bán ra 100% là Chính Hãng , được nhập 100%
          từ các nước như MỸ, ANH, NHẬT, HÀN, VIỆT NAM… Full Box, tem tag giấy
          gói. Giấy giữ form giày sẽ bỏ khi vận chuyển, khách hàng yêu cầu vẫn
          có.
        </p>
        <p>
          2 . Tất cả sản phẩm được nhập từ website Adidas US, Adidas UK, Adidas
          Japan, Adidas Korea, Adidas Việt Nam
        </p>
        <p>
          3 . Chúng Tôi chịu trách nhiệm 100% sản phẩm của Chúng Tôi bán ra ,
          nếu Quý Khách phát hiện BountySneakers bán hàng nhái , hàng fake Chúng
          Tôi sẽ đền tiền gấp 10 lần giá trị sản phẩm Quý Khách mua hàng.
        </p>
        <hr />
      </div>
      <div>
        <h4 className="text-uppercase text-danger">Chính sách thanh toán</h4>
        <p>
          1 . Thanh toán trực tuyến: Khách hàng có thể thanh toán bằng thẻ tín
          dụng, thẻ ghi nợ, hoặc các phương thức thanh toán trực tuyến khác như
          ví điện tử.
        </p>
        <p>
          2 . Thanh toán khi nhận hàng (COD): Áp dụng cho đơn hàng giao trong
          nội thành và một số khu vực hỗ trợ COD.
        </p>
        <hr />
      </div>
      <div>
        <h4 className="text-uppercase text-danger">Chính sách đặt hàng</h4>
        <p>
          1 . Đặt hàng trực tuyến: Khách hàng có thể đặt hàng qua website chính
          thức của Thinkk Shoes hoặc các kênh bán hàng trực tuyến được ủy quyền.
        </p>
        <p>
          2 . Đặt hàng trực tiếp: Khách hàng có thể đến cửa hàng để mua trực
          tiếp và được nhân viên hỗ trợ tư vấn.
        </p>
        <hr />
      </div>
      <div>
        <h4 className="text-uppercase text-danger">
          HỖ TRỢ MUA HÀNG VÀ ĐỔI TRẢ
        </h4>
        <p>1 . Bảo Hành Chính Hãng Trọn Đời Cho Quý Khách .</p>
        <p>
          2 . Bảo Hành Bong Tróc, Sổ Chỉ, Bung Keo, Hỏng Đế, Lỗi Sản Phẩm… Chúng
          Tôi sẽ Bảo Hành cho Quý Khách trong vòng 1 tháng . Sẽ tiến hành sửa
          chữa khắc phục cho Quý Khách
        </p>
        <p>
          3 . Khách Hàng mua hàng phải có Hoá Đơn Mua Hàng (Hoá đơn online khi
          đặt hàng) để chúng Tôi xác minh thời gian được Bảo Hành.
        </p>
        <hr />
      </div>
      <div>
        <h6 className="fw-fw-bolder">* Những trường hợp không được Bảo Hành</h6>
        <p>
          1 . Khách Hàng bảo quản không tốt sản phẩm , dùng hoá chất tẩy rửa để
          làm sạch vết bẩn.
        </p>
        <p>2 . Lỗi do không phải tự nhiên thì sẽ không được Bảo Hành.</p>
        <p>3 . Không có hoá đơn sẽ không được Bảo Hành.</p>
        <p>
          4 . Hỗ trợ đổi size nếu không vừa trong vòng 3 ngày. giữ nguyên tag.
          Trường hợp hết size đổi mẫu khác, trả lại hàng mất phí 150.000đ.
        </p>
        <hr />
      </div>
    </div>
  );
};

export default Blog;
