import React from "react";
import allChips from "./chips";
import { Chip } from "./Chip";
import { Settings, SettingsContext } from "./Settings";

export function App({ ics }: { ics: string[] }) {
  const [settings, setSettings] = React.useState<Settings>({
    alignData: true,
    fontSize: 12,
    ics,
  });

  const chips =
    settings.ics.length > 0
      ? allChips.filter((chip) => ics.includes(chip.name))
      : allChips;

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setSettings,
      }}
    >
      {chips.map((chip) => (
        <Chip key={chip.name} chip={chip} />
      ))}
      <div className="wrapper">
        <Settings />
        <hr />
        <p>
          Disclaimer: These unofficial diagrams have been created from the
          official datasheets. However, mistakes happen and there may be errors
          in the diagrams above. Please{" "}
          <a href="https://github.com/cmfcmf/ic-pinout-diagram-generator/issues/new">
            report errors
          </a>{" "}
          if you find any.
          <br />
          <small>
            Pinout diagram generator made by{" "}
            <a href="https://github.com/cmfcmf">Christian Flach (@cmfcmf)</a>.
            The source code can be found at GitHub:{" "}
            <a href="https://github.com/cmfcmf/ic-pinout-diagram-generator">
              cmfcmf/ic-pinout-diagram-generator
            </a>
            .
          </small>
        </p>
      </div>
    </SettingsContext.Provider>
  );
}
