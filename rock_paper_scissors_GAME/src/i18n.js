import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          d: {
            navHome: 'Home',
            navGame: 'Game',
            navScoreBoard: 'Scoreboard',
            gameRules: 'The game is played where players deliver hand signals that will represent the elements of the game; rock, paper and scissors. The outcome of the game is determined by 3 simple rules: Rock wins against scissors. Scissors win against paper. Paper wins against rock.'
          }
        }
      },
      de: {
        translation: {
          d: {
            navHome: 'Heim',
            navGame: 'Spiel',
            navScoreBoard: 'Anzeigetafel',
            gameRules: 'Das Spiel wird gespielt, wenn Spieler Handzeichen geben, die die Elemente des Spiels darstellen; Stein, Papier und Schere. Der Ausgang des Spiels wird durch 3 einfache Regeln bestimmt: Stein gewinnt gegen Schere. Schere gewinnt gegen Papier. Papier gewinnt gegen Stein.'
          }
        }
      },
      lv: {
        translation: {
          d: {            
            navHome: 'Mājas',
            navGame: 'Spēle',
            navScoreBoard: 'Rezultātu tabula',
            gameRules: 'Spēle tiek spēlēta, kur spēlētāji sniedz rokas signālus, kas attēlos spēles elementus; akmens, papīrs un šķēres. Spēles iznākumu nosaka 3 vienkārši noteikumi: Akmens uzvar pret šķērēm. Šķēres uzvar pret papīru. Papīrs uzvar pret akmeni.'
          }
        }
      }
    }
  });

export default i18n;