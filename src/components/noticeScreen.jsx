import { useTranslation,Trans } from "react-i18next";
import mainImage from "../assets/main.jpg";
function NoticeScreen() {
    const { t } = useTranslation();

    return (
      <>
        <div className="notice">
            <img src={mainImage} alt="main" className="img-main" />
            {/* 일시 */}
            <div>
                <h2>{t("event.titleTime")}</h2>
                <p>{t("event.date")}</p>
                <p>{t("event.time")}</p>
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
                <p>{t("notice.benefit")}</p>
                <div className="s-txt-wrap">
                    <p className="s-txt">{t("notice.giftSub")}</p>
                    <p className="s-txt"><Trans
                        i18nKey="notice.extraGift"
                        components={{
                            bold: <b />,
                        }}
                    /></p>
                    <p className="s-txt">
                        <Trans
                        i18nKey="notice.reservation"
                        components={{
                            b: <b />
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
                            href="https://instagram.com/kooCATbin"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "#bbb", fontWeight: "bold" }}
                        />
                        ),
                    }}
                    />
                </p>
            </div>
        </div>
      </>
    );
}

export default NoticeScreen;