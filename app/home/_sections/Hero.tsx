import Image from "next/image";

export default function Hero() {
  return (
    <section>
      {/* Section Hero */}
      <div className="w-full h-screen relative -z-10">
        <Image
          priority
          src="/img/bannerSlide1.png"
          alt="banner"
          fill
          sizes="100vw"
        />
      </div>
    </section>
  );
}
