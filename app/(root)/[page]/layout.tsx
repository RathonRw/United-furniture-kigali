export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <div className="mx-8 max-w-4xl py-20 sm:mx-auto">{children}</div>
    </div>
  );
}
