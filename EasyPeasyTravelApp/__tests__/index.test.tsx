import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../App/Components/Button';

describe('Button component', () => {
  it('renders correctly with provided props', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <Button
        headerText="Header"
        subText="Subtext"
        onPress={mockOnPress}
        style={[
          { flex: 1, marginHorizontal: 10 }, // Example style props
          { borderBottomWidth: 2, borderBottomColor: 'red' }, // Example style props
        ]}
      />
    );

    const header = getByText('Header');
    const subtext = getByText('Subtext');

    expect(header).toBeDefined();
    expect(subtext).toBeDefined();
  });

  it('executes onPress function when the button is pressed', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <Button headerText="Header" subText="Subtext" onPress={mockOnPress} style={[]} />
    );

    const button = getByText('Header');
    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalled();
  });
});
