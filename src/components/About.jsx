import "@/assets/styles/about.scss";
import about_1 from "@/assets/images/png/about-1.png";
import btn_play from "@/assets/images/png/Button.png";
import btn_play_hover from "@/assets/images/png/Button-hover.png";
import about_2 from "@/assets/images/png/about-2.png";
import about_3 from "@/assets/images/png/about-3.png";
import about_4 from "@/assets/images/png/about-4.png";
import about_background from "@/assets/images/png/about-background.png";

export default {
  name: "about",

  mounted() {
    this.setDefaultStyle();
  },

  methods: {
    setDefaultStyle() {
      const ele1 = document.querySelector(
        "#about > div > div:nth-child(1) > div > div:nth-child(1) > div",
      );
      const ele2 = document.querySelector(
        "#about > div > div:nth-child(2) > div > div:nth-child(1) > div",
      );

      if (navigator.userAgent.indexOf("Mac") !== -1) {
        ele1.style.fontSize = "12px";
        ele2.style.fontSize = "12px";
      }
    },
  },

  render() {
    return (
      <div id="about">
        <img src={about_background} alt="about-background" />
        <div>
          <div class="first-content">
            <img src={about_1} alt="image-about" />
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="106"
                  height="26"
                  viewBox="0 0 106 26"
                  fill="none"
                >
                  <g filter="url(#filter0_b_1838_883)">
                    <rect width="106" height="26" rx="13" fill="#FFBC4F" />
                  </g>
                  <circle cx="13" cy="13" r="11.4706" fill="#090A18" />
                  <path
                    d="M16.5651 11.0876V9.44642H14.9223L12.8313 5.58875L10.7404 9.44642H9.0976V11.0876L5.23616 13.1765L9.0976 15.2654V16.9066H10.7404L12.8313 20.7643L14.9223 16.9066H16.5651V15.2654L20.4265 13.1765L16.5651 11.0876ZM12.8313 15.9711C11.2866 15.9711 10.034 14.7202 10.034 13.1765C10.034 11.6332 11.2866 10.3819 12.8313 10.3819C14.3761 10.3819 15.6287 11.6328 15.6287 13.1765C15.6282 14.7202 14.3761 15.9711 12.8313 15.9711Z"
                    fill="#FFBC4F"
                  />
                  <path
                    d="M12.8318 15.1528C13.9242 15.1528 14.8097 14.2681 14.8097 13.1768C14.8097 12.0856 13.9242 11.2009 12.8318 11.2009C11.7395 11.2009 10.854 12.0856 10.854 13.1768C10.854 14.2681 11.7395 15.1528 12.8318 15.1528Z"
                    fill="#FFBC4F"
                  />
                  <defs>
                    <filter
                      id="filter0_b_1838_883"
                      x="-29.6924"
                      y="-29.6924"
                      width="165.385"
                      height="85.3849"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="14.8462"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1838_883"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1838_883"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <div>Game type</div>
              </div>
              <div class="title">
                Be survival, <br></br>catch monster
              </div>
              <div class="line"></div>
              <div class="content">
                TxMonster is a monster-collecting adventure game built by
                TxGames Studio. Players will join a wide world to survive to
                slay and catch monsters through the whole map. Exploring the
                whole map to find different monsters, catch the hardest one to
                gain the best reward from it. Catch them by yourself or compete
                with community to be top of the leaderboard.
              </div>
              <div class="btn-play">
                <img src={btn_play} alt="button-play" />
                <img src={btn_play_hover} alt="button-play" />
              </div>
            </div>
          </div>
          <div class="second-content">
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="150"
                  height="26"
                  viewBox="0 0 150 26"
                  fill="none"
                >
                  <g filter="url(#filter0_b_1838_857)">
                    <rect width="150" height="26" rx="13" fill="#FFBC4F" />
                  </g>
                  <ellipse
                    cx="13.1484"
                    cy="12.9999"
                    rx="11.6015"
                    ry="11.4706"
                    fill="#090A18"
                  />
                  <path
                    d="M16.7542 11.0875V9.4463H15.0926L12.9778 5.58862L10.863 9.4463H9.20143V11.0875L5.2959 13.1764L9.20143 15.2653V16.9065H10.863L12.9778 20.7641L15.0926 16.9065H16.7542V15.2653L20.6597 13.1764L16.7542 11.0875ZM12.9778 15.971C11.4154 15.971 10.1485 14.7201 10.1485 13.1764C10.1485 11.6331 11.4154 10.3818 12.9778 10.3818C14.5402 10.3818 15.8071 11.6327 15.8071 13.1764C15.8066 14.7201 14.5402 15.971 12.9778 15.971Z"
                    fill="#FFD3A3"
                  />
                  <path
                    d="M12.9783 15.1528C14.0831 15.1528 14.9787 14.2681 14.9787 13.1768C14.9787 12.0856 14.0831 11.2009 12.9783 11.2009C11.8735 11.2009 10.9778 12.0856 10.9778 13.1768C10.9778 14.2681 11.8735 15.1528 12.9783 15.1528Z"
                    fill="#FFD3A3"
                  />
                  <defs>
                    <filter
                      id="filter0_b_1838_857"
                      x="-29.6924"
                      y="-29.6924"
                      width="209.385"
                      height="85.3849"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="14.8462"
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_1838_857"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_1838_857"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <div>FOCG NARRATIVE</div>
              </div>
              <div class="title">
                Fully on-chain<br></br>game with social
              </div>
              <div class="line"></div>
              <div class="content">
                TxMonster not only build a fully on-chain game but also a
                socialize game. This game is built with FOCG architect model to
                ensure the #gasless and #signless for users’ benefit and
                convenient.
              </div>
            </div>
            <div>
              <img src={about_2} alt="image-about" />
              <div>
                <img src={about_3} alt="image-about" />
                <img src={about_4} alt="image-about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
