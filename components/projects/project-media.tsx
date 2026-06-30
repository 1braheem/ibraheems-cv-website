import Image from "next/image";

import { cn } from "@/lib/utils";

interface ProjectMediaProps {
  alt: string;
  className?: string;
  priority?: boolean;
  src: string;
  variant?: "cover" | "fit" | "logo" | "portrait";
}

export default function ProjectMedia({
  alt,
  className,
  priority,
  src,
  variant = "cover",
}: ProjectMediaProps) {
  const isLogo = variant === "logo";
  const isFit = variant === "fit";
  const isPortrait = variant === "portrait";

  return (
    <div
      className={cn(
        "relative overflow-hidden border border-border",
        isLogo
          ? "bg-white"
          : isFit
            ? "bg-black"
            : isPortrait
              ? "bg-muted"
              : "bg-muted",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 720px, 100vw"
        className={cn(
          "transition-transform duration-300",
          isLogo
            ? "object-contain p-8"
            : isFit
              ? "object-contain"
              : isPortrait
                ? "object-contain"
              : cn(
                  "object-cover hover:scale-[1.02]",
                )
        )}
        priority={priority}
      />
    </div>
  );
}
