'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const str = 'hi my name is joe';

  const onClick = async () => {
    await fetch('/api');
    router.push(`/about?phrase=${str.split(' ').join('-')}`);
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() =>
        router.prefetch(`/about?phrase=${str.split(' ').join('-')}`)
      }
    >
      Test me out!
    </button>
  );
}
