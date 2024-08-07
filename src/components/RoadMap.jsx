import "@/assets/styles/roadmap.scss"
import ideaConcept from "@/assets/images/roadmap/idea-concept.svg";
import mvp from "@/assets/images/roadmap/mvp.svg";
import testnet from "@/assets/images/roadmap/testnet.svg";
import mainnet from "@/assets/images/roadmap/mainnet.svg";
import portal from "@/assets/images/roadmap/portal.svg";
import dotYellow from "@/assets/images/roadmap/dot-yellow.svg";
import dotGray from "@/assets/images/roadmap/dot-gray.svg";
import artBoard from "@/assets/images/roadmap/artboard.png";
import glow from "@/assets/images/roadmap/glow.png"
export default {
    name: "roadmap",

    render() {
        return <div id="roadmap">
            <div className="roadmap-normal">
                <span className="title-roadmap">RoadMap</span>
                <div className="roadmap-group">
                    <div className="roadmap-line">
                        <div className="line-row"></div>
                    </div>
                    <div className="roadmap-body">
                        <div className="roadmap-content-item">
                            <div className="idea-concept">
                                <img src={ideaConcept} alt="idea-concept"/>
                                <span>Idea/concept</span>
                                <div className="line-active">
                                    <img className="dot" src={dotYellow} alt="dot"/>
                                    <div></div>
                                </div>
                                <div className="art-board">
                                    <img src={artBoard}/>
                                </div>
                            </div>
                        </div>
                        <div className="roadmap-content-item">
                            <div className="mvp">
                                <div className="line-normal">
                                    <img className="dot" src={dotGray} alt="dot"/>
                                    <div></div>
                                </div>
                                <span>MVP</span>
                                <img src={mvp} alt="mvp"/>
                            </div>
                        </div>
                        <div className="roadmap-content-item">
                            <div className="testnet">
                                <img src={testnet} alt="testnet"/>
                                <span>Testnet</span>
                                <div className="line-normal">
                                    <img className="dot" src={dotGray} alt="dot"/>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                        <div className="roadmap-content-item">
                            <div className="mainnet">
                                <div className="line-normal">
                                    <img className="dot" src={dotGray} alt="dot"/>
                                    <div></div>
                                </div>
                                <span>Mainnet</span>
                                <img src={mainnet} alt="mainnet"/>
                            </div>
                        </div>
                        <div className="roadmap-content-item">
                            <div className="portal">
                                <img src={portal} alt="portal"/>
                                <span>PORTAL</span>
                                <div className="line-normal">
                                    <img className="dot" src={dotGray} alt="dot"/>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="roadmap-line-2">
                        <div className="line-row-normal"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="7" viewBox="0 0 14 7" fill="none">
                            <path d="M14 6.5L0 0V6.5H14Z" fill="#9D968F"/>
                        </svg>
                    </div>


                </div>
                <img className="roadmap-glow" src={glow}/>
            </div>
            <div class="roadmap-mobile">
                <div class="title">Roadmap</div>
                <div class="content">
                    <div class="item">
                        <div class="item-left">
                            <img src={dotYellow} alt="dotYellow"/>
                            <div className="yellow-line"></div>
                            <img src={artBoard} alt="artBoard"/>
                        </div>
                        <div class="item-right">
                            <img src={ideaConcept} alt="ideaConcept"/>
                            <span>Idea/concept</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-left">
                            <img src={dotGray} alt="dotGray"/>
                            <div class="gray-line"></div>
                        </div>
                        <div className="item-right">
                            <img src={mvp} alt="mvp"/>
                            <span>MVP</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-left">
                            <img src={dotGray} alt="dotGray"/>
                            <div className="gray-line"></div>
                        </div>
                        <div className="item-right">
                            <img src={testnet} alt="testnet"/>
                            <span>testnet</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-left">
                            <img src={dotGray} alt="dotGray"/>
                            <div className="gray-line"></div>
                        </div>
                        <div className="item-right">
                            <img src={mainnet} alt="mainnet"/>
                            <span>mainnet</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-left">
                            <img src={dotGray} alt="dotGray"/>
                            <div className="gray-line"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="14" viewBox="0 0 7 14" fill="none">
                                <path d="M-6.11959e-07 14L6.5 0L0 -2.84124e-07L-6.11959e-07 14Z" fill="#9D968F"/>
                            </svg>
                        </div>
                        <div className="item-right">
                            <img src={portal} alt="portal"/>
                            <span>portal</span>

                        </div>
                    </div>
                </div>
                <img class="glow" src={glow} alt="glow"/>
            </div>
        </div>;
    },
};
