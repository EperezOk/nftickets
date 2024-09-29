// This is a mock function. In a real app, you'd determine the user type based on authentication and user data
export const getUserType = () => {
    // For this example, we'll use a fixed value to ensure consistency
    // In a real app, this would be based on the user's session or database record
    return 'producer' as const; // 'buyer' | 'producer'
}
