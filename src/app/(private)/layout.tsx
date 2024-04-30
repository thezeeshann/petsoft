import Header from "@/components/header";
import Footer from "@/components/footer";
import BackgroundPattern from "@/components/background-pattern";
import PetContextProvider from "@/contexts/pet-context-provider";
import { Pet } from "@/lib/types";
import SearchContextProvider from "@/contexts/search-context-provider";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const response = await fetch(
    "https://bytegrad.com/course-assets/react-nextjs/projects/petsoft/api/pets"
  );
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data: Pet[] = await response.json();

  return (
    <>
      <BackgroundPattern />
      <div className="flex flex-col w-[1050px] mx-auto px-4 min-h-screen">
        <Header />
        <SearchContextProvider>
          <PetContextProvider data={data}>{children}</PetContextProvider>
        </SearchContextProvider>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
