{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flakeUtils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flakeUtils }:
    let pkgs = nixpkgs.legacyPackages.x86_64-linux.pkgs;
    in {

      packages.x86_64-linux.hello = pkgs.hello;

      packages.x86_64-linux.default = pkgs.hello;

      devShells.x86_64-linux.default =
        pkgs.mkShell { packages = with pkgs; [ hello ]; };

    };
}
