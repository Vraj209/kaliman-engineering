import Image from "next/image";

const GEAR_SRC = "/gear.png";
/** Intrinsic dimensions from `public/gear.png` (for layout & optimization). */
const GEAR_WIDTH = 2708;
const GEAR_HEIGHT = 1476;

/**
 * Hero illustration — 3D industrial gear (`public/gear.png`).
 */
export function HeroGearVisual() {
  return (
    <div className="hero-gear-visual relative mx-auto w-full max-w-2xl select-none sm:max-w-3xl lg:mx-0 lg:ml-auto lg:max-w-[min(100%,680px)] xl:max-w-[min(100%,760px)]">
      <Image
        src={GEAR_SRC}
        alt="Industrial steel gear with painted hub — precision manufacturing"
        width={GEAR_WIDTH}
        height={GEAR_HEIGHT}
        className="h-auto w-full drop-shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, (max-width: 1280px) 58vw, 720px"
        priority
      />
    </div>
  );
}
