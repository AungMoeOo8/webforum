import Link from "next/link";
import Image from "next/image";
import { IoDiamondOutline, IoSearch } from "react-icons/io5";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function Navbar() {
  return (
    <header
      className={
        "container mx-auto px-4 py-6 flex justify-between sticky top-0 bg-white z-10"
      }
    >
      <Link href={"/"} passHref>
        <h1 style={{ fontSize: "2rem" }} className=" font-medium">
          WebForum
        </h1>
      </Link>

      <nav className="flex gap-x-5">
        <button>
          <IoSearch size={24} color={"#4B4D56"} />
        </button>
        <div className=" w-12 h-12 rounded-full overflow-hidden">
          <Image
            alt="profile pic"
            width={48}
            height={48}
            src={
              "https://cdna.artstation.com/p/assets/images/images/008/900/210/large/ina-wong-sindragosacrop1.jpg?1515997173"
            }
          />
        </div>
      </nav>
    </header>
  );
}

function FirstSection() {
  const router = useRouter();
  const logoutHandler = () => {
    document.cookie = "session=";
    router.replace("/sign-in");
  };
  return (
    <section className="relative basis-[280px] shrink-0">
      <div className="sticky top-[126px] border py-4 rounded-2xl shadow-sm">
        <Link href={"/profile"} className="sidebarBtn block">
          Profile
        </Link>
        {["Notifications", "Settings"].map((item, index) => (
          <div key={index} className="sidebarBtn">
            {item}
          </div>
        ))}
        <div className="sidebarBtn" onClick={logoutHandler}>
          Logout
        </div>
      </div>
    </section>
  );
}

function ThirdSection() {
  return (
    <section className="relative basis-[420px] shrink-0">
      <div className="sticky top-[126px] border py-4 rounded-2xl shadow-sm">
        <div className="h-full flex justify-center items-center">
          <p className="font-medium flex items-center gap-x-2">
            Nothing to show <IoDiamondOutline />
          </p>
        </div>
      </div>
    </section>
  );
}

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={`${poppins.className}`}>
        <Navbar />
        <main className=" mt-[30px]">
          <div className="relative container mx-auto px-4 flex gap-x-4">
            <FirstSection />
            {children}
            <ThirdSection />
          </div>
        </main>
      </div>
    </>
  );
};

export default AppLayout;
