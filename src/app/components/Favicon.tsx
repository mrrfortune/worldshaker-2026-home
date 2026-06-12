import { useEffect } from "react";

export function Favicon() {
  useEffect(() => {
    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="7" fill="#000000"/>
  <text
    x="16"
    y="23"
    text-anchor="middle"
    font-family="Inter, Helvetica Neue, Helvetica, Arial, sans-serif"
    font-weight="900"
    font-size="20"
    letter-spacing="-1"
    fill="#CCFF00"
  >W</text>
</svg>`.trim();

    const encoded = `data:image/svg+xml,${encodeURIComponent(svg)}`;

    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/svg+xml";
    link.href = encoded;

    document.title = "worldshaker";
  }, []);

  return null;
}
