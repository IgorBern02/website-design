export type AuthFields = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export const validateAuth = (fields: AuthFields) => {
  const errors: Partial<Record<keyof AuthFields, string>> = {};

  if ("name" in fields && !fields.name?.trim()) {
    errors.name = "Name is required";
  }

  if (!fields.email.trim()) {
    errors.email = "Email is required";
  }

  if (!fields.password.trim()) {
    errors.password = "Password is required";
  }

  if ("confirmPassword" in fields) {
    if (!fields.confirmPassword?.trim()) {
      errors.confirmPassword = "Confirm your password";
    } else if (fields.password !== fields.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
  }

  return errors;
};
