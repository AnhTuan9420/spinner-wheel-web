import { useEffect, useRef, useState } from "react";
import { notification } from "antd";
import contentImage from "assets/bw_image/bannerIphone16.png";
import BWInput from "components/shared/BWInput";
import ErrorMessage from "components/shared/ErrorMessage";
import { FormProvider, useForm } from "react-hook-form";
import { submitSubscribe } from "services/pre-order.service";
import { GENDERS, REGEX_EMAIL, REGEX_PHONE_NUMBER } from "utils/contants";
import BWSelect from "components/shared/BWSelect";
import { ModalRegistrationWrapper } from "utils/styles";
import Loading from "components/shared/Loading";
import { ReCaptcha } from "react-recaptcha-google";
import CONFIG from 'config/config';
import { CloseOutlined } from '@ant-design/icons';

const ModalRegistration = ({ open, onClose, regProductId }) => {
  const methods = useForm();
  let captchaRef = useRef(null);
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
  const [showErrorCaptcha, setShowErrorCaptcha] = useState(false);
  const [isVerifyCaptcha, setIsVerifyCaptcha] = useState(false);
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
      // if (!isVerifyCaptcha){
      //   setLoadingSubmit(false)
      //   return setShowErrorCaptcha(true);
      // }
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
    <ModalRegistrationWrapper className="popup cms" id="popup-registration">
      <div className="content-flex" style={{ height: "auto" }}>
        <div
          className="content-popup"
          style={{ height: "auto", backgroundSize: "cover", backgroundColor: 'black', position: 'relative' }}
        >
          <img
            alt=""
            src={contentImage}
            width="100%"
            height="100%"
            style={{ height: "auto", position: 'absolute', top: '0px', bottom: '0px', margin: 'auto' }}
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
                  required: 'Họ và tên nhập là bắt buộc',
                }}
                field={"userName"}
              />
              {errorName && (
                <ErrorMessage
                  message={errorName?.message}
                />
              )}
            </div>
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
            {/* <ReCaptcha
            ref={captchaRef}
            size="normal"
            hl="vi"
            verifyCallback={(res) => {
            if (res) {
              setShowErrorCaptcha(false);
              setIsVerifyCaptcha(true);
            }
            }}
            onloadCallback={() => {}}
            expiredCallback={() => {
            setIsVerifyCaptcha(false);
            captchaRef.current.reset();
            }}
            sitekey={CONFIG.RECAPTCHA_SITE_KEY}
            />                                           
            {showErrorCaptcha && (
              <ErrorMessage message={"Vui lòng xác nhận recaptcha"} />
            )}                                              */}
            <div
              className="submit-form"
              onClick={() => {
                if (!loadingSubmit) {
                  methods.handleSubmit(onSubmit)()
                }
              }}
            >
              {loadingSubmit && <Loading size={20} style={{ marginRight: 10 }} />}Đăng ký nhận tin
            </div>
          </div>
        </FormProvider>
      </div>
    </ModalRegistrationWrapper>
  );
};

export default ModalRegistration;
