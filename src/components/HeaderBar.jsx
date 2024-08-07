import "@/assets/styles/headerbar.scss";
import header_background from "@/assets/images/png/header-background.png";
import header_background_mobile from "@/assets/images/jpg/header-background-mobile.jpg";
import logo_background from "@/assets/images/png/logo-background.png";
import logo from "@/assets/images/png/logo.png";
import discord from "@/assets/icons/discord.svg";
import twitter from "@/assets/icons/twitter.svg";
import btn_play from "@/assets/images/png/btn-play.png";

export default {
  name: "header-bar",
  data: () => ({
    is_mobile: false,
  }),

  mounted() {
    this.resize();
    window.addEventListener("resize", this.resize);
    document.addEventListener("scroll", this.scroll);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
    document.removeEventListener("scroll", this.scroll);
  },
  methods: {
    resize() {
      const bg = document.querySelector("#header-bar");
      if (window.innerWidth <= 1280) {
        this.is_mobile = true;
        bg.style.top = 0;
      } else {
        this.is_mobile = false;
        bg.style.top = "-100px";
      }
    },

    scroll(e) {
      const ele = document.querySelector("#header-bar");
      if (this.is_mobile) return;
      if (window.scrollY > (500 * window.innerWidth) / 1920) {
        ele.style.top = 0;
      } else {
        ele.style.top = "-100px";
      }
    },

    clickTab(value) {
      this.$emit("clickTab", value);
    },

    clickLogo() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },

  render() {
    return (
      <div id="header-bar">
        <img
          src={this.is_mobile ? header_background_mobile : header_background}
          alt="header-background"
        />
        <img src={logo_background} alt="logo-background" />
        <img src={logo} alt="logo" onClick={this.clickLogo} />
        <div class="nav-bar">
          <div>
            <div class="social">
              <div>
                <img src={discord} alt="discord-icon" />
              </div>
              <div>
                <img src={twitter} alt="twitter-icon" />
              </div>
            </div>
            <div class="tab" onClick={() => this.clickTab("banner")}>
              Home
            </div>
            <div class="tab" onClick={() => this.clickTab("monster-system")}>
              Monster
            </div>
            <div class="tab" onClick={() => this.clickTab("about")}>
              About
            </div>
          </div>
          <div style="flex: 1"></div>
          <div>
            <div class="tab" onClick={() => this.clickTab("features")}>
              Feature
            </div>
            <div class="tab" onClick={() => this.clickTab("roadmap")}>
              Roadmap
            </div>
            <div class="btn-play">
              <img src={btn_play} alt="button-play" />
              <div>Play for free</div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
