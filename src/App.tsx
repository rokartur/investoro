import './styles/globals.scss'
import { useScrollToTop } from './hooks/useScrollToTop.ts'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { store } from './utils/store.ts'
import { Suspense } from 'react'
import { Header } from './components/header/header.tsx'
import { Home } from './views/home.tsx'
import { NotFound } from './views/notFound.tsx'

export const App = () => {
	useScrollToTop()

	return (
		<Provider store={store}>
			<HelmetProvider>
				<Suspense fallback={<p>loading...</p>}>
					<BrowserRouter>
						<Header />

						<Routes>
							<Route path={'/'} element={<Home />} />
							{/*<Route path={'/books'} element={'BookLayout this must include <Outlet/>'}>*/}
							{/*	<Route index element={'BooksList'} />*/}
							{/*	<Route path={':id'} element={'Book'} />*/}
							{/*	<Route path={'new'} element={'NewBook'} />*/}
							{/*</Route>*/}
							<Route path={'*'} element={<NotFound />} />
						</Routes>
					</BrowserRouter>
				</Suspense>
			</HelmetProvider>
		</Provider>
	)
}
