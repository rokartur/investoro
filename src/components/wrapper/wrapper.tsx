import styles from './wrapper.module.scss'
import { CSSProperties, ReactNode } from 'react'

type WrapperTypes = {
	children: ReactNode
	className?: string
	style?: CSSProperties
}

export const Wrapper = ({ children, className, style }: WrapperTypes) => (
	<main className={`${styles.wrapper}${className ? ` ${className}` : ''}`} style={style}>
		{children}
	</main>
)
