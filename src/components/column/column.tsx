import styles from './column.module.scss'
import { ComponentChildren } from 'preact'

type ColumnTypes = {
	children: ComponentChildren
	gap?: number
	isReverse?: boolean
	className?: string
	style?: any
}

export const Column = ({ children, gap, isReverse = false, className, style }: ColumnTypes) => (
	<div
		className={`${styles.column}${isReverse ? ` ${styles.reverse}` : ''}${className ? ` ${className}` : ''}`}
		style={{ gap: `${gap}px`, ...style }}
	>
		{children}
	</div>
)
