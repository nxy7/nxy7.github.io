import { RefObject, useEffect, useMemo, useState } from "react";

export function useIsVisible(ref: RefObject<HTMLElement>) {
	const [isVisible, setIsVisible] = useState(false)
	if (typeof window === 'undefined')
		return

	const observer = useMemo(() => new IntersectionObserver(
		([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.7 }
	), [ref])


	useEffect(() => {
		observer.observe(ref.current)
		return () => observer.disconnect()
	}, [])

	return isVisible
}
