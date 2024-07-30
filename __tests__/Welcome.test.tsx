// __tests__/Welcome.test.tsx
import { render, screen } from '@testing-library/react'
import Welcome from '../src/pages/Welcome'
import { describe, expect, it } from 'vitest'
import React from 'react'

describe('Welcome component', () => {
  it('renders the About Us section', () => {
    render(<Welcome />)


    const aboutUsSection = screen.getByRole('heading', { name: /about us/i })
    expect(aboutUsSection).toBeInTheDocument()

    const aboutImage = screen.getByAltText('About Us')
    expect(aboutImage).toHaveAttribute('src', 'src/assets/img/about-img.png')
  })
})
