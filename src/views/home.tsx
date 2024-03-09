import { useScrollToTop } from '../hooks/useScrollToTop.ts'
import { Wrapper } from '../components/wrapper/wrapper.tsx'
import { SEO } from '../components/seo.tsx'
import { Hero } from '../components/hero/hero.tsx'

const metadata = {
	title: '',
	description: '',
	path: '',
}

const Home = () => {
	useScrollToTop()

	return (
		<>
			<SEO title={metadata.title} description={metadata.description} path={metadata.path} />

			<Wrapper>
				<Hero />
			</Wrapper>
		</>
	)
}

export default Home
