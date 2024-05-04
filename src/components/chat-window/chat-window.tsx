import { Component, Prop, h } from "@stencil/core";
import { MatchResults } from "@stencil-community/router";

@Component({
  tag: "chat-window",
  styleUrl: "chat-window.css",
  shadow: true,
})
export class ChatWindow {
  @Prop() match: MatchResults;

  render() {
    if (this.match && this.match.params.name) {
      return (
        <main>
          <section>Section</section>
          <form>Form</form>
        </main>
      );
    }
  }
}
