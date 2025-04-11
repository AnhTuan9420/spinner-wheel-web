import { useEffect, useRef, useState } from "react";
import { notification } from "antd";
import contentImage from "assets/bw_image/VN_iPhone_15_Pro_Sep23_Web_Banner_Pre-Avail_v2.png";
import BWInput from "components/shared/BWInput";
import ErrorMessage from "components/shared/ErrorMessage";
import { FormProvider, useForm } from "react-hook-form";
import { submitSubscribe } from "services/pre-order.service";
import { GENDERS, REGEX_EMAIL, REGEX_PHONE_NUMBER } from "utils/contants";
import BWSelect from "components/shared/BWSelect";
import { ModalRegistrationWrapper } from "utils/styles";
import Loading from "components/shared/Loading";
import useOnClickOutside from "hook/outClickOutside";

const ModalRegistrationV2 = ({ open, onClose, regProductId }) => {
  const methods = useForm();
  const { error: errorName } = methods.getFieldState(
    "userName",
    methods.formState
  );
  const { error: errorPhone } = methods.getFieldState(
    "phone",
    methods.formState
  );
  const { error: errorEmail } = methods.getFieldState(
    "email",
    methods.formState
  );
  const [loadingSubmit, setLoadingSubmit] = useState(false)
  const ref = useRef();
  useOnClickOutside(ref, () => onClose());

  useEffect(() => {
    const popup = document.getElementById("popup-registration");
    const body = document.body;
    if (open) {
      popup.style.display = "block";
      body.style.overflow = "hidden";
    } else {
      popup.style.display = "none";
      body.style.overflow = "auto";
    }
    methods.reset({ productId: regProductId, gender: GENDERS[0].value });
  }, [open]);

  const onSubmit = async (values) => {
    try {
      setLoadingSubmit(true)
      let res = await submitSubscribe(values);
      if (res && res?.data && res.data.message) {
        notification.info({ message: res.data.message });
        return;
      }
      if (res && res?.data === 0) {
        notification.success({ message: "Email đã tồn tại" });
        return;
      }
      notification.success({
        message: "Đăng ký nhận tin thành công",
      });
      onClose();
    } catch (error) {
      notification.error({ message: "Lỗi đăng ký nhận tin" });
    } finally {
      setLoadingSubmit(false)
    }
  };

  return (
    <ModalRegistrationWrapper className="popup cms" id="popup-registration" ref={ref}>
      <div className="content-flex" style={{ height: "auto" }}>
        <div
          className="content-popup"
          style={{ height: "auto", backgroundSize: "cover" }}
        >
          <img
            alt=""
            src={contentImage}
            width="100%"
            height="100%"
            style={{ height: "100%" }}
          />
        </div>
        <FormProvider {...methods}>
          <div className="content-form-present">
            <div className="header-form">
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "24px",
                }}
              >
                Đăng ký nhận tin
              </p>
            </div>
            <div className="inputs">
              <label>Họ và tên:</label>
              <BWInput
                type="text"
                placeholder="Họ và tên (bắt buộc)"
                validation={{
                  required: "Họ và tên nhập là bắt buộc",
                }}
                field={"userName"}
              />
            </div>
            {errorName && <ErrorMessage message={errorName.message} />}
            <div className="inputs">
              <label>Giới tính:</label>
              <BWSelect
                list={GENDERS}
                field={"gender"}
                onChange={(e) => methods.setValue("gender", e.target.value)}
                style={{ background: "#d9d9d9" }}
              />
            </div>
            <div className="inputs">
              <label>Số điện thoại</label>
              <BWInput
                validation={{
                  required: "Số điện thoại nhập là bắt buộc",
                  pattern: {
                    value: REGEX_PHONE_NUMBER,
                    message: "Số điện thoại không hợp lệ",
                  },
                }}
                field={"phone"}
                type="text"
                placeholder="Số điện thoại (bắt buộc)"
              />
            </div>
            {errorPhone && <ErrorMessage message={errorPhone.message} />}
            <div className="inputs">
              <label> Email:</label>
              <BWInput
                validation={{
                  pattern: {
                    value: REGEX_EMAIL,
                    message: "Email không hợp lệ",
                  },
                }}
                type="email"
                placeholder="Email"
                field={"email"}
              />
            </div>
            {errorEmail && <ErrorMessage message={errorEmail.message} />}
            {/* <div className="inputs">
              <label> Ngành nghề:</label>
              <BWInput type="text" field={"career"} placeholder="Ngành nghề" />
            </div> */}

            <div
              className="submit-form"
              onClick={() => {
                if (!loadingSubmit) {
                  methods.handleSubmit(onSubmit)()
                }
              }}
            >
              {loadingSubmit && <Loading size={20} style={{marginRight: 10}} />}Đăng ký nhận tin
            </div>
          </div>
        </FormProvider>
      </div>
    </ModalRegistrationWrapper>
  );
};

export default ModalRegistrationV2;
