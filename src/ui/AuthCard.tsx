export default function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[400px] space-y-10 rounded-lg bg-secondary-700 p-6">
      {children}
    </div>
  );
}

export function AuthCardTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-3xl">{children}</h1>;
}

export function AuthCardBody({ children }: { children: React.ReactNode }) {
  return <div className="space-y-6">{children}</div>;
}

export function AuthCardFooter({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-6">{children}</div>;
}
