import gitboxImage from 'assets/bw_image/tt-event_2.png';
import guideImage from 'assets/bw_image/popup.png';
import frame2772Image from 'assets/bw_image/popupmb.png';
import { Fragment, useCallback, useEffect, useState, useRef } from 'react';
//import { Wheel } from 'react-custom-roulette';
import { getVoucher } from 'services/pre-order.service';
import ModalPresent from './ModalPresent';

//Import winwheel and TweenMax
import { TweenMax, Power0, Power4 } from "gsap/all";
import Winwheel from 'winwheel';

import 'styles/styleComing.css';

const ModalGame = ({ open, onClose, setIsOpenedGiftBox, setOpenPresent, openPresent }) => {
  const [voucher, setVoucher] = useState({});
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
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [winningSegment, setWinningSegment] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const wheelCanvasRef = useRef(null);
  const wheelRef = useRef(null);

  useEffect(() => {
      if (open) {
          document.getElementById('popup-game').style.display = 'block';
          fetchVoucher(); // Fetch voucher when modal opens
      } else {
          document.getElementById('popup-game').style.display = 'none';
      }
  }, [open]);

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

    return (
        <Fragment>
            <div className="popup" id="popup-game">
                <div className="title-popup-event">
                    <img src={gitboxImage} width="100%" alt="" />
                </div>
               
                <div className="content-spin">
                <div id="canvasContainer">
                    <canvas id="wheelCanvas" width="400" height="400" ref={wheelCanvasRef}></canvas>
                    <button
                        className="spin-button"
                        onClick={calculatePrize}
                        disabled={isSpinning}
                    >
                        {/* {'Nhận quà ngay'} */}
                    </button>
                </div>
                </div>
               <div className="container-content-guide">
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
                <a href="#content-guide" className="scoll-bottom">
                        <p>Thể lệ chơi</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="37"
                            height="36"
                            viewBox="0 0 37 36"
                            fill="none"
                        >
                            <path
                                d="M9.5 13.5L18.5 22.5L27.5 13.5"
                                stroke="#333"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                

              </div>
              <div className="content-guide" id="content-guide">
                    <img src={guideImage} width="100%" className="f-desktop" />
                    <div className="f-mb">
                        {/* <h3>Hướng dẫn tham gia game siêu chất</h3> */}
                        {/* <div className="d-scroll">
                        <img src={frame2745Image} width="771px" />
                        </div> */}

                        <img src={frame2772Image} width="100%" />
                    </div>
                </div>
                <a className="closeButton" onClick={onClose}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg" 
                        width="35" height="35" 
                        viewBox="0 0 30 19" 
                        fill="none"
                    >
                        <path
                            d="M6.502 6.50215C6.37586 6.62829 6.31278 6.77737 6.31278 6.94939C6.31852 7.12714 6.37872 7.27335 6.4934 7.38803L12.1097 13.0043L6.4934 18.6206C6.37299 18.741 6.31278 18.8872 6.31278 19.0592C6.31852 19.237 6.38159 19.386 6.502 19.5064C6.62241 19.6269 6.76862 19.6871 6.94064 19.6871C7.11265 19.6871 7.25886 19.6269 7.37927 19.5064L12.9955 13.8902L18.6118 19.5064C18.7322 19.6269 18.8784 19.6871 19.0505 19.6871C19.2225 19.6871 19.3716 19.624 19.4977 19.4978C19.6181 19.3774 19.6783 19.2312 19.6783 19.0592C19.6783 18.8872 19.6181 18.741 19.4977 18.6206L13.8814 13.0043L19.4977 7.38802C19.6181 7.26761 19.6783 7.1214 19.6783 6.94939C19.684 6.77164 19.6267 6.62256 19.5063 6.50215C19.3859 6.38174 19.2339 6.32153 19.0505 6.32153C18.8784 6.32153 18.7322 6.38174 18.6118 6.50215L12.9955 12.1184L7.37927 6.50215C7.2646 6.38747 7.11839 6.32727 6.94064 6.32153C6.76862 6.32153 6.62241 6.38174 6.502 6.50215Z"
                            fill="white"
                        />
                    </svg>
                </a>
            </div>
            {openPresent && (
                <ModalPresent
                    open={openPresent}
                    onClose={onClose}
                    voucher={voucher}
                    setIsOpenedGiftBox={setIsOpenedGiftBox}
                />
            )}
        </Fragment>
    );
};

export default ModalGame;

