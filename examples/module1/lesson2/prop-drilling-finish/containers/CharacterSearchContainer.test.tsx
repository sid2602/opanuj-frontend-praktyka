// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, expect, test } from 'vitest';
import CharacterSearchContainer from './CharacterSearchContainer';

afterEach(cleanup);

test('Should display characterSearchContainer controls', async () => {
  render(<CharacterSearchContainer />);

  expect(screen.getByLabelText('Name')).toBeInTheDocument();
  expect(screen.getByLabelText('Gender')).toBeInTheDocument();
  expect(screen.getByLabelText('Sort by')).toBeInTheDocument();
});

test('Should filter items by Name input', async () => {
  const component = render(<CharacterSearchContainer />);

  await userEvent.type(component.getByLabelText('Name'), 'Adolf');
  expect(component.getByLabelText('Name')).toHaveValue('Adolf');

  await userEvent.selectOptions(component.getByLabelText('Gender'), 'male');
  expect(component.getByLabelText('Gender')).toHaveValue('male');

  await userEvent.selectOptions(component.getByLabelText('Sort by'), 'name');
  expect(component.getByLabelText('Sort by')).toHaveValue('name');
});
