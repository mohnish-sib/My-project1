import { render, screen } from "@testing-library/react";
import Card from "../Card";

describe("Card component testing", () => {
  test("render title", () => {
    render(
      <Card
        key={1}
        title="hello world"
        amount={33}
        brand="asg"
        setDetails={()=>{}}
        id={22}
        img={""}
      />
    );

    const title = screen.getByText("hello world");
    expect(title).toBeInTheDocument();
  });
});
