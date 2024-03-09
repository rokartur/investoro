import { render } from '@testing-library/react'
import { Select } from '../select/select.tsx'

test('Select renders correctly', () => {
	const options = [
		{ id: '1', name: 'Option 1', value: 'option1' },
		{ id: '2', name: 'Option 2', value: 'option2' },
	]
	const { getByText } = render(<Select placeholder='Test Placeholder' selectedOption='option1' options={options} />)
	expect(getByText('Test Placeholder')).toBeInTheDocument()
	expect(getByText('Option 1')).toBeInTheDocument()
})
