import { createAuthClient } from "better-auth/react"
const authbaseURL = import.meta.env.VITE_AUTH_BASE_URL || "http://localhost:3000" // Default to localhost if not set

export const authClient = createAuthClient({
    baseURL: authbaseURL,
})
console.log("Auth Client Base URL:", authbaseURL); // Log the base URL to verify it's being read correctly