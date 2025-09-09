import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FeaturedEpisode from "../FeaturedEpisode";
import "@testing-library/jest-dom";

interface Episode {
  id: string;
  title: string;
  description: string;
  duration: string;
  currentTime: string;
  episodeNumber: string;
  lengthInMinutes: number;
  tags: string[];
  image: string;
}

const mockEpisode: Episode = {
  id: "1",
  title: "The Future of AI",
  description: "An in-depth discussion on the rise of AI in everyday life.",
  duration: "30:00",
  currentTime: "10:00",
  episodeNumber: "E42",
  lengthInMinutes: 30,
  tags: ["AI", "Future", "Technology"],
  image: "https://placehold.co/600x600.png",
};

describe("FeaturedEpisode", () => {
  it("renders the episode title and description", () => {
    render(<FeaturedEpisode {...mockEpisode} />);

    expect(screen.getByText(mockEpisode.title)).toBeInTheDocument();
    expect(screen.getByText(mockEpisode.description)).toBeInTheDocument();
  });

  it("renders the episode number and length", () => {
    render(<FeaturedEpisode {...mockEpisode} />);

    expect(screen.getByText(mockEpisode.episodeNumber)).toBeInTheDocument();
    expect(
      screen.getByText(`${mockEpisode.lengthInMinutes} minutes`)
    ).toBeInTheDocument();
  });

  it("renders all tags", () => {
    render(<FeaturedEpisode {...mockEpisode} />);

    mockEpisode.tags.forEach((tag: string) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  it("renders control buttons", () => {
    render(<FeaturedEpisode {...mockEpisode} />);

    expect(
      screen.getByRole("button", { name: /play episode/i })
    ).toBeInTheDocument();
    // share & bookmark use only icons (not accessible names)
    expect(screen.getAllByRole("button")).toHaveLength(3 + 3);
    // 3 main buttons + 3 player controls
  });

  it("renders the episode image", () => {
    render(<FeaturedEpisode {...mockEpisode} />);

    const img = screen.getByRole("img", { name: /modern podcast studio/i });
    expect(img).toHaveAttribute("src", mockEpisode.image);
  });

  it("shows current time and duration", () => {
    render(<FeaturedEpisode {...mockEpisode} />);

    expect(
      screen.getByText(`${mockEpisode.currentTime} / ${mockEpisode.duration}`)
    ).toBeInTheDocument();
  });
});
