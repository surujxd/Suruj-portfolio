
'use client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Copy } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContactSection() {
  const { toast } = useToast();
  const email = process.env.NEXT_PUBLIC_EMAIL || 'contact@surujborah.xyz';

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);
    toast({
      title: 'Email Copied!',
      description: 'My email address has been copied to your clipboard.',
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-headline gradient-text mb-6">
          Get in Touch
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70 mb-8">
          Have a project in mind or just want to say hello? I&apos;d love to hear from you. The best way to reach me is by email.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="glow-sm hover:glow-md transition-shadow duration-300">
                <a href={`mailto:${email}`}>
                  {email}
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="bg-background/50 backdrop-blur-sm"
                onClick={copyEmailToClipboard}
              >
                <Copy className="mr-2 h-4 w-4" />
                Copy Email
              </Button>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
