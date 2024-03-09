import { render } from '@testing-library/react'
import { Paragraph } from '../typography/paragraph.tsx'

test('Paragraph renders correctly', () => {
	const { getByText } = render(<Paragraph size='medium' weight='regular-weight'>Test Content</Paragraph>)
	expect(getByText('Test Content')).toBeInTheDocument()
})
