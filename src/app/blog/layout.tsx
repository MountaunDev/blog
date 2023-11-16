import ThemePicker from "@/common/components/ThemePicker";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section id="blog">
      <ThemePicker />
      {children}
    </section>
  );
}
