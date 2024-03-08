import styles from './wrapper.module.scss'
import { ComponentChildren } from 'preact'

type WrapperTypes = {
	children: ComponentChildren
	className?: string
	style?: any
}

export const Wrapper = ({ children, className, style }: WrapperTypes) => (
	<main className={`${styles.wrapper}${className ? ` ${className}` : ''}`} style={style}>
		{children}
	</main>
)
