import i18n from "i18next";
import Backend from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"

import {jaData, enData} from '../locales';

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next) // passes i18n down to react-i18next
.init({
		fallbackLng: "ja",
		// keySeparator: false, // we do not use keys in form messages.welcome
		resources: {
				en: { translations: enData },
				ja: { translations: jaData },
		},
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
