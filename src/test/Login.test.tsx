import "@testing-library/jest-dom";
import { describe, it, expect } from 'vitest';
import { screen, fireEvent } from "@testing-library/react";
import Login from '../pages/Login';
import { renderWithRouter } from './helpers/renderWithRouter';

describe('login route', () => {
  it('Login inputs and button interactions', async () => {
    const { debug } = renderWithRouter(<Login />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    fireEvent.change(input, {target: { value: 'trueKeyUsed' } })
    const button = screen.getByText(/enter using key/i);
    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
    debug();
  })
})
