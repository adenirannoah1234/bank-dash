import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/bank.png"
        alt="Bank Dash Logo"
        width={250}
        height={250}
        style={{ objectFit: 'contain' }}
      />
      <p className="text-6xl font-bold">Welcome to Bank Dash</p>
    </div>
  );
}
