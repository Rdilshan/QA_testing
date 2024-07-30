// __tests__/Welcome.test.tsx
import { render, screen } from '@testing-library/react'
import Welcome from '../src/pages/Welcome'
import { describe, expect, it } from 'vitest'
import React from 'react'

describe('Welcome component', () => {
  it('renders the About Us section', () => {
    render(<Welcome />)

    // Check if the About Us section is in the document
    const aboutUsSection = screen.getByRole('heading', { name: /about us/i })
    expect(aboutUsSection).toBeInTheDocument()

    // Check if the image is rendered correctly
    const aboutImage = screen.getByAltText('About Us')
    expect(aboutImage).toHaveAttribute('src', 'src/assets/img/about-img.png')
  })
})
