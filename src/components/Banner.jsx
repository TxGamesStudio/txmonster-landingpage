import "@/assets/styles/banner.scss";
import banner from "@/assets/videos/banner.mp4";
import slogan_background from "@/assets/images/png/slogan-background.png";
import slogan_background_mobile from "@/assets/images/png/slogan-background-mobile.png";
import monster from "@/assets/images/png/monster.png";
import logo from "@/assets/images/png/logo-big.png";
import btn_play from "@/assets/images/png/Button.png";
import btn_play_hover from "@/assets/images/png/Button-hover.png";

export default {
  name: "banner",
  data: () => ({ is_mobile: false }),
  mounted() {
    this.resize();
    window.addEventListener("resize", this.resize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },

  methods: {
    resize() {
      if (window.innerWidth <= 768) this.is_mobile = true;
      else this.is_mobile = false;
    },
  },

  render() {
    return (
      <div id="banner">
        <div>
          <video autoplay muted loop playsinline>
            <source src={banner} type="video/mp4" />
          </video>
        </div>
        <div class="content">
          <img src={logo} alt="logo" />
          <div class="btn-play">
            <img src={btn_play} alt="button-play" />
            <img src={btn_play_hover} alt="button-play" />
          </div>
        </div>
        <img src={monster} alt="monster" />
        <div class="slogan">
          <img
            src={this.is_mobile ? slogan_background_mobile : slogan_background}
            alt="slogan-background"
          />
          <div>Eat, hunt & survive with txmonster</div>
          <div>Fully on-chain game built by TxGames studio.</div>
        </div>
      </div>
    );
  },
};
