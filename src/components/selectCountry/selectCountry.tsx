import { useEffect, useRef, useState } from 'react'
import styles from './selectCountry.module.scss'
import wretch from 'wretch'

type Countries = {
	id: string
	name: string
	value: string
}[]

type Country = {
	id: string;
	name: string;
	value: string;
}

export const SelectCountry = () => {
	const [isOpen, setIsOpen] = useState(false)
	const button = useRef<HTMLButtonElement>(null)
	const body = document.querySelector<HTMLBodyElement>('body')
	const [selectedCountry, setSelectedCountry] = useState<string>('')
	const [countries, setCountries] = useState<Countries>([])

	useEffect(() => {
		const fetchCountries = async () => {
			const res: [] = await wretch('https://restcountries.com/v3.1/all').get().json()
			const countriesMap = res?.map(({ cca3, flag, name }: {
				cca3: string;
				flag: string,
				name: { common: string }
			}) => ({
				id: cca3,
				name: `${flag} ${name.common}`,
				value: cca3,
			})) as Country[]
			countriesMap.sort((a: Country, b: Country) => a.name.localeCompare(b.name))
			setCountries(countriesMap)
		}

		fetchCountries().then()
	}, [])

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
	}, [])

	if (isOpen) {
		body?.classList.add('tempDisableScroll')
	} else {
		body?.classList.remove('tempDisableScroll')
	}

	return (
		<div className={styles.selectWrapper}>
			<div className={styles.selectContainer}>
				<button
					className={`${styles.selectContent}${isOpen ? ' ' + styles.selectContentFocus : ''}`}
					onClick={() => setIsOpen(isOpen => !isOpen)}
					ref={button}
				>
					<div className={styles.selectPlaceholder}>
						<span>{countries?.find(({ value }) => value === selectedCountry)?.name || 'Select country'}</span>
					</div>

					<span style={isOpen ? { transform: 'rotate(180deg)' } : { transform: 'rotate(0)' }}>
						<svg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
							<path d='M15 8.47607L10 13.4761L5 8.47607' stroke='#737373' strokeWidth='1.67' strokeLinecap='round'
										strokeLinejoin='round' />
						</svg>
					</span>
				</button>

				<div className={isOpen ? styles.selectOptionsActive : styles.selectOptions}>
					{countries?.map(({ id, name, value }) => (
						<label
							key={id}
							className={selectedCountry === value ? styles.selectOptionActive : styles.selectOption}
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
								onClick={() => setSelectedCountry(value)}
							/>
						</label>
					))}
				</div>
			</div>
		</div>
	)
}
