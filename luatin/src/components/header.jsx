"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Rocket, Menu, X } from "lucide-react";
import { ModeToggle } from "./modeToggler";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeProvider } from "./themeProvider";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });
export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const menuItems = [
    {
      name: "Homes",
      hasDropdown: true,
      items: [
        {
          name: "Startup",
          href: "/homes/startup",
          description: "Modern startup landing page",
        },
        {
          name: "SaaS",
          href: "/homes/saas",
          description: "Software as a Service template",
        },
        {
          name: "Corporate",
          href: "/homes/corporate",
          description: "Professional corporate site",
        },
        {
          name: "Portfolio",
          href: "/homes/portfolio",
          description: "Creative portfolio showcase",
        },
      ],
    },
    {
      name: "Pages",
      hasDropdown: true,
      items: [
        {
          name: "About",
          href: "/about",
          description: "Learn more about our mission",
        },
        {
          name: "Contact",
          href: "/contact",
          description: "Get in touch with us",
        },
        {
          name: "Pricing",
          href: "/pricing",
          description: "View our pricing plans",
        },
        {
          name: "FAQ",
          href: "/faq",
          description: "Frequently asked questions",
        },
        { name: "Terms", href: "/terms", description: "Terms of service" },
        { name: "Privacy", href: "/privacy", description: "Privacy policy" },
      ],
    },
    {
      name: "Landing",
      hasDropdown: true,
      items: [
        {
          name: "Product",
          href: "/landing/product",
          description: "Showcase your product",
        },
        {
          name: "Service",
          href: "/landing/service",
          description: "Promote your services",
        },
        {
          name: "Mobile App",
          href: "/landing/app",
          description: "Mobile app landing page",
        },
        {
          name: "Event",
          href: "/landing/event",
          description: "Event promotion page",
        },
      ],
    },
    {
      name: "Blog",
      hasDropdown: true,
      items: [
        {
          name: "All Posts",
          href: "/blog",
          description: "Browse all blog posts",
        },
        {
          name: "Categories",
          href: "/blog/categories",
          description: "Posts by category",
        },
        { name: "Tags", href: "/blog/tags", description: "Posts by tags" },
        {
          name: "Archive",
          href: "/blog/archive",
          description: "Archived blog posts",
        },
      ],
    },
    {
      name: "Widgets",
      hasDropdown: false,
      href: "/widgets",
    },
  ];

  return (
    <header className=" mx-auto px-4 fixed w-screen top-0 z-50 bg-accent sm:bg-accent dark:md:bg-transparent dark:lg:bg-transparent md:bg-accent lg:bg-accent">
      <div className="flex items-center justify-between h-16 text-black dark:text-white">
        {/* Logo */}
        <Link href="/" passHref>
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <p href="/" className={`${roboto.className} font-bold text-xl`}>
              Luatin
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => (
            <div key={item.name} className="relative">
              {item.hasDropdown ? (
                <div>
                  <button
                    className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer`}
                    onClick={() => handleDropdownToggle(item.name)}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === item.name && (
                    <div
                      className={`absolute top-full left-0 mt-2 w-80 rounded-lg shadow-lg border z-50 bg-accent`}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="p-4 grid grid-cols-1 gap-2">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className={`block p-3 rounded-md transition-colors hover:bg-accent-foreground hover:text-accent`}
                          >
                            <div className="font-medium text-sm">
                              {subItem.name}
                            </div>
                            <div className={`text-xs mt-1 $`}>
                              {subItem.description}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors z-99`}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-x-3">
          {/* Theme Toggle */}
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ModeToggle />
          </ThemeProvider>

          {/* Avatar */}
          <Avatar className="me-0 sm:me-0 md:me-2 lg:me-2">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden z-99`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 cursor-pointer" />
            ) : (
              <Menu className="h-5 w-5 cursor-pointer" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-t $`}>
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      className={`flex items-center justify-between w-full px-3 py-2 text-left rounded-md cursor-pointer hover:bg-accent hover:text-accent-foreground z-99`}
                      onClick={() =>
                        handleDropdownToggle(`mobile-${item.name}`)
                      }
                    >
                      <span className="text-sm">{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform cursor-pointer ${
                          activeDropdown === `mobile-${item.name}`
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === `mobile-${item.name}` && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground z-99`}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`block px-3 py-2 rounded-md $`}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
