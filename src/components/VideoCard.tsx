import { useCallback, useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";
import {
  drivePreview,
  driveThumbnail,
  localPoster,
  localVideo,
  type PortfolioVideo,
} from "@/lib/portfolio";

type VideoCardProps = {
  video: PortfolioVideo;
  orientation: "vertical" | "wide";
  tag?: string;
};

/**
 * One portfolio video in the style of a comic panel.
 *
 * - By default: a native <video> that autoplays muted while on screen, with a
 *   mute toggle and volume slider. It plays `video.src` if set, otherwise the
 *   web-ready copy in /videos built by .github/workflows/build-videos.yml.
 * - Long-form cards play a short preview loop and offer the full video,
 *   which opens in the Google Drive player.
 * - If the file is missing (or `youtubeId` is set): a poster with a play
 *   button that swaps in a YouTube or Google Drive embed when clicked.
 */
export function VideoCard({ video, orientation, tag }: VideoCardProps) {
  const aspect = orientation === "vertical" ? "aspect-[9/16]" : "aspect-video";
  const [streamFailed, setStreamFailed] = useState(false);
  const [showFull, setShowFull] = useState(false);
  const onStreamFail = useCallback(() => setStreamFailed(true), []);

  return (
    <article className="group flex flex-col">
      <div
        className={`relative ${aspect} w-full overflow-hidden rounded-3xl border-2 border-ink bg-ink transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1`}
        style={{ boxShadow: "6px 6px 0 0 var(--yellow)" }}
      >
        {video.youtubeId || streamFailed || showFull ? (
          <EmbedPlayer video={video} autoStart={showFull} />
        ) : (
          <NativePlayer
            video={video}
            onFail={onStreamFail}
            onWatchFull={orientation === "wide" ? () => setShowFull(true) : undefined}
          />
        )}
        {tag && (
          <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full border-2 border-ink bg-yellow px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-ink sm:text-xs">
            {tag}
          </span>
        )}
      </div>
      <h3 className="mt-6 font-display text-xl uppercase leading-tight tracking-tight sm:text-2xl">
        {video.title}
      </h3>
      <p className="mt-3 text-sm font-medium leading-relaxed text-cream/70 sm:text-base">
        {video.description}
      </p>
    </article>
  );
}

function NativePlayer({
  video,
  onFail,
  onWatchFull,
}: {
  video: PortfolioVideo;
  onFail: () => void;
  onWatchFull?: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(0.6);

  // Play only while the card is on screen, to save bandwidth and battery.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = true; // React doesn't render the muted attribute on the server
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.muted = muted;
    el.volume = volume;
  }, [muted, volume]);

  return (
    <>
      <video
        ref={ref}
        src={video.src ?? localVideo(video.driveId)}
        poster={video.poster ?? localPoster(video.driveId)}
        muted
        loop
        playsInline
        preload="metadata"
        onError={onFail}
        onClick={(e) => {
          const el = e.currentTarget;
          if (el.paused) el.play().catch(() => {});
        }}
        className="h-full w-full object-cover"
        aria-label={video.title}
      />
      <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2 rounded-full border-2 border-ink bg-cream/95 px-2.5 py-1.5 text-ink shadow-[3px_3px_0_0_var(--ink)]">
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-yellow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
          aria-label={muted ? `Unmute ${video.title}` : `Mute ${video.title}`}
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={muted ? 0 : volume}
          onChange={(e) => {
            const v = Number(e.target.value);
            setVolume(v);
            setMuted(v === 0);
          }}
          className="h-1.5 w-16 cursor-pointer accent-crimson sm:w-20"
          aria-label={`Volume for ${video.title}`}
        />
      </div>
      {onWatchFull && (
        <button
          type="button"
          onClick={onWatchFull}
          className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 rounded-full border-2 border-ink bg-yellow px-3 py-1.5 text-xs font-black uppercase tracking-wider text-ink shadow-[3px_3px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink"
        >
          <Play className="h-3.5 w-3.5 fill-ink" /> Full video
        </button>
      )}
    </>
  );
}

function EmbedPlayer({ video, autoStart = false }: { video: PortfolioVideo; autoStart?: boolean }) {
  const [playing, setPlaying] = useState(autoStart);
  const [posterFailed, setPosterFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The poster can fail before React hydrates (so onError never fires);
  // catch that case too. Private Drive files have no public thumbnail.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setPosterFailed(true);
  }, []);

  if (playing) {
    const src = video.youtubeId
      ? `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`
      : drivePreview(video.driveId);
    return (
      <iframe
        src={src}
        title={video.title}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0 bg-ink"
      />
    );
  }

  const poster =
    video.poster ??
    (video.youtubeId
      ? `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`
      : driveThumbnail(video.driveId));

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="absolute inset-0 flex h-full w-full items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-yellow"
      aria-label={`Play ${video.title}`}
    >
      {posterFailed ? (
        <PosterFallback title={video.title} />
      ) : (
        <img
          ref={imgRef}
          src={poster}
          alt=""
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setPosterFailed(true)}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}
      <span className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink bg-yellow text-ink shadow-[4px_4px_0_0_var(--ink)] transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
        <Play className="ml-1 h-7 w-7 fill-ink sm:h-8 sm:w-8" />
      </span>
    </button>
  );
}

/** Comic halftone panel shown when no thumbnail is available. */
function PosterFallback({ title }: { title: string }) {
  return (
    <span aria-hidden className="absolute inset-0 overflow-hidden bg-crimson">
      <span
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "repeating-conic-gradient(from 0deg at 50% 50%, var(--yellow) 0deg 6deg, transparent 6deg 18deg)",
        }}
      />
      <span
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(var(--ink) 1.5px, transparent 1.5px)",
          backgroundSize: "12px 12px",
        }}
      />
      <span className="absolute inset-x-4 bottom-5 font-comic text-2xl uppercase leading-none tracking-wide text-yellow [text-shadow:2px_2px_0_var(--ink)] sm:text-3xl">
        {title}
      </span>
    </span>
  );
}
