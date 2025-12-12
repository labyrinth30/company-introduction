import { menuItems } from "../Constants/constants.js";
import MenuItem from "../Constants/MenuItem.jsx";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">회사 소개</h3>
            <p className="text-gray-400">
              저희 회사는 최고의 제품과 서비스를 제공하기 위해 최선을 다하고
              있습니다.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4"> 빠른 링크 </h3>
            <ul className="space-y-2 ">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.path}
                  path={item.path}
                  label={item.label}
                  onClick={scrollToTop}
                  className="text-gray-400 hover:text-white transition-colors"
                />
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">문의하기</h3>
            <ul className="space-y-2 text-gray-400">
              <li>서울특별시 강남구</li>
              <li>삼성동 123번지</li>
              <li>전화: 02-1234-5678</li>
              <li>이메일: info@example.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">소셜 미디어</h3>
            <div className="flex space-x-4 ">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} ABC Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
