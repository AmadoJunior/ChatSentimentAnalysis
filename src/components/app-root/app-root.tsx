import { Component, h, State } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true,
})
export class AppRoot {
  @State() isLoading: boolean = false;

  mockRequest() {
    this.isLoading = true;
    console.log("Test Handler");
    console.log(this.isLoading);
    setTimeout(() => {
      this.isLoading = false;
      console.log(this.isLoading);
    }, 3000);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>

          <section>
            <stencil-route-link url="/profile/stencil"></stencil-route-link>
          </section>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
          <md-button disabled={this.isLoading} onClick={this.mockRequest.bind(this)}>
            <p slot="text">Profile</p>
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
              <path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" />
            </svg>
          </md-button>
          <md-loading-button loading={this.isLoading} onClick={this.mockRequest.bind(this)}>
            <p slot="text">Profile</p>
            <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
              <path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" />
            </svg>
          </md-loading-button>
        </main>
      </div>
    );
  }
}
