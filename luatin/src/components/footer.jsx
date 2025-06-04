import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t dark:bg-[#030712] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-black dark:text-white mb-5 block">
              Luatin
            </Link>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-400 transition-colors">
                Terms
              </a>
              <span>•</span>
              <a href="#" className="hover:text-slate-400 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-black dark:text-white font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Customer stories
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Platform Column */}
          <div>
            <h3 className="text-black dark:text-white font-semibold mb-6">Platform</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Developer API
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Atom
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Electron
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  AstroWind Desktop
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-black dark:text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Community Forum
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Professional Services
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Skills
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-black dark:text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Inclusion
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Social Impact
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 transition-colors text-sm">
                  Shop
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}