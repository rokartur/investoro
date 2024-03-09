import { render } from '@testing-library/react'
import { Hero } from '../hero/hero.tsx'

test('Hero renders correctly', () => {
	const { getByText } = render(<Hero />)
	expect(getByText('property')).toBeInTheDocument()
	const imageElement = document.getElementById('image')
	expect(imageElement).toBeInTheDocument()
})
