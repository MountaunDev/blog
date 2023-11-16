
import SEO from "@/common/components/SEO";
import ThemePicker from "@/common/components/ThemePicker";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section id="blog">
      <SEO title="Personal Blog" />
      <ThemePicker />
      {children}
    </section>
  );
}
