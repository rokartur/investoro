import { render } from '@testing-library/react';
import { Badge } from '../badge/badge.tsx';

test('badge renders correctly', () => {
 const { getByText } = render(<Badge content={'Text'}/>);
 expect(getByText('Text')).toBeInTheDocument();
});
