import { renderRoutes } from "react-router-config";
import userRoutes from "./userRoutes";

export default function UserRoutes() {
  return renderRoutes(userRoutes);
}
