import { lazy } from "react";
import { PROJECT_META_BY_SLUG } from "../data/projectMeta";

const PROJECT_DETAIL_COMPONENTS = {
  "r-tech": lazy(() => import("./RTechDetail")),
  "undangan-digital": lazy(() => import("./UndanganDigitalDetail")),
  siparkir: lazy(() => import("./SiparkirDetail")),
  "food-crud": lazy(() => import("./FoodCrudDetail")),
  "r-tech-uiux": lazy(() => import("./RTechUIUXDetail")),
  "siparkir-uiux": lazy(() => import("./SiparkirUIUXDetail")),
  "poster-competition": lazy(() => import("./PosterCompetitionDetail")),

};

export function getProjectRouteConfig(slug) {
  const metadata = PROJECT_META_BY_SLUG[slug];
  if (!metadata) return null;

  return {
    ...metadata,
    Component: PROJECT_DETAIL_COMPONENTS[slug],
  };
}
