import Link from "next/link";
import { Check, Download, X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { brand } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AntraHQ Brand Centre — Logo & Guidelines",
  description:
    "Download the official AntraHQ logo, symbol and app icon, with usage guidelines: clear space, minimum sizes, brand colours, typography and what to avoid.",
  path: "/brand/",
});

const B = "/brand";

const variants = [
  { file: "antrahq-logo-tagline-light", name: "Primary logo with tagline", use: "Website headers, documents, invoices, partner listings", bg: "bg-white" },
  { file: "antrahq-logo-tagline-dark", name: "Primary logo with tagline · reversed", use: "Dark or violet backgrounds, presentations, signage", bg: "bg-[#2E1065]" },
  { file: "antrahq-logo-horizontal-light", name: "Primary logo", use: "Tight spaces where the tagline would fall below minimum size", bg: "bg-white" },
  { file: "antrahq-logo-horizontal-dark", name: "Primary logo · reversed", use: "Dark backgrounds where the tagline would be too small", bg: "bg-[#2E1065]" },
  { file: "antrahq-logo-stacked-light", name: "Stacked logo", use: "Square formats: social posts, merchandise, store standees", bg: "bg-white" },
  { file: "antrahq-logo-stacked-dark", name: "Stacked logo · reversed", use: "Square formats on dark backgrounds", bg: "bg-[#2E1065]" },
  { file: "antrahq-logo-tagline-black", name: "One colour · black", use: "Single-colour print, newspaper, stamps, fax", bg: "bg-white" },
  { file: "antrahq-logo-tagline-white", name: "One colour · white", use: "Embossing, photography, single-colour reversed print", bg: "bg-brand" },
  { file: "antrahq-app-icon", name: "App icon", use: "App stores, favicon, home-screen icon", bg: "bg-surface" },
  { file: "antrahq-avatar", name: "Social & WhatsApp avatar", use: "WhatsApp Business, Instagram, LinkedIn profile photo (circle crop)", bg: "bg-surface", round: true },
  { file: "antrahq-symbol-color", name: "Symbol · colour", use: "Light backgrounds when the brand name is already present", bg: "bg-white" },
  { file: "antrahq-symbol-reversed", name: "Symbol · reversed", use: "Violet or midnight backgrounds", bg: "bg-[#2E1065]" },
];

const colours = [
  { name: "Antra Violet", role: "Primary · tile, buttons, links", hex: "#6D28D9", rgb: "109, 40, 217", cmyk: "50, 82, 0, 15", text: "text-white" },
  { name: "Antra Gold", role: "On dark & violet: HQ peak, \"HQ\", tagline", hex: "#E3B04B", rgb: "227, 176, 75", cmyk: "0, 22, 67, 11", text: "text-ink" },
  { name: "Midnight", role: "Dark backgrounds", hex: "#2E1065", rgb: "46, 16, 101", cmyk: "54, 84, 0, 60", text: "text-white" },
  { name: "Gold on Light", role: "On white & light: \"HQ\", tagline, gold text", hex: "#92650C", rgb: "146, 101, 12", cmyk: "0, 31, 92, 43", text: "text-white" },
  { name: "Ink", role: "Wordmark & body text", hex: "#0F172A", rgb: "15, 23, 42", cmyk: "64, 45, 0, 84", text: "text-white" },
  { name: "White", role: "Backgrounds & reversed logo", hex: "#FFFFFF", rgb: "255, 255, 255", cmyk: "0, 0, 0, 0", text: "text-ink", border: true },
];

