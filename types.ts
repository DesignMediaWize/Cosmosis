import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceProcess {
  step: string;
  title: string;
  description: string;
}

export interface ServiceDetails {
  heroImage: string;
  fullDescription: string;
  benefits: string[];
  process: ServiceProcess[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  details: ServiceDetails;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ProjectDetails {
  client: string;
  year: string;
  role: string;
  challenge: string;
  solution: string;
  results: string[];
  gallery: string[];
}

export interface Project {
  id: string; // Changed from number to string for URL slugs
  title: string;
  category: string;
  imageUrl: string;
  description?: string; // Short description for the card
  details: ProjectDetails; // Added details field
}

export enum ContactStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}