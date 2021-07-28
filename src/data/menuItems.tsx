import { MenuItem } from "../interfaces/AppInterfaces";

export const menuItems: MenuItem[] = [
  {
    name: "Animacion 101",
    icon: "cube-outline",
    component: "Animation101Screen",
  },
  {
    name: "Animacion 102",
    icon: "albums-outline",
    component: "Animation102Screen",
  },
  {
    name: "Switches",
    icon: "toggle-outline",
    component: "SwitchScreen",
  },
  {
    name: "Alerts",
    icon: "alert-circle-outline",
    component: "AlertScreen",
  },
  {
    name: "TextInputs",
    icon: "document-text-outline",
    component: "TextInputScreen",
  },
  {
    name: "Pull to refresh",
    icon: "refresh-outline",
    component: "PullToRefreshScreen",
  },
  {
    name: "SectionList",
    icon: "list-outline",
    component: "CustomSectionListScreen",
  },
  {
    name: "Modal",
    icon: "copy-outline",
    component: "ModalScreen",
  },
  {
    name: "Infinite Scroll",
    icon: "download-outline",
    component: "InfiniteScrollScreen",
  },
  {
    name: "Slide",
    icon: "flower-outline",
    component: "SlidesScreen",
  },
  {
    name: "Theme",
    icon: "flask-outline",
    component: "ChangeThemeScreen",
  },
];
