import AppLayout from "@/appLayout";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { NextPageWithLayout } from "./_app";

const Card = () => {
  return (
    <div className=" p-6 flex flex-col gap-y-4 border rounded-2xl shadow-sm">
      <p className="font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illum,
        provident praesentium minima suscipit in inventore itaque dolores quidem
        nam ipsa sint illo deserunt temporibus culpa commodi ipsam aspernatur
        exercitationem!
      </p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = context.req.cookies["session"];

  if (!session) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: "",
    },
  };
};

const ProfilePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Aung Moe Oo - WebForum</title>
      </Head>
      <div className="flex-auto relative">
        <div className="flex flex-col items-center">
          <div className="relative w-44 h-52 rounded-lg overflow-hidden">
            <Image
              alt="profile photo"
              width={176}
              height={176}
              className=""
              src={
                "https://cdna.artstation.com/p/assets/images/images/008/900/210/large/ina-wong-sindragosacrop1.jpg?1515997173"
              }
            />
          </div>
          <p className="font-bold text-2xl my-4">Aung Moe Oo</p>
          <p className="text-[#A5A5A5]">TaukToMaYa at MyWork</p>
        </div>

        <div className="my-16">
          <p className="font-bold text-xl py-4 sticky top-[96px] bg-white">
            Owned Posts
          </p>
          <div className="flex flex-col gap-y-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <Card />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;

ProfilePage.getLayout = function getLayout(page: React.ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
