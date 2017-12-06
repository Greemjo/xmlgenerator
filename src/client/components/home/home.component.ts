import { IComponentOptions } from "angular";

class HomeComponent {
}

export const homeComponent: IComponentOptions = {
  controller: HomeComponent,
  template: require("./home.component.html"),
};
