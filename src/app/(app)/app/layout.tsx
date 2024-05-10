import Header from "@/components/header";
import Footer from "@/components/footer";
import BackgroundPattern from "@/components/background-pattern";
import PetContextProvider from "@/contexts/pet-context-provider";
import SearchContextProvider from "@/contexts/search-context-provider";
import { Toaster } from "@/components/ui/sonner";
import { checkAuth, getPetsByUserId } from "@/lib/server-utils";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await checkAuth();
  const pets = await getPetsByUserId(session.user.id);

  return (
    <>
      <BackgroundPattern />
      <div className="flex flex-col w-[1050px] mx-auto px-4 min-h-screen">
        <Header />
        <SearchContextProvider>
          <PetContextProvider data={pets}>{children}</PetContextProvider>
        </SearchContextProvider>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </>
  );
};

export default Layout;
