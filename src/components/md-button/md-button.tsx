import { Component, Prop, Element, Listen, h } from "@stencil/core";

@Component({
  tag: "md-button",
  styleUrl: "md-button.css",
  shadow: true,
})
export class MdButton {
  @Prop() disabled: boolean = false;
  @Prop() onClick: (event: MouseEvent) => void;
  @Element() el: HTMLElement;

  @Listen("mousedown")
  handleMouseDown(event: MouseEvent) {
    this.createRipple(event);
  }

  createRipple(event: MouseEvent) {
    const button = this.el.shadowRoot.querySelector<HTMLElement>("button");

    button.style.setProperty("--ripple-animation", "none");

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const left = event.clientX - (button.offsetLeft + radius);
    const top = event.clientY - (button.offsetTop + radius);

    button.style.setProperty("--ripple-diameter", `${diameter}px`);
    button.style.setProperty("--ripple-left", `${left}px`);
    button.style.setProperty("--ripple-top", `${top}px`);
    button.style.setProperty("--ripple-animation", "ripple 600ms linear");
  }

  handleClick(event: MouseEvent) {
    if (this.onClick) {
      this.onClick(event);
    }
  }

  render() {
    return (
      <button
        class={{
          disabled: this.disabled,
        }}
        onClick={event => this.handleClick(event)}
      >
        <slot name="text"></slot>
        <slot name="icon"></slot>
      </button>
    );
  }
}
