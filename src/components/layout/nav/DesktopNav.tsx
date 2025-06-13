
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
              {item.dropdown ? (
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
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-accent focus:text-accent-foreground group"
                            >
                              <div className="text-sm font-medium leading-none text-gray-900 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform">
                                {child.name}
                                <span className="block h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 mt-1"></span>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </>
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
