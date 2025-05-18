import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useIsMobile } from '@/hooks/use-mobile';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const location = useLocation();

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const scrollToSection = (sectionId: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    setIsOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const navigation = [
    {
      name: 'Accueil',
      href: '/'
    }, {
      name: 'Services',
      href: '/services',
      dropdown: true,
      children: [{
        name: 'Développement Web',
        href: '/services/web-development'
      }, {
        name: 'Marketing Digital',
        href: '/services/digital-marketing'
      }, {
        name: 'Formation IA',
        href: '/services/ai-training'
      }, {
        name: 'E-Gouvernance',
        href: '/services/egouvernance'
      }, {
        name: 'Consulting',
        href: '/services/consulting'
      }]
    }, {
      name: 'Expertise',
      href: '/expertise'
    }, {
      name: 'Portfolio',
      href: '/portfolio'
    }, {
      name: 'Blog',
      href: '/blog'
    }, {
      name: 'Contact',
      href: '/contact'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('[data-mobile-menu]')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return <nav className={cn("fixed w-full top-0 z-50 transition-all duration-300", scrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-0.5" : "bg-transparent py-1")}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <div className="relative group w-14 h-14 md:w-16 md:h-16 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/60 to-portfolio-purple/60 rounded-full opacity-60 group-hover:opacity-80 blur-md animate-pulse-slow"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-cyan bg-[length:200%_auto] animate-gradient-slow bg-clip-text text-transparent">QK</span>
                </div>
              </div>
              <span className="text-lg md:text-xl font-bold tracking-tight bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-cyan bg-[length:200%_auto] animate-gradient-slow bg-clip-text text-transparent">
                Dominiqk Mendy
              </span>
            </Link>
          </div>
          
          {!isMobile && <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList className="space-x-2">
                  {navigation.map(item => <NavigationMenuItem key={item.name}>
                      {item.dropdown ? <>
                          <NavigationMenuTrigger className="animate-gradient-slow bg-transparent hover:bg-white/10 hover:text-white">
                            {item.name}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <div className="w-[230px] p-4 md:w-[350px] lg:w-[400px] bg-white/95 backdrop-blur-sm">
                              <div className="grid gap-3">
                                {item.children?.map(child => <NavigationMenuLink key={child.name} asChild>
                                    <Link to={child.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground animate-gradient-slow">
                                      <div className="text-sm font-medium leading-none">
                                        {child.name}
                                      </div>
                                    </Link>
                                  </NavigationMenuLink>)}
                              </div>
                            </div>
                          </NavigationMenuContent>
                        </> : <NavigationMenuLink asChild>
                          <Link to={item.href} className={cn(navigationMenuTriggerStyle(), "animate-gradient-slow bg-transparent hover:bg-white/10 hover:text-white px-4 py-2")}>
                              {item.name}
                          </Link>
                        </NavigationMenuLink>}
                    </NavigationMenuItem>)}
                  <NavigationMenuItem>
                    <Button className="animate-gradient-slow bg-transparent border border-white hover:bg-white/10 hover:text-white transition-colors ml-2" asChild>
                      <Link to="/start-project">
                        Démarrer un projet
                      </Link>
                    </Button>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>}
          
          {isMobile && (
            <Drawer>
              <DrawerTrigger asChild>
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-lg text-foreground fixed top-3 right-3 z-50 bg-portfolio-darkblue/70 backdrop-blur-md border border-portfolio-purple/30 shadow-md hover:bg-portfolio-darkblue/80 transition-all"
                  aria-label="Menu"
                >
                  <Menu className="h-5 w-5 text-white" />
                </button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[85vh] bg-gradient-to-b from-portfolio-darkblue/95 to-black/90 backdrop-blur-lg border-t border-portfolio-purple/20">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden">
                        <img src="/lovable-uploads/60c23356-ad17-4782-854f-87572465f4f9.png" alt="QK Logo" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-lg font-bold text-white">Dominiqk Mendy</span>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-full bg-portfolio-purple/20 text-white">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="flex flex-col space-y-1 max-h-[60vh] overflow-y-auto pr-2">
                    {navigation.map(item => (
                      <div key={item.name} className="w-full">
                        {item.dropdown ? (
                          <>
                            <button 
                              onClick={() => toggleDropdown(item.name)} 
                              className="w-full flex justify-between items-center px-4 py-3 text-base font-medium rounded-lg bg-white/5 backdrop-blur-sm text-white border-l-2 border-portfolio-purple hover:bg-white/10 transition-all"
                            >
                              <span className="text-base font-medium">{item.name}</span>
                              <ChevronDown className={cn("h-5 w-5 transition-transform", activeDropdown === item.name ? "rotate-180" : "")} />
                            </button>
                            
                            {activeDropdown === item.name && (
                              <div className="ml-4 space-y-1 animate-fade-in mt-1 mb-2">
                                {item.children?.map(child => (
                                  <Link 
                                    key={child.name} 
                                    to={child.href} 
                                    className="flex items-center space-x-2 px-4 py-2.5 text-sm text-white/90 hover:text-white rounded-md hover:bg-white/5 transition-all" 
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <div className="w-1.5 h-1.5 rounded-full bg-portfolio-blue"></div>
                                    <span>{child.name}</span>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link 
                            to={item.href} 
                            className="block px-4 py-3 text-base font-medium rounded-lg bg-white/5 backdrop-blur-sm text-white border-l-2 border-transparent hover:border-portfolio-purple hover:bg-white/10 transition-all" 
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      className="w-full py-5 bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white border-none shadow-lg hover:shadow-xl transition-all" 
                      asChild
                    >
                      <Link to="/start-project" onClick={() => setIsOpen(false)}>
                        Démarrer un projet
                      </Link>
                    </Button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </div>
    </nav>;
};

export default Navbar;
