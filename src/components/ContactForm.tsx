'use client';

import { FormEvent, useState } from 'react';
import { toast } from 'react-hot-toast';

export function ContactForm() {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = {
      first,
      last,
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
      setFirst('')
      setLast('')
      setEmail('')
      setSubject('')
      setMessage('')
    } else {
      const errorData = await response.json()
      toast.error(`Failed to send email: ${errorData.message}`)
    }
  }

  return (
    <div className="lg:pt-24 pt-36">
      <div className="p-4 lg:mx-auto m-4 lg:max-w-3xl rounded-lg bg-black">
        <h1 id="contact" className="text-3xl text-white text-center pb-6">Contact me</h1>
        <form onSubmit={handleSubmit} className="ml-auto grid lg:grid-cols-2 grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 text-sm"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 text-sm"
            value={last}
            onChange={(e) => setLast(e.target.value)}
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
            className="w-full rounded-md px-4 text-gray-800 bg-gray-100 text-sm pt-3 lg:col-span-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="text-black bg-gray-100 tracking-wide rounded-md text-sm px-4 py-3 w-full hover:bg-gray-300 lg:col-span-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
