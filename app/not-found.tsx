import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-[100dvh] max-w-3xl flex-col items-start justify-center px-4 sm:px-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">404</p>
      <h1 className="mt-6 font-serif text-6xl tracking-tight">This page isn’t in the model.</h1>
      <div className="mt-10"><Button href="/">Back to home</Button></div>
    </main>
  );
}
