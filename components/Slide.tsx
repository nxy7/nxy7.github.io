import { useEffect, useRef } from "react";
import { FrontButton } from "../pages";
import { useIsVisible } from "./useIsVisible";

type SlideProps = {
	id?: string
	className?: string
	style?: any
	isVisibleCallback?: (...args) => void
	children: any
}
export default function Slide(props: SlideProps) {
	const ref = useRef(null)
	const isVisible = useIsVisible(ref)

	if (props.isVisibleCallback) {
		useEffect(() => {
			if (isVisible)
				props.isVisibleCallback()
		}, [isVisible])

	}

	return (
		<div ref={ref} id={props.id} className={
			`snap-center w-full h-screen `
		} style={props.style} >
			{props.children}
		</div >
	)
}