const donts: { label: string; render: React.ReactNode }[] = [
  {
    label: "Don't recolour the logo",
    render: <img src={`${B}/antrahq-logo-horizontal-light.svg`} alt="" className="h-10 w-auto [filter:hue-rotate(140deg)]" />,
  },
  {
    label: "Don't stretch or squash",
    render: <img src={`${B}/antrahq-logo-horizontal-light.svg`} alt="" className="h-10 w-auto [transform:scaleX(1.45)]" />,
  },
  {
    label: "Don't rotate or tilt",
    render: <img src={`${B}/antrahq-logo-horizontal-light.svg`} alt="" className="h-10 w-auto -rotate-12" />,
  },
  {
    label: "Don't add shadows, glows, 3D or gradients",
    render: (
      <img
        src={`${B}/antrahq-logo-horizontal-light.svg`}
        alt=""
        className="h-10 w-auto [filter:drop-shadow(4px_6px_0_#f472b6)_drop-shadow(0_0_10px_#facc15)]"
      />
    ),
  },
  {
    label: "Don't retype the name in another font",
    render: (
      <span className="flex items-center gap-2">
        <img src={`${B}/antrahq-app-icon.svg`} alt="" className="h-10 w-10" />
        <span className="font-serif text-3xl italic text-ink">Antra HQ</span>
      </span>
    ),
  },
  {
    label: "Don't use the reversed (white) symbol on light backgrounds",
    render: <img src={`${B}/antrahq-symbol-reversed.svg`} alt="" className="h-14 w-14" />,
  },
  {
    label: "Don't place it on busy patterns or photos without a solid panel",
    render: (
      <span className="flex h-full w-full items-center justify-center bg-[repeating-linear-gradient(45deg,#f472b6_0_10px,#38bdf8_10px_20px,#facc15_20px_30px)]">
        <img src={`${B}/antrahq-logo-horizontal-light.svg`} alt="" className="h-10 w-auto" />
      </span>
    ),
  },
  {
    label: "Don't recolour the HQ peak or rearrange the tiers",
    render: (
      <span className="flex items-center gap-4">
        <img src={`${B}/antrahq-symbol-color.svg`} alt="" className="h-14 w-14 [filter:hue-rotate(200deg)]" />
        <img src={`${B}/antrahq-symbol-color.svg`} alt="" className="h-14 w-14 rotate-180" />
      </span>
    ),
  },
];

function Swatchless({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`flex h-36 items-center justify-center rounded-xl border border-surface-line ${className}`}>{children}</div>;
}

