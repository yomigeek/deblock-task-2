import Image from "next/image";
import CreateAccount from "@modules/CreateAccount";
import Header from "@components/navigation/Header";
import AccountTypes from "@modules/AccountTypes";
import TheWhys from "@modules/TheWhys";

import HeroImage from "public/images/jpegs/hero.jpeg";

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
          <TheWhys />
          <TheWhys />
          <TheWhys />
          <AccountTypes />
        </main>
      </div>
    </>
  );
}
