import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Contact() {
  return (
    <div className="text-black bg-white">
      <NextSeo
        title="404: Ataraxia"
        description="404 page for missing pages"
        canonical="https://ataraxia.envisionnew.org/404"
        openGraph={{
          url: "https://ataraxia.envisionnew.org/404",
          title: "Ataraxia",
          description: "404 page for missing pages",
          images: [
            {
              url: "../favicons/send.png",
              alt: "Ataraxia's Logo",
            },
          ],
          site_name: "Ataraxia – a non-profit organization.",
        }}
      />
      <Head>
        <title>Ataraxia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col justify-center mx-auto text-center mt-52 max-w-2x1">
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          404 – Unavailable
        </h1>
        <br />
        <a
          className="w-64 p-1 mx-auto font-bold text-center text-white border border-gray-500 rounded-lg sm:p-4"
          href="/"
        >
          Return Home
        </a>
      </div>
      <div className="mt-64"></div>
      <Footer />
    </div>
  );
}
