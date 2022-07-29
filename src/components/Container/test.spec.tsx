import { render, screen } from "@testing-library/react";
import theme from "../../styles/theme";
import { renderWithTheme } from "../../utils/tests/helpers";

import { Container } from "./";

describe("<Container />", () => {
  it("should have 130rem as width", () => {
    const { container } = renderWithTheme(<Container />);

    expect(container.firstChild).toHaveStyle({
      "max-width": theme.grid.container,
    });

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 120rem;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      />
    `);
  });
});
