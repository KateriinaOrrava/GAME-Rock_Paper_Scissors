import { useTranslation, Trans } from 'react-i18next'; 

const Game = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
        <h1>{t('d.navGame')}</h1>
        </>
    )
}
export default Game;