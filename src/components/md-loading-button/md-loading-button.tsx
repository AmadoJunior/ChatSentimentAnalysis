import { Component, Prop, Element, h } from "@stencil/core";

@Component({
  tag: "md-loading-button",
  styleUrl: "md-loading-button.css",
  shadow: true,
})
export class MdLoadingButton {
  @Prop() disabled: boolean = false;
  @Prop() loading: boolean = false;
  @Prop() onClick: (event: MouseEvent) => void;
  @Element() el: HTMLElement;

  handleClick(event: MouseEvent) {
    if (!this.loading && this.onClick) {
      this.onClick(event);
    }
  }

  render() {
    return (
      <button
        class={{
          loading: this.loading,
        }}
        disabled={this.loading || this.disabled}
        onClick={event => this.handleClick(event)}
      >
        <slot name="text"></slot>
        <slot name="icon"></slot>
      </button>
    );
  }
}
