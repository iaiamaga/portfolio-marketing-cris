
import React from 'react';

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface Skill {
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  items: string[];
  aspectRatio: 'square' | 'vertical' | 'horizontal';
}
