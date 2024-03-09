import styles from './container.module.scss'
import { CSSProperties, ReactNode } from 'react'

type ContainerTypes = {
	children: ReactNode
	gap?: number
	paddingZero?: boolean
	className?: string
	style?: CSSProperties
}

export const Container = ({ children, gap, paddingZero, className, style }: ContainerTypes) => (
	<div
		className={`${styles.container}${paddingZero ? ` ${styles.containerPaddingZero}` : ''}${
			className ? ` ${className}` : ''
		}`}
		style={{ gap: `${gap}px`, ...style }}
	>
		{children}
	</div>
)
