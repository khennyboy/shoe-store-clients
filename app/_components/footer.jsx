export default function Footer() {
  return (
    <footer className="bg-gray-700 py-10 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <h2 className="mb-4 text-xl font-bold">Sole Mate</h2>
          <p className="text-gray-400">
            Step into comfort and style. Find your perfect fit with us.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
          <p className="text-gray-400">123 Shoe Lane, Fashion City</p>
          <p className="text-gray-400">Email: support@shoehaven.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>

          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <i className=""></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <i className=""></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <i className=""></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; 2025 Shoe Haven. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
