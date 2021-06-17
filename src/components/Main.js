import { ViewHome } from "./ViewHome";
import { ViewVillains } from "./ViewVillains";
import { ViewSchemes } from "./ViewSchemes";
import { ViewScheme } from "./ViewScheme";
import { selectTopView } from "../store/views/selectors";

import { useSelector } from "react-redux";

const views = {
  Home: ViewHome,
  Villains: ViewVillains,
  Schemes: ViewSchemes,
  Scheme: ViewScheme,
};

export function Main() {
  const topView = useSelector(selectTopView);
  const TopView = views[topView.name];
  return (
    <main>
      <TopView view={topView} />
    </main>
  );
}


