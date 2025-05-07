import { PropsWithChildren } from "react";

export const HeroOrbit = ({
  children,
  size,
  rotation,
  speed = 30,
}: PropsWithChildren<{ size: number; rotation: number; speed?: number }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        className="animate-spin"
        style={{
          transform: `rotate(${rotation}deg)`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${speed}s`,
        }}
      >
        <div className="inline-flex">
          {children}
        </div>
      </div>
    </div>
  );
};
