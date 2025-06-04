import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Login from '../pages/Login';

test('shows error message when credentials are invalid', async () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  await userEvent.type(screen.getByPlaceholderText(/email/i), 'invalid@user.com');
  await userEvent.type(screen.getByPlaceholderText(/password/i), 'wrongpass');
  await userEvent.click(screen.getByRole('button', { name: /login/i }));

  expect(await screen.findByText(/invalid credentials/i)).toBeInTheDocument();
});
