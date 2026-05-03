export default function NoiseTexture() {
  const svgNoise = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 3,
        backgroundImage: svgNoise,
        backgroundRepeat: "repeat",
        backgroundSize: "256px 256px",
        mixBlendMode: "overlay" as const,
        opacity: 0.055,
      }}
      aria-hidden="true"
    />
  );
}
