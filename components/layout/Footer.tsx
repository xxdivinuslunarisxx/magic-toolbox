export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerContent">
        <p>
          © {new Date().getFullYear()} Magic Tool Box UK
        </p>

        <div className="footerLinks">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/shop">Shop</a>
        </div>
      </div>
    </footer>
  );
}