interface ChipProps {
  content: string;
}

export default function Chip({ content }: ChipProps) {
  return (
    <div className="relative inline-block select-none whitespace-nowrap rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 align-baseline font-sans text-[11px] font-bold uppercase tracking-[0.12em] leading-none text-primary">
      {content}
    </div>
  );
}
