import React from 'react'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { BsFillBriefcaseFill, BsFillLayersFill, BsFillEaselFill } from 'react-icons/bs'


type NavbarProps = {
	activeEl: number
}
export default function Header(props: NavbarProps) {
	return (
		<div className="fixed flex z-[100] left-6 top-0 h-screen w-10 ">
			<div className="flex m-auto py-4 px-3 rounded-full flex-col space-y-6 shadow-md items-center justify-center bg-slate-100">
				{[{ icon: BsFillEaselFill, href: "#main" }, { icon: BsFillLayersFill, href: "#techstack" }, { icon: BsFillBriefcaseFill, href: "#projects" }].map((el, ind) =>

					<div key={ind} className={"duration-300 " + (ind == props.activeEl ? "scale-150" : "")}>

						{el.href ? <a href={el.href}>{React.createElement(el.icon, {})}</a> : React.createElement(el.icon, {})}
					</div>
				)}
			</div>
		</div>
	)
}
