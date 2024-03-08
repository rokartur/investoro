import styles from './container.module.scss'
import { ComponentChildren } from 'preact'

type ContainerTypes = {
	children: ComponentChildren
	gap?: number
	paddingZero?: boolean
	className?: string
}

export const Container = ({ children, gap, paddingZero, className }: ContainerTypes) => (
	<div
		className={`${styles.container}${paddingZero ? ` ${styles.containerPaddingZero}` : ''}${
			className ? ` ${className}` : ''
		}`}
		style={{ gap: `${gap}px` }}
	>
		{children}
	</div>
)
