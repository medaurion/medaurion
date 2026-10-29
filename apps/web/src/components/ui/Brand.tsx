import { useId } from "react";
import Image from "next/image";

/* medaurion split-shield mark (vector). Source artwork: docs/brand/medaurion-mark-source.png.
   Colours: gradient #F7931E → #F26722 → #E2332A, inner panel #F2F5FB. */
const VIEW_W = 102;
const VIEW_H = 114;

export function BrandMark({ size = 40 }: { size?: number }) {
  const gradientId = `md-mark-${useId().replaceAll(":", "")}`;
  // `size` keeps its old meaning (overall footprint); the shield is taller than it is wide.
  const height = Math.round(size * 0.9);
  const width = Math.round((height * VIEW_W) / VIEW_H);

  return (
    <svg aria-hidden="true" height={height} viewBox="-1 -1 102 114" width={width} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id={gradientId} x1="0" x2="100" y1="0" y2="112">
          <stop stopColor="#F7931E" />
          <stop offset="0.5" stopColor="#F26722" />
          <stop offset="1" stopColor="#E2332A" />
        </linearGradient>
      </defs>
      <path d="M0 18.4 L48.4 0 L48.4 111.5 C22 101 0 90 0 69.6 Z" fill={`url(#${gradientId})`} />
      <path d="M6 22.4 L48.4 7 L48.4 103.2 C24 95 6 84 6 68.4 Z" fill="#F2F5FB" />
      <path d="M51.6 0 L100 18.4 L100 69.6 C100 90 78 101 51.6 111.5 Z" fill={`url(#${gradientId})`} />
    </svg>
  );
}

const LOGO_W = 396;
const LOGO_H = 80;

export function BrandLogo({
  width = 168,
  priority = false,
  onDark = false,
}: {
  width?: number;
  priority?: boolean;
  /** White "med" for dark backgrounds such as the footer. */
  onDark?: boolean;
}) {
  return (
    <Image
      alt=""
      aria-hidden="true"
      className="brand__logo"
      height={Math.round(LOGO_H * (width / LOGO_W))}
      priority={priority}
      src={onDark ? "/medaurion-logo-light.svg" : "/medaurion-logo.svg"}
      width={width}
    />
  );
}
