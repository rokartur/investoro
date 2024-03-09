import { useScrollToTop } from '../hooks/useScrollToTop.ts'
import { Wrapper } from '../components/wrapper/wrapper.tsx'
import { SEO } from '../components/seo.tsx'
import { Hero } from '../components/hero/hero.tsx'
import { Offers } from '../components/offers/offers.tsx'
import { Column } from '../components/column/column.tsx'

const metadata = {
	title: '',
	description: '',
	path: '',
}

export const Home = () => {
	useScrollToTop()

	return (
		<>
			<SEO title={metadata.title} description={metadata.description} path={metadata.path} />

			<Wrapper>
				<Hero />

				<Column style={{ padding: '0 20px', alignItems: 'center' }}>
					<Offers />
				</Column>
			</Wrapper>
		</>
	)
}
