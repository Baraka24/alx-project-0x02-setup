import Header from "@/components/layout/Header";

// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <Header />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Application!</h1>
        <p className="text-lg text-gray-600">
          We&apos;re excited to have you here.
        </p>
      </div>
    </main>
  );
}