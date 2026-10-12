/**
 * Brand lockup: gold leaf-A app icon (/brand/antrahq-mark.svg) + "Antra" + gold "HQ"
 * with the "SALONS & BEYOND" tagline underneath. The icon is an <img> so its SVG mask and
 * gradients stay scoped to the file and it caches across pages.
 */
export function Logo({ tone = "dark", size = "md" }: { tone?: "dark" | "light"; size?: "md" | "lg" }) {
  const lg = size === "lg";
  return (
    <span className="inline-flex items-center gap-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/antrahq-mark.svg"
        alt=""
        width={40}
        height={40}
        className={`${lg ? "h-12 w-12" : "h-10 w-10"} shrink-0 rounded-[11px] shadow-sm`}
      />
      <span className="flex flex-col">
        <span className={`font-display ${lg ? "text-2xl" : "text-[1.3rem]"} leading-none tracking-tight`}>
          <span className={tone === "light" ? "text-white" : "text-ink"}>Antra</span>
          <span className={tone === "light" ? "text-gold-light" : "text-gold-dark"}>HQ</span>
        </span>
        <span
          className={`mt-1 ${lg ? "text-[10.5px]" : "text-[9px]"} font-bold uppercase leading-none tracking-[0.26em] ${
            tone === "light" ? "text-gold-light" : "text-gold-dark"
          }`}
        >
          Salons &amp; Beyond
        </span>
      </span>
    </span>
  );
}
