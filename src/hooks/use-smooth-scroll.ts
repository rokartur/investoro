import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useWindowDimensions } from './use-window-dimensions.ts'

export const useSmoothScroll = () => {
	const { width } = useWindowDimensions()

	useEffect(() => {
		if (width >= 768) {
			const lenis = new Lenis()

			lenis.on('scroll', ScrollTrigger.update)

			gsap.ticker.add(time => {
				lenis.raf(time * 1000)
			})

			gsap.ticker.lagSmoothing(0)
		}
	}, [width])
}
