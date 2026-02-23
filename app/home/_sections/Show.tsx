import VideoSwiper from "@/app/home/_sections/show/VideoSwiper";

export default function Show() {
  return (
    <section className="bg-[#F6FBF7] py-10 sm:py-14">
      <div className="mx-auto w-full max-w-6xl px-4">
        <header className="text-center">
          <h1 className="font-extrabold tracking-wide text-[#0B5B2E]">
            VIỆT THÁI ORGANIC SHOWS
          </h1>
        </header>

        <div className="relative mt-6 sm:mt-8">
          <button
            type="button"
            className="video-prev absolute z-20 grid h-10 w-10 place-items-center rounded-lg border border-[#0B5B2E]/25 bg-white/95 shadow-sm
               hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5B2E] focus-visible:ring-offset-2
               transition-[left,top,transform] duration-300 ease-out"
            aria-label="Slide trước"
          >
            <span className="text-[#0B5B2E] text-xl leading-none">‹</span>
          </button>

          <button
            type="button"
            className="video-next absolute z-20 grid h-10 w-10 place-items-center rounded-lg border border-[#0B5B2E]/25 bg-white/95 shadow-sm
               hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5B2E] focus-visible:ring-offset-2
               transition-[left,top,transform] duration-300 ease-out"
            aria-label="Slide tiếp theo"
          >
            <span className="text-[#0B5B2E] text-xl leading-none">›</span>
          </button>

          {/* <!-- Swiper --> */}
          <VideoSwiper />
        </div>

        <div className="mt-7 sm:mt-9 flex justify-center">
          <a href="#" className="btn-primary">
            Xem Tất Cả
          </a>
        </div>
      </div>
    </section>
  );
}
