import { sharpy } from '@/assets/index';

const Footer = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <footer className="footer py-16 px-2 text-base-content border-t border-gray/10 flex flex-col md:flex-row items-center md:items-start">
        <aside>
          <a href="/">
            <img src={sharpy.src} alt="Sharpy" className="h-9 w-auto" />
          </a>
        </aside>
        <nav className="text-lg flex flex-col md:flex-row grow justify-between text-center md:text-left">
          <div className="flex flex-col gap-5">
            <p className="font-semibold">Company</p>
            <ul>
              <li>
                <a className="">Home</a>
              </li>
              <li>
                <a className="">About</a>
              </li>
              <li>
                <a className="">Pricing</a>
              </li>
              <li>
                <a className="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-semibold">Support</p>
            <ul>
              <li>
                <a className="">Support</a>
              </li>
              <li>
                <a className="">Blog</a>
              </li>
              <li>
                <a className="">Terms & Conditions</a>
              </li>
              <li>
                <a className="">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-semibold">Resources</p>
            <ul>
              <li>
                <a className="">Free eBooks</a>
              </li>
              <li>
                <a className="">Development Tutorial</a>
              </li>
              <li>
                <a className="">How to - Blog</a>
              </li>
              <li>
                <a className="">Youtube Playlist</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-semibold">Services</p>
            <ul>
              <li>
                <a className="">Web Development</a>
              </li>
              <li>
                <a className="">Mobile Development</a>
              </li>
              <li>
                <a className="">SEO</a>
              </li>
              <li>
                <a className="">Digital Marketing</a>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
