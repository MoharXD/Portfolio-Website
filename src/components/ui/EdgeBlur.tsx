export function EdgeBlur({ position, height = 72 }: { position: "top" | "bottom"; height?: number }) {
  return (
    <div
      className={`fixed ${position === 'top' ? 'top-0' : 'bottom-0'} left-0 right-0 z-[40] pointer-events-none backdrop-blur-md`}
      style={{
        height,
        maskImage: `linear-gradient(to ${position === 'top' ? 'bottom' : 'top'}, black, transparent)`,
        WebkitMaskImage: `linear-gradient(to ${position === 'top' ? 'bottom' : 'top'}, black, transparent)`
      }}
    />
  );
}
