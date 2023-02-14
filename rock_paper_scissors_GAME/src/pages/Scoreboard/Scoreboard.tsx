import { useTranslation, Trans } from 'react-i18next'; 

const Scoreboard = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
        <h1>{t('d.navScoreBoard')}</h1>
        </>
    )
}
export default Scoreboard;