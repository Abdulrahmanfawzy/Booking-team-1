export default function FooterLinks({ title, links }) {
  return (
    <div className="text-center md:text-left">
      <h3 className="mb-4 text-xl font-semibold text-white">
        {title}
      </h3>

      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-gray-300 transition duration-200 hover:text-white"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}