import styles from '../assets/styles/notFound.module.scss'
import { useScrollToTop } from '../hooks/useScrollToTop.ts'
import { SEO } from '../components/seo.tsx'
import { Link } from 'react-router-dom'

const metadata = {
	title: 'Page not found',
	description: '',
	path: '/404',
}

export const NotFound = () => {
	useScrollToTop()

	return (
		<>
			<SEO title={metadata.title} description={metadata.description} path={metadata.path} />

			<main className={styles.container}>
				<h1 className={styles.code}>404</h1>
				<Link to={'/'} id={'item'} className={styles.offer404Button}>
					<div>
						<span>
							<p>home page</p>
						</span>
					</div>

					<div>
						<span>
							<p>home page</p>
						</span>
					</div>
				</Link>
			</main>
		</>
	)
}
