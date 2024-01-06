import Footer from "@/common/components/Footer/Footer";
import Header from "@/common/components/Header/Header";
import SEO from "@/common/components/SEO";
import ThemePicker from "@/common/components/ThemePicker";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section id="blog">
      <SEO />
      <ThemePicker />
      <main className="main-wraper">
        <Header />
        {children}
        <Footer />
      </main>
    </section>
  );
}
