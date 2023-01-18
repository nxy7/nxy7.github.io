import Head from "next/head";
import Header from "../components/Header";
import Slide from "../components/Slide";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dawid Danieluk Portfolio Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header visible when scrolling down */}
      <Header></Header>

      <main className="relative w-screen h-screen snap-y snap-mandatory overflow-y-auto">


        <Slide style={{ backgroundImage: "url(slidebg.svg)", backgroundSize: "cover" }}>
          <div className="w-full grow grid grid-cols-2 items-center place-items-center">
            <div className="text-white">
              2
            </div>
            <div></div>
          </div>

          {/*
          <div className="flex space-x-40 mt-auto mb-20">
            <FrontButton href="#techstack">Tech Stack</FrontButton>
            <FrontButton href="#projects">My Projects</FrontButton>
            <FrontButton href="/blog">Blog</FrontButton>
          </div>
          */}
          <BlurredBG />
        </Slide>

        {/* Tech Stack */}
        <Slide id="techstack" style={{ backgroundImage: "url(slidebg2.svg)", backgroundSize: "cover" }}>
          Techstack
          <BlurredBG />
        </Slide>

        {/* Projects */}
        <Slide id="projects" style={{ backgroundImage: "url(slidebg.svg)", backgroundSize: "cover" }}>Projects</Slide>

        {/*<footer>Footer</footer> */}
      </main>
      <style jsx>{`
        /* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #222222; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #ffffff; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body, main, #__next{
          scroll-behavior: smooth;
          padding: 0;
          overflow-x: hidden;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}

type FrontButtonProps = {
  href: string
  children: any
}
export function FrontButton(props: FrontButtonProps) {
  if (props.href) return (
    <a href={props.href} className={
      `px-8 py-3 border-2 border-white rounded-sm duration-200`
      + ` hover:bg-[#FFFFFF19]`
      + ` font-bold text-white`
    }>{props.children}</a>
  )
  return (
    <button>{props.children}</button>
  )
}

export function BlurredBG() {
  return (
    <div className="absolute w-full h-20 -bottom-10 z-50 backdrop-blur-xl" />
  )
}
