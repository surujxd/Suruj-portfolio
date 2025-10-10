
'use client';

import { socialLinks } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

export function SocialsSection() {
  const displaySocials = socialLinks.filter(link => link.name !== 'Email');

  return (
    <section id="socials" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline gradient-text">Connect with Me</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Follow my journey, thoughts, and projects on social media.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displaySocials.map((social, index) => (
            <motion.div
              key={social.name}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="bg-card/80 backdrop-blur-sm border-border/30 flex flex-col hover:border-primary/50 transition-colors duration-300 hover:glow-sm group text-center items-center p-6 h-full">
                <CardHeader className="p-0 mb-4">
                   <motion.div 
                    className="bg-primary/10 text-primary rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto glow-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    <social.icon className="h-10 w-10" />
                  </motion.div>
                </CardHeader>
                <CardContent className="p-0 flex-1 flex flex-col items-center">
                  <CardTitle className="text-xl font-bold font-headline mb-2">{social.name}</CardTitle>
                  <p className="text-foreground/80 text-sm flex-grow mb-4">{social.description}</p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild className="mt-auto glow-sm hover:glow-md transition-shadow duration-300">
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        Follow me <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
