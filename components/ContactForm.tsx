'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, MessageSquare, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  subject: z.string().min(5, 'Subject must be at least 5 characters.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      
      if (response.ok) {
        form.reset();
        // Create success modal
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
        modal.innerHTML = `
          <div class="glass-modal max-w-md mx-4">
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-4 glass-shine flex items-center justify-center border border-green-500/30 bg-green-500/10">
                <svg class="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 class="text-xl font-sora font-semibold mb-4">Message Sent!</h3>
              <p class="text-text-muted mb-6">Thank you for your message! We'll get back to you within 24 hours.</p>
              <button onclick="this.closest('.fixed').remove()" class="glass-btn-primary w-full">Close</button>
            </div>
          </div>
        `;
        document.body.appendChild(modal);
        setTimeout(() => modal.remove(), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      // Create error modal
      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50';
      modal.innerHTML = `
        <div class="glass-modal max-w-md mx-4">
          <div class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 glass-shine flex items-center justify-center border border-red-500/30 bg-red-500/10">
              <svg class="h-8 w-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </div>
            <h3 class="text-xl font-sora font-semibold mb-4">Error</h3>
            <p class="text-text-muted mb-6">Sorry, there was an error sending your message. Please try again.</p>
            <button onclick="this.closest('.fixed').remove()" class="glass-btn-primary w-full">Try Again</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark-canvas/95 to-dark-canvas">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-sora font-bold mb-6 tracking-tight">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-text-muted">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="glass border-white/20 text-white placeholder:text-text-muted focus:border-electric-cyan focus:ring-electric-cyan/20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your@email.com"
                          type="email"
                          className="glass border-white/20 text-white placeholder:text-text-muted focus:border-electric-cyan focus:ring-electric-cyan/20"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Subject
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="What's this about?"
                        className="glass border-white/20 text-white placeholder:text-text-muted focus:border-electric-cyan focus:ring-electric-cyan/20"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us more..."
                        className="glass border-white/20 text-white placeholder:text-text-muted focus:border-electric-cyan focus:ring-electric-cyan/20 min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full glass-btn-primary text-lg py-6"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;