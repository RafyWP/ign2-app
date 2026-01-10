import { z } from 'zod';

// Example schema for user input validation (e.g., for future forms)
export const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

// Utility function to validate data
export function validateUser(data: unknown): boolean {
  return userSchema.safeParse(data).success;
}