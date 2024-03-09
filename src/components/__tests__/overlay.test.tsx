import { render } from '@testing-library/react'
import { Overlay } from '../overlay/overlay.tsx'

test('Overlay renders correctly', () => {
	const { getByText } = render(<Overlay>Test Content</Overlay>)
	expect(getByText('Test Content')).toBeInTheDocument()
})
