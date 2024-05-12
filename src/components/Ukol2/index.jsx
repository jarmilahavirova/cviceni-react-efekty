/*
Zadání: Vytvořte v této komponentě efekt, který se spustí při **prvním** zobrazení komponenty
  a v konzoli vypíše text „Jsem tady“.

  Poznámka: nemáte jak ověřit změnu oproti předchozímu příkladu. Důležité je ale vzykoušet si napsat,
  jak se píše useEffect, který se zavolá při prvním vykreslení komponenty.
*/

import { useEffect } from "react";

export const Ukol2 = () => {
  useEffect(() => {
    console.log("Jsem tady");
  }, []);

  return (
    <>
      <p>Jsem tady</p>
    </>
  );
};
