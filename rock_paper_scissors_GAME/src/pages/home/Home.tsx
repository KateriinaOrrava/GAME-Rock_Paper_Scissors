import { useTranslation, Trans } from 'react-i18next'; 
import styles from './Home.module.css'
const Home = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className={styles.routeContent}>
            <h1>{t('d.navHome')}</h1>
            <div className={styles.gameRules}>
                <p>{t('d.gameRules')}</p>
            </div>
        </div>
    )
}
export default Home;