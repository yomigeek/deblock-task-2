import Image from "next/image";
import CreateAccount from "@modules/CreateAccount";

import HeroImage from "public/images/jpegs/hero.jpeg";
import Header from "@components/navigation/Header";
import AccountTypes from "@modules/AccountTypes";
import TheWhys from "@modules/TheWhys";


export default function Home() {
  return (
    <>
      <div className="max-w-[960px] my-0 mx-auto p-8">
        <Header />
        <main>
          <div>
            <Image alt="hero-image" src={HeroImage} className="rounded-lg" />
          </div>
          <TheWhys />
          <AccountTypes />
          <CreateAccount />
        </main>
      </div>
    </>
  );
}
