// src/components/WelcomePage.tsx

export default function WelcomePage({ email }: { email: string }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Login Successful!</h1>
        <p className="text-xl text-gray-400">
          Welcome, <span className="font-bold text-blue-400">{email}</span>
        </p>
      </div>
    </div>
  );
}