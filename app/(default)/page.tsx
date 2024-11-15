import UpdateMarque from "@/components/features/Marque/UpdateMarque";
import Banner from "@/components/pages/home/banner/page";
import BrowseAll from "@/components/pages/home/browseAll/page";

export default function Home() {
  return (
    <div className="mt-24">
      <Banner />
      <UpdateMarque />
      <BrowseAll />
    </div>
  );
}
