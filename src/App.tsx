import './assets/styles/globals.scss'
import { useScrollToTop } from './hooks/useScrollToTop.ts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Suspense } from 'react'
import { Header } from './components/header/header.tsx'
import { Home } from './views/home.tsx'
import { Offer } from './views/offer.tsx'
import { NotFound } from './views/notFound.tsx'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useSmoothScroll } from './hooks/use-smooth-scroll.ts'

gsap.registerPlugin(ScrollTrigger)

export const App = () => {
	useSmoothScroll()
	useScrollToTop()

	return (
		<HelmetProvider>
			<Suspense fallback={<p>loading...</p>}>
				<BrowserRouter>
					<Header />

					<Routes>
						<Route path={'/'} element={<Home />} />
						<Route path={'/offer'}>
							<Route index path={':id'} element={<Offer />} />
						</Route>
						<Route path={'*'} element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</Suspense>
		</HelmetProvider>
	)
}
