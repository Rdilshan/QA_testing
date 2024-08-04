// __tests__/Login.test.tsx
import { render, screen } from '@testing-library/react'
import ContactUS from '../src/pages/ContactUS'
import { describe, expect, it } from 'vitest'
import React from 'react'

describe('LoginReg component', () => {
  it('renders the About Us section', () => {
    render(<ContactUS />)


    const aboutUsSection = screen.getByText('Street Address');
    expect(aboutUsSection).toBeInTheDocument()


  })
})
