import { userSchema, validateUser } from '@/lib/schemas'

describe('userSchema', () => {
  it('validates valid user data', () => {
    const validData = { name: 'John', email: 'john@example.com', password: 'password123' }
    const result = userSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('rejects invalid email', () => {
    const invalidData = { name: 'John', email: 'invalid', password: 'password123' }
    const result = userSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
    expect(result.error.issues[0].message).toBe('Invalid email format')
  })

  it('rejects short password', () => {
    const invalidData = { name: 'John', email: 'john@example.com', password: '123' }
    const result = userSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
    expect(result.error.issues[0].message).toBe('Password must be at least 8 characters')
  })
})

describe('validateUser', () => {
  it('returns success for valid data', () => {
    const validData = { name: 'Jane', email: 'jane@example.com', password: 'password123' }
    expect(validateUser(validData)).toBe(true)
  })

  it('returns false for invalid data', () => {
    const invalidData = { name: 'J', email: 'jane', password: 'pass' }
    expect(validateUser(invalidData)).toBe(false)
  })
})