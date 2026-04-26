import React from "react"
import Layout from "../components/layout.js"
import Seo from "../components/seo"
import "../components/main.css"

function getPreviewSrc(href) {
  // Uses thum.io to render a live screenshot preview.
  // If you prefer local, replace with imported images from src/images.
  return `https://image.thum.io/get/width/1200/crop/900/${href}`
}

const WEBSITES = [
  {
    name: "Corki",
    domain: "corkiapp.com",
    href: "https://corkiapp.com",
    appStoreHref: "https://apps.apple.com/us/app/corki-wine-pairing-intel/id6761977264",
    playStoreHref: "https://play.google.com/store/apps/details?id=com.corki.app",
    subtitle: "Cross-platform wine pairing app.",
    blurb: "A React Native app I use for restaurant discovery, menu scanning, pairing recommendations, and saving the wines and dishes I want to remember.",
    details: [
      "Built with Expo, including Expo Maps, animations, and camera/menu upload flows.",
      "Shares the wine-consulting backend with Cork Commerce: Next.js App Router API routes, Supabase auth/Postgres, Trigger.dev jobs, and Cloudflare Workers for heavier AI pairing work.",
      "Uses Groq, OpenAI, and Google Places for menu parsing, wine discovery, pairing logic, restaurant search, and place metadata.",
    ],
    pills: ["React Native", "Expo", "Supabase", "Cloudflare Workers", "Trigger.dev"],
  },
  {
    name: "Pasteproof",
    domain: "pasteproof.com",
    href: "https://pasteproof.com",
    subtitle: "Open-source DLP tooling platform.",
    blurb: "A data loss prevention platform for catching sensitive content where people actually paste and share it.",
    details: [
      "Built across a WXT browser extension, Next.js dashboard, Cloudflare Workers, and Supabase.",
      "Uses Modal for AI infrastructure and experiments with ONNX models for in-browser classification so some detection can happen locally before data leaves the browser.",
    ],
    pills: ["Open source", "DLP", "WXT", "Next.js", "Modal", "ONNX"],
  },
  {
    name: "Cork Commerce",
    domain: "corkcommerce.com",
    href: "https://corkcommerce.com",
    subtitle: "Wine consulting and pairing infrastructure.",
    blurb: "A restaurant wine consulting project backed by the same production pairing system that powers Corki.",
    details: [
      "Next.js API routes handle authenticated profiles, saved pairings, ratings, trials, upvotes, restaurant lists, guest requests, menu extraction, and job polling.",
      "Supabase provides auth, Postgres data, row-level security patterns, admin service clients, and user privacy export/delete flows.",
      "Trigger.dev and Cloudflare Workers run long-running scrape, menu, free-pairing, wine discovery, and failure/cancellation workflows outside normal web requests.",
    ],
    pills: ["Next.js", "Supabase", "Trigger.dev", "Groq", "Google Places"],
  },
]

const Work = () => (
    <Layout>
        <div className="page-layout">
            <div className="content-container portfolio">
                <div className="section-kicker">Portfolio</div>

                <h3 style={{ marginTop: "0.9em" }}>Personal projects</h3>
                <h4 style={{ marginBottom: "0.4em" }}>Products I actually use, run, and keep improving across mobile, web, browser extension, and backend infrastructure.</h4>

                <div className="web-grid">
                  {WEBSITES.map(site => (
                    <article className="web-card" key={site.domain}>
                      <a
                        href={site.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        style={{ display: "block", color: "inherit" }}
                      >
                        <div className="web-preview" aria-hidden="true">
                          <img
                            className="web-preview-img"
                            src={getPreviewSrc(site.href)}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            referrerPolicy="no-referrer"
                            onError={e => {
                              // Hide screenshot if blocked/unavailable; fallback styling stays.
                              e.currentTarget.style.display = "none"
                            }}
                          />
                          <div className="web-preview-inner">
                            <div className="web-domain">{site.domain}</div>
                            <div className="web-subtitle">{site.subtitle}</div>
                          </div>
                        </div>
                      </a>

                      <div className="web-card-body">
                        <div className="web-card-title">
                          <h5>{site.name}</h5>
                          <a href={site.href} target="_blank" rel="noreferrer noopener">
                            Visit
                          </a>
                        </div>

                        <p style={{ marginTop: "0.8em" }}>{site.blurb}</p>

                        {site.details ? (
                          <ul className="web-detail-list">
                            {site.details.map(detail => (
                              <li key={detail}>{detail}</li>
                            ))}
                          </ul>
                        ) : null}

                        <div className="web-pill-row" aria-label={`${site.name} tags`}>
                          {site.pills.map(pill => (
                            <span className="web-pill" key={pill}>
                              {pill}
                            </span>
                          ))}
                        </div>

                        <div className="web-links">
                          <a href={site.href} target="_blank" rel="noreferrer noopener">
                            {site.domain}
                          </a>
                          {site.appStoreHref ? (
                            <a href={site.appStoreHref} target="_blank" rel="noreferrer noopener">
                              App Store
                            </a>
                          ) : null}
                          {site.playStoreHref ? (
                            <a href={site.playStoreHref} target="_blank" rel="noreferrer noopener">
                              Play Store
                            </a>
                          ) : null}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
                
            </div>
        </div>
    </Layout>
)

export const Head = () => <Seo title="Portfolio" />

export default Work;