import styles from './overlay.module.scss'
import { CSSProperties, ReactNode } from 'react'

type OverlayTypes = {
	children: ReactNode
	paddingZero?: boolean
	sidePadding?: boolean
	bottomPadding?: boolean
	style?: CSSProperties
}

export const Overlay = ({ children, paddingZero = false, sidePadding, bottomPadding, style }: OverlayTypes) => (
	<div
		className={`${styles.overlay}${
			(paddingZero ? ` ${styles.overlayPaddingZero}` : '') ||
			(sidePadding ? ` ${styles.sidePadding}` : '') ||
			(bottomPadding ? ` ${styles.bottomPadding}` : '')
		}`}
		style={style}
	>
		{children}
	</div>
)
