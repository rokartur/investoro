import styles from './tooltip.module.scss'
import { ReactNode } from 'react'

type TooltipTypes = {
	title: string
	children: ReactNode
	place?: 'bottom' | 'left'
}

export const Tooltip = ({ title, children, place = 'bottom' }: TooltipTypes) => (
	<div className={styles.tooltipWrapper}>
		{children}

		{place === 'bottom' && <p className={styles.tooltipContent}>{title}</p>}
		{place === 'left' && <p className={styles.tooltipContentLeft}>{title}</p>}
	</div>
)
