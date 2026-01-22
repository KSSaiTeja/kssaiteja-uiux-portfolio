"use client";

import { motion } from "framer-motion";
import HeroTitle from "./HeroTitle";
import HeroTagline from "./HeroTagline";
import CTAButton from "./CTAButton";
import FloatingImage from "./FloatingImage";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  return (
    <section className="relative w-full max-w-[1048px] h-[397px] mx-auto overflow-visible max-xl:max-w-[798px] max-xl:h-[340px] max-md:max-w-[390px] max-md:h-[333px]">
      {/* Hero Content - Centered */}
      <motion.div
        className="absolute bottom-1 left-1/2 -translate-x-1/2 flex flex-col items-center justify-start gap-10 w-[891px] z-10 max-xl:w-[731px] max-md:bottom-7 max-md:left-0 max-md:right-0 max-md:translate-x-0 max-md:w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Title and Tagline */}
        <div className="flex flex-col items-center gap-4 w-full max-w-[720px] max-xl:max-w-[500px] max-md:max-w-[500px]">
          <div className="w-full max-w-[720px] max-xl:max-w-[500px] max-md:max-w-[500px]">
            <HeroTitle />
          </div>
          <div className="w-full max-w-[720px] max-xl:max-w-[500px] max-md:max-w-[500px]">
            <HeroTagline />
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex-none w-auto max-md:order-1">
          <CTAButton
            href="https://framer.link/CwLLucQ?utm_source=product-demo&utm_medium=button&utm_campaign=hero-button"
            label="Get Started"
            showIcon={true}
          />
        </div>
      </motion.div>

      {/* Floating Images - Desktop */}
      {/* Image 1 - Top Left */}
      <FloatingImage
        src="https://framerusercontent.com/images/NUTdkRLYEoKo3q0xaYuGtoBUg.jpg?width=1800&height=1423"
        alt=""
        width={198}
        height={252}
        initialRotation={25}
        animateRotation={-25}
        position={{ top: "-144px", left: "-33px" }}
        className="max-xl:hidden"
        enableDrag={true}
      />

      {/* Image 1 - Tablet */}
      <FloatingImage
        src="https://framerusercontent.com/images/NUTdkRLYEoKo3q0xaYuGtoBUg.jpg?width=1800&height=1423"
        alt=""
        width={141}
        height={180}
        initialRotation={25}
        animateRotation={-25}
        position={{ top: "-121px", left: "27px" }}
        className="hidden md:block xl:hidden"
        enableDrag={true}
      />

      {/* Image 1 - Phone */}
      <FloatingImage
        src="https://framerusercontent.com/images/NUTdkRLYEoKo3q0xaYuGtoBUg.jpg?width=1800&height=1423"
        alt=""
        width={80}
        height={101}
        initialRotation={25}
        animateRotation={-25}
        position={{ top: "-60px", left: "17px" }}
        className="md:hidden"
        enableDrag={false}
      />

      {/* Image 2 - Bottom Left */}
      <FloatingImage
        src="https://framerusercontent.com/images/v9by2y3t7Fgrb9sTYB57w099Lk.jpg?width=1800&height=1675"
        alt=""
        width={183}
        height={130}
        initialRotation={25}
        animateRotation={-19}
        position={{ bottom: "-52px", left: "143px" }}
        className="max-xl:hidden"
        enableDrag={true}
      />

      {/* Image 2 - Tablet */}
      <FloatingImage
        src="https://framerusercontent.com/images/v9by2y3t7Fgrb9sTYB57w099Lk.jpg?width=1800&height=1675"
        alt=""
        width={183}
        height={130}
        initialRotation={25}
        animateRotation={-19}
        position={{ bottom: "-45px", left: "48px" }}
        className="hidden md:block xl:hidden"
        enableDrag={true}
      />

      {/* Image 2 - Phone */}
      <FloatingImage
        src="https://framerusercontent.com/images/v9by2y3t7Fgrb9sTYB57w099Lk.jpg?width=1800&height=1675"
        alt=""
        width={73}
        height={52}
        initialRotation={25}
        animateRotation={-16}
        position={{ bottom: "40px", left: "4px" }}
        className="md:hidden"
        enableDrag={false}
      />

      {/* Image 3 - Bottom Right */}
      <FloatingImage
        src="https://framerusercontent.com/images/GfQF9MJTOQgip3GZt7WYQlFA.png?width=1440&height=1440"
        alt=""
        width={142}
        height={101}
        initialRotation={25}
        animateRotation={12}
        position={{ bottom: "-31px", left: "727px" }}
        className="max-xl:hidden"
        enableDrag={true}
      />

      {/* Image 3 - Tablet */}
      <FloatingImage
        src="https://framerusercontent.com/images/GfQF9MJTOQgip3GZt7WYQlFA.png?width=1440&height=1440"
        alt=""
        width={142}
        height={101}
        initialRotation={25}
        animateRotation={12}
        position={{ bottom: "-20px", left: "572px" }}
        className="hidden md:block xl:hidden"
        enableDrag={true}
      />

      {/* Image 3 - Phone */}
      <FloatingImage
        src="https://framerusercontent.com/images/GfQF9MJTOQgip3GZt7WYQlFA.png?width=1440&height=1440"
        alt=""
        width={70}
        height={54}
        initialRotation={25}
        animateRotation={21}
        position={{ bottom: "40px", left: "312px" }}
        className="md:hidden"
        enableDrag={false}
      />

      {/* Image 4 - Top Right */}
      <FloatingImage
        src="https://framerusercontent.com/images/sOV9oVng8G6eTcJz9mcCnJarYGE.jpg?width=1500&height=2100"
        alt=""
        width={160}
        height={216}
        initialRotation={25}
        animateRotation={32}
        position={{ top: "-117px", right: "-5px" }}
        className="max-xl:hidden"
        enableDrag={true}
      />

      {/* Image 4 - Tablet */}
      <FloatingImage
        src="https://framerusercontent.com/images/sOV9oVng8G6eTcJz9mcCnJarYGE.jpg?width=1500&height=2100"
        alt=""
        width={112}
        height={158}
        initialRotation={25}
        animateRotation={32}
        position={{ top: "-105px", left: "638px" }}
        className="hidden md:block xl:hidden"
        enableDrag={true}
      />

      {/* Image 4 - Phone */}
      <FloatingImage
        src="https://framerusercontent.com/images/sOV9oVng8G6eTcJz9mcCnJarYGE.jpg?width=1500&height=2100"
        alt=""
        width={71}
        height={90}
        initialRotation={25}
        animateRotation={32}
        position={{ top: "-56px", left: "300px" }}
        className="md:hidden"
        enableDrag={false}
      />

      {/* Animated Text - Character by character animation */}
      <div 
        className="absolute flex-none z-0 max-xl:bottom-[-284px] max-md:bottom-[-238px] max-md:top-[36px] max-md:left-0 max-md:right-0 max-md:w-full"
        style={{
          bottom: "-227px",
          left: "50%",
          transform: "translateX(-50%)",
          top: "1px",
          width: "623px",
        }}
      >
        <AnimatedText
          text="I'm K S Sai Teja"
          className="max-md:text-sm"
        />
      </div>
    </section>
  );
}
