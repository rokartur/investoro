import { render } from '@testing-library/react'
import { Photo } from '../photo.tsx'

test('Photo renders correctly', () => {
	const { getByAltText } = render(<Photo source='test.jpg' />)
	const imageElement = getByAltText('')
	expect(imageElement).toBeInTheDocument()
})
