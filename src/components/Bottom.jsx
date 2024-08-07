import "@/assets/styles/bottom.scss";
import txgames from "@/assets/images/bottom/tx-games.svg";
import discord from "@/assets/images/bottom/discord.svg";
import youtube from "@/assets/images/bottom/youtube.svg";
import x from "@/assets/images/bottom/x.svg";
export default {
    name: "bottom",

    render() {
        return <div id="bottom">
            <div className="bottom-normal">
                <div className="bottom-item-left">
                    <img src={txgames}/>
                    <div className="line-1"></div>
                    <span>Follow Us</span>
                </div>
                <div className="bottom-item-right">
                    <img src={discord} alt="discord"/>
                    <img src={youtube} alt="youtube"/>
                    <img src={x} alt="x"/>
                </div>
            </div>
            <div class="bottom-mobile">
                <div className="bottom-item-left">
                    <img src={txgames}/>
                </div>
                <div className="bottom-item-right">
                    <span class="follow-us">Follow Us</span>
                    <div class="group-img">
                        <img src={discord} alt="discord"/>
                        <img src={youtube} alt="youtube"/>
                        <img src={x} alt="x"/>
                    </div>

                </div>
            </div>
        </div>;
    },
};
