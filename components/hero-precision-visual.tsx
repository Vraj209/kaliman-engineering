/**
 * Hero illustration — isometric stepped turned part.
 *
 * Pure SVG, deterministic, server-renderable. Uses brand palette
 * (surface-dark / on-dark / accent-brand-orange) and the engineering
 * drawing motifs used elsewhere on the site — corner ticks, coordinate
 * labels, mono callouts, and dimension lines.
 */
export function HeroPrecisionVisual() {
  return (
    <div className="hero-precision-visual relative mx-auto w-full max-w-xl select-none sm:max-w-2xl lg:mx-0 lg:ml-auto lg:max-w-[min(100%,640px)]">
      <svg
        viewBox="0 0 600 600"
        role="img"
        aria-label="Isometric technical drawing of a precision machined stepped turned part"
        className="h-auto w-full drop-shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
      >
        <defs>
          {/* Cylindrical side shading — brighter in the middle to fake curvature */}
          <linearGradient id="metal-side" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.04" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.04" />
          </linearGradient>

          {/* Top face with warm orange hot-spot (machined finish) */}
          <radialGradient id="metal-top" cx="0.5" cy="0.5" r="0.55">
            <stop offset="0%" stopColor="#d94125" stopOpacity="0.35" />
            <stop offset="55%" stopColor="#ffffff" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
          </radialGradient>

          {/* Soft floor shadow fade */}
          <radialGradient id="floor-fade" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ── Framing — corner ticks ─────────────────────────── */}
        <g stroke="#ffffff" strokeOpacity="0.22" strokeWidth="1">
          <path d="M 28 28 h 18 M 28 28 v 18" />
          <path d="M 572 28 h -18 M 572 28 v 18" />
          <path d="M 28 572 h 18 M 28 572 v -18" />
          <path d="M 572 572 h -18 M 572 572 v -18" />
        </g>

        {/* ── Floor — concentric iso shadow rings ────────────── */}
        <g>
          <ellipse
            cx="300"
            cy="498"
            rx="240"
            ry="46"
            fill="url(#floor-fade)"
          />
          <ellipse
            cx="300"
            cy="498"
            rx="220"
            ry="42"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.08"
          />
          <ellipse
            cx="300"
            cy="498"
            rx="175"
            ry="34"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.1"
          />
        </g>

        {/* ── Bottom tier — Ø 170 ────────────────────────────── */}
        <g>
          <path
            d="M 130 380 L 130 460 A 170 38 0 0 0 470 460 L 470 380 A 170 38 0 0 1 130 380 Z"
            fill="url(#metal-side)"
            stroke="#ffffff"
            strokeOpacity="0.32"
            strokeWidth="1"
          />
          {/* Back edge of top rim (dashed — hidden behind) */}
          <path
            d="M 130 380 A 170 38 0 0 1 470 380"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.22"
            strokeWidth="0.75"
            strokeDasharray="3 4"
          />
          {/* Front top rim */}
          <path
            d="M 130 380 A 170 38 0 0 0 470 380"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.6"
            strokeWidth="1.25"
          />
          {/* Top face fill */}
          <ellipse
            cx="300"
            cy="380"
            rx="170"
            ry="38"
            fill="url(#metal-top)"
            opacity="0.9"
          />
        </g>

        {/* ── Middle tier — Ø 120 ────────────────────────────── */}
        <g>
          <path
            d="M 180 300 L 180 380 A 120 28 0 0 0 420 380 L 420 300 A 120 28 0 0 1 180 300 Z"
            fill="url(#metal-side)"
            stroke="#ffffff"
            strokeOpacity="0.32"
            strokeWidth="1"
          />
          <path
            d="M 180 300 A 120 28 0 0 1 420 300"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.22"
            strokeWidth="0.75"
            strokeDasharray="3 4"
          />
          <path
            d="M 180 300 A 120 28 0 0 0 420 300"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.6"
            strokeWidth="1.25"
          />
          <ellipse
            cx="300"
            cy="300"
            rx="120"
            ry="28"
            fill="url(#metal-top)"
            opacity="0.9"
          />
        </g>

        {/* ── Top tier — Ø 80 ────────────────────────────────── */}
        <g>
          <path
            d="M 220 230 L 220 300 A 80 20 0 0 0 380 300 L 380 230 A 80 20 0 0 1 220 230 Z"
            fill="url(#metal-side)"
            stroke="#ffffff"
            strokeOpacity="0.32"
            strokeWidth="1"
          />
          <path
            d="M 220 230 A 80 20 0 0 1 380 230"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.22"
            strokeWidth="0.75"
            strokeDasharray="3 4"
          />
          <path
            d="M 220 230 A 80 20 0 0 0 380 230"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.7"
            strokeWidth="1.25"
          />
          <ellipse
            cx="300"
            cy="230"
            rx="80"
            ry="20"
            fill="url(#metal-top)"
          />
          {/* Center bore */}
          <ellipse
            cx="300"
            cy="230"
            rx="14"
            ry="3.5"
            fill="#0a0a0a"
            stroke="#ffffff"
            strokeOpacity="0.4"
            strokeWidth="0.75"
          />
        </g>

        {/* ── Crosshair through center bore ──────────────────── */}
        <g>
          <line
            x1="252"
            y1="230"
            x2="348"
            y2="230"
            stroke="#d94125"
            strokeOpacity="0.8"
            strokeWidth="1"
          />
          <line
            x1="300"
            y1="180"
            x2="300"
            y2="280"
            stroke="#d94125"
            strokeOpacity="0.45"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
        </g>

        {/* ── Right-side dimension callouts (Ø) ──────────────── */}
        <g
          fontFamily="var(--font-mono), ui-monospace, monospace"
          fontSize="10"
          letterSpacing="2"
        >
          {/* Ø 170 */}
          <g>
            <line
              x1="478"
              y1="418"
              x2="520"
              y2="418"
              stroke="#d94125"
              strokeOpacity="0.75"
              strokeWidth="0.75"
            />
            <line
              x1="478"
              y1="413"
              x2="478"
              y2="423"
              stroke="#d94125"
              strokeOpacity="0.75"
              strokeWidth="0.75"
            />
            <text x="526" y="422" fill="#d94125">
              Ø 170
            </text>
          </g>
          {/* Ø 120 */}
          <g>
            <line
              x1="428"
              y1="340"
              x2="520"
              y2="340"
              stroke="#ffffff"
              strokeOpacity="0.4"
              strokeWidth="0.75"
            />
            <line
              x1="428"
              y1="335"
              x2="428"
              y2="345"
              stroke="#ffffff"
              strokeOpacity="0.4"
              strokeWidth="0.75"
            />
            <text x="526" y="344" fill="#ffffff" fillOpacity="0.75">
              Ø 120
            </text>
          </g>
          {/* Ø 80 */}
          <g>
            <line
              x1="388"
              y1="265"
              x2="520"
              y2="265"
              stroke="#ffffff"
              strokeOpacity="0.4"
              strokeWidth="0.75"
            />
            <line
              x1="388"
              y1="260"
              x2="388"
              y2="270"
              stroke="#ffffff"
              strokeOpacity="0.4"
              strokeWidth="0.75"
            />
            <text x="526" y="269" fill="#ffffff" fillOpacity="0.75">
              Ø 80
            </text>
          </g>
        </g>

        {/* ── Left-side height dimension ─────────────────────── */}
        <g
          fontFamily="var(--font-mono), ui-monospace, monospace"
          fontSize="10"
          letterSpacing="2"
        >
          <line
            x1="90"
            y1="230"
            x2="90"
            y2="460"
            stroke="#ffffff"
            strokeOpacity="0.35"
            strokeWidth="0.75"
          />
          <line
            x1="85"
            y1="230"
            x2="95"
            y2="230"
            stroke="#ffffff"
            strokeOpacity="0.35"
            strokeWidth="0.75"
          />
          <line
            x1="85"
            y1="460"
            x2="95"
            y2="460"
            stroke="#ffffff"
            strokeOpacity="0.35"
            strokeWidth="0.75"
          />
          <text
            x="78"
            y="348"
            textAnchor="middle"
            transform="rotate(-90 78 348)"
            fill="#ffffff"
            fillOpacity="0.65"
          >
            H 230
          </text>
        </g>

        {/* ── Axis triad (top-left) ──────────────────────────── */}
        <g
          transform="translate(70 90)"
          fontFamily="var(--font-mono), ui-monospace, monospace"
          fontSize="9"
          letterSpacing="2"
        >
          {/* Z — up (white) */}
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="-34"
            stroke="#ffffff"
            strokeOpacity="0.75"
            strokeWidth="1"
          />
          <polygon
            points="-3,-31 3,-31 0,-38"
            fill="#ffffff"
            fillOpacity="0.75"
          />
          <text x="5" y="-34" fill="#ffffff" fillOpacity="0.75">
            Z
          </text>
          {/* X — right-forward iso (orange) */}
          <line
            x1="0"
            y1="0"
            x2="30"
            y2="17"
            stroke="#d94125"
            strokeWidth="1"
          />
          <polygon
            points="26,13 33,19 25,19"
            fill="#d94125"
          />
          <text x="36" y="24" fill="#d94125">
            X
          </text>
          {/* Y — left-forward iso (white) */}
          <line
            x1="0"
            y1="0"
            x2="-30"
            y2="17"
            stroke="#ffffff"
            strokeOpacity="0.75"
            strokeWidth="1"
          />
          <polygon
            points="-26,13 -33,19 -25,19"
            fill="#ffffff"
            fillOpacity="0.75"
          />
          <text x="-42" y="24" fill="#ffffff" fillOpacity="0.75">
            Y
          </text>
        </g>

        {/* ── Meta chip — tolerance (top-right) ──────────────── */}
        <g
          fontFamily="var(--font-mono), ui-monospace, monospace"
          fontSize="9"
          letterSpacing="2"
        >
          <rect
            x="430"
            y="76"
            width="110"
            height="22"
            fill="none"
            stroke="#d94125"
            strokeOpacity="0.7"
            strokeWidth="0.75"
          />
          <text x="440" y="91" fill="#d94125">
            TOL ±0.01
          </text>
          <rect
            x="432"
            y="80"
            width="4"
            height="14"
            fill="#d94125"
          />
        </g>

        {/* ── Meta chip — material (mid-left) ────────────────── */}
        <g
          fontFamily="var(--font-mono), ui-monospace, monospace"
          fontSize="9"
          letterSpacing="2"
        >
          <rect
            x="44"
            y="276"
            width="98"
            height="22"
            fill="none"
            stroke="#ffffff"
            strokeOpacity="0.35"
            strokeWidth="0.75"
          />
          <text x="54" y="291" fill="#ffffff" fillOpacity="0.75">
            MAT · EN24
          </text>
          <rect
            x="46"
            y="280"
            width="4"
            height="14"
            fill="#ffffff"
            fillOpacity="0.35"
          />
        </g>

        {/* ── Part label (bottom-right) ──────────────────────── */}
        <g
          fontFamily="var(--font-mono), ui-monospace, monospace"
          fontSize="9"
          letterSpacing="2"
        >
          <text
            x="558"
            y="556"
            textAnchor="end"
            fill="#ffffff"
            fillOpacity="0.5"
          >
            DWG / A-01 · FLANGE-BODY
          </text>
          <text
            x="42"
            y="556"
            fill="#ffffff"
            fillOpacity="0.5"
          >
            ISO · SCALE 1:2
          </text>
        </g>
      </svg>
    </div>
  );
}
