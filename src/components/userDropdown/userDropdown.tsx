import { useEffect, useRef, useState } from 'react'
import styles from './userDropdown.module.scss'

type OptionsTypes = {
	id: string
	name: string
	value: string
}

type UserDropdownTypes = {
	name: string
	description: string
	options: [OptionsTypes]
	image: string
	onClick?: () => void
}

export const UserDropdown = ({ name, description, options, image, onClick }: UserDropdownTypes) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const select = useRef<HTMLButtonElement | null>(null)

	useEffect(() => {
		document.addEventListener('click', event => {
			const target = event.target as Node
			if (select.current) {
				if (!select.current.contains(target) || (target.contains(select.current) && target !== select.current)) {
					setIsOpen(false)
				} else {
					return select
				}
			}
		})
	}, [])

	return (
		<div className={styles.selectWrapper}>
			<div className={styles.selectContainer}>
				<button
					className={`${styles.selectContent}${isOpen ? ` ${styles.selectContentFocus}` : ''}`}
					onClick={() => setIsOpen(isOpen => !isOpen)}
					ref={select}
				>
					{image ? (
						<img src={image} className={styles.selectImage} alt={''} />
					) : (
						<div className={styles.emptyAvatar}>{name?.split(' ')[0].charAt(0) + name?.split(' ')[1].charAt(0)}</div>
					)}

					<div className={styles.selectPlaceholder}>
						<p>{name}</p>
						{description ? <p>{description}</p> : null}
					</div>
				</button>

				<div className={isOpen ? styles.selectOptionsActive : styles.selectOptions}>
					{options.map(({ id, name, value }) => (
						<Match>
							{/*	 todo rewrite this to use with react router dom*/}
							{({ url }: { url: string }) => (
								<label
									key={id}
									className={`${styles.selectOption} ${url === value ? `${styles.selectOptionActive}` : ''}`}
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
							)}
						</Match>
					))}
				</div>
			</div>
		</div>
	)
}
