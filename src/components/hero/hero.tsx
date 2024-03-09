import styles from './hero.module.scss'
import { Photo } from '../photo.tsx'
import heroImage from '../../assets/images/hero.png'
import { useEffect } from 'react'
import gsap from 'gsap'

export const Hero = () => {
	useEffect(() => {
		const propertyTimeline = gsap.timeline({ repeat: -1 })
		propertyTimeline.to('#property', { x: '-70%', duration: 1.4, ease: 'back' })
		propertyTimeline.to('#property', { x: '70%', duration: 1.4, ease: 'back' })
		propertyTimeline.to('#property', { x: '5%', duration: 1.4, ease: 'back' })
		propertyTimeline.to('#property', { x: '30%', duration: 1.4, ease: 'back' })
		propertyTimeline.to('#property', { x: '-50%', duration: 1.4, ease: 'back' })
		propertyTimeline.to('#property', { x: '70%', duration: 1.4, ease: 'back' })
		propertyTimeline.to('#property', { x: '-40%', duration: 1.4, ease: 'back' })
		propertyTimeline.to('#property', { x: '20%', duration: 1.4, ease: 'back' })
		propertyTimeline.to('#property', { x: '-20%', duration: 1.4, ease: 'back' })
		propertyTimeline.to('#property', { x: '0%', duration: 1.4, ease: 'back' })

		const imageTimeline = gsap.timeline({ repeat: -1 })
		imageTimeline.to('#image', { x: '20%', duration: 1.4, ease: 'back' })
		imageTimeline.to('#image', { x: '10%', duration: 1.4, ease: 'back' })
		imageTimeline.to('#image', { x: '-40%', duration: 1.4, ease: 'back' })
		imageTimeline.to('#image', { x: '-10%', duration: 1.4, ease: 'back' })
		imageTimeline.to('#image', { x: '5%', duration: 1.4, ease: 'back' })
		imageTimeline.to('#image', { x: '40%', duration: 1.4, ease: 'back' })
		imageTimeline.to('#image', { x: '20%', duration: 1.4, ease: 'back' })
		imageTimeline.to('#image', { x: '0%', duration: 1.4, ease: 'back' })
	}, [])

	return (
		<div className={styles.heroContainer}>
			<div className={styles.heroContent}>
				<h1 id={'property'} className={styles.heroHeading}>property</h1>
				<Photo id={'image'} className={styles.heroImage} source={heroImage} />
				<span className={styles.mouseScrollDown} onClick={() => {
					// const element = document.querySelector('#')
					// element.scrollIntoView({ behavior: 'smooth', block: 'start' })
				}}>
					<span />
				</span>
			</div>
		</div>
	)
}
