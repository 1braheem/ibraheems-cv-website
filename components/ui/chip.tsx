interface ChipProps {
  content: string;
}

export default function Chip({ content }: ChipProps) {
  return (
    <div className="relative inline-block select-none whitespace-nowrap border border-border bg-secondary px-2.5 py-1.5 align-baseline font-sans text-[10px] font-bold uppercase tracking-[0.12em] leading-none text-muted-foreground">
      {content}
    </div>
  );
}
