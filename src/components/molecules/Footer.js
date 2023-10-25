function Footer() {
  return (
    <footer className="bg-secondary p-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-white">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
