import Head from "next/head";
import { Children, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import styles from '../styles/Home.module.css'

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

			<main className="bg-[#114B5F] text-white">

				<HeadSection isVisibleCallback={() => {
					setActiveSlide(0)
				}}></HeadSection>

				<div className="flex flex-col gap-10 snap-proximity snap-y">
					<TechStackSection isVisibleCallback={() => {
						setActiveSlide(1)
					}}></TechStackSection>

					<ProjectsSection isVisibleCallback={() => {
						setActiveSlide(2)
					}}>
						<div>test1</div>
						<div>test2</div>
						<div>test3</div>
						<div>test4</div>

					</ProjectsSection>
					<ContactSection></ContactSection>
				</div>
				<Footer></Footer>



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


const TechStackSection = ({ children, isVisibleCallback }: { children?, isVisibleCallback: () => void }) => {
	const count = Children.count(children)
	return <>
		<section id="techstack" className="w-full px-32">
			<h2 className="text-5xl mb-10">Technologies I Use</h2>
			<div className="flex space-x-5">
				{/* logos */}

				{["Typescript_logo_2020.svg", "Go-Logo_Blue.svg", "rust_logo.svg", "docker-svgrepo-com.svg", "nix_logo.svg"].map((e, ind) =>
					<img key={ind} className="object-scale-down h-16 stroke-red" src={e} />
				)}
			</div>

		</section>
	</>
}

type Project = {
	backgroundImg?: string
	title?: string
	liveLink?: string
	sourceCode?: string
	technologies: string[]
}
const ProjectsSection = ({ children, isVisibleCallback }: { children?, isVisibleCallback: () => void }) => {
	const projects: Project[] = [
		{ title: "Mediujemy", technologies: [], backgroundImg: "mediujemy.png" },
		{ title: "StockBuddy", technologies: [], backgroundImg: "mediujemy.png" },
		{ title: "Streampai", technologies: [], backgroundImg: "mediujemy.png" },
	]
	const [selectedProject, setSelectedProject] = useState(0)

	return <>
		<section style={{
			// clipPath: `url(frame.svg#mask)`,
			// backgroundColor: "hsl(195, 76%, 8%)"
		}} className="h-screen border-2 border-black relative snap-center overflow-hidden">
			<div className="grid grid-cols-5 h-full">
				<div className="col-span-3">
					<h2 className="text-5xl mb-10">Projects</h2>
					project selection and details
				</div>
				<div style={{
					backgroundImage: `url(${projects[selectedProject].backgroundImg})`,
					backgroundPosition: `center`,
					backgroundSize: `fit`,
					clipPath: `ellipse(100% 150% at right)`
				}} className="col-span-2 h-full w-full">

				</div>

			</div>
		</section>
	</>
}
const ContactSection = ({ children }: { children?}) => {
	return <>
		<section>
			<h2 className="text-5xl">Contact</h2>
			<div>
				email?
			</div>

		</section>
	</>
}
const Footer = ({ children }: { children?}) => {
	return <>
		<section>
			Footer
		</section>
	</>
}

const Navigation = () => {
	return <>
		<div className="md:absolute m-6 md:(m-15 place-self-start) place-self-center text-lg">
			<ul className="flex gap-8 font-semibold">
				<li><a href="#about">About Me</a></li>
				<li><a href="#techstack">Tech Stack</a></li>
				<li><a href="#projects">My Projects</a></li>
				<li><a href="#contact">Contact</a></li>
				<li><a href="/blog">Blog</a></li>
			</ul>
		</div>
	</>
}

const HeadSection = ({ isVisibleCallback }: { isVisibleCallback: () => void }) => {
	return <section id="main" className="md:min-h-screen grid place-items-center">
		<Navigation></Navigation>
		<div className="w-full h-full overflow-hidden grow grid md:(grid-cols-2) items-center place-items-center">
			<div className="w-120 text-white relative text-lg order-2 md:order-0">
				<h1 className="font-bold italic text-5xl">whoami</h1>
				<div className="mt-3 space-y-3">
					<div>
						Developer passionate about new technologies. I value reliable software, so I tend to gravitate towards
						type safe languages/tech stacks, reproducible environments (nix) and test critical parts of my software.
					</div>
					<div className="flex gap-4">

						<a
							href="#techstack"
							onClick={() => {
								console.log("z")
							}}
							className={`${styles.neonButton} flex items-center font-bold bg-[#FFFFFF22] duration-200 text-white rounded-sm border-0 text-xl py-4 px-7 border-white hover:(bg-[#FFFFFF55]) cursor-pointer`}>
							Read More
						</a>
						<a
							href="https://github.com/nxy7"
							target="_blank"
							onClick={() => {
								console.log("z")
							}}
							className={`${styles.neonButton} flex items-center font-bold bg-[#FFFFFF22] duration-200 text-white rounded-sm border-0 text-xl py-4 px-7 border-white hover:(bg-[#FFFFFF55]) cursor-pointer`}>
							My GitHub <img src="github_logo.svg" alt="github icon" className="ml-3 h-8 w-8 " />
						</a>
					</div>
				</div>
			</div>
			<div className="grid place-items-center overflow-hidden pr-5">
				<img className="w-3/4 h-3/4 md:(h-full w-full) object-fit" src="undraw_feeling_proud.svg" />
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
	</section>
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
