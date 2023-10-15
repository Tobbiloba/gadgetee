import React, { useState } from "react";
import i18next from "i18next";

const TranslatedText = ({text, className}) => {
  const [language, setLanguage] = useState("zh");

  const translatedText = i18next.t("my.component.text", { lng: language });

  return (
    <p className={`${className}`}>{text}</p>
  );
};

export default TranslatedText;