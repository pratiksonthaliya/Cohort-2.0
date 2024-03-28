
export default function SigninRoute({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="p-1 border-b">
        20% off for thr next 3 days
      </div>
      {children}
    </div>
  );
}
