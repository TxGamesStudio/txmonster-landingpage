import "@/assets/styles/monster-system.scss";
import monster_system from "@/assets/images/jpg/monster-system.jpg";
import video_border from "@/assets/images/png/video-border.png";
import video_border_mobile from "@/assets/images/png/video-border-mobile.png";
import mob_water from "@/assets/images/png/Mob_Water.png";
import monster_video from "@/assets/videos/monster-system.mp4";
import btn_play from "@/assets/images/png/button-play.png";

export default {
  name: "monster-system",
  data: () => ({ is_mobile: false }),

  mounted() {
    this.resize();
    document.addEventListener("DOMContentLoaded", function () {
      var video = document.getElementById("video-monster");
      var playButton = document.getElementById("button-play");

      playButton.addEventListener("click", function () {
        playButton.style.opacity = 0;
        playButton.style.cursor = "default";
        video.play();
      });
    });
    window.addEventListener("resize", this.resize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  },

  methods: {
    clickPlay() {},
    resize() {
      if (window.innerWidth <= 616) this.is_mobile = true;
      else this.is_mobile = false;
    },
  },

  render() {
    return (
      <div id="monster-system">
        <div>
          <img src={monster_system} alt="monster-system-background" />
        </div>
        <div class="content">
          <div>Monster System</div>
          <div>
            TxMonster build a unique monster system with various types of
            monster with <br></br>different criteria and properties. Our monster
            system is set from a cute mutant <br></br>flowers to a giant dragon
            with big claws and hard fire breath.
          </div>
        </div>
        <div class="video-monster">
          <video muted autoplay id="video-monster">
            <source src={monster_video} type="video/mp4" />
          </video>
          <img
            src={this.is_mobile ? video_border_mobile : video_border}
            alt="video-border"
          />
          <img
            id="button-play"
            src={btn_play}
            alt="btn-play"
            onClick={this.clickPlay}
          />
        </div>
        <img src={mob_water} alt="mob-water" />
      </div>
    );
  },
};
