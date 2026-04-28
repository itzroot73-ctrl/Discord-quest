"use client"
import React from 'react'; import { motion } from 'framer-motion'; import { cn } from '@/lib/utils';
export const GlassCard = ({ children, className }: any) => (
  <motion.div whileHover={{ scale: 1.01 }} className={cn("glass-card p-6", className)}>{children}</motion.div>
);
