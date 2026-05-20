import { useTranslation,Trans} from "react-i18next";
import mainImage from "../assets/main.jpg";
import giftImage from "../assets/gift.jpg";
import letteringImg from "../assets/lettering.png";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import { useState,useEffect } from 'react';
function NoticeScreen() {
    const { t, i18n } = useTranslation();
    const copyHashtag = async () => {
        await navigator.clipboard.writeText("#구냥이를_잡아냥 #HAPPY_HYUNBIN_DAY");
        alert(t("common.copied"));
    };
    const [isOpen, setIsOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    const slideDescriptions = [
        t("event.reserveSlide1"),
        t("event.reserveSlide2"),
        t("event.reserveSlide3"),
      ];
    const slides = [slide1, slide2, slide3];
    const prevSlide = () => {
        if (current > 0) {
          setCurrent(current - 1);
        }
      };
      
      const nextSlide = () => {
        if (current < slides.length - 1) {
          setCurrent(current + 1);
        }
    };
    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      
        return () => {
          document.body.style.overflow = "auto";
        };
    }, [isOpen]);
    return (
      <>
        <div className="notice">
            <img src={mainImage} alt="main" className="img-main" />
            {/* 일시 */}
            <div>
                <h2>{t("event.titleTime")}</h2>
                <p>{t("event.date")}</p>
                <p>{t("event.time")}</p>
                <p className="s-txt">{t("event.timeSub")}</p>
            </div>

            {/* 주소 */}
            <div>
                <h2>{t("event.titleLocation")}</h2>
                <p className="bold"><Trans
                    i18nKey="event.place"
                /></p>
                <p>{t("event.address")}</p>
            </div>
            {/* 특전 */}
            <div>
                <h2>{t("notice.gift")}</h2>
                <img src={giftImage} alt="main" className="img-main" />
                <p>{t("notice.benefit")}</p>
                <div className="s-txt-wrap">
                    <p className="s-txt txt-og">{t("notice.giftWarn")}</p>
                    <p className="s-txt">{t("notice.giftSub")}</p>
                    <p className="s-txt"><Trans
                        i18nKey="notice.extraGift"
                        components={{
                            bold: <b />,
                        }}
                    /></p>
                    <p className="s-txt">{t("notice.giftWarn2")}</p>
                    <p className="s-txt">
                        <Trans
                        i18nKey="notice.reservation"
                        components={{
                            b: <b />
                        }}
                        />
                    </p>
                    <p className="s-txt">
                        <Trans
                        i18nKey="notice.noreserve"
                        components={{
                            b: <b />
                        }}
                        />
                    </p>
                    <img src={letteringImg} alt="main" className="img-sub" />
                    <p className="reserve-btn-wrap">
                    <Trans
                        i18nKey="event.reserveQ"
                        components={{
                            a: (
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrent(0);
                                    setIsOpen(true);
                                }}
                                className="reserve-q-btn"
                                style={{ color: "#bbb", fontWeight: "bold" }}
                            />
                            ),
                        }}
                        />
                        <Trans
                        i18nKey="event.reserve"
                        components={{
                            a: (
                            <a
                                href={
                                i18n.language === "ko"
                                    ? "https://m.booking.naver.com/booking/6/bizes/1109776/items/5879701?area=pll&lang=ko&startDate=2026-05-29&theme=place"
                                    : "https://m.booking.naver.com/booking/6/bizes/1109776/items/5879701?area=pll&lang=en&startDate=2026-05-29&theme=place"
                                }
                                target="_blank"
                                rel="noreferrer"
                                className="reserve-btn"
                                style={{
                                color: "#bbb",
                                fontWeight: "bold",
                                }}
                            />
                            ),
                        }}
                        />
                    </p>
                </div>
            </div>

            {/* 컨텐츠 */}
            <div>
                <h2>{t("event.titleContent")}</h2>
                <ul className="cont-list">
                    <li>
                        <h3>{t("event.catchTitle")}</h3>
                        <p>
                            <Trans
                            i18nKey="event.catchDesc"
                            components={{
                                b: <b />,
                                span: <span />,
                            }}
                            />
                        </p>
                    </li>
                    <li>
                        <h3>{t("event.hashtagTitle")}</h3>
                        <p>
                        <Trans
                        i18nKey="event.hashtagDesc"
                        components={{
                            b: (
                            <b
                                onClick={copyHashtag}
                                style={{ cursor: "pointer" }}
                            />
                            ),
                        }}
                        />
                        </p>
                        <p>
                            <Trans
                            i18nKey="event.hashtagSub"
                            components={{
                                b: <b />,
                            }}
                            />
                        </p>
                    </li>
                    <li>
                        <h3>{t("event.onlineTitle")}</h3>
                        <Trans
                            i18nKey="event.onlineDesc"
                        />
                    </li>
                </ul>
            </div>
            <div>
                <p>
                    <Trans
                    i18nKey="notice.contact"
                    components={{
                        a: (
                        <a
                            href="https://x.com/kooCATbin"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "#bbb", fontWeight: "bold" }}
                        />
                        ),
                    }}
                    />
                </p>
            </div>
            {isOpen && (
                    <div
                        className="popup-overlay"
                        onClick={() => setIsOpen(false)}
                    >
                    <div
                        className="slide-popup"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* 닫기 */}
                        <button
                        className="popup-close"
                        onClick={() => setIsOpen(false)}
                        >
                        ✕
                        </button>

                        {/* 슬라이드 */}
                        <div className="slide-wrap">
                            <div className="slide-img-wrap">
                                <img
                                    src={slides[current]}
                                    alt={`slide-${current}`}
                                    className="slide-img"
                                />
                            </div>
                            <p className="slide-des">
                                {slideDescriptions[current]}
                            </p>
                        </div>
                        {/* 페이지 표시 */}
                        <p className="slide-page">
                            {/* 좌우 버튼 */}
                            <button
                            className="slide-btn left"
                            onClick={prevSlide}
                            disabled={current === 0}
                            >
                            &lt;
                            </button>

                            <span className="slide-page">
                            {current + 1} / {slides.length}
                            </span>

                            <button
                            className="slide-btn right"
                            onClick={nextSlide}
                            disabled={current === slides.length - 1}
                            >
                            &gt;
                            </button>
                        </p>
                    </div>
                    </div>
                )}
        </div>
      </>
    );
}

export default NoticeScreen;