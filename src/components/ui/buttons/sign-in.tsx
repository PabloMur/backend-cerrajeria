"use client"

import { signIn } from "next-auth/react"

export default function SignIn() {
  const handleLogin = async () => {
    await signIn("google", { callbackUrl: "/dashboard" })
  }

  return (
    <button
      onClick={handleLogin}
      className="flex items-center justify-center gap-3 w-full sm:w-auto bg-white text-gray-800 font-semibold border border-gray-300 rounded-full py-2 px-5 shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200"
    >
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google logo"
        className="w-5 h-5"
      />
      <span>Continuar con Google</span>
    </button>
  )
}
