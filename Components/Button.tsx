import Link from 'next/link'
import React from 'react'

function Button({title}: {title: string}) {
  return (
    <div>
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            {title}
        </Link>
    </div>
  )
}

export default Button