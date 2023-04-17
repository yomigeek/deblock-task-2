import React, { useEffect, useRef, useState } from "react";
import { tx } from "@twind/core";
import Button from "@components/common/Button";

const CreateAccount = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const animatedDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      const isIntersecting = entries.some((entry) => entry.isIntersecting);

      setIsVisible(isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection);

    const target = animatedDivRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [animatedDivRef]);

  return (
    <section
      id="create-account"
      className={tx(
        "opacity-0 scale-90 transition ease-in-out delay-700 duration-300",
        isVisible && "opacity-100 scale-0"
      )}
      ref={animatedDivRef}
    >
      <div className="bg-[#2F3A7C] p-5 text-center text-white">
        <h2 className="mb-4 text-[23px]">Don't have an account?</h2>
        <p className="mb-4">Sign up to start banking with us today!</p>
        <div className="animate-pulse">
          <Button text="Create Account" />
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
