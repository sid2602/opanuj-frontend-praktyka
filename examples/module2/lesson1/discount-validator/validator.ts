export function formValidator(
  firstName: string,
  lastName: string,
  age: unknown
) {
  const errors: string[] = [];

  if (!firstName) {
    errors.push('First name is required');
  }

  if (firstName && firstName.length <= 1) {
    errors.push('First name requires more than one character');
  }

  if (!lastName) {
    errors.push('Last name is required');
  }

  if (lastName && lastName.length <= 1) {
    errors.push('Last name requires more than one character');
  }

  if (typeof age !== 'number') {
    errors.push('Age need to be number');
  }

  if (typeof age === 'number' && age < 0) {
    errors.push('Age must be a positive number');
  }

  return errors;
}
