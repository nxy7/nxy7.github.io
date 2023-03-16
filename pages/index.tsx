import Head from "next/head";
import { Children, useState } from "react";
import Header from "../components/Header";
import Slide from "../components/Slide";
import styles from "../styles/Home.module.css";

export default function Home() {
	const [activeSlide, setActiveSlide] = useState(0)

	return (
		<>
			<Head>
				<title>Dawid Danieluk Portfolio Website</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* header visible when scrolling down */}
			<Header activeEl={activeSlide}></Header>

			<main className="relative bg-slate-900 text-white w-screen h-screen snap-y snap-mandatory overflow-y-auto">

				<HeadSlide isVisibleCallback={() => {
					setActiveSlide(0)
				}}></HeadSlide>

				{/* Tech Stack */}
				<TechStackSlide isVisibleCallback={() => {
					setActiveSlide(1)
				}}></TechStackSlide>

				{/* Projects */}

				<ProjectsSlide isVisibleCallback={() => {
					setActiveSlide(2)
				}}>
					<ChildrenCount>
						<div>test</div>
						<div>test</div>
						<div>test</div>
						<div>test</div>
					</ChildrenCount>

				</ProjectsSlide>


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

const ChildrenCount = ({ children }) => {
	const count = Children.count(children)
	return <div>
		{children.map(e => <div>ga{e}ga</div>)}
	</div>
}

const TechStackSlide = ({ isVisibleCallback }: { isVisibleCallback: () => void }) => {
	return <Slide id="techstack" style={{
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	}} isVisibleCallback={isVisibleCallback}>

		<div className="m-auto">
			technology showcases
		</div>

	</Slide>
}
const ProjectsSlide = ({ children, isVisibleCallback }: { children, isVisibleCallback: () => void }) => {
	const count = Children.count(children)
	return <Slide id="projects" style={{
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	}} isVisibleCallback={isVisibleCallback}>
		<div className="">Project showcase</div>
	</Slide>
}
const HeadSlide = ({ isVisibleCallback }: { isVisibleCallback: () => void }) => {
	return <Slide id="main" style={{
		padding: "0.5rem"
	}} isVisibleCallback={isVisibleCallback}>
		<div className="w-full h-full grow grid grid-cols-2 items-center place-items-center">
			<div className="text-white w-96">

				<div className="font-bold italic text-4xl hover:(text-red-300 font-bold)">whoami</div>
				<div className="mb-10">
					Developer passionate about new technologies. I value reliable software, so I tend to gravitate towards
					type safe languages/tech stacks, reproducible environments (nix) and test critical parts of my software.
				</div>
				<div className="flex space-x-5">
					{/* logos */}

					{["Typescript_logo_2020.svg", "golang_mascot.png", "rust_mascot.png", "docker_logo.webp", "nix_logo.svg"].map((e, ind) =>
						<img key={ind} className="object-scale-down h-16 " src={e} />
					)}
				</div>
			</div>
			<div className="w-full h-full overflow-hidden">
				<img className="ratio-square h-full w-full object-cover" src="https://www.sciencenews.org/wp-content/uploads/2022/11/Hubble-Pillars-of-Creation.jpg" />
			</div>
		</div>

		{/*
          <div className="flex space-x-40 mt-auto mb-20">
            <FrontButton href="#techstack">Tech Stack</FrontButton>
            <FrontButton href="#projects">My Projects</FrontButton>
            <FrontButton href="/blog">Blog</FrontButton>
          </div>
          */}
		{/* <BlurredBG />*/}
	</Slide>
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
