const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden />
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 size-[520px] rounded-full bg-primary/20 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="container relative py-24 md:py-36 text-center">
        <div className="terminal-chip mx-auto mb-8 w-fit">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          grupo de estudos · dev community
        </div>

        <h1 className="font-mono text-6xl md:text-8xl font-extrabold tracking-tight leading-none">
          <span className="text-primary">&gt;_</span>
          <span className="text-gradient">devGroup</span>
          <span className="text-primary animate-pulse">_</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Aprender juntos, codar juntos, evoluir juntos.
        </p>
      </div>
    </section>
  );
};

export default Hero;
