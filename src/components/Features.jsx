import "@/assets/styles/features.scss";
import kombat from "@/assets/images/features/kombat.png";
import factory from "@/assets/images/features/factory.png";
import shop from "@/assets/images/features/shop.png";
import quest from "@/assets/images/features/quest.png";
import taming from "@/assets/images/features/taming.png";
import friend from "@/assets/images/features/friend.png";
import line1 from "@/assets/images/features/line1.png";
import line2 from "@/assets/images/features/line2.png";
import line3 from "@/assets/images/features/line3.png";
import bgActive from "@/assets/images/features/backgroundIconActive.svg";
export default {
    name: "features",
    data: () => ({
    }),
    methods: {
        onHoverImg() {
            const images = document.querySelectorAll(".item");
            images.forEach(img => {
                img.addEventListener("mouseenter", function() {
                   let element = this.querySelector("img:nth-child(2)");
                   element.style = "opacity: 1"
                });

                img.addEventListener("mouseleave", function() {
                    let element = this.querySelector("img:nth-child(2)");
                    element.style = "opacity: 0"
                });
            });
        }
    },
    mounted() {
        //
        this.onHoverImg();
    },
    render() {
        return <div id="features">
            <div class="features-content">
                <div class="features-title">game features</div>
                <div class="features-body">
                    <div class="item-left">
                        <img class="line-2" src={line2}/>
                    </div>
                    <div class="group-item">
                        <div class="item">
                            <img src={factory} alt="factory" id="img-factory"/>
                            <img src={bgActive}/>
                            <p>Factory idling</p>
                        </div>
                        <div class="item">
                            <img src={shop} alt="shop" id="img-shop"/>
                            <img src={bgActive}/>
                            <p>SHOP & MARKET</p>
                        </div>
                        <img src={line3}/>
                    </div>
                    <div class="group-item">
                        <div class="item">
                            <img src={kombat} alt="kombat" id="img-kombat"/>
                            <img src={bgActive}/>
                            <p>Kombat & Movement</p>
                        </div>
                        <div class="item">
                            <img src={quest} alt="quest" id="img-quest"/>
                            <img src={bgActive}/>
                            <p>Quest systems</p>
                        </div>
                    </div>
                    <div class="group-item">
                        <div class="item">
                            <img src={taming} alt="taming" id="img-taming"/>
                            <img src={bgActive}/>
                            <p>Taming monster</p>
                        </div>
                        <div class="item">
                            <img src={friend} alt="friend" id="img-friend"/>
                            <img src={bgActive}/>
                            <p>Friends</p>
                        </div>
                        <img src={line2}/>
                    </div>
                    <img class="line-1" src={line1}/>
                    <div class="item-right">
                        <img class="line-2" src={line2}/>
                    </div>
                </div>
                <div class="features-radius-small">
                    <div class="radius">
                    </div>
                </div>
                <div class="features-radius-medium">
                    <div class="radius">
                    </div>
                </div>
            </div>
            <div class="features-content-mobile">
                <div class="title">
                    <p>game features</p>
                </div>
                <div class="group-image-content">
                    <img class="line-center" src={line1}></img>
                    <div class="line-left-right">
                        <img src={line2}></img>
                        <img src={line2}></img>
                    </div>
                    <div class="radius-1"></div>
                    <div class="radius-2"></div>
                    <div class="item">
                        <img src={kombat} alt="kombat"/>
                        <span>Kombat & Movement</span>
                        <img src={bgActive} alt="bgActive"/>
                    </div>
                    <div class="item">
                        <img src={quest} alt="quest"/>
                        <span>Quest systems</span>
                        <img src={bgActive} alt="bgActive"/>
                    </div>
                    <div class="item">
                        <img src={factory} alt="factory"/>
                        <span>Factory idling</span>
                        <img src={bgActive} alt="bgActive"/>
                    </div>
                    <div class="item">
                        <img src={shop} alt="shop"/>
                        <span>SHOP & MARKET</span>
                        <img src={bgActive} alt="bgActive"/>
                    </div>
                    <div class="item">
                        <img src={taming} alt="kombat"/>
                        <span>Taming monster</span>
                        <img src={bgActive} alt="bgActive"/>
                    </div>
                    <div class="item">
                        <img src={friend} alt="kombat"/>
                        <span>Friends</span>
                        <img src={bgActive} alt="bgActive"/>
                    </div>
                </div>
            </div>
        </div>;
    },
};
