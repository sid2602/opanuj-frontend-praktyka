import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';

describe('Form validation', () => {
  test('should return an error if first name is missing', () => {
    const errors = formValidator('', 'Doe', 30);
    expect(errors).toContain('First name is required');
  });

  test('should return an error if last name is missing', () => {
    const errors = formValidator('John', '', 30);
    expect(errors).toContain('Last name is required');
  });

  test('should return an error if age is negative', () => {
    const errors = formValidator('John', 'Doe', -1);
    expect(errors).toContain('Age must be a positive number');
  });

  test('should success', () => {
    const errors = formValidator('John', 'Doe', 15);
    expect(errors).toHaveLength(0);
  });

  test('should return errors if last name and first name have less than two character', () => {
    const errors = formValidator('J', 'D', 15);
    expect(errors).toContain('First name requires more than one character');
    expect(errors).toContain('Last name requires more than one character');
  });

  test('should return an error if age is not a number', () => {
    const errors = formValidator('John', 'Doe', 'lol');
    expect(errors).toContain('Age need to be number');
  });
});
