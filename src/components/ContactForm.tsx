'use client';

import { FormEvent, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

export function ContactForm() {
  const [from, setFrom] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = {
      from,
      email,
      subject,
      message,
    }

    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      toast.success('Email sent successfully!')
      setFrom('')
      setEmail('')
      setSubject('')
      setMessage('')
    } else {
      const errorData = await response.json()
      toast.error(`Failed to send email: ${errorData.message}`)
    }
  }

  return (
    <div className="lg:pt-56 pt-32">
      <div className="p-4 lg:mx-auto m-4 lg:max-w-3xl rounded-lg bg-black">
        <h1 className="text-3xl text-white text-center">Contact me</h1>
        <form onSubmit={handleSubmit} className="ml-auto space-y-4">
          <Toaster toastOptions={{ duration: 4500, style: { fontSize: '14px' } }} />
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 text-sm"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 text-sm"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            placeholder="Message"
            rows={6}
            maxLength={1000}
            className="w-full rounded-md px-4 text-gray-800 bg-gray-100 text-sm pt-3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="text-black bg-white tracking-wide rounded-md text-sm px-4 py-3 w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
