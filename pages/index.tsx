import Head from "next/head";
import { Children, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { HeadSection } from "../components/HeaderSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { TechStackSection } from "../components/TechnologySection/TechStackSection";
import { ProjectsSection } from "../components/ProjectSection/ProjectSection";
import CertificationSection from "../components/CertificationSection";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <>
      <Head>
        <title>Dawid Danieluk Portfolio Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header visible when scrolling down */}
      {/* <Header activeEl={activeSlide}></Header> */}

      <main className="bg-slate-800 text-white">

        <HeadSection isVisibleCallback={() => {
          setActiveSlide(0)
        }}></HeadSection>

        <div className="flex flex-col gap-15 snap-proximity snap-y">
          <TechStackSection isVisibleCallback={() => {
            setActiveSlide(1)
          }}></TechStackSection>

          <ProjectsSection isVisibleCallback={() => {
            setActiveSlide(2)
          }}>

          </ProjectsSection>

          <CertificationSection></CertificationSection>


          <ContactSection></ContactSection>
        </div>
        <Footer></Footer>
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

