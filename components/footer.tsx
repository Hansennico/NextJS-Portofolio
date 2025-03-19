import { Github, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-[#0a0f1a] text-gray-800 dark:text-white py-4 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-sm"></span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Hansennico"
              className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a
              href="https://wa.me/6285717844289"
              className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
              aria-label="WhatsApp"
            >
              <Phone size={20} />
            </a>
            <a
              href="mailto:nicolas.hansen15@proton.me"
              className="text-gray-600 dark:text-white hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
