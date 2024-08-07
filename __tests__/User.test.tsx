import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, expect, it, beforeEach } from 'vitest'
import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import LoginReg from '../src/pages/LoginReg'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'


const mock = new MockAdapter(axios)

describe('LoginReg Component Integration Test', () => {
  beforeEach(() => {
    mock.reset()
  })

  it('successfully logs in a user and redirects', async () => {

    mock.onPost('http://localhost:3000/user/login').reply(200, {
      token: 'fake-jwt-token'
    })

    render(
      <MemoryRouter initialEntries={['/Adminlog']}>
        <Routes>
          <Route path="/Adminlog" element={<LoginReg />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Member Area')).toBeInTheDocument()
  })
})
