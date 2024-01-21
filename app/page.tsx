import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-black/95 ">
      <div className="flex flex-col gap-4 max-w-[400px] md:max-w-[600px]">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-wider text-white/90">
          Budget<span className="text-orange-500">Buddy</span>
        </h1>
        <p className="text-base md:text-xl  text-white/85">
          Seamlessly manage your spending, savings, and investments all in one place. Take command
          of your finances like never before—begin your journey today!
        </p>
        <Button variant="secondary" className="mr-auto" asChild>
          <Link href={'/sign-in'}>Get started</Link>
        </Button>
      </div>
    </main>
  );
}
