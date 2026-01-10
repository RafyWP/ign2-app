import { useState } from 'react';
import { z } from 'zod';

// Generic hook for form validation using Zod
export function useValidation<T>(schema: z.ZodSchema<T>) {
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const validate = (data: unknown): data is T => {
    const result = schema.safeParse(data);
    if (!result.success) {
      const newErrors: Partial<Record<keyof T, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof T;
        newErrors[field] = issue.message;
      });
      setErrors(newErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  return { validate, errors };
}