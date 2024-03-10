import styles from '../assets/styles/offers.module.scss'
import { Select } from '../components/select/select.tsx'
import { useRef, useState } from 'react'
import offers from '../assets/data.json'
import { Link } from 'react-router-dom'
import { Column } from '../components/column/column.tsx'

type OfferType = {
	title: string
	description: string
	price: string
	location: string
	type: string
	image: string
	meters: string
	bathrooms: number
	bedrooms: number
	year_built: string
	condition: string
}

export const Offers = () => {
	const [selectedType, setSelectedType] = useState('all')
	const [selectedMinPrice, setSelectedMinPrice] = useState('')
	const [selectedMaxPrice, setSelectedMaxPrice] = useState('')
	const [selectedSorting, setSelectedSorting] = useState('recentlyAdded')

	const container = useRef(null)

	const types = [
		{
			id: 'all',
			name: 'All',
			value: 'all',
		},
		{
			id: 'house',
			name: 'House',
			value: 'house',
		},
		{
			id: 'apartment',
			name: 'Apartment',
			value: 'apartment',
		},
		{
			id: 'office',
			name: 'Office',
			value: 'office',
		},
	]

	const sorting = [
		{
			id: 'recentlyAdded',
			name: 'Recently added',
			value: 'recentlyAdded',
		},
		{
			id: 'priceAscending',
			name: 'Price ascending',
			value: 'priceAscending',
		},
		{
			id: 'priceDescending',
			name: 'Price descending',
			value: 'priceDescending',
		},
	]

	return (
		<section className={styles.offersSection} id={'offersSection'} ref={container}>
			<h2>
				find your best
			</h2>

			<div className={styles.actions}>
				<Select
					placeholder={'Type'}
					selectedOption={types.find(type => type.id === selectedType)?.name || 'All'}
					options={types}
					onClick={(event) => setSelectedType(event.target?.value)}
					icon={
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
							<path d='M13 22H5C3 22 2 21 2 19V11C2 9 3 8 5 8H10V19C10 21 11 22 13 22Z' stroke='#4B5563'
										strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
							<path d='M10.11 4C10.03 4.3 10 4.63 10 5V8H5V6C5 4.9 5.9 4 7 4H10.11Z' stroke='#4B5563' strokeWidth='1.5'
										strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
							<path d='M14 8V13' stroke='#4B5563' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round'
										strokeLinejoin='round' />
							<path d='M18 8V13' stroke='#4B5563' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round'
										strokeLinejoin='round' />
							<path d='M17 17H15C14.45 17 14 17.45 14 18V22H18V18C18 17.45 17.55 17 17 17Z' stroke='#4B5563'
										strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
							<path d='M6 13V17' stroke='#4B5563' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round'
										strokeLinejoin='round' />
							<path d='M10 19V5C10 3 11 2 13 2H19C21 2 22 3 22 5V19C22 21 21 22 19 22H13C11 22 10 21 10 19Z'
										stroke='#4B5563' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round'
										strokeLinejoin='round' />
						</svg>
					}
				/>

				<label className={styles.price}>
					<div>
						<span>
							<svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
								<path
									d='M9.33856 14.3298C9.33856 15.6198 10.3286 16.6598 11.5586 16.6598H14.0686C15.1386 16.6598 16.0086 15.7498 16.0086 14.6298C16.0086 13.4098 15.4786 12.9798 14.6886 12.6998L10.6586 11.2998C9.86856 11.0198 9.33856 10.5898 9.33856 9.36984C9.33856 8.24984 10.2086 7.33984 11.2786 7.33984H13.7886C15.0186 7.33984 16.0086 8.37984 16.0086 9.66984'
									stroke='#4B5563' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
								<path d='M12.6667 6V18' stroke='#4B5563' strokeWidth='1.5' strokeLinecap='round'
											strokeLinejoin='round' />
								<path
									d='M15.6667 22H9.66669C4.66669 22 2.66669 20 2.66669 15V9C2.66669 4 4.66669 2 9.66669 2H15.6667C20.6667 2 22.6667 4 22.6667 9V15C22.6667 20 20.6667 22 15.6667 22Z'
									stroke='#4B5563' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
							</svg>
						</span>
						<p>Price</p>
					</div>
					<input
						type={'text'}
						placeholder={'min'}
						value={selectedMinPrice}
						onChange={(event) => setSelectedMinPrice(event.target.value)}
						step={1000}
					/>
					<input
						type={'text'}
						placeholder={'max'}
						value={selectedMaxPrice}
						onChange={(event) => setSelectedMaxPrice(event.target.value)}
						step={1000}
					/>
				</label>

				<Select
					placeholder={'Sorting'}
					selectedOption={sorting.find(sort => sort.id === selectedSorting)?.name || 'Recently added'}
					options={sorting}
					onClick={(event) => setSelectedSorting(event.target?.value)}
					icon={
						<svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' viewBox='0 0 25 24' fill='none'>
							<path
								d='M5.73328 2.09998H18.9333C20.0333 2.09998 20.9333 2.99998 20.9333 4.09998V6.29998C20.9333 7.09998 20.4333 8.09998 19.9333 8.59998L15.6333 12.4C15.0333 12.9 14.6333 13.9 14.6333 14.7V19C14.6333 19.6 14.2333 20.4 13.7333 20.7L12.3333 21.6C11.0333 22.4 9.23328 21.5 9.23328 19.9V14.6C9.23328 13.9 8.83328 13 8.43328 12.5L4.63328 8.49998C4.13328 7.99998 3.73328 7.09998 3.73328 6.49998V4.19998C3.73328 2.99998 4.63328 2.09998 5.73328 2.09998Z'
								stroke='#4B5563' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round'
								strokeLinejoin='round' />
							<path d='M11.2633 2.09998L6.33325 9.99998' stroke='#4B5563' strokeWidth='1.5' strokeMiterlimit='10'
										strokeLinecap='round' strokeLinejoin='round' />
						</svg>
					}
				/>
			</div>

			<div className={styles.offersList}>
				{offers
					.filter(offer => {
						const offerPrice = Number(offer.price.split(',').join(''))
						const minPrice = Number(selectedMinPrice)
						const maxPrice = selectedMaxPrice === '' ? 0 : Number(selectedMaxPrice)
						return (selectedType === 'all' || offer.type === selectedType) &&
							(maxPrice === 0 ? offerPrice >= minPrice : (offerPrice >= minPrice && offerPrice <= maxPrice))
					})
					.sort((a: OfferType, b: OfferType) => {
						if (selectedSorting === 'recentlyAdded') {
							return 0
						} else if (selectedSorting === 'priceAscending') {
							return Number(a.price.split(',').join('')) - Number(b.price.split(',').join(''))
						} else if (selectedSorting === 'priceDescending') {
							return Number(b.price.split(',').join('')) - Number(a.price.split(',').join(''))
						}

						return 0
					})
					.map(({ image, title, location, price, type }, index) => (
						<Link key={index} className={styles.offer} to={`/offer/${title.toLowerCase().replaceAll(' ', '-')}`}>
							<img src={image} alt={title} />
							<div className={styles.offerBadge}>
								<span>
									{type === 'house' ?
										<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
											<path
												d='M7.51666 2.36664L3.02499 5.86664C2.27499 6.44997 1.66666 7.69164 1.66666 8.63331V14.8083C1.66666 16.7416 3.24166 18.325 5.17499 18.325H14.825C16.7583 18.325 18.3333 16.7416 18.3333 14.8166V8.74997C18.3333 7.74164 17.6583 6.44997 16.8333 5.87497L11.6833 2.26664C10.5167 1.44997 8.64166 1.49164 7.51666 2.36664Z'
												stroke='#4B5563' strokeWidth='1.25' strokeLinecap='round' strokeLinejoin='round' />
											<path d='M10 14.9916V12.4916' stroke='#4B5563' strokeWidth='1.25' strokeLinecap='round'
														strokeLinejoin='round' />
										</svg> : type === 'apartment' ?
											<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
												<path d='M1 22H23' stroke='white' strokeWidth='1.5' strokeMiterlimit='10'
															strokeLinecap='round' strokeLinejoin='round' />
												<path d='M19.78 22.01V17.55' stroke='white' strokeWidth='1.5' strokeMiterlimit='10'
															strokeLinecap='round' strokeLinejoin='round' />
												<path
													d='M19.8001 10.89C18.5801 10.89 17.6001 11.87 17.6001 13.09V15.36C17.6001 16.58 18.5801 17.56 19.8001 17.56C21.0201 17.56 22.0001 16.58 22.0001 15.36V13.09C22.0001 11.87 21.0201 10.89 19.8001 10.89Z'
													stroke='white' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round'
													strokeLinejoin='round' />
												<path
													d='M2.1001 22V6.03003C2.1001 4.02003 3.10015 3.01001 5.09015 3.01001H11.3201C13.3101 3.01001 14.3001 4.02003 14.3001 6.03003V22'
													stroke='white' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round'
													strokeLinejoin='round' />
												<path d='M5.80005 8.25H10.7501' stroke='white' strokeWidth='1.5' strokeMiterlimit='10'
															strokeLinecap='round' strokeLinejoin='round' />
												<path d='M5.80005 12H10.7501' stroke='white' strokeWidth='1.5' strokeMiterlimit='10'
															strokeLinecap='round' strokeLinejoin='round' />
												<path d='M8.25 22V18.25' stroke='white' strokeWidth='1.5' strokeMiterlimit='10'
															strokeLinecap='round' strokeLinejoin='round' />
											</svg> : type === 'office' ?
												<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
													<path d='M2 22H22' stroke='white' strokeWidth='1.5' strokeMiterlimit='10'
																strokeLinecap='round' strokeLinejoin='round' />
													<path d='M17 2H7C4 2 3 3.79 3 6V22H21V6C21 3.79 20 2 17 2Z' stroke='white' strokeWidth='1.5'
																strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
													<path d='M7 16.5H10' stroke='white' strokeWidth='1.5' strokeMiterlimit='10'
																strokeLinecap='round' strokeLinejoin='round' />
													<path d='M14 16.5H17' stroke='white' strokeWidth='1.5' strokeMiterlimit='10'
																strokeLinecap='round' strokeLinejoin='round' />
													<path d='M7 12H10' stroke='white' strokeWidth='1.5' strokeMiterlimit='10'
																strokeLinecap='round' strokeLinejoin='round' />
													<path d='M14 12H17' stroke='white' strokeWidth='1.5' strokeMiterlimit='10'
																strokeLinecap='round' strokeLinejoin='round' />
													<path d='M7 7.5H10' stroke='white' strokeWidth='1.5' strokeMiterlimit='10'
																strokeLinecap='round' strokeLinejoin='round' />
													<path d='M14 7.5H17' stroke='white' strokeWidth='1.5' strokeMiterlimit='10'
																strokeLinecap='round' strokeLinejoin='round' />
												</svg> :
												<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
													<path
														d='M7.51666 2.36664L3.02499 5.86664C2.27499 6.44997 1.66666 7.69164 1.66666 8.63331V14.8083C1.66666 16.7416 3.24166 18.325 5.17499 18.325H14.825C16.7583 18.325 18.3333 16.7416 18.3333 14.8166V8.74997C18.3333 7.74164 17.6583 6.44997 16.8333 5.87497L11.6833 2.26664C10.5167 1.44997 8.64166 1.49164 7.51666 2.36664Z'
														stroke='#4B5563' strokeWidth='1.25' strokeLinecap='round' strokeLinejoin='round' />
													<path d='M10 14.9916V12.4916' stroke='#4B5563' strokeWidth='1.25' strokeLinecap='round'
																strokeLinejoin='round' />
												</svg>}
								</span>
								<p>
									{type}
								</p>
							</div>
							<div className={styles.offerInfo}>
								<Column gap={8}>
									<p className={styles.offerTitle}>{title}</p>
									<p className={styles.offerLocation}>
									<span>
										<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
											<path
												d='M10 11.1916C11.4359 11.1916 12.6 10.0275 12.6 8.59158C12.6 7.15564 11.4359 5.99158 10 5.99158C8.56407 5.99158 7.40001 7.15564 7.40001 8.59158C7.40001 10.0275 8.56407 11.1916 10 11.1916Z'
												stroke='#A1A1AA' strokeWidth='1.25' />
											<path
												d='M3.01666 7.07496C4.65832 -0.141705 15.35 -0.133372 16.9833 7.08329C17.9417 11.3166 15.3083 14.9 13 17.1166C11.325 18.7333 8.67499 18.7333 6.99166 17.1166C4.69166 14.9 2.05832 11.3083 3.01666 7.07496Z'
												stroke='#A1A1AA' strokeWidth='1.25' />
										</svg>
									</span>
										{location}
									</p>
								</Column>
								<div className={styles.offerActions}>
									<p className={styles.offerPrice}>{price} PLN</p>
									<div className={styles.offerButton}>
										<div>
										<span>
											<p>Learn more</p>
											<span>
												<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
													<path d='M17 7L7 17M17 7H8M17 7V16' stroke='#171717' strokeWidth='2' strokeLinecap='square' />
												</svg>
											</span>
										</span>
										</div>

										<div>
										<span>
											<p>Learn more</p>
											<span>
												<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
													<path d='M17 7L7 17M17 7H8M17 7V16' stroke='#171717' strokeWidth='2' strokeLinecap='square' />
												</svg>
											</span>
										</span>
										</div>
									</div>
								</div>
							</div>
						</Link>
					))}
			</div>
		</section>
	)
}
