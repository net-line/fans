import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div className="select">
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="de">Deutsch</option>
        <option value="en">Englisch</option>
      </select>
    </div>
  );
}
export default LanguageSwitcher;
