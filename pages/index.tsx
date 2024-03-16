import Image from "next/image";
import Head from 'next/head';
import type {NextPage} from 'next';
import PostBox from "../components/PostBox";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Reddit Clone</title>
      </Head>

      {/* POST BOX */}
      <PostBox />
      <div>
        {/* Feed */}
      </div>
    </div>
  );
}