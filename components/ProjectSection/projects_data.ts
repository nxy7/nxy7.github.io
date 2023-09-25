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
        title: "Chat APP",
        description: "Live chat application",
        liveLink: "https://chat-app.nxyt.pl",
        sourceCode: "http://github.com/nxy7/go-chat",
        technologies: [technologies.get("go"), technologies.get("redis"), technologies.get("kubernetes"), technologies.get("mongodb"), technologies.get("vue")],
        backgroundImg: "chatapp.png"
    },
    {
        title: "StockBuddy.pl",
        description: "Web app that makes following Polish Stock Market (GPW) data easier than ever. Unlike other websites StockBuddy displays data for long\
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
        description: `Web service dedicated for online broadcasters. Allows receiving donations and showing notifications on stream. Integrates with Youtube, Twitch and more.
        Unlike other simmilar projects streampai merges notification streams from various sources and allows showing them within single component. There are many features that I'd love to implement into this project like custom notifications made by users (possibly using webassembly) and restreaming capibility.
        Definitely the most ambitious project on the list, consisting of many microservices and hosted using kubernetes cluster. Right now it is not yet available publicly, but most of the underlying work is already done. What's left is polishing the way the app looks and it can go live.
    `,
        technologies: [
            technologies.get("ts"),
            technologies.get("svelte"),
            technologies.get("rust"),
            technologies.get("pgsql"),
            technologies.get("docker"),
            technologies.get("nix"),
            technologies.get("redis"),
            technologies.get("minio"),
            technologies.get("kubernetes"),
        ], backgroundImg: "streampai.png"
    },
]
