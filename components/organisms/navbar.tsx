import { UserButton } from '@clerk/nextjs';

import { ThemeSwitcher } from '../atoms/theme-switcher';
import { Separator } from '../ui/separator';

const Navbar = () => {
  return (
    <>
      <nav className="flex h-[56px] items-center gap-6 justify-end px-4">
        <ThemeSwitcher />
        <UserButton />
      </nav>
      <Separator />
    </>
  );
};

export default Navbar;
