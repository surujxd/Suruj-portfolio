
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '../ui/sheet';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#tech-stack', label: 'Skills' },
  { href: '#socials', label: 'Socials' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const NavLinkItems = () => (
    <>
      {navLinks.map((link, i) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: isMobile ? i * 0.1 + 0.2 : i * 0.05, duration: 0.3 }}
        >
          <Button variant="link" asChild className="text-foreground/80 hover:text-primary transition-colors text-base font-medium">
            <Link href={link.href} onClick={() => setMobileMenuOpen(false)}>{link.label}</Link>
          </Button>
        </motion.div>
      ))}
    </>
  );

  return (
    <motion.header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-colors duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/20' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <span className="text-xl font-bold font-headline">Suruj Borah</span>
        </Link>
        
        {isMobile ? (
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background/95 backdrop-blur-xl">
               <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col items-center justify-center h-full gap-2">
                <NavLinkItems />
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden md:flex items-center gap-1">
            <NavLinkItems />
          </nav>
        )}
      </div>
    </motion.header>
  );
}
