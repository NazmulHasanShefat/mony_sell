import { createAuthClient } from "better-auth/react"
const baseURL = import.meta.env.VITE_AUTH_BASE_URL || "http://localhost:3000" // Default to localhost if not set

export const authClient = createAuthClient({
    baseURL: `${baseURL}` // The base URL of your auth server
})
