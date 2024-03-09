import { render } from '@testing-library/react'
import { Row } from '../row/row.tsx'

test('Row renders correctly', () => {
	const { getByText } = render(<Row>Test Content</Row>)
	expect(getByText('Test Content')).toBeInTheDocument()
})
