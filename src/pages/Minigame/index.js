import { Fragment, useEffect, useRef, useState } from "react";
import $ from "jquery";
import { Helmet } from "react-helmet";

import image8 from "assets/bw_image/MHSD_footer.png";
import image9 from "assets/bw_image/MHSDmb.png";
import ModalGame from "./ModalGame";
import ModalRegistration from "./ModalRegistration";
import BlankLink from "components/shared/BlankLink";
import HomeBannerPromotion from "components/shared/HomeBannerPromotion";
import ModalPresent from "./ModalPresent";
import gitboxImage from 'assets/bw_image/tt-event_2.png';
import guideImage from 'assets/bw_image/popup.png';
import frame2772Image from 'assets/bw_image/popupmb.png';
import { TweenMax, Power0, Power4 } from "gsap/all";
import { getVoucher } from "services/pre-order.service";
import Winwheel from "winwheel/lib/Winwheel";

const ComingSoon = () => {
  const [openGame, setOpenGame] = useState(false);
  const [openRegistration, setOpenRegistration] = useState(false);
  const [regProductId, setRegProductId] = useState(null);

  const [openModal, setOpenModal] = useState(false);
  const [openPresent, setOpenPresent] = useState(false);
  const [isOpenedGiftBox, setIsOpenedGiftBox] = useState(false);

  const [isHandleOpenGame, setIsHandleOpenGame] = useState(
    localStorage.getItem("handleOpenGame") === 'true'
  );

  const handleScrollToProduct = (productRef) => {
    productRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const timeOpenGame = localStorage.getItem("timeOpenGame");

  //     if (timeOpenGame) {
  //       const currentTime = new Date();
  //       const timeDifferenceInMinutes = (currentTime - new Date(timeOpenGame)) / (1000 * 60);

  //       if (timeDifferenceInMinutes > 60) { // Chênh lệch thời gian hơn 60 phút
  //         localStorage.removeItem("handleOpenGame");
  //         localStorage.removeItem("timeOpenGame");
  //       }
  //     }
  //   }, 1800000); // Kiểm tra mỗi 30 phút (30 phút * 60 giây * 1000 ms)

  //   return () => clearInterval(interval); // Dọn dẹp interval khi component bị huỷ
  // }, []);

  // useEffect(() => {
  //   if (!isHandleOpenGame) {
  //     const timer = setTimeout(() => {
  //       const overlay = document.getElementById("overlay");
  //       document.body.style.overflow = "hidden";
  //       overlay.style.display = "flex";
  //       setOpenGame(true);

  //       // Lưu giá trị xuống Local Storage
  //       localStorage.setItem("handleOpenGame", true);
  //       localStorage.setItem("timeOpenGame", new Date().toISOString());

  //       if (isOpenedGiftBox) {
  //         setOpenPresent(true);
  //       }
  //     }, 0);

  //     return () => clearTimeout(timer);
  //   }
  // }, []);

  useEffect(() => {
    const giftBoxElements = document.getElementsByClassName("open-gift-box");

    if (giftBoxElements?.length > 0) {
      Array.from(giftBoxElements).forEach(element => {
        element.addEventListener("click", handleOpenModalGame);
      });
    }

    return () => {
      if (giftBoxElements?.length > 0) {
        Array.from(giftBoxElements).forEach(element => {
          element.removeEventListener("click", handleOpenModalGame);
        });
      }
    };
  }, [openGame]);

  const handleOpenModalGame = () => {
    const overlay = document.getElementById("overlay");
    document.body.style.overflow = "hidden";
    overlay.style.display = "flex";
    setOpenGame(true);
    if (isOpenedGiftBox) {
      setOpenPresent(true);
    }
  };

  const handleCloseModal = () => {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    setOpenRegistration(false);
    setOpenGame(false);
  };

  const handleOpenRegistration = (productId) => {
    console.log('productId: ', productId);

    const overlay = document.getElementById("overlay");
    document.body.style.overflow = "hidden";
    overlay.style.display = "block";
    setOpenRegistration(true);
    setRegProductId(productId);
  };

  useEffect(() => {
    $(document).ready(function () {
      $(window).scroll(function () {
        var navLink = $(".nav-link");

        if ($(window).scrollTop() > 1000) {
          navLink.addClass("sticky");
        } else {
          navLink.removeClass("sticky");
        }
      });
    });
  }, []);

  useEffect(() => {
    $(document).ready(function () {

      $('.slick-arrow').on('click', function (event) {
        $('.content-show-more').hide();
        $('.showmore').show();
      });

      $('.content-show-more').hide();
      $('.showmore').on('click', function (event) {
        event.preventDefault();

        var $parent = $(this).closest('.item-pro, .item-plus');
        $parent.find('.content-show-more').toggle();
        $(this).hide();
      });
    });

  }, []);

  const handleScrollToSection = (prodLink) => {
    const section = document.querySelector(prodLink);
    section.scrollIntoView({ behavior: "smooth" });
  };

  //Start Minigame
  const [data, setData] = useState([
    { id: 500000, option: 'Box quà Tiên Phong', fillStyle: '#947059' },
    { id: 200000, option: 'Box quà Cống Hiến', fillStyle: '#D2D1D1' },
    { id: 3, option: 'Box quà Fan Cứng', fillStyle: '#947059' },
    { id: 4, option: 'Box quà Năng Nổ', fillStyle: '#D2D1D1' },
    { id: 5, option: 'Box quà Đặc Biệt', fillStyle: '#947059' },
    { id: 500000, option: 'Box quà Tiên Phong', fillStyle: '#D2D1D1' },
    { id: 200000, option: 'Box quà Cống Hiến', fillStyle: '#947059' },
    { id: 3, option: 'Box quà Fan Cứng', fillStyle: '#D2D1D1' },
    { id: 4, option: 'Box quà Năng Nổ', fillStyle: '#947059' },
    { id: 5, option: 'Box quà Đặc Biệt', fillStyle: '#D2D1D1' }
  ]);

  const [isSpinning, setIsSpinning] = useState(false);
  const [winningSegment, setWinningSegment] = useState(0);
  const [voucher, setVoucher] = useState({});
  const wheelCanvasRef = useRef(null);
  const wheelRef = useRef(null);

  const fetchVoucher = () => {
    getVoucher().then(res => {
      const discountMoney = res.data.discountMoney;
      setVoucher(res.data);
      const prizeIndex = data.findIndex(item => item.id === discountMoney);
      if (prizeIndex !== -1) {
        setWinningSegment(discountMoney);
      } else {
        console.error('Discount money not found in data.');
      }
    });
  };

  useEffect(() => {
    fetchVoucher(); // Fetch voucher when modal opens
  }, []);

  const calculatePrize = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      TweenMax.killTweensOf(wheelRef.current);

      const wheel = wheelRef.current;
      if (wheel) {
        const segmentCount = wheel.numSegments;
        const segmentAngle = 360 / segmentCount;
        const stopAt = (winningSegment * (segmentAngle - 2)) % 360;
        wheel.animation.stopAngle = stopAt;
        wheel.startAnimation();

        setTimeout(() => {
          setOpenPresent(true);
        }, wheel.animation.duration * 1000); // Match duration of spin
      }
    }
  };
  const startDefaultSpin = () => {
    if (wheelRef.current) {
        TweenMax.to(wheelRef.current, 20, {
            rotation: 360,
            repeat: -1,
            ease: Power4.linear,
            onUpdate: () => {
                wheelRef.current.rotationAngle += 0.5;
                wheelRef.current.draw();
            }
        });
    }
};

    useEffect(() => {
        wheelRef.current = new Winwheel({
            canvasId: 'wheelCanvas',
            numSegments: data.length,
            innerRadius : 40,
            outerRadius: 192,
            pointerAngle: 0,
            segments: data.map(item => ({
                fillStyle: item.fillStyle,
                textAlignment : 'inner',
                text: item.option,
                id: item.id,
                textFillStyle: '#FFFFFF',
                textFontSize: 14
            })),
            animation: {
                type: 'spinToStop',
                duration: 4,
                spins: 3
            },
            pointerGuide: {
                display: false,
                strokeStyle: 'red',
                lineWidth: 3
            }
        });
  
        startDefaultSpin();
  
        return () => {
            TweenMax.killTweensOf(wheelRef.current);
            wheelRef.current = null;
        };
    }, [data]);
  //End Minigame

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MiniGame - ShopDunk</title>
        <meta
          name="description"
          content="MiniGame - ShopDunk"
        ></meta>
        <meta name="keywords" content="MiniGame - ShopDunk"></meta>
      </Helmet>

      <div>
        {/* COMING SOON PAGE */}
        <div className="commingsoon-page">
          <div className="page pre-home-page">
            <BlankLink
              className="ibanner-gift-box btn-popup-event"
              data-popup-id="popup-game"
              onClick={() => handleOpenModalGame()}
            >
              {/* <img src={gitImage} alt="" width="100%" className="f-desktop" />
              <img src={miniGameImage} alt="" width="100%" className="f-mb" /> */}
            </BlankLink>

            {/* Model minigame */}
            <div className="popup-event">
            <div
              id="overlay"
              className="overlay"
              onClick={() => handleCloseModal()}
            ></div>
            <Fragment>
              <div className="mini-game" >
                <div className="title-minigame">
                  <img src={gitboxImage} width="100%" alt="" />
                </div>

                <div className="content-spin" style={{paddingBottom: '40px'}}>
                  <div id="canvasContainer">
                    <canvas id="wheelCanvas" width="400" height="400" ref={wheelCanvasRef}></canvas>
                    <button
                      className="spin-button"
                      onClick={calculatePrize}
                      disabled={isSpinning}
                    >
                    </button>
                  </div>
                </div>
                <div className="">
                  <label>
                    {/* Set Winning Prize (0-{wheelRef.current ? wheelRef.current.numSegments - 1 : 0}): */}
                    <input
                      type="number"
                      value={winningSegment}
                      min="0"
                      //max={wheelRef.current ? wheelRef.current.numSegments - 1 : 0}
                      onChange={(e) => setWinningSegment(Number(e.target.value))}
                      hidden
                    />
                  </label>
                </div>
            
              </div>
              {openPresent && (
                <ModalPresent
                  open={openPresent}
                  onClose={() => handleCloseModal()}
                  voucher={voucher}
                  setIsOpenedGiftBox={setIsOpenedGiftBox}
                />
              )}
            </Fragment>
            </div>

            {/* Thể lệ chơi */}
            {/* <div className="content-guide">
                  <img src={guideImage} width="100%" className="f-desktop" />
                  <div className="f-mb">
                    <img src={frame2772Image} width="100%" />
                  </div>
            </div> */}

            {/* <section className="pre-timeline">
              <ul className="nav-link">
                <li>
                  <BlankLink className="active">Ưu đãi</BlankLink>
                </li> 
                <li>
                  <a href="https://shopdunk.com/thu-cu-doi-moi">Thu cũ</a>
                </li>
                <li>
                  <a href="https://shopdunk.com/so-sanh-iphone">So sánh</a>
                </li>
                <li>
                  <a href="https://shopdunk.com/tra-gop">Trả góp</a>
                </li>
              </ul>
            </section> */}


          </div>
          <div className="footer-introduce desktop">
            <img src={image8} alt="" width="100%" />
          </div>
          <div className="footer-introduce mobile">
            <h3 className="tt-introduce" style={{ padding: "20px", fontSize: "20px" }}>Tại sao nên mua hàng tại ShopDunk</h3>
            <div className="d-scroll">
              <img src={image9} alt="" width="1328px" />
            </div>
          </div>
          <div className="popup-event">
            <div
              id="overlay"
              className="overlay"
              onClick={() => handleCloseModal()}
            ></div>
            <ModalGame
              open={openGame}
              onClose={() => handleCloseModal()}
              setIsOpenedGiftBox={setIsOpenedGiftBox}
              setOpenPresent={setOpenPresent}
              openPresent={openPresent}
            />
          </div>
        </div>
        <div className="popup-event">
          <div
            id="overlay"
            className="overlay"
            onClick={() => handleCloseModal()}
          ></div>
        </div>

      </div>
      <ModalRegistration
        open={openRegistration}
        onClose={() => handleCloseModal(false)}
        regProductId={regProductId}
      />
    </>
  );
};

export default ComingSoon;
