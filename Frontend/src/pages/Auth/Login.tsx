import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-indigo-600 bg-opacity-90 p-4">
      <div className="flex w-full max-w-3xl overflow-hidden rounded-lg bg-[#323339] shadow-xl">
        <div className="w-full p-8 md:w-2/3">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-white">Welcome back!</h1>
            <p className="text-gray-300">
              We&apos;re so excited to see you again!
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-medium uppercase text-gray-300"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="p-2 w-full rounded-lg border-0 bg-black/20 px-3 text-white outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="password"
                className="mb-2 block text-xs font-medium uppercase text-gray-300"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="p-2 w-full rounded-lg border-0 bg-black/20 px-3 text-white outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-6">
              <a href="#" className="text-sm text-indigo-400 hover:underline">
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="h-11 w-full rounded-lg bg-brand text-white transition-colors hover:bg-indigo-700"
            >
              Log In
            </button>

            <div className="mt-4 text-start text-sm text-gray-300">
              Need an account?{" "}
              <a href="#" className="text-indigo-400 hover:underline">
                Register
              </a>
            </div>
          </form>
        </div>

        <div className="hidden w-1/3 bg-[#323339] p-8 md:block">
          <div className="flex h-full flex-col items-center justify-center">
            <div className="mb-4">
              <img
                src="../assets/bing_generated_qrcode.png "
                alt="QR Code"
                className="h-[150px] w-[150px] rounded-md bg-white p-2"
              />
            </div>
            <h2 className="mb-2 text-center text-xl font-semibold text-white">
              Log in with QR Code
            </h2>
            <p className="text-center text-sm text-gray-300">
              Scan this with the PingTalk mobile app to log in instantly.
            </p>
            <div className="mt-4">
              <a href="#" className="text-sm text-indigo-400 hover:underline">
                Or, sign in with passkey
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
