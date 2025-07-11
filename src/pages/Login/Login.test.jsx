import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import Login from './Login';

// ✅ Mock react-router-dom navigate
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});

// ✅ Global fetch mock
global.fetch = vi.fn();

const mockLogin = vi.fn();
const mockLogout = vi.fn();

const renderWithProviders = () =>
  render(
    <AuthContext.Provider value={{ login: mockLogin, logout: mockLogout }}>
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    </AuthContext.Provider>
  );

describe('Login Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders form inputs and login button', () => {
    renderWithProviders();
    expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('shows validation errors when submitting empty form', async () => {
    renderWithProviders();
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    await waitFor(() => {
      expect(screen.getByText(/please enter valid username/i)).toBeInTheDocument();
      expect(screen.getByText(/please enter correct password/i)).toBeInTheDocument();
    });
  });

  it('submits valid form and calls login', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        token: 'mock-token',
        user: { username: 'toomaj' },
      }),
    });

    renderWithProviders();
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: 'toomaj' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'securepass123' },
    });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(mockLogin).toHaveBeenCalledWith(
        { username: 'toomaj' },
        'mock-token'
      );
      expect(screen.getByText(/login succes/i)).toBeInTheDocument();
    });
  });
});