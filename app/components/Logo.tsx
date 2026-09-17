/**
 * Ravelyn icon mark — the brand chevron with orange accent dot.
 * SVG inlined for crisp rendering at any size and zero network request.
 *
 * viewBox mirrors the source asset: 27×42.
 * Pair with a .mark-wordmark span in the parent for the full lockup.
 */
export default function Logo({ height = 32 }: { height?: number }) {
  const width = Math.round((27 / 42) * height);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27 42"
      width={width}
      height={height}
      fill="none"
      role="img"
      aria-label="Ravelyn icon"
    >
      {/* Chevron / arrow mark — inherits --ink so it's dark on light, light on dark */}
      <path
        d="M7.62939e-06 34.9844L14.5768 20.4076L7.62939e-06 5.83074L2.91537 0L23.323 20.4076L2.91537 40.8152L7.62939e-06 34.9844Z"
        fill="currentColor"
      />
      {/* Accent dot — brand signature */}
      <path
        d="M19.2808 40.9899C21.4899 40.9899 23.2808 39.199 23.2808 36.9899C23.2808 34.7808 21.4899 32.9899 19.2808 32.9899C17.0716 32.9899 15.2808 34.7808 15.2808 36.9899C15.2808 39.199 17.0716 40.9899 19.2808 40.9899Z"
        fill="#EB6B26"
      />
    </svg>
  );
}
