import { render } from '@testing-library/react'
import { Wrapper } from '../wrapper/wrapper.tsx'

test('Wrapper renders correctly', () => {
	const { getByText } = render(<Wrapper>Test Content</Wrapper>)
	expect(getByText('Test Content')).toBeInTheDocument()
})
