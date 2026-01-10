import { renderHook, act } from '@testing-library/react'
import { useValidation } from '@/lib/hooks/useValidation'
import { userSchema } from '@/lib/schemas'

describe('useValidation', () => {
  it('validates successfully and clears errors', () => {
    const { result } = renderHook(() => useValidation(userSchema))
    const validData = { name: 'Test', email: 'test@example.com', password: 'password123' }
    let isValid = false
    act(() => {
      isValid = result.current.validate(validData)
    })
    expect(isValid).toBe(true)
    expect(result.current.errors).toEqual({})
  })

  it('sets errors on invalid data', () => {
    const { result } = renderHook(() => useValidation(userSchema))
    const invalidData = { name: '', email: 'invalid', password: '123' }
    let isValid = true
    act(() => {
      isValid = result.current.validate(invalidData)
    })
    expect(isValid).toBe(false)
    expect(result.current.errors.name).toBe('Name must be at least 2 characters')
    expect(result.current.errors.email).toBe('Invalid email format')
    expect(result.current.errors.password).toBe('Password must be at least 8 characters')
  })
})