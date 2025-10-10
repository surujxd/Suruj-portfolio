
'use client';

import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-headline gradient-text">What I Do</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            I offer a range of services to help you build and scale your digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
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
                    <service.icon className="h-10 w-10" />
                  </motion.div>
                </CardHeader>
                <CardContent className="p-0 flex-1 flex flex-col">
                  <CardTitle className="text-xl font-bold font-headline mb-2">{service.title}</CardTitle>
                  <p className="text-foreground/80 text-sm flex-grow">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
