
'use client';

import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import { socialLinks } from '@/lib/data';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[100svh] min-h-[800px] flex items-center justify-center text-center overflow-hidden">
      <BgPattern />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background"></div>

      <div className="container relative z-10 flex flex-col items-center justify-center px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <Image
              src="/logo.jpg"
              alt="Suruj Borah's logo"
              width={160}
              height={160}
              className="rounded-full object-cover border-4 border-primary/20 shadow-lg glow-md"
              priority
            />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold font-headline gradient-text tracking-tighter"
        >
          Suruj Borah
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 max-w-3xl text-lg md:text-xl text-foreground/80 leading-relaxed"
        >
          A passionate Full-Stack Developer creating modern, responsive, and user-friendly web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" className="glow-sm hover:glow-md transition-shadow duration-300">
              <Link href="#contact">Hire Me</Link>
            </Button>
          </motion.div>
           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild size="lg" variant="outline" className="bg-background/50 backdrop-blur-sm">
              <Link href="#tech-stack">
                View Tech Stack <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-10 flex gap-4"
        >
          {socialLinks.map((link) => (
            <motion.div key={link.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="ghost" size="icon" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-5 w-5 text-foreground/70 hover:text-primary transition-colors" />
                </a>
              </Button>
            </motion.div>
          ))}
        </motion.div>
        {/* External embed script and container (added per request) */}
        <Script
          src="//pl27929310.effectivegatecpm.com/6e618906356626c25be5d045327b9bfa/invoke.js"
          data-cfasync="false"
          async
          strategy="afterInteractive"
        />
        <div id="container-6e618906356626c25be5d045327b9bfa" />
      </div>
    </section>
  );
}

const BgPattern = () => (
  <div className="absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] -z-10" />
);
