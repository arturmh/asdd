import { SchemeAssignments } from "./SchemeAssignments";
import { SchemeAddAssignments } from "./SchemeAddAssignments";
import { SchemePowers } from "./SchemePowers";
import { useMemo } from "react";
import { makeSelectSchemeByName } from "../store/schemes/selectors";
import { useSelector } from "react-redux";

export function ViewScheme({ view }) {
  
  const selectSchemeByName = useMemo(makeSelectSchemeByName, []);
  //const scheme = { name: "Flood the World" };
  const scheme = useSelector((state) => selectSchemeByName(state, { name: view.scheme }));
  console.log(view)

  return (
    <>
      <h1>Scheme: {scheme.name}</h1>
      <SchemePowers scheme={scheme} />
      <SchemeAssignments scheme={scheme} />
      <SchemeAddAssignments scheme={scheme} />
    </>
  );
}
