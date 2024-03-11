import Image from "next/image";
import Head from 'next/head';
import type {NextPage} from 'next';
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Reddit Clone</title>
      </Head>
      <Header />
    </div>
  );
}