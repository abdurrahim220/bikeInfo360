import UpdateMarque from "@/components/features/Marque/UpdateMarque";
import Banner from "@/components/pages/home/banner/page";
import BrowseAll from "@/components/pages/home/browseAll/page";
import CompareBikes from "@/components/pages/home/compare-bikes/page";
import LatestBlogs from "@/components/pages/home/latest-blogs/page";

import PopularBikes from "@/components/pages/home/popular-bikes/page";

export default function Home() {
  return (
    <div className="mt-24">
      <Banner />
      <UpdateMarque />
      <BrowseAll />
      <PopularBikes />
      <LatestBlogs />
      <CompareBikes />
    </div>
  );
}
