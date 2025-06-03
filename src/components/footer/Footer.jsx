import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 shadow-inner">
      <p className="text-sm text-gray-600">
        © 2025 Socializze. All rights reserved. •{" "}
        <Link
          href="/privacy-policy"
          className="text-blue-500 hover:underline cursor-pointer"
        >
          Privacy Policy
        </Link>
      </p>
    </footer>
  );
};
