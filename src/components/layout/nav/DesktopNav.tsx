
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { NavigationItem } from './types';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

type DesktopNavProps = {
  navigation: NavigationItem[];
};

const DesktopNav = ({ navigation }: DesktopNavProps) => {
  return (
    <div className="hidden md:block">
      <NavigationMenu>
        <NavigationMenuList className="space-x-2">
          {navigation.map(item => (
            <NavigationMenuItem key={item.name}>
              {item.dropdown && item.name !== 'Admin' ? (
                <>
                  <NavigationMenuTrigger className="animate-gradient-slow bg-transparent hover:bg-white/10 hover:text-white transition-all duration-300">
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[230px] p-4 md:w-[350px] lg:w-[400px]">
                      <div className="grid gap-3">
                        {item.children?.map(child => (
                          <NavigationMenuLink key={child.name} asChild>
                            <Link 
                              to={child.href} 
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-accent focus:text-accent-foreground group"
                            >
                              <div className="text-sm font-medium leading-none text-white group-hover:text-blue-300 group-hover:translate-x-1 transition-transform">
                                {child.name}
                                <span className="block h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 mt-1"></span>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </>
              ) : item.name === 'Admin' && item.children ? (
                // Afficher les items Admin comme boutons individuels
                item.children.map(child => (
                  <NavigationMenuItem key={child.name}>
                    <NavigationMenuLink asChild>
                      <Link 
                        to={child.href} 
                        className={cn(navigationMenuTriggerStyle(), "animate-gradient-slow bg-transparent hover:bg-white/10 hover:text-white px-4 py-2")}
                      >
                        {child.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))
              ) : (
                <NavigationMenuLink asChild>
                  <Link 
                    to={item.href} 
                    className={cn(navigationMenuTriggerStyle(), "animate-gradient-slow bg-transparent hover:bg-white/10 hover:text-white px-4 py-2")}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <Button className="animate-gradient-slow bg-transparent border border-white hover:bg-white/10 hover:text-white transition-colors ml-2" asChild>
              <Link to="/start-project">
                Démarrer un projet
              </Link>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default DesktopNav;