export default function BrandPage() {
  return (
    <>
      <PageHero
        eyebrow="Brand Centre"
        title="The AntraHQ logo and how to use it"
        body="Official logo files and the rules that keep AntraHQ recognisable everywhere — on apps, websites, invoices, WhatsApp, signage and partner listings."
        crumbs={[{ name: "Brand Centre", path: "/brand/" }]}
        ctaHref={`${B}/antrahq-brand-kit.zip`}
        ctaLabel="Download brand kit (.zip)"
        secondaryHref="#guidelines"
        secondaryLabel="Read the guidelines"
      />

      {/* Story */}
      <section className="section-pad bg-white">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">The symbol</p>
            <h2 className="h-section mt-3">One HQ above every branch</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-mute">
              <p>
                The AntraHQ symbol is an A built in layers. The two feet are your branches, the crossbar tier is the platform that
                connects them, and the gold peak is the HQ — the one view an owner runs everything from.
              </p>
              <p>
                It says nothing about scissors or salons on purpose: AntraHQ starts with salons and grows to clinics, studios and any
                multi-location business. Stacked layers also read as growth — every branch building toward the top.
              </p>
              <p className="font-semibold text-ink">AntraHQ — Salons &amp; Beyond.</p>
            </div>
          </div>
          <figure className="rounded-2xl border border-surface-line bg-surface p-6">
            {/* Construction drawing on the 512 grid */}
            <svg viewBox="0 0 512 512" className="mx-auto w-full max-w-sm" role="img" aria-label="Symbol construction grid">
              <defs>
                <pattern id="g32" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M32 0H0V32" fill="none" stroke="#CBD5E1" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="512" height="512" fill="url(#g32)" />
              <path d="M256 62 L414 446 L98 446 Z" fill="none" stroke="#94A3B8" strokeWidth="2" strokeDasharray="6 6" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <image href="/brand/antrahq-symbol-color.svg" x="0" y="0" width="512" height="512" opacity="0.9" />
              <line x1="0" y1="210" x2="512" y2="210" stroke="#DB2777" strokeWidth="1.5" strokeDasharray="4 5" />
              <line x1="0" y1="318" x2="512" y2="318" stroke="#DB2777" strokeWidth="1.5" strokeDasharray="4 5" />
              <text x="352" y="150" fontSize="20" fill="#8A5A0B" fontFamily="sans-serif" fontWeight="700">HQ</text>
              <text x="372" y="270" fontSize="20" fill="#6D28D9" fontFamily="sans-serif" fontWeight="700">Platform</text>
              <text x="398" y="400" fontSize="20" fill="#6D28D9" fontFamily="sans-serif" fontWeight="700">Branches</text>
            </svg>
            <figcaption className="mt-3 text-center text-xs text-ink-mute">
              One A silhouette (apex 256,62 · base 446) sliced into three tiers with equal 22-unit gaps and 12-unit corner radii.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Logo variants + downloads */}
      <section id="downloads" className="section-pad scroll-mt-16 bg-surface">
        <div className="container-wide">
          <p className="eyebrow">Logo files</p>
          <h2 className="h-section mt-3">Pick the right version</h2>
          <p className="lede mt-4">
            Use the primary logo with tagline wherever it fits. Every file is available as SVG (preferred, sharp at any size) and PNG.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {variants.map((v) => (
              <div key={v.file} className="card overflow-hidden">
                <div className={`flex h-40 items-center justify-center p-6 ${v.bg}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${B}/${v.file}.svg`} alt={v.name} className={`max-h-24 w-auto max-w-full ${v.round ? "rounded-full" : ""}`} />
                </div>
                <div className="border-t border-surface-line p-5">
                  <p className="font-semibold text-ink">{v.name}</p>
                  <p className="mt-1 min-h-10 text-sm text-ink-mute">{v.use}</p>
                  <div className="mt-4 flex gap-2">
                    <a href={`${B}/${v.file}.svg`} download className="btn-secondary !min-h-9 !px-3 !py-1.5 text-xs">
                      <Download className="h-3.5 w-3.5" aria-hidden /> SVG
                    </a>
                    <a href={`${B}/png/${v.file}.png`} download className="btn-secondary !min-h-9 !px-3 !py-1.5 text-xs">
                      <Download className="h-3.5 w-3.5" aria-hidden /> PNG
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`${B}/antrahq-brand-kit.zip`} download className="btn-primary btn-lg">
              <Download className="h-4 w-4" aria-hidden /> Download everything (.zip)
            </a>
            <a href={`${B}/antrahq-whatsapp-profile-640.png`} download className="btn-secondary btn-lg">
              WhatsApp profile photo (640 × 640)
            </a>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section id="guidelines" className="section-pad scroll-mt-16 bg-white">
        <div className="container-wide space-y-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow">Clear space</p>
              <h2 className="h-section mt-3 !text-3xl">Give the logo room to breathe</h2>
              <p className="body-copy mt-4 !text-base">
                Keep a clear zone around the logo equal to <strong className="text-ink">¼ of the app-icon tile&apos;s width (X)</strong> on
                every side. No text, images or edges may enter it. The same rule applies to every version, including the symbol on its own.
              </p>
            </div>
            <Swatchless className="!h-auto bg-surface p-6">
              <div className="relative inline-block border-2 border-dashed border-pink-400 p-[26px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${B}/antrahq-logo-horizontal-light.svg`} alt="" className="h-[104px] w-auto bg-white" />
                <span className="absolute left-1 top-1 text-[10px] font-bold text-pink-500">X</span>
                <span className="absolute bottom-1 right-1 text-[10px] font-bold text-pink-500">X</span>
              </div>
            </Swatchless>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow">Minimum size</p>
              <h2 className="h-section mt-3 !text-3xl">Never smaller than this</h2>
              <ul className="mt-5 space-y-2 text-[0.9375rem] text-ink-soft">
                {[
                  ["App icon / symbol", "16 px", "5 mm"],
                  ["Primary logo", "96 px wide", "25 mm wide"],
                  ["Primary logo with tagline", "140 px wide", "35 mm wide"],
                  ["Stacked logo", "96 px wide", "25 mm wide"],
                ].map(([n, px, mm]) => (
                  <li key={n} className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-surface-line py-2">
                    <span>{n}</span>
                    <span className="font-semibold text-ink">{px}</span>
                    <span className="text-ink-mute">{mm}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-ink-mute">Below these sizes, switch to the logo without tagline, then to the app icon.</p>
            </div>
            <Swatchless className="!h-auto flex-col gap-5 bg-surface p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${B}/antrahq-logo-tagline-light.svg`} alt="" style={{ width: 140 }} className="bg-white" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${B}/antrahq-logo-horizontal-light.svg`} alt="" style={{ width: 96 }} className="bg-white" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${B}/antrahq-app-icon.svg`} alt="" style={{ width: 16 }} />
              <span className="text-xs text-ink-mute">Shown at actual minimum size</span>
            </Swatchless>
          </div>

          <div>
            <p className="eyebrow">Colour</p>
            <h2 className="h-section mt-3 !text-3xl">Brand colours</h2>
            <p className="body-copy mt-4 !text-base">
              Always flat — never gradients on the logo. Antra Gold has two tones from the same hue: bright Antra Gold on dark and
              violet backgrounds, and deeper Gold on Light on white — so &ldquo;HQ&rdquo; and the tagline stay readable everywhere. Never put
              bright Antra Gold text on a light background. CMYK values are conversions — request a printed proof before large print runs.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {colours.map((c) => (
                <div key={c.hex} className="card overflow-hidden">
                  <div className={`flex h-24 items-end p-4 ${c.text} ${c.border ? "border-b border-surface-line" : ""}`} style={{ background: c.hex }}>
                    <span className="font-display text-lg">{c.name}</span>
                  </div>
                  <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 p-4 text-sm">
                    <dt className="text-ink-faint">HEX</dt>
                    <dd className="font-mono text-ink">{c.hex}</dd>
                    <dt className="text-ink-faint">RGB</dt>
                    <dd className="font-mono text-ink">{c.rgb}</dd>
                    <dt className="text-ink-faint">CMYK</dt>
                    <dd className="font-mono text-ink">{c.cmyk}</dd>
                    <dt className="text-ink-faint">Use</dt>
                    <dd className="text-ink-mute">{c.role}</dd>
                  </dl>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow">Typography</p>
              <h2 className="h-section mt-3 !text-3xl">Plus Jakarta Sans</h2>
              <p className="body-copy mt-4 !text-base">
                The wordmark is drawn from Plus Jakarta Sans ExtraBold and supplied as outlined artwork — never retype it. Use Plus Jakarta
                Sans for headings (Bold / ExtraBold) and body text (Regular / Medium). It is free under the SIL Open Font License from Google
                Fonts.
              </p>
            </div>
            <Swatchless className="!h-auto flex-col items-start gap-2 bg-surface p-6">
              <span className="font-display text-4xl text-ink">Aa — ExtraBold</span>
              <span className="text-2xl font-bold text-ink">Headings — Bold</span>
              <span className="text-lg font-medium text-ink-soft">Subheads — Medium</span>
              <span className="text-base text-ink-mute">Body text — Regular, for paragraphs and UI.</span>
              <span className="mt-2 text-[11px] font-bold uppercase tracking-[0.28em] text-gold-dark">Tagline — Bold, tracked +28%, Gold on Light</span>
            </Swatchless>
          </div>

          <div>
            <p className="eyebrow">Backgrounds</p>
            <h2 className="h-section mt-3 !text-3xl">Approved backgrounds</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["bg-white", "antrahq-logo-tagline-light", "White — primary"],
                ["bg-[#2E1065]", "antrahq-logo-tagline-dark", "Midnight — reversed"],
                ["bg-brand", "antrahq-logo-tagline-white", "Antra Violet — white logo"],
                ["bg-surface", "antrahq-logo-tagline-light", "Light grey — primary"],
              ].map(([bg, f, label]) => (
                <div key={label} className="card overflow-hidden">
                  <div className={`flex h-28 items-center justify-center p-5 ${bg}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${B}/${f}.svg`} alt="" className="max-h-14 w-auto" />
                  </div>
                  <p className="flex items-center gap-2 border-t border-surface-line p-3 text-sm text-ink-soft">
                    <Check className="h-4 w-4 text-win" aria-hidden /> {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Misuse</p>
            <h2 className="h-section mt-3 !text-3xl">Please don&apos;t</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {donts.map((d) => (
                <div key={d.label} className="card overflow-hidden">
                  <div className="relative flex h-32 items-center justify-center overflow-hidden bg-white">
                    {d.render}
                    <span className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-pain text-white">
                      <X className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </div>
                  <p className="border-t border-surface-line p-3 text-sm text-ink-soft">{d.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-mute">
              Also don&apos;t: separate the tagline and move it elsewhere, change the gap between symbol and wordmark, outline the logo, or use
              any earlier AntraHQ logo.
            </p>
          </div>

          <div className="rounded-2xl border border-surface-line bg-surface p-6 sm:p-8">
            <h2 className="font-display text-xl text-ink">Using AntraHQ in your materials</h2>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-mute">
              AntraHQ is a brand of {brand.legalName}. Partners, salons and media may use the logo to refer to AntraHQ without
              changing it. For co-branding, place the logos side by
              side at equal visual height, separated by a thin vertical line, with clear space around each. Questions or approvals:{" "}
              <a href={`mailto:${brand.email}`} className="font-semibold text-brand hover:underline">
                {brand.email}
              </a>
              .
            </p>
            <Link href="#downloads" className="link-arrow mt-4">
              Back to downloads
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
