import styles from './header.module.scss'
import { Link } from 'react-router-dom'
import { SelectCountry } from '../selectCountry/selectCountry.tsx'

export const Header = () => {
	return (
		<header className={styles.header}>
			<Link to={'/'}>
				<span>
					<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48' fill='none'>
						<path
							d='M18.04 5.68L7.26 14.08C5.46 15.48 4 18.46 4 20.72V35.54C4 40.18 7.78 43.98 12.42 43.98H35.58C40.22 43.98 44 40.18 44 35.56V21C44 18.58 42.38 15.48 40.4 14.1L28.04 5.44C25.24 3.48 20.74 3.58 18.04 5.68Z'
							stroke='#111827' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
						<path
							d='M21 36H27C30.3 36 33 33.3 33 30V24C33 20.7 30.3 18 27 18H21C17.7 18 15 20.7 15 24V30C15 33.3 17.7 36 21 36Z'
							stroke='#111827' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
						<path d='M24 18V36' stroke='#111827' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
						<path d='M15 27H33' stroke='#111827' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
					</svg>
				</span>
				property
			</Link>

			<SelectCountry/>
		</header>
	)
}
