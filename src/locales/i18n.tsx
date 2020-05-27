import i18n from "i18next";
import Backend from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"
// import jaJson from '../locales/ja/T';

// the translations
// (tip move them in a JSON file and import them)
// const resources = {
// 		en: {
// 				translation: {
// 						"Welcome to React": "Welcome to React and react-i18next"
// 				}
// 		},
// 		ja: {
// 				translation: {
// 						"Welcome to React": "目標へ向かう学習を"
// 				}
// 		}
// };

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next) // passes i18n down to react-i18next
.init({
		fallbackLng: "ja",
		// keySeparator: false, // we do not use keys in form messages.welcome
		// resources: {
		// 		en: { translation: enJson },
		// 		ja: { translation: jaJson },
		// },
		ns: ["translations"],
		defaultNS: "translations",

		debug: true,
		interpolation: {
				escapeValue: false // react already safes from xss
		},

		react: {
				wait: true,
		},
});

export default i18n;
