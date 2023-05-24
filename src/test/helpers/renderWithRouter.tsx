import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export const renderWithRouter = (component: ReactNode, {route = '/'} = {}) => render(
  <MemoryRouter initialEntries={ [route] }>{ component }</MemoryRouter>,
);