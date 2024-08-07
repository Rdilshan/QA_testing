// __tests__/Welcome.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import Welcome from '../src/pages/Welcome'
import Shop from '../src/pages/Shop'

describe('Welcome component', () => {
  it('navigates to /shop route when Add to Cart button is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </MemoryRouter>
    )

    const addToCartLink = screen.getByRole('link', { name: /\+ Add to Cart/i })
    
    // Simulate a click on the link
    fireEvent.click(addToCartLink)

  })
})
