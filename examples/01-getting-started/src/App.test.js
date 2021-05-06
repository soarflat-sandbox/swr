import { render, screen } from '@testing-library/react';
import { SWRConfig } from 'swr';
import App from './App';

test('renders result', async () => {
  render(
    <SWRConfig value={{ dedupingInterval: 0 }}>
      <App />
    </SWRConfig>
  );
  expect(screen.getAllByText('loading...').length).toBe(2);
  expect(await screen.findByRole('list')).toBeInTheDocument();
  expect(screen.getByText('react の検索結果')).toBeInTheDocument();
});
