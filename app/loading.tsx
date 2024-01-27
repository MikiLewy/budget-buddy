import Loader from '@/components/atoms/loader';

export default function Loading() {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <Loader />
    </main>
  );
}
