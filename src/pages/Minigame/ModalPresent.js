import { notification } from 'antd';
import BWInput from 'components/shared/BWInput';
import ErrorMessage from 'components/shared/ErrorMessage';
import { useEffect, useRef, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { submitVoucher } from 'services/pre-order.service';
import { REGEX_EMAIL, REGEX_PHONE_NUMBER } from 'utils/contants';
import boxImage from 'assets/bw_image/tt-event_2.png';
import styled from 'styled-components';
import BWSelect from 'components/shared/BWSelect';
import Loading from 'components/shared/Loading';
import FormDatePicker from 'components/shared/FormDate';


const Wrapper = styled.div`
    .content-flex {
        height: fit-content;
        // margin-bottom: 200px;
    }
    .content-popup {
        height: 410px;
        overflow: unset;
        margin-right: 37px;
        margin-top: 0px;
    }
    @media (max-width: 1000px) {
        .content-popup {
            height: unset;
        }
        .content-popup .content-voucher {
            display: flex;
            flex-direction: row-reverse;
            padding: 4px;
            justify-content: flex-end;
            align-items: center;
            border-radius: 8px;
        }
    }
    .recaptcha_container {
        margin-top: 10px;
    }
`;

const GENDERS = [
    {
        label: 'Nam',
        value: 1,
    },
    {
        label: 'Nữ',
        value: 2,
    },
    {
        label: 'Khác',
        value: 3,
    },
];

const ModalPresent = ({ open, onClosePresent, closeModal, voucher, setIsOpenedGiftBox }) => {

    const methods = useForm();
    let captchaRef = useRef(null);
    const { error: errorCustomerName } = methods.getFieldState(
        'customerName',
        methods.formState
    );
    const [isComplete, setIsComplete] = useState(false);
    const [qrCode, setQRCode] = useState(false);

    const { error: errorPhone } = methods.getFieldState(
        'phone',
        methods.formState
    );
    const { error: errorEmail } = methods.getFieldState(
        'email',
        methods.formState
    );

    const [loadingSubmit, setLoadingSubmit] = useState(false);

    useEffect(() => {
        if (open) {
            const overlay = document.getElementById('popup-present');
            overlay.style.display = 'block';
            methods.setValue('gender', 1)
        }
    }, [open]);

    const onClose = () => {
        const overlay = document.getElementById('popup-present');
        if (overlay) {
            overlay.style.display = 'none';
        }
    };


    const onSubmit = async (values) => {
        try {
            setLoadingSubmit(true)
            // if (!isVerifyCaptcha) return setShowErrorCaptcha(true);
            let res = await submitVoucher({
                discountMoney: voucher.discountMoney,
                couponCode: voucher.voucherCode,
                ...values,
            });
            if (res?.status === 400) {
                notification.info({ message: res?.data });
                return;
            }
            setIsComplete(true);
            setQRCode(voucher.qrCode);
        } catch (error) {
            notification.error({ message: 'Lỗi lưu thông tin giải thưởng' });
            onClose();
        } finally {
            setLoadingSubmit(false)
        }
    };

    return (
        <Wrapper className="popup-present" id="popup-present">
            {isComplete ? (
                <div className="content-popup-succses">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="140"
                        height="140"
                        viewBox="0 0 140 140"
                        fill="none"
                    >
                        <path
                            d="M124.683 76.5629C120.308 98.4379 103.814 119.035 80.6705 123.638C69.3829 125.886 57.6739 124.515 47.2105 119.721C36.7472 114.927 28.063 106.955 22.3946 96.938C16.7261 86.9215 14.3623 75.3719 15.6397 63.9338C16.9171 52.4957 21.7707 41.7521 29.5092 33.2329C45.3817 15.7504 72.183 10.9379 94.058 19.6879"
                            stroke="#0066CC"
                            strokeWidth="11.6667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M50.3047 67.8125L72.1797 89.6875L124.68 32.8125"
                            stroke="#0066CC"
                            strokeWidth="11.6667"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <p>
                        Cám ơn quý khách đã để lại thông tin. Chúng tôi đã tiếp nhận thông tin mà bạn đã cung cấp.
                    </p>
                    {/*<p>
                        Cám ơn quý khách đã để lại thông tin, mã quà tặng sẽ
                        được gửi về Email - SMS cá nhân của bạn. Kiểm tra Email -
                        SMS để nhận quà ngay nhé.
                    </p>
                    */}
                    {/* <p>
                        Vui lòng chụp lại màn hình để lưu giữ mã voucher dùng
                        khi thanh toán sản phẩm
                    </p>
                    <img src={qrCode} className="image-qr" />
                    <a
                        className="btn-downqr"
                        href={qrCode}
                        download="my_image.jpg"
                    >
                        <button>Tải QR code</button>
                    </a> */}
                    {/* <a href={BASENAMEcomming} className="back-to-home"> */}
                    <a href='/minigame' className="back-to-home" style={{ marginTop: '100px', marginBottom: '20px' }}>
                        Về trang chủ
                    </a>
                </div>
            ) : (
                <div className="content-flex" style={{ height: 'auto' }}>
                    <div className="content-popup" style={{ height: 'auto' }}>
                        <div
                            className="content-voucher"
                            height="100%"
                            style={{ height: '100%', textAlign: 'center' }}
                        >
                            {voucher.discountMoney > 10 ? (
                                <>
                                    <div className="title">
                                        Bạn nhận được {voucher.productAccessory}
                                    </div>
                                    <div className="quality">
                                        {/* {voucher.discountMoney / 1000 || 0}k */}
                                    </div>
                                </>
                            ) : (
                                // Nhận được sản phẩm
                                <>
                                    <div className="title">
                                        Bạn nhận được {voucher.productAccessory}
                                    </div>
                                    <div className="quality">
                                        {/* {voucher.productAccessory.split('trị giá')[1]} */}
                                    </div>
                                    {/* <img
                                        className="charge charge-rp"
                                        alt={voucher.productAccessory}
                                        src={ImgCharger}
                                    /> */}
                                </>
                            )}
                        </div>
                    </div>
                    <FormProvider {...methods}>
                        <div className="content-form-present">
                            <p style={{ fontSize: '20px', fontWeight: 500 }}>
                                Vui lòng điền các trường thông tin dưới đây để
                                nhận quà.
                            </p>

                            <div className="inputs">
                                <label>Họ và tên <span style={{ color: 'red' }}>*</span></label>
                                <BWInput
                                    field={'customerName'}
                                    type="text"
                                    placeholder="Họ và tên (bắt buộc)"
                                    validation={{
                                        required: 'Họ và tên nhập là bắt buộc',
                                    }}
                                />
                                {errorCustomerName && (
                                    <ErrorMessage
                                        message={errorCustomerName?.message}
                                    />
                                )}
                            </div>
                            <div className="inputs gender-ipnut">
                                <label>Giới tính</label>
                                <BWSelect
                                    list={GENDERS}
                                    field={'gender'}
                                    onChange={(e) =>
                                        methods.setValue(
                                            'gender',
                                            Number(e.target.value)
                                        )
                                    }
                                    style={{ background: '#d9d9d9' }}
                                />
                            </div>

                            <div className="inputs dob-ipnut">
                                <label>Ngày sinh</label>
                                <FormDatePicker
                                    style={{
                                        width: '100%',
                                        height: '48px',
                                        padding: '2px 4px',
                                        background: 'rgb(217, 217, 217)',
                                    }}
                                    placeholder='Ngày sinh'
                                    bordered={true}
                                    field='dob'
                                    format='DD/MM/YYYY'
                                // validation={{
                                //     required: 'Ngày nhận hàng là bắt buộc',
                                // }}
                                />
                            </div>

                            <div className="inputs phone-input">
                                <label>Số điện thoại <span style={{ color: 'red' }}>*</span></label>
                                <BWInput
                                    type="text"
                                    placeholder="Số điện thoại (bắt buộc)"
                                    field={'phone'}
                                    validation={{
                                        required:
                                            'Số điện thoại nhập là bắt buộc',
                                        pattern: {
                                            value: REGEX_PHONE_NUMBER,
                                            message:
                                                'Số điện thoại không hợp lệ',
                                        },
                                    }}
                                />
                                {errorPhone && (
                                    <ErrorMessage
                                        message={errorPhone?.message}
                                    />
                                )}
                            </div>
                            <div className="inputs">
                                <label> Email</label>
                                <BWInput
                                    field={'email'}
                                    type="email"
                                    placeholder="Email"
                                    validation={{
                                        pattern: {
                                            value: REGEX_EMAIL,
                                            message: "Email không hợp lệ",
                                        },
                                    }}
                                />
                            </div>

                            {errorEmail && (
                                <ErrorMessage
                                    message={errorEmail?.message}
                                />
                            )}
                            {/* <div className="recaptcha_container">
                            <ReCaptcha
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
                            )}
                            </div> */}
                            <div
                                className="submit-form"
                                onClick={() => {
                                    if (!loadingSubmit) {
                                        methods.handleSubmit(onSubmit)()
                                    }
                                }}
                            >
                                {loadingSubmit && <Loading size={20} style={{ marginRight: 10 }} />}Gửi thông tin ngay
                            </div>
                        </div>
                    </FormProvider>
                </div>
            )}
            <a className="closeButton" onClick={onClose}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 30 19"
                    fill="none"
                >
                    <path
                        d="M6.502 6.50215C6.37586 6.62829 6.31278 6.77737 6.31278 6.94939C6.31852 7.12714 6.37872 7.27335 6.4934 7.38803L12.1097 13.0043L6.4934 18.6206C6.37299 18.741 6.31278 18.8872 6.31278 19.0592C6.31852 19.237 6.38159 19.386 6.502 19.5064C6.62241 19.6269 6.76862 19.6871 6.94064 19.6871C7.11265 19.6871 7.25886 19.6269 7.37927 19.5064L12.9955 13.8902L18.6118 19.5064C18.7322 19.6269 18.8784 19.6871 19.0505 19.6871C19.2225 19.6871 19.3716 19.624 19.4977 19.4978C19.6181 19.3774 19.6783 19.2312 19.6783 19.0592C19.6783 18.8872 19.6181 18.741 19.4977 18.6206L13.8814 13.0043L19.4977 7.38802C19.6181 7.26761 19.6783 7.1214 19.6783 6.94939C19.684 6.77164 19.6267 6.62256 19.5063 6.50215C19.3859 6.38174 19.2339 6.32153 19.0505 6.32153C18.8784 6.32153 18.7322 6.38174 18.6118 6.50215L12.9955 12.1184L7.37927 6.50215C7.2646 6.38747 7.11839 6.32727 6.94064 6.32153C6.76862 6.32153 6.62241 6.38174 6.502 6.50215Z"
                        fill="black"
                    />
                </svg>
            </a>
        </Wrapper>
    );
};

export default ModalPresent;
