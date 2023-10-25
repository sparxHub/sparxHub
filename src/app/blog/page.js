import AppBar from "@components/components/molecules/AppBar";
import Footer from "@components/components/molecules/Footer";
import Sidebar from "@components/components/Sidebar";
import RightSidebar from "@components/components/RightSidebar";
import RootLayout from "../layout";

function BlogsPage() {
  // <RootLayout title="Blog Posts" description="List of all blog posts">
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppBar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8"></main>
        <RightSidebar />
      </div>
      <Footer />
    </div>
  ); // </RootLayout>
}

export default BlogsPage;
