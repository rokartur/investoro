import { render } from '@testing-library/react'
import { Column } from '../column/column.tsx'

test('Column renders correctly', () => {
	const { getByText } = render(
		<Column gap={10} isReverse={true} className='test-class' style={{ color: 'red' }}>
			Test Child
		</Column>,
	)
	expect(getByText('Test Child')).toBeInTheDocument()
})
