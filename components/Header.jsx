export default function Header() {
  return (
    <header className="w-full bg-gray-800 p-4">
      <nav className="flex items-center justify-between max-w-4xl mx-auto">
        <h1 className="text-white text-xl font-bold">Next.js App</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-blue-400 transition-colors duration-300">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
