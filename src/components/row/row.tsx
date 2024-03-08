import styles from './row.module.scss'
import { ComponentChildren } from 'preact'

type RowTypes = {
	children: ComponentChildren
	gap?: number
	isReverse?: boolean
	isBetween?: boolean
	className?: string
	style?: any
}

export const Row = ({ children, gap, isReverse = false, isBetween = false, className, style }: RowTypes) => (
	<div
		className={`${styles.row}${isReverse ? ` ${styles.reverse}` : ''}${isBetween ? ` ${styles.between}` : ''}${
			className ? ` ${className}` : ''
		}`}
		style={{ gap: `${gap}px`, ...style }}
	>
		{children}
	</div>
)
