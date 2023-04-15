import { technologies } from "../TechnologySection/technologies_data";
import { Project } from "./project";

export const projects: Project[] = [
    {
        title: "Mediujemy.pl",
        description: "Website for mediation company.  \
    ",
        liveLink: "https://mediujemy.pl",
        sourceCode: "https://github.com/nxy7/mediujemy",
        technologies: [technologies.get("ts"), technologies.get("vue")],
        backgroundImg: "mediujemy.jpg"
    },
    {
        title: "StockBuddy.pl",
        description: "Website that makes following Polish Stock Market (GPW) data easier than ever. Unlike other websites StockBuddy displays data for long\
            timeframes in form of easily readable charts. Other than that the website has some features making stock valuation easier.\
        ",
        liveLink: "https://stockbuddy.pl",
        technologies: [
            technologies.get("ts"),
            technologies.get("react"),
            technologies.get("go"),
            technologies.get("pgsql"),
            technologies.get("docker"),
            technologies.get("nix"),
        ], backgroundImg: "stockbuddy.png"
    },
    {
        title: "Streampai.gg",
        description: "Web service dedicated for online broadcasters. Allows for receiving donations and showing notifications on stream. Integrates with\
        Youtube, Twitch and more.\
    ",
        technologies: [
            technologies.get("ts"),
            technologies.get("svelte"),
            technologies.get("rust"),
            technologies.get("pgsql"),
            technologies.get("docker"),
            technologies.get("nix"),
            technologies.get("kafka"),
            technologies.get("minio"),
            technologies.get("kubernetes"),
        ], backgroundImg: "streampai.png"
    },
]
