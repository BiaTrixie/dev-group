const Footer = () => {
  return (
    <footer id="forum" className="border-t border-border/60 mt-10">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-mono">
          <span className="text-primary">&gt;_</span> devGroup
        </div>
        <p className="font-mono">© {new Date().getFullYear()} — todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
