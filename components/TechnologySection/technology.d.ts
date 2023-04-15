export type Technology = {
    name: string
    image: string
    description?: string
}

type tech_name = "rust" | "go" | "typescript" | "docker" | "nix" | "nushell" | "kubernetes"
export let technologies = new Map<tech_name, Technology>([
    { name: "qweqwe", test: "elo" }
])
technologies.set("rust", { test: "qweqwe" })