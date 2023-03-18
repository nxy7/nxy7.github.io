import React from 'react'
import { AiOutlineAntDesign } from 'react-icons/ai'
import { BsFillBriefcaseFill, BsFillLayersFill, BsFillEaselFill } from 'react-icons/bs'


type NavbarProps = {
	activeEl: number
}
export default function Header(props: NavbarProps) {
	return (
		<div className="fixed grid grid-cols-2 w-screen z-200">
			<div className="flex top-4 justify-self-start mt-2 z-2000 gap-5 m-auto py-2 px-4 rounded-full shadow-md items-center justify-center bg-slate-100">
				{[{ icon: BsFillEaselFill, href: "#main" }, { icon: BsFillLayersFill, href: "#techstack" }, { icon: BsFillBriefcaseFill, href: "#projects" }].map((el, ind) =>

					<div key={ind} className={"duration-300 " + (ind == props.activeEl ? "scale-150" : "")}>
						{el.href ? <a href={el.href}>{React.createElement(el.icon, {})}</a> : React.createElement(el.icon, {})}
					</div>
				)}
			</div>
		</div>
	)
}
