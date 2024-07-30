// __tests__/Login.test.tsx
import { render, screen } from '@testing-library/react'
import LoginReg from '../src/pages/LoginReg'
import { describe, expect, it } from 'vitest'
import React from 'react'

describe('LoginReg component', () => {
  it('renders the About Us section', () => {
    render(<LoginReg />)


    const aboutUsSection = screen.getByText('Member Area');
    expect(aboutUsSection).toBeInTheDocument()


  })
})
