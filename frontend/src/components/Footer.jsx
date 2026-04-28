const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-base-100 border-t border-base-300">
      <div className="container mx-auto px-4 py-2 flex flex-col items-center justify-center text-center">
        <p className="text-sm text-base-content/70">
          Hello, my name is <span className="font-medium">Indrajit Bhowmick</span>, from ECE 8th Sem
        </p>
        <p className="text-xs text-base-content/60">
          This is a basic web based chat application created as part of my Final Year project || Contact me - indrajitbhowmick1588@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
