
'use client';

import { techStack } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code } from 'lucide-react';
import { motion } from 'framer-motion';

const categoryVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
};

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline gradient-text">My Tech Stack</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            A collection of technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((category, index) => (
            <motion.div
              key={category.category}
              variants={categoryVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card
                className="bg-card/50 backdrop-blur-sm border-border/30 hover:border-primary/50 transition-colors duration-300 hover:glow-sm group h-full"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl font-headline text-foreground/90 group-hover:text-primary transition-colors">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {category.items.map((tech) => (
                      <li key={tech.name} className="flex items-center gap-3">
                        <div className="w-6 h-6 flex items-center justify-center">
                          {tech.icon ? (
                            <tech.icon className="h-6 w-6 text-primary/80" />
                          ) : (
                            <Code className="h-5 w-5 text-primary/80" />
                          )}
                        </div>
                        <span className="font-medium text-foreground/80">{tech.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
