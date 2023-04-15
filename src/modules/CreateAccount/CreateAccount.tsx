import React, { useEffect, useRef, useState } from "react";
import { tx } from "@twind/core";
import Button from "@components/common/Button";

const CreateAccount = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const animatedDivRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          return;
        }
        setIsVisible(false);
      });
    });

    observer.observe(animatedDivRef.current);

    return () => {
      observer.unobserve(animatedDivRef.current);
    };
  }, [animatedDivRef]);

  return (
    <section
      id="create-account"
      className={tx(
        "opacity-0 scale-90 transition ease-in-out delay-300 duration-300",
        isVisible && "opacity-100 scale-0"
      )}
      ref={animatedDivRef}
    >
      <div className="create-account-cta bg-[#2F3A7C] p-8 text-center text-white">
        <h2 className="mb-4">Don't have an account?</h2>
        <p className="mb-4">Sign up today to start banking with us today!</p>
        <div className="animate-pulse">
          <Button text="Create Account" />
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
