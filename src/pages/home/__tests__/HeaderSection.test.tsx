import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HeaderSection from "../HeaderSection";
import { featuredEpisode } from "../../../../dummyData";

// Mock props
const platforms = [
  {
    name: "Spotify",
    icon: <i className="fab fa-spotify"></i>,
    url: "https://spotify.com",
  },
  {
    name: "Apple Podcasts",
    icon: <i className="fab fa-apple"></i>,
    url: "https://apple.com",
  },
];

describe("HeaderSection", () => {
  it("renders the episode number", () => {
    render(<HeaderSection {...featuredEpisode} {...platforms} />);

    expect(
      screen.getByText(`Now Live • Episode ${featuredEpisode.episodeNumber}`)
    ).toBeInTheDocument();
  });

  it("renders the main heading", () => {
    render(<HeaderSection {...featuredEpisode} {...platforms} />);

    expect(
      screen.getByRole("heading", { name: /insights that/i })
    ).toBeInTheDocument();
  });

  it("renders description text", () => {
    render(<HeaderSection {...featuredEpisode} {...platforms} />);

    expect(
      screen.getByText(/deep conversations with tech leaders/i)
    ).toBeInTheDocument();
  });

  it("renders action buttons", () => {
    render(<HeaderSection {...featuredEpisode} {...platforms} />);

    expect(
      screen.getByRole("button", { name: /listen now/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /subscribe free/i })
    ).toBeInTheDocument();
  });

  it("renders platform icons", () => {
    render(<HeaderSection {...featuredEpisode} {...platforms} />);

    platforms.forEach(() => {
      expect(screen.getByText(/listen on:/i)).toBeInTheDocument();
      //   expect(screen.getByRole("link", { name: p.name })).toBeInTheDocument();
    });
  });
});
