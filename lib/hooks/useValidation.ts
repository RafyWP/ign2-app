import { useState } from 'react';
import { z } from 'zod';

// Generic hook for form validation using Zod
export function useValidation<T>(schema: z.ZodSchema<T>) {
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const validate = (data: unknown): data is T => {
    const result = schema.safeParse(data);
    if (!result.success) {
      const newErrors: Partial<Record<keyof T, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof T;
        newErrors[field] = err.message;
      });
      setErrors(newErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  return { validate, errors };
}