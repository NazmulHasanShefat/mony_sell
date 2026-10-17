import { createAuthClient } from "better-auth/react"
const authbaseURL = import.meta.env.VITE_AUTH_BASE_URL || "http://localhost:3000" // Default to localhost if not set

export const authClient = createAuthClient({
    baseURL: authbaseURL,
})