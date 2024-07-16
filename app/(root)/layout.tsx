import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstName: 'Jaden', lastName:'Isaac'};
  return (
    <main className="flex h-screeen w-full font-inter">
        <Sidebar user = {loggedIn}/>
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src={"/icons/logo.svg"} width={30} height={30} alt="Logo" />
            <div>
              <MobileNav user={loggedIn} />
            </div>
          </div>
          {children}
        </div>
        
    </main>
  );
}
