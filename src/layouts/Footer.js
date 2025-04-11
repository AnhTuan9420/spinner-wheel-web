import fb from "assets/bw_image/Face.png";
import youtube from "assets/bw_image/Youtube.png";
import zalo from "assets/bw_image/Zalo.png";
import logo from "assets/bw_image/0012445_Logo_ShopDunk.png";
import ChatBox from "./ChatBox";
import { BASENAME } from "utils/contants";
function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-upper">
        <div className="footer-block follow-us">
          <div className="header-logo">
            <a href={BASENAME}>
              {" "}
              <img alt="ShopDunk" src={logo} />{" "}
            </a>
          </div>
          <div className="topic-block">
            <div className="topic-block-body">
              <p className="ft_gioithieu">
                Năm 2020, ShopDunk trở thành đại lý ủy quyền của Apple. Chúng
                tôi phát triển chuỗi cửa hàng tiêu chuẩn và Apple Mono Store
                nhằm mang đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của
                Apple cho người dùng Việt Nam.
              </p>
            </div>
          </div>
          <div className="social">
            <div className="title">
              <strong>Theo chúng tôi</strong>
            </div>
            <ul className="networks">
              <li className="facebook">
                <a
                  href="https://www.facebook.com/shopdunk.store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={fb} alt="" />
                </a>
              </li>
              <li className="twitter">
                <a
                  href="https://www.tiktok.com/@shopdunk_apple"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youtube} alt="" />
                </a>
              </li>
              <li className="rss">
                <a href="https://zalo.me/3937868610324741136">
                  <img src={zalo} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-block information">
          <div className="title">
            <strong>Thông tin</strong>
          </div>
          <ul className="list">
            <li>
              <a href="/tin-tuc">Tin Tức</a>
            </li>
            <li>
              <a href="/gioi-thieu">Giới thiệu </a>
            </li>
            <li>
              <a href="/check-imei">Check IMEI</a>
            </li>
            <li>
              <a href="/phuong-thuc-thanh-toan">Phương thức thanh toán</a>
            </li>
            <li>
              <a href="/thue-diem-ban-le">Thuê điểm bán lẻ</a>
            </li>
            <li>
              <div className="topic-block">
                <div className="topic-block-body">
                  <ul>
                    <li>
                      <a
                        href="https://shopdunk.com/care"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Bảo hành và sửa chữa
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="topic-block">
                <div className="topic-block-body">
                  <ul>
                    <li>
                      <a
                        href="https://vieclam.shopdunk.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Tuyển dụng
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="/web-review">Đánh giá chất lượng, khiếu nại</a>
            </li>
          </ul>
        </div>
        <div className="footer-block customer-service">
          <div className="title">
            <strong>Chính sách</strong>
          </div>
          <ul className="list">
            <li>
              <a href="/thu-cu-doi-moi">Thu cũ đổi mới</a>
            </li>
            <li>
              <a href="/chinh-sach-ship-cod">Giao hàng</a>
            </li>
            <li>
              <a href="/giao-hang-zalopay">Giao hàng (ZaloPay)</a>
            </li>
            <li>
              <a href="/chinh-sach-huy-giao-dich-va-hoan-tien">
                Huỷ giao dịch{" "}
              </a>
            </li>
            <li>
              <a href="/chinh-sach-doi-tra">Đổi trả</a>
            </li>
            <li>
              <a href="/chinh-sach-bao-hanh">Bảo hành</a>
            </li>
            <li>
              <a href="/dich-vu">Dịch vụ</a>
            </li>
            <li>
              <a href="/giai-quyet-khieu-nai">Giải quyết khiếu nại</a>
            </li>
            <li>
              <a href="/chinh-sach-bao-mat">Bảo mật thông tin</a>
            </li>
          </ul>
        </div>
        <div className="footer-block my-account">
          <div className="title">
            <strong>Địa chỉ &amp; Liên hệ</strong>
          </div>
          <ul className="list">
            <li>
              <a href="/customer/info">Tài khoản của tôi</a>
            </li>
            <li>
              <a href="/order/history">Đơn đặt hàng</a>
            </li>
            <li>
              <a href="/find-store">Hệ thống cửa hàng</a>
            </li>
            <li>
              <div className="topic-block">
                <div className="topic-block-body">
                  <ul>
                    <li>
                      <a
                        href="https://www.google.com/maps/@/data=!3m1!4b1!4m3!11m2!2s0Vq6CiZoSh-QELJ3lKHSgQ!3e3?shorturl=1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Tìm Store trên Google Map
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="contact-footer">
              <div className="topic-block">
                <div className="topic-block-body">
                  <ul>
                    <li>
                      <a href="tel:19006626">
                        Mua hàng:{" "}
                        <span style={{ color: "#06c", fontSize: "16px" }}>
                          1900.6626{" "}
                        </span>
                      </a>

                      <ul>
                        <li>
                          <span
                            style={{
                              color: "#86868b",
                              paddingLeft: "15px",
                              display: "flex",
                              lineHeight: "20px",
                            }}
                          >
                            Nhánh 1: khu vực Hà Nội và các tỉnh phía bắc
                          </span>
                        </li>
                        <li>
                          <span
                            style={{
                              color: "#86868b",
                              paddingLeft: "15px",
                              display: "flex",
                              lineHeight: "20px",
                            }}
                          >
                            Nhánh 2: khu vực Hồ Chí Minh và các tỉnh phía nam
                          </span>
                        </li>
                        <li>
                          <span
                            style={{
                              color: "#86868b",
                              paddingLeft: "15px",
                              display: "flex",
                              lineHeight: "20px",
                            }}
                          >
                            Nhánh 3: Khiếu nại và góp ý
                          </span>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="tel:0822688668">
                        Doanh nghiệp:{" "}
                        <span style={{ color: "#06c" }}>0822.688.668</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-lower">
        <div className="footer-info">
          <span className="footer-disclaimer">
            © 2016 Công ty Cổ Phần HESMAN Việt Nam GPDKKD: 0107465657 do Sở KH
            &amp; ĐT TP. Hà Nội cấp ngày 08/06/2016. <br /> Địa chỉ: Số 76 Thái
            Hà, phường Trung Liệt, quận Đống Đa, thành phố Hà Nội, Việt Nam
            <br />
            Đại diện pháp luật: PHẠM MẠNH HÒA | ĐT: 0247.305.9999 | Email:
            lienhe@shopdunk.com
          </span>
          <a href="http://online.gov.vn/(X(1)S(jfktnnku5rui3vjf5pnk4sgc))/Home/WebDetails/34144?AspxAutoDetectCookieSupport=1">
            <img
              src="https://shopdunk.com/images/uploaded-source/Trang%20ch%E1%BB%A7/Bocongthuong.png"
              alt=""
            />
          </a>
        </div>
      </div>
      <ChatBox />
    </div>
  );
}

export default Footer;
