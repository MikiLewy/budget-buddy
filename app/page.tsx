import { auth } from '@clerk/nextjs';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default async function HomePage() {
  const { userId } = auth();

  const getStartedHref = userId ? '/dashboard/budget' : '/new-user';

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4  ">
      <div className="flex flex-col gap-4 max-w-[400px] md:max-w-[600px]">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-wider ">
          Budget<span className="text-orange-500">Buddy</span>
        </h1>
        <p className="text-base md:text-xl">
          Seamlessly manage your spending, savings, and investments all in one place. Take command
          of your finances like never before. Begin your journey today!
        </p>
        <Button
          variant="secondary"
          className="mr-auto text-white bg-orange-500 hover:bg-orange-600"
          asChild>
          <Link href={getStartedHref}>Get started</Link>
        </Button>
      </div>
    </main>
  );
}
