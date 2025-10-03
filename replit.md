# LeadConnect B2B Sales Website

## Overview

LeadConnect is a B2B sales and lead generation company website built as a single-page application. The project showcases the company's services, team, client testimonials, and results through a modern, professional marketing website. Built with React and TypeScript on the frontend, with an Express backend setup ready for future API integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management

**UI Component System**
- Shadcn/UI component library with Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Custom color scheme centered around blue/teal (`leadconnect-dark`, `leadconnect-teal`, `leadconnect-accent`)
- Responsive design with mobile-first approach

**Component Structure**
- Page-based routing with main `Home` page composing all sections
- Modular component architecture with dedicated components for each website section (Hero, Services, Team, Testimonials, etc.)
- Reusable UI components from Shadcn library (Button, Card, Dialog, etc.)
- Smooth scroll navigation between sections using anchor links

### Backend Architecture

**Server Setup**
- Express.js server with TypeScript
- Middleware for JSON parsing, URL encoding, and request logging
- Development and production build scripts
- Vite integration for development with HMR support
- Static file serving in production

**Data Layer**
- Storage interface pattern with in-memory implementation (`MemStorage`)
- Designed for future database integration (Drizzle ORM configured)
- User schema defined with Drizzle for PostgreSQL
- CRUD operations abstracted through `IStorage` interface

**API Design**
- RESTful API structure with `/api` prefix ready for implementation
- Route registration system in `server/routes.ts`
- HTTP server creation with Express app

### State Management

**Client State**
- React Query for async data fetching and caching
- Local component state with React hooks
- Toast notifications for user feedback
- Form handling with React Hook Form and Zod validation

### Design System

**Typography & Fonts**
- Inter as primary sans-serif font
- Custom CSS variables for consistent spacing and colors
- Design tokens for brand colors, shadows, and borders

**Color Palette**
- Primary: Blue/teal gradient (`hsl(195 85% 35%)`)
- Accent: Turquoise (`hsl(174 62% 55%)`)
- Dark backgrounds: Navy (`hsl(200 65% 12%)`)
- Neutral grays for text and borders

**Animations**
- CSS-based fade-in and slide-up animations
- Smooth transitions on interactive elements
- Hover effects on cards and buttons

## External Dependencies

### UI & Styling
- **Radix UI**: Headless UI component primitives (@radix-ui/react-*)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS
- **class-variance-authority**: Variant-based component styling
- **Lucide React**: Icon library

### Data & Forms
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state and validation
- **Zod**: Schema validation
- **Drizzle ORM**: TypeScript ORM for SQL databases
- **Drizzle Zod**: Schema to Zod validator bridge

### Database
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver (configured but not actively used)
- **Drizzle Kit**: Database migration tool
- PostgreSQL dialect configured in `drizzle.config.ts`

### Development Tools
- **Vite**: Build tool and dev server
- **TypeScript**: Type safety across frontend and backend
- **ESBuild**: Backend bundling for production
- **TSX**: TypeScript execution for development

### Routing & Navigation
- **Wouter**: Lightweight client-side router
- **React Router** patterns for SPA navigation

### Additional Libraries
- **date-fns**: Date manipulation and formatting
- **cmdk**: Command menu component
- **embla-carousel-react**: Carousel/slider functionality
- **nanoid**: Unique ID generation

### Notes
- Database is configured for PostgreSQL via Neon but currently using in-memory storage
- Session management prepared with `connect-pg-simple` but not implemented
- Replit-specific plugins for development environment integration