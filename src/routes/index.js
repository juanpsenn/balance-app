import { renderRoutes } from "react-router-config";
import loginRoutes from "./loginRoutes";
import userRoutes from "./userRoutes";

export default function UserRoutes() {
  return renderRoutes(loginRoutes);
}
