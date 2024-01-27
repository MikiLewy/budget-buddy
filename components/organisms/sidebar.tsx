import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { buttonVariants } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Route } from '@/types/route';

import { Separator } from '../ui/separator';

interface Props {
  isCollapsed: boolean;
  routes: Route[];
}

const Sidebar = ({ routes, isCollapsed }: Props) => {
  const pathname = usePathname();

  return (
    <div data-collapsed={isCollapsed} className="group flex flex-col gap-4">
      <div>
        <div
          className={`flex h-[56px] items-center px-4 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2 `}>
          <h2 className="text-xl font-bold">
            {isCollapsed ? (
              <>
                B<span className="text-orange-500">B</span>
              </>
            ) : (
              <>
                Budget<span className="text-orange-500">Buddy</span>
              </>
            )}
          </h2>
        </div>
        <Separator />
      </div>
      <nav className="grid gap-1 px-4 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        <TooltipProvider key={'nav'}>
          {routes.map(route => {
            const isActiveRoute = route.href === pathname;

            return isCollapsed ? (
              <Tooltip key={route.href} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={route.href}
                    className={cn(
                      buttonVariants({
                        variant: isActiveRoute ? 'default' : 'ghost',
                        size: 'icon',
                      }),
                      'h-9 w-9',
                      isActiveRoute &&
                        'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white',
                    )}>
                    <route.icon className="h-4 w-4" />
                    <span className="sr-only">{route.title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="flex items-center gap-4">
                  {route.title}
                </TooltipContent>
              </Tooltip>
            ) : (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  buttonVariants({
                    variant: isActiveRoute ? 'default' : 'ghost',
                    size: 'sm',
                  }),
                  isActiveRoute &&
                    'dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white',
                  'justify-start',
                )}>
                <route.icon className="mr-2 h-4 w-4" />
                {route.title}
              </Link>
            );
          })}
        </TooltipProvider>
      </nav>
    </div>
  );
};

export default Sidebar;
