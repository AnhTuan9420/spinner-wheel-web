import React from "react";
import _404img from "assets/404.png";

function Page404() {
  return (
    <div className="page">
      <div className="page-body">
        <img src={_404img} alt={2} />
        <h2>Trang không tìm thấy</h2>
        <p>Vui lòng kiểm tra lại đường dẫn của bạn!</p>
      </div>
    </div>
  );
}

export default Page404;
