declare module "*.css";

declare module "*.svg" {
  import type { ComponentType } from "react";
  const content: ComponentType<any>;
  export default content;
}
