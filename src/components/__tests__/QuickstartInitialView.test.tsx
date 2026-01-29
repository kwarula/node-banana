import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { QuickstartInitialView } from "@/components/quickstart/QuickstartInitialView";

describe("QuickstartInitialView", () => {
  const mockOnSelectBlankCanvas = vi.fn();
  const mockOnSelectTemplates = vi.fn();
  const mockOnSelectVibe = vi.fn();
  const mockOnSelectLoad = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("Basic Rendering", () => {
    it("should render the Big Box Studio title and logo", () => {
      render(
        <QuickstartInitialView
          onSelectBlankCanvas={mockOnSelectBlankCanvas}
          onSelectTemplates={mockOnSelectTemplates}
          onSelectVibe={mockOnSelectVibe}
          onSelectLoad={mockOnSelectLoad}
        />
      );

      expect(screen.getByText("Big Box Studio")).toBeInTheDocument();
      expect(screen.getByText("BB")).toBeInTheDocument(); // Logo mark
    });

    it("should render the description text", () => {
      render(
        <QuickstartInitialView
          onSelectBlankCanvas={mockOnSelectBlankCanvas}
          onSelectTemplates={mockOnSelectTemplates}
          onSelectVibe={mockOnSelectVibe}
          onSelectLoad={mockOnSelectLoad}
        />
      );

      expect(
        screen.getByText(/node based workflow editor for AI image generation/i)
      ).toBeInTheDocument();
    });

    it("should render all four option buttons", () => {
      render(
        <QuickstartInitialView
          onSelectBlankCanvas={mockOnSelectBlankCanvas}
          onSelectTemplates={mockOnSelectTemplates}
          onSelectVibe={mockOnSelectVibe}
          onSelectLoad={mockOnSelectLoad}
        />
      );

      expect(screen.getByText("Blank canvas")).toBeInTheDocument();
      expect(screen.getByText("Load workflow")).toBeInTheDocument();
      expect(screen.getByText("Templates")).toBeInTheDocument();
      expect(screen.getByText("Prompt a workflow")).toBeInTheDocument();
    });

    it("should render option descriptions", () => {
      render(
        <QuickstartInitialView
          onSelectBlankCanvas={mockOnSelectBlankCanvas}
          onSelectTemplates={mockOnSelectTemplates}
          onSelectVibe={mockOnSelectVibe}
          onSelectLoad={mockOnSelectLoad}
        />
      );

      expect(screen.getByText("Start from scratch")).toBeInTheDocument();
      expect(screen.getByText("Open existing file")).toBeInTheDocument();
      expect(screen.getByText("Pre-built workflows")).toBeInTheDocument();
      expect(screen.getByText("Prompt a workflow")).toBeInTheDocument();
    });
  });

  describe("Blank Canvas Option", () => {
    it("should call onSelectBlankCanvas when clicked", () => {
      render(
        <QuickstartInitialView
          onSelectBlankCanvas={mockOnSelectBlankCanvas}
          onSelectTemplates={mockOnSelectTemplates}
          onSelectVibe={mockOnSelectVibe}
          onSelectLoad={mockOnSelectLoad}
        />
      );

      fireEvent.click(screen.getByText("Blank canvas"));

      expect(mockOnSelectBlankCanvas).toHaveBeenCalledTimes(1);
    });

    it("should display correct description for blank canvas", () => {
      render(
        <QuickstartInitialView
          onSelectBlankCanvas={mockOnSelectBlankCanvas}
          onSelectTemplates={mockOnSelectTemplates}
          onSelectVibe={mockOnSelectVibe}
          onSelectLoad={mockOnSelectLoad}
        />
      );

      expect(screen.getByText("Start from scratch")).toBeInTheDocument();
    });
  });

  describe("Load Workflow Option", () => {
    it("should call onSelectLoad when clicked", () => {
      render(
        <QuickstartInitialView
          onSelectBlankCanvas={mockOnSelectBlankCanvas}
          onSelectTemplates={mockOnSelectTemplates}
          onSelectVibe={mockOnSelectVibe}
          onSelectLoad={mockOnSelectLoad}
        />
      );

      fireEvent.click(screen.getByText("Load workflow"));

      expect(mockOnSelectLoad).toHaveBeenCalledTimes(1);
    });
  });

  describe("Templates Option", () => {
    it("should call onSelectTemplates when clicked", () => {
      render(
        <QuickstartInitialView
          onSelectBlankCanvas={mockOnSelectBlankCanvas}
          onSelectTemplates={mockOnSelectTemplates}
          onSelectVibe={mockOnSelectVibe}
          onSelectLoad={mockOnSelectLoad}
        />
      );

      fireEvent.click(screen.getByText("Templates"));

      expect(mockOnSelectTemplates).toHaveBeenCalledTimes(1);
    });
  });

  describe("Prompt a Workflow Option", () => {
    it("should call onSelectVibe when clicked", () => {
      render(
        <QuickstartInitialView
          onSelectBlankCanvas={mockOnSelectBlankCanvas}
          onSelectTemplates={mockOnSelectTemplates}
          onSelectVibe={mockOnSelectVibe}
          onSelectLoad={mockOnSelectLoad}
        />
      );

      fireEvent.click(screen.getByText("Prompt a workflow"));

      expect(mockOnSelectVibe).toHaveBeenCalledTimes(1);
    });

    it("should display Beta badge on prompt option", () => {
      render(
        <QuickstartInitialView
          onSelectBlankCanvas={mockOnSelectBlankCanvas}
          onSelectTemplates={mockOnSelectTemplates}
          onSelectVibe={mockOnSelectVibe}
          onSelectLoad={mockOnSelectLoad}
        />
      );

      expect(screen.getByText("Beta")).toBeInTheDocument();
    });
  });

  describe("External Links", () => {
    it("should render Big Box Creative website link", () => {
      render(
        <QuickstartInitialView
          onSelectBlankCanvas={mockOnSelectBlankCanvas}
          onSelectTemplates={mockOnSelectTemplates}
          onSelectVibe={mockOnSelectVibe}
          onSelectLoad={mockOnSelectLoad}
        />
      );

      const websiteLink = screen.getByText("bigboxcreative.africa").closest("a");
      expect(websiteLink).toHaveAttribute(
        "href",
        "https://bigboxcreative.africa"
      );
      expect(websiteLink).toHaveAttribute("target", "_blank");
      expect(websiteLink).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  describe("Accessibility", () => {
    it("should have all buttons as interactive button elements", () => {
      render(
        <QuickstartInitialView
          onSelectBlankCanvas={mockOnSelectBlankCanvas}
          onSelectTemplates={mockOnSelectTemplates}
          onSelectVibe={mockOnSelectVibe}
          onSelectLoad={mockOnSelectLoad}
        />
      );

      const buttons = screen.getAllByRole("button");
      // Should have 4 option buttons
      expect(buttons.length).toBe(4);
    });
  });
});
