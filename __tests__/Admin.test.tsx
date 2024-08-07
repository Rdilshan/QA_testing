// __tests__/Admin.test.tsx
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import AdminDashboard from "../src/pages/admin/Admindashboard";
import React from 'react';

// Create an instance of axios-mock-adapter
const mock = new MockAdapter(axios);

describe('AdminDashboard Component', () => {
  beforeEach(() => {
    mock.reset(); // Reset mock before each test
    localStorage.setItem('jwtToken', 'fakeToken'); // Ensure token is set for the test
  });

  it('renders AdminDashboard component and displays tabs', async () => {
    render(
      <MemoryRouter initialEntries={['/Admin']}>
        <Routes>
          <Route path="/Admin" element={<AdminDashboard />} />
        </Routes>
      </MemoryRouter>
    );

    // Check if the component renders and tabs are visible
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('handles API error and redirects to login', async () => {
    // Mock API response with error
    mock.onGet('http://localhost:3000/order/adminplaceitem').reply(401, 'Invalid Token');

    render(
      <MemoryRouter initialEntries={['/Admin']}>
        <Routes>
          <Route path="/Admin" element={<AdminDashboard />} />
          <Route path="/Adminlog" element={<div>Login Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    // Wait for redirect
    await waitFor(() => expect(screen.getByText('Login Page')).toBeInTheDocument());
  });

  it('logout functionality', () => {
    render(
      <MemoryRouter initialEntries={['/Admin']}>
        <Routes>
          <Route path="/Admin" element={<AdminDashboard />} />
          <Route path="/Adminlog" element={<div>Login Page</div>} />
        </Routes>
      </MemoryRouter>
    );

    // Simulate click on logout link
    fireEvent.click(screen.getByText('Logout'));

    // Check if redirected to login page
    expect(screen.getByText('Login Page')).toBeInTheDocument();
  });


});
