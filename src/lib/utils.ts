import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type ResolvedVideo = { kind: "youtube"; src: string } | { kind: "file"; src: string };

/** Transforme une URL YouTube en URL d'intégration ; renvoie tel quel un fichier vidéo (mp4/webm). */
export function resolveVideo(raw: string | undefined): ResolvedVideo | null {
  const value = raw?.trim();
  if (!value) return null;
  if (value.startsWith("/") && /\.(mp4|webm)$/i.test(value)) return { kind: "file", src: value };

  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return null;
  }
  if (url.protocol !== "https:") return null;

  const host = url.hostname.replace(/^www\./, "");
  let id: string | null = null;
  if (host === "youtu.be") id = url.pathname.slice(1);
  else if (host === "youtube.com" || host === "m.youtube.com" || host === "youtube-nocookie.com") {
    id = url.searchParams.get("v") ?? url.pathname.split("/").filter(Boolean).pop() ?? null;
  }
  if (id && /^[\w-]{6,20}$/.test(id)) {
    return { kind: "youtube", src: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0` };
  }
  if (/\.(mp4|webm)$/i.test(url.pathname)) return { kind: "file", src: url.toString() };
  return null;
}
