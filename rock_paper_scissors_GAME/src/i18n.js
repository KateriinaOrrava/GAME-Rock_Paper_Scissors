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
            handSignals:"<h2>The Hand Signals</h2>",
            greeting: 'Hello',
            navHome: 'Home',
            navGame: 'Game',
            navScoreBoard: 'Scoreboard',
            gameRules: 'The game is played where players deliver hand signals that will represent the elements of the game; rock, paper and scissors. The outcome of the game is determined by 3 simple rules: Rock wins against scissors. Scissors win against paper. Paper wins against rock.',
            userChoice: 'User choise is:',
            computerChoice:'Computer choice is:',
            gameScore: 'Game score: ',
            gameScorePoints: 'points', 
            starterText: 'CHOOSE YOUR WEAPON',
            gameRulesPlay: 'GAME RULES: You will compete with a computer. You can choose 3 weapons: rock ✊, scissors✌️ or paper🤚. For each time you win, you get 1 point. For each time computer wins, you will loose a point. In the end of the game you will see GAME STATISTICS, that will be having all the information about your battle with the computer. Good luck and remember - IT IS NOT A GAME, it is a BATTLE 🥷',
            statistics: 'STATISTICS',
            playerName: 'PLAYER NAME:',
            timesPlayed: 'TIMES PLAYED:',
            WINNINGpERCENTAGE: 'WINNING PERCENTAGE:',
            gamePoints: 'GAME POINTS:',
            paper: 'PAPER:',
            rock: 'ROCK:',
            scissors: 'SCISSORS:',
            timesOr: 'times or',
            enterUsername: 'Enter name'
          }
        }
      },
      de: {
        translation: {
          d: {
            handSignals:"<h2>The Hand Signals</h2>",
            greeting: 'Hallo',
            navHome: 'Heim',
            navGame: 'Spiel',
            navScoreBoard: 'Anzeigetafel',
            gameRules: 'Das Spiel wird gespielt, wenn Spieler Handzeichen geben, die die Elemente des Spiels darstellen; Stein, Papier und Schere. Der Ausgang des Spiels wird durch 3 einfache Regeln bestimmt: Stein gewinnt gegen Schere. Schere gewinnt gegen Papier. Papier gewinnt gegen Stein.',
            userChoice: 'Benutzerauswahl ist:',
            computerChoice: 'Computerwahl ist:',
            gameScore: 'Spielergebnis:',
            gameScorePoints: 'punkte',
            starterText: 'WÄHLE DEINE WAFFE',
            gameRulesPlay: 'SPIELREGELN: Sie treten gegen einen Computer an. Du kannst 3 Waffen wählen: Stein✊, Schere✌️ oder Papier🤚. Für jeden Gewinn erhalten Sie 1 Punkt. Für jedes Mal, wenn der Computer gewinnt, verlieren Sie einen Punkt. Am Ende des Spiels sehen Sie die SPIELSTATISTIK, die alle Informationen über Ihren Kampf mit dem Computer enthält. Viel Glück und denk dran - ES IST KEIN SPIEL, es ist ein KAMPF 🥷',
            statistics: 'STATISTIKEN',
            playerName: 'SPIELERNAME:',
            timesPlayed: 'TIMES PLAYED:',
            WINNINGpERCENTAGE: 'GEWINNPROZENT:',
            gamePoints: 'SPIELPUNKTE:',
            paper: 'PAPIER:',
            rock: 'FELSEN:',
            scissors: 'SCHERE:',
            timesOr: 'mal oder',
            enterUsername: 'Name eingeben'
          }
        }
      },
      lv: {
        translation: {
          d: {
            handSignals:"<h2>Rokas signāli</h2>",
            greeting: 'Čau',            
            navHome: 'Mājas',
            navGame: 'Spēle',
            navScoreBoard: 'Rezultātu tabula',
            gameRules: 'Spēle tiek spēlēta, kur spēlētāji sniedz rokas signālus, kas attēlos spēles elementus; akmens, papīrs un šķēres. Spēles iznākumu nosaka 3 vienkārši noteikumi: Akmens uzvar pret šķērēm. Šķēres uzvar pret papīru. Papīrs uzvar pret akmeni.',
            userChoice: 'Lietotāja izvēle ir:',
            computerChoice:'Datora izvēle ir:',
            gameScore: 'Spēles rezultāts:',
            gameScorePoints: 'punkti',
            starterText: 'IZVĒLIES SAVU IEROCI',
            gameRulesPlay: 'SPĒLES NOTEIKUMI: Tu sacentīsies ar datoru. Var izvēlēties 3 ieročus: akmens ✊, šķēres✌️ vai papīrs🤚. Par katru uzvaru tu saņem 1 punktu. Par katru reizi, kad dators uzvar, tu zaudēsi punktu. Spēles beigās tu redzēsi SPĒLES STATISTIKU, kurā būs visa informācija par jūsu cīņu ar datoru. Lai veicas un atceries - TĀ NAV SPĒLE, tā ir KAUJA 🥷',
            statistics: 'STATISTIKA',
            playerName: 'SPĒLĒTĀJA VĀRDS:',
            timesPlayed: 'REIZES SPĒLĒTS:',
            WINNINGpERCENTAGE: 'UZVARU PROCENTUĀLĀ ATTIECĪBA',
            gamePoints: 'SPĒLES PUNKTI:',
            paper: 'PAPĪRS:',
            rock: 'AKMENS:',
            scissors: 'ŠĶĒRES:',
            timesOr: 'reizes vai',
            enterUsername: 'Ievadi vārdu'
        }
      }
    }
    }
  });

export default i18n;