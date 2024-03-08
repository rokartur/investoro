import styles from './overlay.module.scss'
import { ComponentChildren } from 'preact'

type OverlayTypes = {
	children: ComponentChildren
	paddingZero?: boolean
	sidePadding?: boolean
	bottomPadding?: boolean
	style?: any
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
