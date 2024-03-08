import { Helmet } from 'react-helmet-async'

type SEOType = {
	url?: string
	title: string
	description?: string
	path: string
}

export const SEO = ({ url = 'https://copedix.pl', title, description, path }: SEOType) => (
	<Helmet>
		<title>{title}</title>
		<meta property='title' content={title} />
		<meta property='og:title' content={title} />
		<meta property='description' content={description} />
		<meta property='og:description' content={description} />
		<meta property='og:url' content={url + path} />
		<link rel='canonical' href={url + path} />
	</Helmet>
)
