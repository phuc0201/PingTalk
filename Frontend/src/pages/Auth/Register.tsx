import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, fullname, username, password });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-indigo-600 bg-opacity-90 p-4">
      <div className="flex w-full max-w-xl overflow-hidden rounded-lg bg-[#323339] shadow-xl">
        <div className="w-full p-8">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-white">
              Create an account!
            </h1>
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

            <div className="mb-6">
              <label
                htmlFor="fullname"
                className="mb-2 block text-xs font-medium uppercase text-gray-300"
              >
                Display name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullname"
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
                className="p-2 w-full rounded-lg border-0 bg-black/20 px-3 text-white outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="username"
                className="mb-2 block text-xs font-medium uppercase text-gray-300"
              >
                Username <span className="text-red-500">*</span>
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
              Continute
            </button>

            <div className="mt-4 text-start text-sm text-gray-300">
              <Link
                to="/auth/login"
                className="text-indigo-400 hover:underline"
              >
                Already have an account ?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
