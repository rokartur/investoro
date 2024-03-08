import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import styles from './alertDialog.module.scss'
import { Paragraph } from '../typography/paragraph.tsx'
import { IconX } from '../../assets/icons/IconX.tsx'

type AlertDialogTypes = {
	icon?: JSX.Element
	title?: string
	description?: string
	isOpen: boolean
	onClose: () => void
	onCancel: () => void
	onConfirm: () => void
	closeWhenClickBackground?: boolean
	closeWhenClickEscape?: boolean
}

export const AlertDialog = ({
															icon,
															title = 'Title',
															description = 'Description',
															isOpen,
															onClose,
															closeWhenClickBackground = false,
															closeWhenClickEscape = false,
														}: AlertDialogTypes) => {
	const [isClose, setIsClose] = useState(false)
	const body = document.querySelector<HTMLBodyElement>('body')
	const alertDialogContainer = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (closeWhenClickBackground) {
			document.addEventListener('click', (event: MouseEvent) => {
				const target = event.target as Node
				if (alertDialogContainer.current) {
					if (!alertDialogContainer.current.contains(target) || (target.contains(alertDialogContainer.current) && target !== alertDialogContainer.current)) {
						onClose()
					} else {
						return alertDialogContainer
					}
				}
			})
		}

		if (closeWhenClickEscape) {
			document.addEventListener('keydown', (event: KeyboardEvent) => {
				if (event.key === 'Escape' && isOpen) {
					onClose()
				}
			})
		}

		if (!isOpen) {
			if (isClose) {
				gsap.fromTo(
					'#alertDialog',
					{ opacity: 1, scale: 1 },
					{ opacity: 0, scale: 0.9, duration: 0.15, ease: 'ease-out' },
				)
				gsap.fromTo('#alertDialogBackground', { opacity: 1 }, { opacity: 0, duration: 0.15, ease: 'ease-out' })
				setTimeout(() => setIsClose(false), 400)
			}
		} else {
			setIsClose(true)
		}
	}, [isOpen])

	if (isClose) {
		body?.classList.add('tempDisableScroll')
	} else {
		body?.classList.remove('tempDisableScroll')
	}

	if (isClose) {
		return (
			<div id={'alertDialogBackground'} className={styles.alertDialogBackground}>
				<div id={'alertDialog'} className={styles.alertDialog} ref={alertDialogContainer}>
					<div className={styles.alertDialogContainer}>
						<div className={styles.alertDialogContent}>
							<button className={styles.alertDialogClose} onClick={onClose}>
								<IconX />
							</button>

							{icon ? <span className={styles.alertDialogIcon}>{icon}</span> : null}

							<div className={styles.alertDialogText}>
								<Paragraph size={'large'} weight={'medium-weight'}>
									{title}
								</Paragraph>
								<Paragraph size={'small'} weight={'regular-weight'}>
									{description}
								</Paragraph>
							</div>
						</div>

						<div className={styles.alertDialogActions}>
							<button>Action</button>
							<button>Action</button>
						</div>
					</div>
				</div>
			</div>
		)
	} else {
		return null
	}
}
