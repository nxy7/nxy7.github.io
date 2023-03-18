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
