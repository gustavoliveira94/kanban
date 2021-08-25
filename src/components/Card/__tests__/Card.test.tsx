import { render } from '@testing-library/react';

import Card from '../Card';

describe('Testing Component <Card />', () => {
  it('Check render props', () => {
    const { getByText } = render(<Card title="Criar Board" tag="tag1" />);

    expect(getByText('tag1')).toBeInTheDocument();
    expect(getByText('Criar Board')).toBeInTheDocument();
  });
});
