import styles from '../styles/offer.module.scss'
import { useParams } from 'react-router-dom'
import offers from '../assets/data.json'
import { Photo } from '../components/photo.tsx'
import { Column } from '../components/column/column.tsx'
import { Row } from '../components/row/row.tsx'
import { useScrollToTop } from '../hooks/useScrollToTop.ts'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'

export const Offer = () => {
	useScrollToTop()
	const container = useRef(null)
	const { id } = useParams()
	const selectedOffer = offers.find(item => item.title.toLowerCase().replaceAll(' ', '-') === id)

	useGSAP(() => {
		gsap.fromTo(
			'#item',
			{
				opacity: 0,
				scale: .5,
			},
			{
				opacity: 1,
				scale: 1,
				duration: .4,
				ease: 'back',
				stagger: .1,
			})
	}, { scope: container, revertOnUpdate: true })

	return (
		<section className={styles.offerContainer} ref={container}>
			<div className={styles.offerMainDetails}>
				<h1 id={'item'}>{selectedOffer?.title}</h1>
				<Photo id={'item'} source={selectedOffer?.image || ''} />
				<div id={'item'} className={styles.offerContactButton}>
					<div>
						<span>
							<p>123 456 789</p>
						</span>
					</div>

					<div>
						<span>
							<p>contact</p>
							<span>
								<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48' fill='none'>
									<path
										d='M43.9395 36.6601C43.9395 37.3801 43.7795 38.1201 43.4395 38.8401C43.0995 39.5601 42.6595 40.2401 42.0795 40.8801C41.0995 41.9601 40.0195 42.7401 38.7995 43.2401C37.5995 43.7401 36.2995 44.0001 34.8995 44.0001C32.8595 44.0001 30.6795 43.5201 28.3795 42.5401C26.0795 41.5601 23.7795 40.2401 21.4995 38.5801C19.1995 36.9001 17.0195 35.0401 14.9395 32.9801C12.8795 30.9001 11.0195 28.7201 9.35951 26.4401C7.71951 24.1601 6.39951 21.8801 5.43951 19.6201C4.47951 17.3401 3.99951 15.1601 3.99951 13.0801C3.99951 11.7201 4.23951 10.4201 4.71951 9.22006C5.19951 8.00006 5.95951 6.88006 7.01951 5.88006C8.29951 4.62006 9.69951 4.00006 11.1795 4.00006C11.7395 4.00006 12.2995 4.12006 12.7995 4.36006C13.3195 4.60006 13.7795 4.96006 14.1395 5.48006L18.7795 12.0201C19.1395 12.5201 19.3995 12.9801 19.5795 13.4201C19.7595 13.8401 19.8595 14.2601 19.8595 14.6401C19.8595 15.1201 19.7195 15.6001 19.4395 16.0601C19.1795 16.5201 18.7995 17.0001 18.3195 17.4801L16.7995 19.0601C16.5795 19.2801 16.4795 19.5401 16.4795 19.8601C16.4795 20.0201 16.4995 20.1601 16.5395 20.3201C16.5995 20.4801 16.6595 20.6001 16.6995 20.7201C17.0595 21.3801 17.6795 22.2401 18.5595 23.2801C19.4595 24.3201 20.4195 25.3801 21.4595 26.4401C22.5395 27.5001 23.5795 28.4801 24.6395 29.3801C25.6795 30.2601 26.5395 30.8601 27.2195 31.2201C27.3195 31.2601 27.4395 31.3201 27.5795 31.3801C27.7395 31.4401 27.8995 31.4601 28.0795 31.4601C28.4195 31.4601 28.6795 31.3401 28.8995 31.1201L30.4195 29.6201C30.9195 29.1201 31.3995 28.7401 31.8595 28.5001C32.3195 28.2201 32.7795 28.0801 33.2795 28.0801C33.6595 28.0801 34.0595 28.1601 34.4995 28.3401C34.9395 28.5201 35.3995 28.7801 35.8995 29.1201L42.5195 33.8201C43.0395 34.1801 43.3995 34.6001 43.6195 35.1001C43.8195 35.6001 43.9395 36.1001 43.9395 36.6601Z'
										stroke='white' strokeWidth='3' strokeMiterlimit='10' />
								</svg>
							</span>
						</span>
					</div>
				</div>
				<div id={'item'} className={styles.offerHoverInfo}>
					<span>
						<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
							<path d='M9.57 5.92999L3.5 12L9.57 18.07M20.5 12H3.67004' stroke='black' strokeWidth='1.5'
										strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
						</svg>
					</span>
					<p>Hover</p>
				</div>
				<div id={'item'} className={styles.offerLocation}>
					{selectedOffer?.location}
				</div>
			</div>

			<div className={styles.divider} />

			<p id={'item'} className={styles.offerDescription}>
				{selectedOffer?.description}
			</p>

			<div className={styles.divider} />

			<Row isBetween style={{ maxWidth: '1304px' }} className={styles.otherDetailsWrapper}>
				<div id={'item'} className={styles.offerOtherDetails}>
					<Column gap={32}>
						<p className={styles.supportingText}>
							Property details
						</p>

						<Column gap={24}>
							<p>
							<span>
								<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
									<path
										d='M6.70001 18H4.15002C2.72002 18 2 17.28 2 15.85V4.15002C2 2.72002 2.72002 2 4.15002 2H8.45001C9.88001 2 10.6 2.72002 10.6 4.15002V6'
										stroke='black' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round'
										strokeLinejoin='round' />
									<path
										d='M17.3699 8.41998V19.58C17.3699 21.19 16.57 22 14.96 22H9.11993C7.50993 22 6.69995 21.19 6.69995 19.58V8.41998C6.69995 6.80998 7.50993 6 9.11993 6H14.96C16.57 6 17.3699 6.80998 17.3699 8.41998Z'
										stroke='black' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round'
										strokeLinejoin='round' />
									<path
										d='M13.3999 6V4.15002C13.3999 2.72002 14.1199 2 15.5499 2H19.8499C21.2799 2 21.9999 2.72002 21.9999 4.15002V15.85C21.9999 17.28 21.2799 18 19.8499 18H17.3699'
										stroke='black' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round'
										strokeLinejoin='round' />
									<path d='M10 11H14' stroke='black' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round'
												strokeLinejoin='round' />
									<path d='M10 14H14' stroke='black' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round'
												strokeLinejoin='round' />
									<path d='M12 22V19' stroke='black' strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round'
												strokeLinejoin='round' />
								</svg>
							</span>
								Close to city center
							</p>
							<p>
							<span>
								<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
									<path
										d='M3.01001 11.22V15.71C3.01001 20.2 4.81001 22 9.30001 22H14.69C19.18 22 20.98 20.2 20.98 15.71V11.22'
										stroke='black' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
									<path
										d='M12 12C13.83 12 15.18 10.51 15 8.68L14.34 2H9.66999L8.99999 8.68C8.81999 10.51 10.17 12 12 12Z'
										stroke='black' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
									<path
										d='M18.31 12C20.33 12 21.81 10.36 21.61 8.35L21.33 5.6C20.97 3 19.97 2 17.35 2H14.3L15 9.01C15.17 10.66 16.66 12 18.31 12Z'
										stroke='black' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
									<path
										d='M5.63988 12C7.28988 12 8.77988 10.66 8.93988 9.01L9.15988 6.8L9.63988 2H6.58988C3.96988 2 2.96988 3 2.60988 5.6L2.33988 8.35C2.13988 10.36 3.61988 12 5.63988 12Z'
										stroke='black' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
									<path d='M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z' stroke='black'
												strokeWidth='1.5'
												strokeLinecap='round' strokeLinejoin='round' />
								</svg>
							</span>
								Close to snoops, restaurants and supermarkets
							</p>
							<p>
							<span>
								<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
									<path
										d='M2.29004 7.77998V17.51C2.29004 19.41 3.64004 20.19 5.28004 19.25L7.63004 17.91C8.14004 17.62 8.99004 17.59 9.52004 17.86L14.77 20.49C15.3 20.75 16.15 20.73 16.66 20.44L20.99 17.96C21.54 17.64 22 16.86 22 16.22V6.48998C22 4.58998 20.65 3.80998 19.01 4.74998L16.66 6.08998C16.15 6.37998 15.3 6.40998 14.77 6.13998L9.52004 3.51998C8.99004 3.25998 8.14004 3.27998 7.63004 3.56998L3.30004 6.04998C2.74004 6.36998 2.29004 7.14998 2.29004 7.77998Z'
										stroke='black' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
									<path d='M8.56006 4V17' stroke='black' strokeWidth='1.5' strokeLinecap='round'
												strokeLinejoin='round' />
									<path d='M15.73 6.62V20' stroke='black' strokeWidth='1.5' strokeLinecap='round'
												strokeLinejoin='round' />
								</svg>
							</span>
								Ideal for students and workers
							</p>
							<p>
							<span>
								<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
									<path
										d='M2.07006 4.6C2.87006 1.14 8.08006 1.14 8.87006 4.6C9.34006 6.63 8.05006 8.35 6.93006 9.42C6.11006 10.2 4.82006 10.19 4.00006 9.42C2.89006 8.35 1.60006 6.63 2.07006 4.6Z'
										stroke='black' strokeWidth='1.5' />
									<path
										d='M15.07 16.6C15.87 13.14 21.11 13.14 21.91 16.6C22.38 18.63 21.09 20.35 19.96 21.42C19.14 22.2 17.84 22.19 17.02 21.42C15.89 20.35 14.6 18.63 15.07 16.6Z'
										stroke='black' strokeWidth='1.5' />
									<path
										d='M11.9999 5H14.6799C16.5299 5 17.3899 7.29 15.9999 8.51L8.00995 15.5C6.61995 16.71 7.47994 19 9.31994 19H11.9999'
										stroke='black' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
									<path d='M5.48622 5.5H5.49777' stroke='black' strokeWidth='2' strokeLinecap='round'
												strokeLinejoin='round' />
									<path d='M18.4862 17.5H18.4978' stroke='black' strokeWidth='2' strokeLinecap='round'
												strokeLinejoin='round' />
								</svg>
							</span>
								Public transport nearby
							</p>
						</Column>
					</Column>
				</div>

				<div id={'item'} style={{ display: 'flex', gap: '112px' }} className={styles.offerSpec}>
					<Column gap={41}>
						<div>
							<p className={styles.label}>Property type</p>
							<p className={styles.labelSupportingText}>{selectedOffer?.type}</p>
						</div>

						<div>
							<p className={styles.label}>Year of construction</p>
							<p className={styles.labelSupportingText}>{selectedOffer?.year_built}</p>
						</div>

						<div>
							<p className={styles.label}>Location</p>
							<p className={styles.labelSupportingText}>{selectedOffer?.location}</p>
						</div>
					</Column>

					<Column gap={41}>
						<div>
							<p className={styles.label}>Bedroom/bath</p>
							<p
								className={styles.labelSupportingText}>{selectedOffer?.bedrooms} bed. {selectedOffer?.bathrooms} bath</p>
						</div>

						<div>
							<p className={styles.label}>Conditions</p>
							<p className={styles.labelSupportingText}>{selectedOffer?.condition}</p>
						</div>

						<div>
							<p className={styles.label}>Net surface</p>
							<p className={styles.labelSupportingText}>{selectedOffer?.meters} m<sup>2</sup></p>
						</div>
					</Column>
				</div>
			</Row>
		</section>
	)
}
