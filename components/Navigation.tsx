export const Navigation = () => {
    return <>
        <div className="md:absolute m-6 md:(m-15 place-self-start) place-self-center text-lg">
            <ul className="flex gap-8 font-semibold">
                <li><a href="#about">About Me</a></li>
                <li><a href="#techstack">Tech Stack</a></li>
                <li><a href="#projects">My Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                {/* <li><a href="/blog">Blog</a></li> */}
            </ul>
        </div>
    </>
}
