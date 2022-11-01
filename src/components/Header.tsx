import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Link to="/">
      <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600">
        <h1 className="px-3 text-lg font-bold border-r-4 border-green-700">PEDRO SOARES</h1>
        <h2 className="px-3 text-lg font-bold">React + Typescript</h2>
      </header>
    </Link>
  );
};
