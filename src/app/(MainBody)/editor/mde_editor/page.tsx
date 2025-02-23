'use client'
import React, { FunctionComponent, useEffect, useState } from "react";

const MdeEditor = () => {
  const [MyAwesomeMap, setClient] = useState<FunctionComponent>();

  useEffect(() => {
    (async () => {
      if (typeof navigator !== "undefined") {
        const newClient = (await import("@/Components/Miscellaneous/Editors/MdeEditor")).default;
        setClient(() => newClient);
      }
    })();
  }, []);

  return MyAwesomeMap ? <MyAwesomeMap /> : "";
};

export default MdeEditor;