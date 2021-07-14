import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="bg-purple-600">
      <div className="max-w-7xl mx-auto">
        <div className="flex space-x-4">
          <Link href="/">
            <a className="text-white px-3 py-2 rounded-md text-2xl font-medium">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-white px-3 py-2 rounded-md text-2xl font-medium">About</a>
          </Link>
          <Link href="/contact">
            <a className="text-white px-3 py-2 rounded-md text-2xl font-medium">Contact</a>
          </Link>
        </div>
      </div>
    </nav>
  )
}