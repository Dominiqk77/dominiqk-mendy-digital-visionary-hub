import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(246, 85%, 75%)', // Purple
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(199, 89%, 48%)', // Ocean Blue
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(317, 83%, 60%)', // Magenta Pink
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        portfolio: {
          purple: '#9b87f5',
          blue: '#0EA5E9',
          pink: '#D946EF',
          darkblue: '#1A1F2C',
          lightgray: '#F6F6F7',
          indigo: '#6366F1',
          neon: '#22D3EE',
          cosmic: '#845ADF',
          space: '#0F172A',
          nebula: '#C084FC',
          starblue: '#38BDF8',
          deepspace: '#030712',
          galactic: '#7E22CE',
          cyan: '#06B6D4'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        'cosmic': '0 0 25px rgba(155, 135, 245, 0.4)',
        'cosmic-lg': '0 0 40px rgba(155, 135, 245, 0.6)',
        'neon': '0 0 15px rgba(14, 165, 233, 0.6)',
        'space': '0 4px 20px rgba(0, 0, 0, 0.4), 0 8px 16px rgba(0, 0, 0, 0.3)',
        'space-glow': '0 0 15px rgba(155, 135, 245, 0.3), 0 0 30px rgba(155, 135, 245, 0.2)',
        'glow-purple': '0 0 15px rgba(139, 92, 246, 0.5)',
        'glow-blue': '0 0 20px rgba(14, 165, 233, 0.5)',
        'glow-pink': '0 0 15px rgba(217, 70, 239, 0.5)',
        'glow-green': '0 0 15px rgba(34, 197, 94, 0.5)',
        'glow-amber': '0 0 15px rgba(245, 158, 11, 0.5)',
        'glow-cyan': '0 0 15px rgba(6, 182, 212, 0.5)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-20px)'
          }
        },
        'float-subtle': {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        'spin-slow': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        'rotate-slow': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        'gradient-text': {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          }
        },
        'gradient-pulse': {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          }
        },
        'pulse-slow': {
          '0%, 100%': {
            opacity: '0.5'
          },
          '50%': {
            opacity: '0.8'
          }
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.5',
            transform: 'scale(0.95)'
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05)'
          }
        },
        'twinkle': {
          '0%, 100%': {
            opacity: '0.2',
            'box-shadow': '0 0 2px rgba(255, 255, 255, 0.1)'
          },
          '50%': {
            opacity: '1',
            'box-shadow': '0 0 10px rgba(255, 255, 255, 0.8)'
          }
        },
        'data-flow': {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0'
          },
          '10%': {
            opacity: '1'
          },
          '90%': {
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(1000%)',
            opacity: '0'
          }
        },
        'shimmer': {
          '0%': {
            backgroundPosition: '-200% 0'
          },
          '100%': {
            backgroundPosition: '200% 0'
          }
        },
        'caret-blink': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0'
          }
        },
        'cosmic-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 10px rgba(155, 135, 245, 0.4)',
            borderColor: 'rgba(155, 135, 245, 0.4)'
          },
          '50%': {
            boxShadow: '0 0 20px rgba(155, 135, 245, 0.7)',
            borderColor: 'rgba(155, 135, 245, 0.7)'
          }
        },
        'space-glow': {
          '0%, 100%': {
            boxShadow: '0 0 15px rgba(155, 135, 245, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(155, 135, 245, 0.6)',
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-subtle': 'float-subtle 4s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'gradient-text': 'gradient-text 8s ease infinite',
        'gradient-pulse': 'gradient-pulse 8s ease infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'data-flow': 'data-flow 5s linear infinite',
        'shimmer': 'shimmer 2s infinite linear',
        'caret-blink': 'caret-blink 1s ease-in-out infinite',
        'cosmic-pulse': 'cosmic-pulse 3s ease-in-out infinite',
        'space-glow': 'space-glow 4s ease-in-out infinite'
      },
      backgroundImage: {
        'hero-pattern': "url('/lovable-uploads/c0a0e8cc-455f-443c-849f-9c1c4aa6981c.png')",
        'neuron-pattern': "radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)",
        'grid-pattern': "linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)",
        'cosmic-gradient': "linear-gradient(to bottom right, #0f172a, #1e293b, #334155)",
        'tech-glow': "radial-gradient(circle at center, rgba(99, 102, 241, 0.2) 0%, transparent 70%)",
        'space-grid': "linear-gradient(to right, rgba(99, 102, 241, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.05) 1px, transparent 1px)",
        'space-dot': "radial-gradient(circle, rgba(155, 135, 245, 0.15) 1px, transparent 1px)",
        'nebula-purple': "radial-gradient(circle, rgba(155, 135, 245, 0.3) 0%, transparent 70%)",
        'nebula-blue': "radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%)",
        'cosmic-rays': "linear-gradient(45deg, rgba(155, 135, 245, 0.1) 0%, transparent 40%)",
        'deep-space': "linear-gradient(to bottom, #030712, #0F172A, #1E293B)"
      }
    }
  },
  plugins: [animatePlugin],
} satisfies Config;
