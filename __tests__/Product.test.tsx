// __tests__/Welcome.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import React from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Welcome from '../src/pages/Welcome'
import Shop from '../src/pages/Shop'
import Product from '../src/componment/Product'

// Mock the API request
const mock = new MockAdapter(axios)
mock.onGet('http://localhost:3000/product/products').reply(200, [
  {
    id: '3DQ90JGz9dNPXRTSBPhj',
    title: 'Sample Product',
    price: '1000',
    shortDescription: 'A sample product',
    quantity: '10',
    productType: 'New',
    description: 'Detailed description of the product',
    images: ['sample-image.jpg']
  }
])

describe('Integration test', () => {
  it('navigates to /view/:productId when a product is clicked', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/view/:productId" element={<div>Product Details Page</div>} />
        </Routes>
      </MemoryRouter>
    )

    // Simulate navigation to Shop page
    const addToCartLink = screen.getByRole('link', { name: /\+ Add to Cart/i })
    fireEvent.click(addToCartLink)


    const productLink = screen.getByRole('link', { name: /\+ Add to Cart/i })
    fireEvent.click(productLink)

    await waitFor(() => {
        expect(screen.getByText('Home')).toBeInTheDocument()
      })
  })
})
