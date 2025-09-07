import Hero from '@/app/components/hero';
// import { Features, Services, CTA } from "@/components/Sections";
import ContactForm from '@/app/components/complaintsForm';
import Container from '@/app/components/container';
import { PrismaClient } from '@prisma/client';

export default function Page() {
  const pass = 'CCTV@Chennai';

  return (
    <>
      <main className="flex flex-col min-h-screen">
        <Hero />
        {/* <Services />
      <Features />
      <CTA /> */}
      </main>
    </>
  );
}
