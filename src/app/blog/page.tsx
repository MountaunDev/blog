import Header from "@/common/components/Header/Header";
import Breadcrumb from "@/common/components/Breadcumb/Breadcrumb";
import PostList from "@/app/blog/components/PostList";
import { fetchBlogPosts } from "../services/blogService";

export default async function Home() {
  const data = await fetchBlogPosts();

  return (
    <main className="main-wrapper">
      <Header />
      <Breadcrumb title="Blogsssss" page="Blog" />
      <div className="section-padding-equal">
        <div className="container">
          <div className="row row-40">
            <div className="col-lg-8">
              <PostList blogData={data}/>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
