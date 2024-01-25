import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <main className=" min-h-screen min-w-screen flex justify-center items-center bg-black/95 p-4">
      {children}
    </main>
  );
};

export default AuthLayout;
