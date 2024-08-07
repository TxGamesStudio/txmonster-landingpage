import Bottom from "@/components/Bottom.jsx";
import RoadMap from "@/components/RoadMap.jsx";
import Features from "@/components/Features.jsx";

import HeaderBar from "@/components/HeaderBar.jsx";
import Banner from "@/components/Banner.jsx";
import MonsterSystem from "@/components/MonsterSystem.jsx";
import About from "@/components/About.jsx";

export default {
  name: "app",
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

    clickTab(value) {
      const ele = document.querySelector(`#${value}`);
      if (!ele) return;
      if (value == "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      let offset = this.is_mobile ? ele.offsetTop - 100 : ele.offsetTop - 60;
      if (value == "monster-system") offset += 110;
      window.scrollTo({ top: offset, behavior: "smooth" });
    },
  },

  render() {
    return (
      <div style="background: #090A18;">
        <HeaderBar onClickTab={this.clickTab} />
        <Banner />
        <MonsterSystem />
        <About />
        <Features />
        <RoadMap />
        <Bottom />
      </div>
    );
  },
};
