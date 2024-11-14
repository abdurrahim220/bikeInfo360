import UpdateMarque from "@/components/features/Marque/UpdateMarque";
import AllBrands from "@/components/pages/home/allbrands/page";
import Banner from "@/components/pages/home/banner/page";


export default function Home() {
  return (
   <div className="mt-24">
    <Banner/>
    <UpdateMarque/>
    <AllBrands/>
   </div>
  );
}
