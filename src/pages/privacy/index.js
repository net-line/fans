import React from "react";
import { useTranslation } from "react-i18next";


const Privacy =() =>{
const {t}=useTranslation();
    return (
      <div>
        <h5>{t("privacy0")}</h5>
        <p>{t("privacy1")}</p>
        <p>{t("privacy2")}</p>
        <p>{t("privacy3")}</p>
        <p>{t("privacy4")}</p>
      </div>
    );
};

export default Privacy;