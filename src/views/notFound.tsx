import styles from '../styles/notFound.module.scss'
import { useScrollToTop } from '../hooks/useScrollToTop.ts'
import { SEO } from '../components/seo.tsx'
import { Link } from 'react-router-dom'

const metadata = {
	title: 'Nie znaleziono strony',
	description: 'Nie odnaleziono strony o podanym adresie',
	path: '/404',
}

const NotFound = () => {
	useScrollToTop()

	return (
		<>
			<SEO title={metadata.title} description={metadata.description} path={metadata.path} />

			<main className={styles.container}>
				<h1 className={styles.code}>404</h1>
				<p className={styles.content}>Opps! Nie znaleziono strony</p>
				<Link className={styles.backButton} to={'/'}>
					Wróć do strony głównej
				</Link>
			</main>
		</>
	)
}

export default NotFound
