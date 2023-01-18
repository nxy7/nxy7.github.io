import { FrontButton } from "../pages";

type SlideProps = {
	id?: string
	className?: string
	style?: any
	children: any
}
export default function Slide(props: SlideProps) {
	return (
		<div id={props.id} className="relative flex flex-col snap-center bg-red-200 w-full h-screen items-center" style={props.style}>
			{props.children}
		</div>
	)
}
