import React, { Suspense } from "react";
import Countries from "./components/Countries/Countries.jsx";

const countryPromise = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());
const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Waitong for Countries</p>}>
        <Countries countryPromise={countryPromise} />
      </Suspense>
    </div>
  );
};

export default App;
