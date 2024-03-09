import { useEffect, useRef, useState } from 'react'
import styles from './select.module.scss'

type SelectTypes = {
	placeholder: string
	selectedOption: string
	options: {
		id: string
		name: string
		value: string
	}[]
	icon?: JSX.Element
	onClick: (event: any) => void
	id?: string
}

export const Select = ({ placeholder, id, selectedOption, options, icon, onClick }: SelectTypes) => {
	const [isOpen, setIsOpen] = useState(false)
	const button = useRef<HTMLButtonElement>(null)
	const body = document.querySelector<HTMLBodyElement>('body')

	useEffect(() => {
		document.addEventListener('click', event => {
			const target = event.target as Node
			if (button.current) {
				if (!button.current.contains(target) || (target.contains(button.current) && target !== button.current)) {
					setIsOpen(false)
				} else {
					return button
				}
			}
		})

		document.addEventListener('keydown', (event: KeyboardEvent) => {
			if (event.key === 'Escape' && isOpen) {
				setIsOpen(false)
			}
		})
	}, [isOpen])

	if (isOpen) {
		body?.classList.add('tempDisableScroll')
	} else {
		body?.classList.remove('tempDisableScroll')
	}

	return (
		<div id={id} className={styles.selectContainer}>
			<button
				className={`${styles.selectContent}${isOpen ? ' ' + styles.selectContentFocus : ''}`}
				onClick={() => setIsOpen(isOpen => !isOpen)}
				ref={button}
			>
				<div className={styles.selectPlaceholder}>
					<span>{icon}</span>
					<p>{placeholder}</p>
				</div>

				<div className={styles.selectedOption}>
					{selectedOption}

					<span style={isOpen ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0)' }}>
					<svg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path d='M15 8.47607L10 13.4761L5 8.47607' stroke='#737373' strokeWidth='1.67' strokeLinecap='round'
									strokeLinejoin='round' />
					</svg>
				</span>
				</div>
			</button>

			<div className={isOpen ? styles.selectOptionsActive : styles.selectOptions}>
				{options.map(({ id, name, value }) => (
					<label
						key={id}
						className={selectedOption === value ? styles.selectOptionActive : styles.selectOption}
						htmlFor={id}
						onClick={() => setIsOpen(false)}
					>
						{name}

						<input
							type={'radio'}
							className={styles.selectContentRadio}
							id={id}
							name={name}
							value={value}
							onClick={onClick}
						/>
					</label>
				))}
			</div>
		</div>
	)
}
