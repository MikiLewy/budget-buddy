import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import Loader from '@/components/atoms/loader';
import { prisma } from '@/utils/db';

const createNewUser = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect('/');
  }

  const isUserAlreadyCreated = await prisma.user.findUnique({
    where: {
      clerkId: user.id,
    },
  });

  if (!isUserAlreadyCreated) {
    await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
      },
    });
  }

  redirect('/dashboard');
};

const NewUserPage = async () => {
  await createNewUser();

  return (
    <main className="h-screen flex w-screen justify-center items-center">
      <Loader />
    </main>
  );
};

export default NewUserPage;
