import React from 'react'
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-8">Next.js Tutorial</h1>
      <button>
      <Link href="/client" className="btn btn-accent">GET STARTED</Link>
      </button>
    </div>
  )
}

export default HomePage