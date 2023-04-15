import Image from "next/image";
import CreateAccount from "@modules/CreateAccount";

import Logo from "public/images/pngs/pay-logo.png";

const Header = () => {
  return (
    <>
      <header className="flex mb-8 items-center justify-between">
        <div>
          <a href="/">
            <Image alt="logo" src={Logo} width={50} height={10} />
          </a>
        </div>
        <nav>
          <ul className="flex list-none">
            <li>
              <a
                href="#create-account"
                className="text-blue-800	hover:text-blue-600"
              >
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
