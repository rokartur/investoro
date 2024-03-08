import { useScrollToTop } from '../hooks/useScrollToTop.ts'
import { Wrapper } from '../components/wrapper/wrapper.tsx'
import { SEO } from '../components/seo.tsx'

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
				<div>

				</div>
			</Wrapper>
		</>
	)
}

export default Home
