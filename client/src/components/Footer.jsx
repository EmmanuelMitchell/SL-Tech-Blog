import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="border-t-4 border-green-500 rounded-lg">
        <div className="max-w-6xl mx-auto border-slate-900">
          <h3>Logo</h3>
          <div className="flex justify-end gap-6">
            <ul className="text-gray-800">
              <li className="text- font-semibold">ABOUT US</li>
              <Link to="#">
                <li>SL-Tech-Blog</li>
              </Link>
              <Link to="#">
                <li>Blog</li>
              </Link>
            </ul>

            <ul className="text-gray-800">
              <li className="text- font-semibold">FOLLOW US</li>
              <Link to="#">
                <li>Facebok</li>
              </Link>
              <Link to="#">
                <li>Tiktok</li>
              </Link>
            </ul>

            <ul className="text-gray-800">
              <li className="text- font-semibold">LEGAL</li>
              <Link to="#">
                <li>Privacy Policy</li>
              </Link>
              <Link to="#">
                <li>Terms & Condition</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <span className="flex justify-center p-4 border-t  border-green-700  ">
        &copy; Emmanuel Mitchell 2024
      </span>
    </footer>
  );
}
