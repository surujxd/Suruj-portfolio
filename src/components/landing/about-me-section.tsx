
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function AboutMeSection() {
  return (
    <section id="about" className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <motion.div
              className="relative w-full max-w-sm mx-auto group aspect-[4/5]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/about.jpg"
                alt="About Suruj Borah"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-xl object-cover shadow-lg glow-md w-full"
                data-ai-hint="man portrait"
              />
               <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-xl -z-10 transform-gpu group-hover:rotate-[-3deg] transition-transform duration-300"></div>
            </motion.div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-4xl md:text-5xl font-bold font-headline gradient-text mb-6">About Me</h2>
            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
              <p>
                Hello! I&apos;m Suruj, a full-stack developer with a deep-seated passion for crafting beautiful, functional, and user-centric digital experiences. My journey into programming began with a fascination for how ideas transform into tangible, interactive applications that can solve real-world problems.
              </p>
              <p>
                With a foundation in both frontend and backend technologies, I thrive on the challenge of building seamless applications from start to finish. I&apos;m driven by a desire to continuously learn and adapt, whether that means diving into the latest AI advancements with Genkit and Gemini or mastering the nuances of modern web frameworks.
              </p>
              <p>
                Beyond the code, I am a firm believer in the power of collaboration and clear communication. I&apos;m always excited to work with teams to bring ambitious projects to life. When I&apos;m not at my keyboard, you can find me exploring new hiking trails or experimenting with new recipes in the kitchen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
