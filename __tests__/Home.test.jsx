// __tests__/Login.test.tsx
import { render, screen } from '@testing-library/react'
import Welcome from '../src/pages/Welcome'
import { describe, expect, it } from 'vitest'
import React from 'react'

describe('LoginReg component', () => {
  it('renders the About Us section', () => {
    render(<Welcome />)


    const aboutUsSection = screen.getByText('New Collection 2024');
    expect(aboutUsSection).toBeInTheDocument()


  })
})
