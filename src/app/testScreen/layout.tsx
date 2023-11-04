export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>This is a layout only for testScreen</div>
      {children}
    </section>
  );
}
