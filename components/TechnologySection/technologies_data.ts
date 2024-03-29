import { Technology } from "./technology"

export let technologies: Map<string, Technology> = new Map([
    ["rust", { name: "Rust", image: "rust_logo.svg" }],
    ["ts", { name: "Typescript", image: "Typescript_logo_2020.svg" }],
    ["go", { name: "Golang", image: "Go-Logo_Blue.svg" }],
    ["docker", { name: "Docker", image: "docker-svgrepo-com.svg" }],
    ["kubernetes", { name: "Kubernetes", image: "kubernetes.png" }],
    ["react", { name: "React", image: "react.png" }],
    ["svelte", { name: "Svelte", image: "svelte.png" }],
    ["redis", { name: "Redis", image: "redis.png" }],
    ["mongodb", { name: "MongoDB", image: "mongodb.png" }],
    ["vue", { name: "Vue", image: "vue.png" }],
    ["pgsql", { name: "Postgres", image: "pglogo.png" }],
    ["minio", { name: "Minio", image: "minio.png" }],
    ["nix", { name: "Nix", image: "nix_logo.svg" }],
])
// {
//     ["Typescript_logo_2020.svg", "Go-Logo_Blue.svg", "rust_logo.svg", "docker-svgrepo-com.svg", "nix_logo.svg"].map((e, ind) =>
//         <img key={ ind } className = "object-scale-down h-16 stroke-red" src = { e } />
//                 )
// }
