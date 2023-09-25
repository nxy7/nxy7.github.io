export type Technology = {
    name: TechName
    image: string
    description?: string
}

type TechName = "Rust" | "Golang" | "Typescript" | "Docker" | "Nix" | "Nushell" | "Kubernetes" | "Vue" | "MongoDB" | "Redis" | "React" | "Svelte" | "Postgres" | "Minio"
