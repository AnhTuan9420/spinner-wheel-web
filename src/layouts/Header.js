import logo from "assets/bw_image/0012445_Logo_ShopDunk.png";
import { BASENAME } from "utils/contants";

function Header(props) {
  const renderAccount = () => {
    return (
      <div className="account-desktop">
        <div className="header-links">
          <ul className="popup-header-links">
            <li className="li_ico-register">
              <a href="/register?returnUrl=%2F" className="ico-register">
                Tạo tài khoản ngay
              </a>
            </li>
            <li className="li_ico-login">
              <a href="/login?returnUrl=%2F" className="ico-login">
                Đăng nhập
              </a>
            </li>
            <li className="li_ico-wishlist">
              <a href="/wishlist" className="ico-wishlist">
                <span className="wishlist-label">Danh sách yêu thích</span>{" "}
                <span className="wishlist-qty">(0)</span>{" "}
              </a>
            </li>
            <li id="topcartlink">
              <a href="/cart" className="ico-cart">
                <span className="cart-label">Giỏ hàng</span>
                <span className="cart-qty">2</span>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  // const renderHeaderMobile = () => {
  //   return (
  //     <div className="header-menu mobile">
  //       <ul className="top-menu notmobile">
  //         <li className="category-menu-items">
  //           <a href="/iphone"> iPhone </a>
  //           <div className="sublist-toggle"></div>
  //           <ul className="sublist first-level">
  //             <li className="category-menu-items">
  //               <a href="/iphone-14-series"> iPhone 14 series </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/iphone-13-series"> iPhone 13 series </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/iphone-12-series"> iPhone 12 series </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/iphone-11-series"> iPhone 11 series </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/iphone-se-series"> iPhone SE </a>
  //             </li>
  //           </ul>
  //         </li>
  //         <li className="category-menu-items">
  //           <a href="/ipad"> iPad </a>
  //           <div className="sublist-toggle"></div>
  //           <ul className="sublist first-level">
  //             <li className="category-menu-items">
  //               <a href="/ipad-pro-m1"> iPad Pro M1 </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/ipad-pro-m2"> iPad Pro M2 </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/ipad-air"> iPad Air </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/ipad-9"> iPad 9 </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/ipad-10"> iPad 10 </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/ipad-mini"> iPad Mini </a>
  //             </li>
  //           </ul>
  //         </li>
  //         <li className="category-menu-items">
  //           <a href="/mac"> Mac </a>
  //           <div className="sublist-toggle"></div>
  //           <ul className="sublist first-level">
  //             <li className="category-menu-items">
  //               <a href="/macbook-pro"> MacBook Pro </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/macbook-air"> MacBook Air </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/imac"> iMac </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/mac-mini"> Mac Mini </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/mac-pro"> Mac Pro </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/mac-studio"> Mac Studio </a>
  //             </li>
  //           </ul>
  //         </li>
  //         <li className="category-menu-items">
  //           <a href="/apple-watch"> Watch </a>
  //           <div className="sublist-toggle"></div>
  //           <ul className="sublist first-level">
  //             <li className="category-menu-items">
  //               <a href="/apple-watch-ultra"> Apple Watch Ultra </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/apple-watch-series-8"> Apple Watch Series 8 </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/apple-watch-series-7"> Apple Watch Series 7 </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/apple-watch-series-6"> Apple Watch Series 6 </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/apple-watch-se"> Apple Watch SE </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/apple-watch-series-3"> Apple Watch Series 3 </a>
  //             </li>
  //           </ul>
  //         </li>
  //         <li className="category-menu-items">
  //           <a href="/am-thanh"> Âm thanh </a>
  //           <div className="sublist-toggle"></div>
  //           <ul className="sublist first-level">
  //             <li className="category-menu-items">
  //               <a href="/airpods-pro"> AirPods Pro </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/loa-marshall"> Marshall </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/loa-beats"> Beats </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/loa-harman-kardon"> Harman Kardon </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/loa-jbl"> JBL </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/loa-google"> Google </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/sony"> Sony </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/loa-jabra"> Jabra </a>
  //             </li>
  //           </ul>
  //         </li>
  //         <li className="category-menu-items">
  //           <a href="/phu-kien"> Phụ kiện </a>
  //           <div className="sublist-toggle"></div>
  //           <ul className="sublist first-level">
  //             <li className="category-menu-items">
  //               <a href="/cuong-luc-bao-ve"> Cường lực bảo vệ </a>
  //               <div className="sublist-toggle"></div>
  //               <ul className="sublist">
  //                 <li className="category-menu-items">
  //                   <a href="/cuong-luc-bao-ve-mac"> Mac </a>
  //                 </li>
  //                 <li className="category-menu-items">
  //                   <a href="/c%C6%B0%E1%BB%9Dng-l%E1%BB%B1c-watch"> Watch</a>
  //                 </li>
  //               </ul>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/sac-cap"> Sạc, cáp </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/bao-da-op-lung"> Bao da/ Ốp lưng </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/balo-tui-chong-soc"> Balo/ Túi chống sốc </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/may-anh"> Máy ảnh </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/may-doc-sach"> Máy đọc sách </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/dong-ho-garmin"> Đồng hồ Garmin </a>
  //             </li>
  //           </ul>
  //         </li>
  //         <li className="topic-items">
  //           <a href="/dich-vu">
  //             Dịch vụ{" "}
  //             <svg
  //               width="12"
  //               height="4"
  //               viewBox="0 0 18 10"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 d="M16.2253 1.00096C16.4386 1.00096 16.6239 1.06736 16.7811 1.20017C16.927 1.33297 17 1.50154 17 1.70585C17 1.89996 16.9214 2.06852 16.7642 2.21154L9.97684 8.60158C9.70737 8.86719 9.38737 9 9.01684 9C8.63509 9 8.30386 8.86719 8.02316 8.60158L1.23579 2.21154C1.0786 2.0583 1 1.88974 1 1.70586C1 1.52197 1.07298 1.35851 1.21895 1.21549C1.36491 1.07247 1.55018 1.00096 1.77474 1.00096C1.98807 0.990742 2.16772 1.06225 2.31368 1.21549L9 7.51359L15.6863 1.21549C15.8323 1.07247 16.0119 1.00096 16.2253 1.00096Z"
  //                 fill="white"
  //                 stroke="white"
  //               ></path>
  //             </svg>{" "}
  //           </a>
  //           <div className="child-menu">
  //             <div className="child-menu-content">
  //               <a href="/care">Bảo Hành Uỷ Quyền Apple (ShopDunk Care)</a>{" "}
  //               <a href="/than-so-hoc">Tra cứu thần số học</a>{" "}
  //               <a href="/tra-gop">Trả Góp</a>{" "}
  //               <a href="/thu-cu-doi-moi">Thu Cũ Đổi Mới</a>{" "}
  //               <a href="/workshop">WorkShop</a> <a href="/mbti">MBTI</a>{" "}
  //               <a href="/sim">Sim Thẻ</a>
  //             </div>
  //           </div>
  //         </li>
  //         <li className="news-category-menu">
  //           <a href="/tin-tuc">Tin Tức</a>
  //         </li>
  //         <li className="menu-news-items" style={{ marginBottom: 0 }}>
  //           <a href="/khuyen-mai">Khuyến mại</a>
  //         </li>
  //       </ul>
  //       <div className="menu-toggle"></div>
  //       <ul className="top-menu mobile">
  //         <div className="header-links">
  //           <ul className="popup-header-links">
  //             <li className="li_ico-register">
  //               <a href="/register?returnUrl=%2F" className="ico-register">
  //                 Tạo tài khoản ngay
  //               </a>
  //             </li>
  //             <li className="li_ico-login">
  //               <a href="/login?returnUrl=%2F" className="ico-login">
  //                 Đăng nhập
  //               </a>
  //             </li>
  //             <li className="li_ico-wishlist">
  //               <a href="/wishlist" className="ico-wishlist">
  //                 <span className="wishlist-label">Danh sách yêu thích</span>{" "}
  //                 <span className="wishlist-qty">(0)</span>{" "}
  //               </a>
  //             </li>
  //             <li id="topcartlink">
  //               <a href="/cart" className="ico-cart">
  //                 <span className="cart-label">Giỏ hàng</span>
  //                 <span className="cart-qty">2</span>
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //         <div
  //           className="block block-account-navigation customer-navigation"
  //           style={{ display: "none" }}
  //         >
  //           <div className="title">
  //             <strong>Tài khoản của tôi</strong>
  //           </div>
  //           <div className="listbox">
  //             <ul className="list">
  //               <li className="customer-info active">
  //                 <a href="/customer/info">Thông tin tài khoản</a>
  //               </li>
  //               <li className="customer-addresses inactive">
  //                 <a href="/customer/addresses">Địa chỉ nhận hàng</a>
  //               </li>
  //               <li className="customer-orders inactive">
  //                 <a href="/order/history">Đơn đặt hàng</a>
  //               </li>
  //               <li className="customer-my-system inactive">
  //                 <a href="/customer/my-system">Hệ thống</a>
  //               </li>
  //               <li className="downloadable-products inactive">
  //                 <a href="/customer/downloadableproducts">
  //                   Sản phẩm có thể tải xuống
  //                 </a>
  //               </li>
  //               <li className="back-in-stock-subscriptions inactive">
  //                 <a href="/backinstocksubscriptions/manage">
  //                   Đăng ký nhận tin khi hàng về
  //                 </a>
  //               </li>
  //               <li className="reward-points inactive">
  //                 <a href="/rewardpoints/history">Điểm thưởng</a>
  //               </li>
  //               <li className="change-password inactive">
  //                 <a href="/customer/changepassword">Đổi mật khẩu</a>
  //               </li>
  //               <li className="customer-avatar inactive">
  //                 <a href="/customer/avatar">Ảnh đại diện</a>
  //               </li>
  //               <li className="customer-reviews inactive">
  //                 <a href="/customer/productreviews">
  //                   Lịch sử đánh giá sản phẩm
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //         <li className="category-menu-items">
  //           <a href="/apple-care"> Apple Care </a>
  //         </li>
  //         <li className="category-menu-items">
  //           <a href="/thu-cu-doi-moi"> Thu Cũ Đổi Mới </a>
  //           <div className="sublist-toggle"></div>
  //           <ul className="sublist first-level">
  //             <li className="category-menu-items">
  //               <a href="/tis-iphone"> iPhone </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/tis-ipad"> iPad </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/tis-applewatch"> Apple Watch </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/tis-macbook"> Macbook </a>
  //             </li>
  //           </ul>
  //         </li>
  //         <li className="category-menu-items">
  //           <a href="/iphone-14-8"> iPhone 14 </a>
  //         </li>
  //         <li className="category-menu-items">
  //           <a href="/iphone-13-6"> iPhone 13 </a>
  //         </li>
  //         <li className="category-menu-items">
  //           <a href="/sim"> Sim Số </a>
  //         </li>
  //         <li className="category-menu-items">
  //           <a href="/iphone"> iPhone </a>
  //           <div className="sublist-toggle"></div>
  //           <ul className="sublist first-level">
  //             <li className="category-menu-items">
  //               <a href="/iphone-14-series"> iPhone 14 series </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/iphone-13-series"> iPhone 13 series </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/iphone-12-series"> iPhone 12 series </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/iphone-11-series"> iPhone 11 series </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/iphone-se-series"> iPhone SE </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/iphone-14-den-40-trieu"> iPhone 14 - 40 triệu </a>
  //             </li>
  //           </ul>
  //         </li>
  //         <li className="category-menu-items">
  //           <a href="/ipad"> iPad </a>
  //           <div className="sublist-toggle"></div>
  //           <ul className="sublist first-level">
  //             <li className="category-menu-items">
  //               <a href="/ipad-pro-m1"> iPad Pro M1 </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/ipad-pro-m2"> iPad Pro M2 </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/ipad-air"> iPad Air </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/ipad-9"> iPad 9 </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/ipad-10"> iPad 10 </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/ipad-mini"> iPad Mini </a>
  //             </li>
  //           </ul>
  //         </li>
  //         <li className="category-menu-items">
  //           <a href="/mac"> Mac </a>
  //           <div className="sublist-toggle"></div>
  //           <ul className="sublist first-level">
  //             <li className="category-menu-items">
  //               <a href="/macbook-pro"> MacBook Pro </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/macbook-air"> MacBook Air </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/imac"> iMac </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/mac-mini"> Mac Mini </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/mac-pro"> Mac Pro </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/mac-studio"> Mac Studio </a>
  //             </li>
  //           </ul>
  //         </li>
  //         <li className="category-menu-items">
  //           <a href="/apple-watch"> Watch </a>
  //           <div className="sublist-toggle"></div>
  //           <ul className="sublist first-level">
  //             <li className="category-menu-items">
  //               <a href="/apple-watch-ultra"> Apple Watch Ultra </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/apple-watch-series-8"> Apple Watch Series 8 </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/apple-watch-series-7"> Apple Watch Series 7 </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/apple-watch-series-6"> Apple Watch Series 6 </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/apple-watch-se"> Apple Watch SE </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/apple-watch-series-3"> Apple Watch Series 3 </a>
  //             </li>
  //           </ul>
  //         </li>
  //         <li className="category-menu-items">
  //           <a href="/am-thanh"> Âm thanh </a>
  //           <div className="sublist-toggle"></div>
  //           <ul className="sublist first-level">
  //             <li className="category-menu-items">
  //               <a href="/airpods"> Airpods </a>
  //               <div className="sublist-toggle"></div>
  //               <ul className="sublist">
  //                 <li className="category-menu-items">
  //                   <a href="/airpods-3"> Airpods </a>
  //                 </li>
  //               </ul>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/airpods-pro"> AirPods Pro </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/earpods"> EarPods </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/loa-marshall"> Marshall </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/loa-beats"> Beats </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/loa-harman-kardon"> Harman Kardon </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/loa-jbl"> JBL </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/loa-google"> Google </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/sony"> Sony </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/audio-technica"> Audio Technica </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/loa-jabra"> Jabra </a>
  //             </li>
  //           </ul>
  //         </li>
  //         <li className="category-menu-items">
  //           <a href="/phu-kien"> Phụ kiện </a>
  //           <div className="sublist-toggle"></div>
  //           <ul className="sublist first-level">
  //             <li className="category-menu-items">
  //               <a href="/cuong-luc-bao-ve"> Cường lực bảo vệ </a>
  //               <div className="sublist-toggle"></div>
  //               <ul className="sublist">
  //                 <li className="category-menu-items">
  //                   <a href="/cuong-luc-iphone"> iPhone </a>
  //                   <div className="sublist-toggle"></div>
  //                   <ul className="sublist">
  //                     <li className="category-menu-items">
  //                       <a href="/cuong-luc-iphone-14"> iPhone 14 series</a>
  //                       <div className="sublist-toggle"></div>
  //                       <ul className="sublist">
  //                         <li className="category-menu-items">
  //                           <a href="/cuong-luc-iphone-14-pro-max">
  //                             iPhone 14 Pro Max{" "}
  //                           </a>
  //                         </li>
  //                         <li className="category-menu-items">
  //                           <a href="/cuong-luc-iphone-14-pro">
  //                             iPhone 14 Pro{" "}
  //                           </a>
  //                         </li>
  //                         <li className="category-menu-items">
  //                           <a href="/cuong-luc-iphone-14-plus">
  //                             iPhone 14 Plus{" "}
  //                           </a>
  //                         </li>
  //                         <li className="category-menu-items">
  //                           <a href="/cuong-luc-iphone-14-thuong">iPhone 14 </a>
  //                         </li>
  //                       </ul>
  //                     </li>
  //                     <li className="category-menu-items">
  //                       <a href="/cuong-luc-iphone-13-series">
  //                         {" "}
  //                         iPhone 13 series{" "}
  //                       </a>
  //                       <div className="sublist-toggle"></div>
  //                       <ul className="sublist">
  //                         <li className="category-menu-items">
  //                           <a href="/cuong-luc-iphone-13-pro-max">
  //                             iPhone 13 Pro Max{" "}
  //                           </a>
  //                         </li>
  //                         <li className="category-menu-items">
  //                           <a href="/cuong-luc-iphone-13-pro">
  //                             iPhone 13 Pro{" "}
  //                           </a>
  //                         </li>
  //                         <li className="category-menu-items">
  //                           <a href="/cuong-luc-iphone-13-thuong">iPhone 13 </a>
  //                         </li>
  //                       </ul>
  //                     </li>
  //                     <li className="category-menu-items">
  //                       <a href="/cuong-luc-iphone-12-series">
  //                         {" "}
  //                         iPhone 12 series{" "}
  //                       </a>
  //                       <div className="sublist-toggle"></div>
  //                       <ul className="sublist">
  //                         <li className="category-menu-items">
  //                           <a href="/cuong-luc-iphone-12-thuong">iPhone 12 </a>
  //                         </li>
  //                         <li className="category-menu-items">
  //                           <a href="/cuong-luc-iphone-12-pro">
  //                             iPhone 12 Pro{" "}
  //                           </a>
  //                         </li>
  //                         <li className="category-menu-items">
  //                           <a href="/cuong-luc-iphone-12-pro-max">
  //                             iPhone 12 Pro Max{" "}
  //                           </a>
  //                         </li>
  //                       </ul>
  //                     </li>
  //                     <li className="category-menu-items">
  //                       <a href="/cuong-luc-iphone-11-series">
  //                         {" "}
  //                         iPhone 11 series{" "}
  //                       </a>
  //                     </li>
  //                     <li className="category-menu-items">
  //                       <a href="/cuong-luc-iphone-xr"> iPhone XR </a>
  //                     </li>
  //                   </ul>
  //                 </li>
  //                 <li className="category-menu-items">
  //                   <a href="/cuong-luc-ipad"> iPad </a>
  //                   <div className="sublist-toggle"></div>
  //                   <ul className="sublist">
  //                     <li className="category-menu-items">
  //                       <a href="/cuong-luc-ipad-gen-9"> iPad Gen 9 </a>
  //                     </li>
  //                     <li className="category-menu-items">
  //                       <a href="/cuong-luc-ipad-gen-10">
  //                         {" "}
  //                         Cường lực iPad Gen 10{" "}
  //                       </a>
  //                     </li>
  //                     <li className="category-menu-items">
  //                       <a href="/cuong-luc-ipad-mini"> iPad Mini </a>
  //                     </li>
  //                     <li className="category-menu-items">
  //                       <a href="/cuong-luc-ipad-pro"> iPad Pro </a>
  //                     </li>
  //                     <li className="category-menu-items">
  //                       <a href="/cuong-luc-ipad-air"> iPad Air </a>
  //                     </li>
  //                   </ul>
  //                 </li>
  //                 <li className="category-menu-items">
  //                   <a href="/cuong-luc-bao-ve-mac"> Mac </a>
  //                   <div className="sublist-toggle"></div>
  //                   <ul className="sublist">
  //                     <li className="category-menu-items">
  //                       <a href="/cuong-luc-macbook-pro"> MacBook Pro</a>
  //                     </li>
  //                     <li className="category-menu-items">
  //                       <a href="/cuong-luc-macbook-air"> MacBook Air</a>
  //                     </li>
  //                   </ul>
  //                 </li>
  //                 <li className="category-menu-items">
  //                   <a href="/c%C6%B0%E1%BB%9Dng-l%E1%BB%B1c-watch"> Watch</a>
  //                 </li>
  //               </ul>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/sac-cap"> Sạc, cáp </a>
  //               <div className="sublist-toggle"></div>
  //               <ul className="sublist">
  //                 <li className="category-menu-items">
  //                   <a href="/cu-sac"> Củ sạc </a>
  //                 </li>
  //                 <li className="category-menu-items">
  //                   <a href="/cap"> Cáp </a>
  //                 </li>
  //                 <li className="category-menu-items">
  //                   <a href="/cong-chuyen"> Cổng chuyển </a>
  //                 </li>
  //               </ul>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/bao-da-op-lung"> Bao da/ Ốp lưng </a>
  //               <div className="sublist-toggle"></div>
  //               <ul className="sublist">
  //                 <li className="category-menu-items">
  //                   <a href="/op-lung-iphone"> Ốp lưng iPhone </a>
  //                   <div className="sublist-toggle"></div>
  //                   <ul className="sublist">
  //                     <li className="category-menu-items">
  //                       <a href="/op-lung-iphone-14-series">
  //                         {" "}
  //                         iPhone 14 series{" "}
  //                       </a>
  //                       <div className="sublist-toggle"></div>
  //                       <ul className="sublist">
  //                         <li className="category-menu-items">
  //                           <a href="/op-lung-iphone-14"> iPhone 14</a>
  //                         </li>
  //                         <li className="category-menu-items">
  //                           <a href="/op-lung-iphone-14-plus">
  //                             iPhone 14 Plus{" "}
  //                           </a>
  //                         </li>
  //                         <li className="category-menu-items">
  //                           <a href="/op-lung-iphone-14-pro"> iPhone 14 Pro </a>
  //                         </li>
  //                         <li className="category-menu-items">
  //                           <a href="/op-lung-iphone-14-pro-max">
  //                             iPhone 14 Pro Max{" "}
  //                           </a>
  //                         </li>
  //                       </ul>
  //                     </li>
  //                     <li className="category-menu-items">
  //                       <a href="/op-lung-iphone-13-series">
  //                         {" "}
  //                         iPhone 13 series{" "}
  //                       </a>
  //                       <div className="sublist-toggle"></div>
  //                       <ul className="sublist">
  //                         <li className="category-menu-items">
  //                           <a href="/op-lung-iphone-13-pro-max">
  //                             iPhone 13 Pro Max{" "}
  //                           </a>
  //                         </li>
  //                         <li className="category-menu-items">
  //                           <a href="/op-lung-iphone-13-pro"> iPhone 13 Pro </a>
  //                         </li>
  //                         <li className="category-menu-items">
  //                           <a href="/op-lung-iphone-13"> iPhone 13</a>
  //                         </li>
  //                         <li className="category-menu-items">
  //                           <a href="/op-lung-iphone-13-mini">
  //                             iPhone 13 mini{" "}
  //                           </a>
  //                         </li>
  //                       </ul>
  //                     </li>
  //                     <li className="category-menu-items">
  //                       <a href="/op-lung-iphone-12-series">
  //                         {" "}
  //                         iPhone 12 series{" "}
  //                       </a>
  //                     </li>
  //                     <li className="category-menu-items">
  //                       <a href="/op-lung-iphone-11-series">
  //                         {" "}
  //                         iPhone 11 series{" "}
  //                       </a>
  //                     </li>
  //                   </ul>
  //                 </li>
  //                 <li className="category-menu-items">
  //                   <a href="/op-lung-watch"> Ốp lưng Watch </a>
  //                 </li>
  //                 <li className="category-menu-items">
  //                   <a href="/bao-da-ipad"> Bao da iPad </a>
  //                   <div className="sublist-toggle"></div>
  //                   <ul className="sublist">
  //                     <li className="category-menu-items">
  //                       <a href="/bao-da-ipad-gen-9"> iPad Gen 9 </a>
  //                     </li>
  //                     <li className="category-menu-items">
  //                       <a href="/bao-da-ipad-gen-10"> Bao da iPad Gen 10 </a>
  //                     </li>
  //                     <li className="category-menu-items">
  //                       <a href="/bao-da-ipad-mini"> iPad Mini </a>
  //                     </li>
  //                     <li className="category-menu-items">
  //                       <a href="/bao-da-ipad-air"> iPad Air </a>
  //                     </li>
  //                     <li className="category-menu-items">
  //                       <a href="/bao-da-ipad-pro"> iPad Pro </a>
  //                     </li>
  //                   </ul>
  //                 </li>
  //               </ul>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/sac-du-phong"> Sạc dự phòng </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/balo-tui-chong-soc"> Balo/ Túi chống sốc </a>
  //               <div className="sublist-toggle"></div>
  //               <ul className="sublist">
  //                 <li className="category-menu-items">
  //                   <a href="/balo"> Balo </a>
  //                 </li>
  //                 <li className="category-menu-items">
  //                   <a href="/tui-chong-soc"> Túi chống sốc </a>
  //                 </li>
  //               </ul>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/chuot-ban-phim"> Chuột/ Bàn phím </a>
  //               <div className="sublist-toggle"></div>
  //               <ul className="sublist">
  //                 <li className="category-menu-items">
  //                   <a href="/phu-phim"> Phủ phím </a>
  //                   <div className="sublist-toggle"></div>
  //                   <ul className="sublist">
  //                     <li className="category-menu-items">
  //                       <a href="/phu-phim-macbook-air"> Macbook Air</a>
  //                     </li>
  //                     <li className="category-menu-items">
  //                       <a href="/phu-phim-macbook-pro"> Macbook Pro</a>
  //                     </li>
  //                   </ul>
  //                 </li>
  //                 <li className="category-menu-items">
  //                   <a href="/magic-mouse"> Chuột </a>
  //                 </li>
  //                 <li className="category-menu-items">
  //                   <a href="/ban-phim"> Bàn phím </a>
  //                 </li>
  //               </ul>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/but-apple-pencil"> Bút Apple Pencil </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/day-deo-apple-watch"> Dây đeo Apple Watch </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/airtags"> AirTags </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/may-anh"> Máy ảnh </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/may-doc-sach"> Máy đọc sách </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/apple-tv"> Apple TV </a>
  //             </li>
  //             <li className="category-menu-items">
  //               <a href="/dong-ho-garmin"> Đồng hồ Garmin </a>
  //             </li>
  //           </ul>
  //         </li>
  //         <li className="category-menu-items">
  //           <a href="/flash-sale"> Flash Sale </a>
  //         </li>
  //         <li className="items-services">
  //           <a href="/dich-vu">Dịch vụ</a>
  //           <div className="child-menu">
  //             <div
  //               className="child-menu-content show-down"
  //               id="show-down"
  //               style={{ display: "none" }}
  //             >
  //               <a href="/care">Bảo Hành Uỷ Quyền Apple (ShopDunk Care)</a>{" "}
  //               <a href="/than-so-hoc">Tra cứu thần số học</a>{" "}
  //               <a href="/tra-gop">Trả Góp</a>{" "}
  //               <a href="/thu-cu-doi-moi">Thu Cũ Đổi Mới</a>{" "}
  //               <a href="/workshop">WorkShop</a> <a href="/mbti">MBTI</a>{" "}
  //               <a href="/sim">Sim Thẻ</a>
  //             </div>
  //           </div>
  //           <button className="ic_lg_show s-down"></button>
  //         </li>
  //         <li className="news-category-menu">
  //           <a href="/tin-tuc">Tin Tức</a>
  //         </li>
  //         <li className="menu-news-items" style={{ marginBottom: "0" }}>
  //           <a href="/khuyen-mai">Khuyến mại</a>
  //         </li>
  //         <li>
  //           <a
  //             href="/logout"
  //             className="ico-logout"
  //             style={{ display: "none" }}
  //           >
  //             Đăng xuất
  //           </a>
  //         </li>
  //         <div className="language-selector">
  //           <div className="icon-language">
  //             <i className="fa-regular fa-globe"></i>
  //           </div>
  //           <div>
  //             <a
  //               style={{
  //                 fontSize: "16px",
  //                 marginLeft: "8px",
  //                 color: "#1d1d1f",
  //               }}
  //               data-toggle="collapse"
  //               href="#collapseExample"
  //               aria-expanded="false"
  //             >
  //               {" "}
  //               Ngôn ngữ <button className="ic_lg_show"></button>{" "}
  //             </a>
  //           </div>
  //           <div
  //             style={{ lineHeight: "24px", marginLeft: "24px" }}
  //             className="collapse"
  //             id="collapseExample"
  //           >
  //             <ul
  //               style={{ marginTop: "8px", marginBottom: "1px" }}
  //               className="cl-language-list"
  //             >
  //               <li className="lang-li-ddl">
  //                 <img
  //                   title="Tiếng Việt "
  //                   alt="Tiếng Việt "
  //                   className="selected"
  //                   src="assets/bw_image/flags/vn.png"
  //                 />{" "}
  //                 <a
  //                   style={{ fontSize: "14px", fontWeight: "400" }}
  //                   href="https://shopdunk.com/changelanguage/2?returnUrl=%2F"
  //                   className="cl-lang-active"
  //                 >
  //                   Tiếng Việt{" "}
  //                 </a>
  //               </li>
  //               <li className="lang-li-ddl">
  //                 <img
  //                   title="English"
  //                   alt="English"
  //                   src="assets/bw_image/flags/us.png"
  //                 />{" "}
  //                 <a
  //                   style={{ fontSize: "14px", fontWeight: "400" }}
  //                   href="https://shopdunk.com/changelanguage/1?returnUrl=%2F"
  //                 >
  //                   English
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //           <div className="language-selector-flags">
  //             <div className="flag">
  //               <a
  //                 href="https://shopdunk.com/changelanguage/2?returnUrl=%2F"
  //                 title="Tiếng Việt "
  //               >
  //                 <img
  //                   title="Tiếng Việt "
  //                   alt="Tiếng Việt "
  //                   className="selected"
  //                   src="assets/bw_image/flags/vn.png"
  //                 />{" "}
  //               </a>
  //             </div>
  //             <div className="flag">
  //               <a
  //                 href="https://shopdunk.com/changelanguage/1?returnUrl=%2F"
  //                 title="English"
  //               >
  //                 <img
  //                   title="English"
  //                   alt="English"
  //                   src="assets/bw_image/flags/us.png"
  //                 />{" "}
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </ul>
  //     </div>
  //   );
  // };

  return (
    <div className="header">
      <div className="header-lower">
        <div className="header-logo">
          <a href="/minigame">
            <h3>
              <img alt="ShopDunk" src={logo} />
            </h3>
            <h1 hidden>iPhone 16 (Pro Max/Pro/Plus): Cọc ngày 20, nhận ngày 27</h1>
          </a>
        </div>
        <div className="header-menu">
          <div className="menu-toggle"></div>
          <ul className="top-menu notmobile">
            <li className="category-menu-items">
              <a href="/iphone"> iPhone </a>
              {/* <div className="sublist-toggle"></div>
              <ul className="sublist first-level">
                <li className="category-menu-items">
                  <a href="/iphone-14-series"> iPhone 14 series </a>
                </li>
                <li className="category-menu-items">
                  <a href="/iphone-13-series"> iPhone 13 series </a>
                </li>
                <li className="category-menu-items">
                  <a href="/iphone-12-series"> iPhone 12 series </a>
                </li>
                <li className="category-menu-items">
                  <a href="/iphone-11-series"> iPhone 11 series </a>
                </li>
                <li className="category-menu-items">
                  <a href="/iphone-se-series"> iPhone SE </a>
                </li>
              </ul> */}
            </li>
            <li className="category-menu-items">
              <a href="/ipad"> iPad </a>
              {/* <div className="sublist-toggle"></div>
              <ul className="sublist first-level">
                <li className="category-menu-items">
                  <a href="/ipad-pro-m1"> iPad Pro M1 </a>
                </li>
                <li className="category-menu-items">
                  <a href="/ipad-pro-m2"> iPad Pro M2 </a>
                </li>
                <li className="category-menu-items">
                  <a href="/ipad-air"> iPad Air </a>
                </li>
                <li className="category-menu-items">
                  <a href="/ipad-9"> iPad 9 </a>
                </li>
                <li className="category-menu-items">
                  <a href="/ipad-10"> iPad 10 </a>
                </li>
                <li className="category-menu-items">
                  <a href="/ipad-mini"> iPad Mini </a>
                </li>
              </ul> */}
            </li>
            <li className="category-menu-items">
              <a href="/mac"> Mac </a>
              {/* <div className="sublist-toggle"></div>
              <ul className="sublist first-level">
                <li className="category-menu-items">
                  <a href="/macbook-pro"> MacBook Pro </a>
                </li>
                <li className="category-menu-items">
                  <a href="/macbook-air"> MacBook Air </a>
                </li>
                <li className="category-menu-items">
                  <a href="/imac"> iMac </a>
                </li>
                <li className="category-menu-items">
                  <a href="/mac-mini"> Mac Mini </a>
                </li>
                <li className="category-menu-items">
                  <a href="/mac-pro"> Mac Pro </a>
                </li>
                <li className="category-menu-items">
                  <a href="/mac-studio"> Mac Studio </a>
                </li>
              </ul> */}
            </li>
            <li className="category-menu-items">
              <a href="/apple-watch"> Watch </a>
              {/* <div className="sublist-toggle"></div>
              <ul className="sublist first-level">
                <li className="category-menu-items">
                  <a href="/apple-watch-ultra"> Apple Watch Ultra </a>
                </li>
                <li className="category-menu-items">
                  <a href="/apple-watch-series-8"> Apple Watch Series 8 </a>
                </li>
                <li className="category-menu-items">
                  <a href="/apple-watch-series-7"> Apple Watch Series 7 </a>
                </li>
                <li className="category-menu-items">
                  <a href="/apple-watch-series-6"> Apple Watch Series 6 </a>
                </li>
                <li className="category-menu-items">
                  <a href="/apple-watch-se"> Apple Watch SE </a>
                </li>
                <li className="category-menu-items">
                  <a href="/apple-watch-series-3"> Apple Watch Series 3 </a>
                </li>
              </ul> */}
            </li>
            <li className="category-menu-items">
              <a href="/am-thanh"> Âm thanh </a>
              {/* <div className="sublist-toggle"></div>
              <ul className="sublist first-level">
                <li className="category-menu-items">
                  <a href="/airpods-pro"> AirPods Pro </a>
                </li>
                <li className="category-menu-items">
                  <a href="/loa-marshall"> Marshall </a>
                </li>
                <li className="category-menu-items">
                  <a href="/loa-beats"> Beats </a>
                </li>
                <li className="category-menu-items">
                  <a href="/loa-harman-kardon"> Harman Kardon </a>
                </li>
                <li className="category-menu-items">
                  <a href="/loa-jbl"> JBL </a>
                </li>
                <li className="category-menu-items">
                  <a href="/loa-google"> Google </a>
                </li>
                <li className="category-menu-items">
                  <a href="/sony"> Sony </a>
                </li>
                <li className="category-menu-items">
                  <a href="/loa-jabra"> Jabra </a>
                </li>
              </ul> */}
            </li>
            <li className="category-menu-items">
              <a href="/phu-kien"> Phụ kiện </a>
              {/* <div className="sublist-toggle"></div>
              <ul className="sublist first-level">
                <li className="category-menu-items">
                  <a href="/cuong-luc-bao-ve"> Cường lực bảo vệ </a>
                  <div className="sublist-toggle"></div>
                  <ul className="sublist">
                    <li className="category-menu-items">
                      <a href="/cuong-luc-bao-ve-mac"> Mac </a>
                    </li>
                    <li className="category-menu-items">
                      <a href="/c%C6%B0%E1%BB%9Dng-l%E1%BB%B1c-watch">Watch </a>
                    </li>
                  </ul>
                </li>
                <li className="category-menu-items">
                  <a href="/sac-cap"> Sạc, cáp </a>
                </li>
                <li className="category-menu-items">
                  <a href="/bao-da-op-lung"> Bao da/ Ốp lưng </a>
                </li>
                <li className="category-menu-items">
                  <a href="/balo-tui-chong-soc"> Balo/ Túi chống sốc </a>
                </li>
                <li className="category-menu-items">
                  <a href="/may-anh"> Máy ảnh </a>
                </li>
                <li className="category-menu-items">
                  <a href="/may-doc-sach"> Máy đọc sách </a>
                </li>
                <li className="category-menu-items">
                  <a href="/dong-ho-garmin"> Đồng hồ Garmin </a>
                </li>
              </ul> */}
            </li>
            <li className="topic-items">
              <a href="/dich-vu">
                Dịch vụ{" "}
                <svg
                  width="12"
                  height="4"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2253 1.00096C16.4386 1.00096 16.6239 1.06736 16.7811 1.20017C16.927 1.33297 17 1.50154 17 1.70585C17 1.89996 16.9214 2.06852 16.7642 2.21154L9.97684 8.60158C9.70737 8.86719 9.38737 9 9.01684 9C8.63509 9 8.30386 8.86719 8.02316 8.60158L1.23579 2.21154C1.0786 2.0583 1 1.88974 1 1.70586C1 1.52197 1.07298 1.35851 1.21895 1.21549C1.36491 1.07247 1.55018 1.00096 1.77474 1.00096C1.98807 0.990742 2.16772 1.06225 2.31368 1.21549L9 7.51359L15.6863 1.21549C15.8323 1.07247 16.0119 1.00096 16.2253 1.00096Z"
                    fill="white"
                    stroke="white"
                  ></path>
                </svg>{" "}
              </a>
              <div className="child-menu">
                <div className="child-menu-content">
                  <a href="/care">Bảo Hành Uỷ Quyền Apple (ShopDunk Care)</a>
                  <a href="/than-so-hoc">Tra cứu thần số học</a>{" "}
                  <a href="/tra-gop">Trả Góp</a>{" "}
                  <a href="/thu-cu-doi-moi">Thu Cũ Đổi Mới</a>{" "}
                  <a href="/workshop">WorkShop</a> <a href="/mbti">MBTI</a>{" "}
                  <a href="/sim">Sim Thẻ</a>
                </div>
              </div>
            </li>
            <li className="news-category-menu">
              <a href="/tin-tuc">Tin Tức</a>
            </li>
            <li className="menu-news-items" style={{ marginBottom: 0 }}>
              <a href="/khuyen-mai">Khuyến mại</a>
            </li>
          </ul>
        </div>
        <div className="header-links-wrapper"></div>
        {renderAccount()}
      </div>
      {/* {renderHeaderMobile()} */}
    </div>
  );
}

export default Header;
