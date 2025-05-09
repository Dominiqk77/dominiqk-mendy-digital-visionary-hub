import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { useIsMobile } from '@/hooks/use-mobile';
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
  const navigation = [{
    name: 'Accueil',
    href: '/'
  }, {
    name: 'Services',
    href: '/#services',
    action: (e: React.MouseEvent) => scrollToSection('services', e),
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
      href: '/services/e-governance'
    }, {
      name: 'Consulting',
      href: '/services/consulting'
    }]
  }, {
    name: 'Expertise',
    href: '/#skills',
    action: (e: React.MouseEvent) => scrollToSection('skills', e)
  }, {
    name: 'Portfolio',
    href: '/portfolio'
  }, {
    name: 'Blog',
    href: '/blog'
  }, {
    name: 'Contact',
    href: '/contact'
  }];
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
                          {item.action ? <a href={item.href} onClick={item.action} className={cn(navigationMenuTriggerStyle(), "animate-gradient-slow bg-transparent hover:bg-white/10 hover:text-white px-4 py-2")}>
                              {item.name}
                            </a> : <Link to={item.href} className={cn(navigationMenuTriggerStyle(), "animate-gradient-slow bg-transparent hover:bg-white/10 hover:text-white px-4 py-2")}>
                              {item.name}
                            </Link>}
                        </NavigationMenuLink>}
                    </NavigationMenuItem>)}
                  <NavigationMenuItem>
                    <Button className="animate-gradient-slow bg-transparent border border-white hover:bg-white/10 hover:text-white transition-colors ml-2">
                      Démarrer un projet
                    </Button>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>}
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-foreground hover:bg-gray-100">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isOpen && <div className="md:hidden mt-4 animate-fade-in" data-mobile-menu>
            <div className="flex flex-col space-y-2 pt-2 pb-4">
              {navigation.map(item => <div key={item.name} className="w-full">
                  {item.dropdown ? <>
                      <button onClick={() => toggleDropdown(item.name)} className="w-full flex justify-between items-center px-3 py-2 text-base font-medium rounded-md hover:bg-gray-100 animate-gradient-slow">
                        <span>{item.name}</span>
                        <ChevronDown className={cn("h-4 w-4 transition-transform", activeDropdown === item.name ? "rotate-180" : "")} />
                      </button>
                      
                      {activeDropdown === item.name && <div className="pl-4 space-y-1 animate-fade-in bg-gray-50/90 backdrop-blur-sm rounded-md mt-1 mb-2">
                          {item.children?.map(child => <Link key={child.name} to={child.href} className="block px-3 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-primary rounded-md animate-gradient-slow" onClick={() => setIsOpen(false)}>
                              {child.name}
                            </Link>)}
                        </div>}
                    </> : item.action ? <a href={item.href} onClick={e => {
              if (item.href.startsWith('/#')) {
                e.preventDefault();
                item.action && item.action(e);
              } else {
                setIsOpen(false);
              }
            }} className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-100 animate-gradient-slow">
                        {item.name}
                      </a> : <Link to={item.href} className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-100 animate-gradient-slow" onClick={() => setIsOpen(false)}>
                        {item.name}
                      </Link>}
                </div>)}
              <div className="pt-2">
                <Button className="w-full animate-gradient-slow bg-transparent text-foreground border border-gray-300 hover:bg-gray-100 transition-colors">
                  Démarrer un projet
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;