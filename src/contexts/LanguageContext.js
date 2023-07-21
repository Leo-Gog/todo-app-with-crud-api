import { createContext, useContext, useMemo, useState } from "react";

export const texts = {
  en: {
    taskPlaceholder: "task",
    userPlaceholder: "user",
    edit: "Edit",
    removeTitle: "Remove",
  },
  ka: {
    taskPlaceholder: "საქმე",
    userPlaceholder: "შემსრულებელი",
    edit: "შეცვლა",
    removeTitle: "წაშლა",
  },
};
const LanguageContext = createContext(null);

const LanguageContextProvider = ({ children }) => {
  const [lang, setLang] = useState(true);
  const values = useMemo(
    () => ({
      lang: lang ? "en" : "ka",
      toggleLang: () => setLang((prev) => !prev),
    }),
    [lang, setLang]
  );

  return (
    <LanguageContext.Provider value={values}>
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguageContext = () => {
  const contextValue = useContext(LanguageContext);
  if (!contextValue)
    throw new Error("component should be nested under LanguageContextProvider");
  return contextValue;
};

export default LanguageContextProvider;
