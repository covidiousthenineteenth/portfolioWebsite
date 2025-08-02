import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-cosmic/80 p-4 sticky top-0 z-20">
      <nav className="container mx-auto flex justify-between">
        <Link href="/" className="text-2xl font-bold">Portfolio</Link>
        <ul className="flex space-x-4">
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}