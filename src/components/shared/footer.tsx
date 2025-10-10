
'use client';

import Link from 'next/link';
import { socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/20">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <span className="text-lg font-bold font-headline">Suruj Borah</span>
          </Link>

          <div className="text-center text-sm text-foreground/60">
            &copy; {currentYear} Suruj Borah. All rights reserved.
          </div>

          <div className="flex gap-2">
            {socialLinks.map((link) => (
              <motion.div key={link.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <link.icon className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
