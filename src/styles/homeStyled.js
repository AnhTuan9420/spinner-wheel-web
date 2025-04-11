import styled from "styled-components";

export const HomeStyled = styled.div`

  .home-banner {
    background-position: center -40px;
  }
  .home-banner-promotion {
    bottom: 270px;
  }
  .pre-home-page .time-countdown {
    margin: unset;
    margin-bottom: 0px;
  }
  .hero-bgimage .btn_deposit {
    height: 70px;
    margin-top: 10px;
  }

  @media screen and (max-width: 1400px) {
    bottom: 10px;
  }
  @media only screen and (max-width: 1200px) {
    .home-banner-promotion {
      bottom: 320px;
    }
  }
  @media screen and (max-width: 992px) {
    .home-banner {
      background-position: center -20px;
      min-height: 600px;
    }
    .pre-home-page .time-countdown {
      margin-bottom: 0;
    }
    .hero-bgimage .btn_deposit {
      height: 56px;
    }
    .home-banner-promotion {
      bottom: 290px;
      flex-direction: unset;
    }
  }

  @media screen and (max-width: 768px) {
    .home-banner-promotion {
      bottom: 240px;
      flex-direction: column;
    }
    .btn_deposit {
      height: 40px!important;
    }
    .content-home-banner.content-home-banner-rp {
      bottom: 10px;
    }
    .airpods-container .btn_deposit,
    .watch-container .btn_deposit {
      margin-bottom: 24px;
    }
  }
`;
