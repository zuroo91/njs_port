"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Pesan berhasil ditampilkan di console!");
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center px-6 pt-24">
      <div className="w-full max-w-lg bg-white border border-gray-200 shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
          Get In <span className="text-blue-600">Touch</span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Nama
            </label>
            <input
              name="name"
              placeholder="Masukkan nama kamu"
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Masukkan email kamu"
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Pesan
            </label>
            <textarea
              name="message"
              placeholder="Tulis pesan kamu di sini..."
              rows={4}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition"
          >
            Kirim Pesan 🚀
          </button>
        </form>
      </div>
      <div className="flex justify-center space-x-8 mt-10 text-3xl text-gray-600">
        <a
          href="https://github.com/zuroo91"
          target="_blank"
          className="hover:text-black hover:scale-110 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/qactcool"
          target="_blank"
          className="hover:text-pink-500 hover:scale-110 transition"
        >
          <FaInstagram />
        </a>
      </div>
    </div>
  );
}
