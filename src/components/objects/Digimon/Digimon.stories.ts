import { html } from "lit";
import type { Meta } from "@storybook/web-components";

import "@/components/layouts/Wrapper";
import "@/components/layouts/Ground";
import "@/components/layouts/Field";
import "@/components/objects/Digimon";
import "@/components/objects/Digimon/Selected";

export default {
  title: "Components/objects/Digimon",
  argTypes: {},
} as Meta;

export const digimon = () => html`
  <dt2-wrapper src="/backgrounds/bg_Btl_Snow_Land_0.png">
    <dt2-field>
      <dt2-digimon
        id="agumon"
        digimon-id="d3"
        left="100"
        bottom="0"
        max-hp="100"
        hp="100"
        level="999"
      ></dt2-digimon>
    </dt2-field>
    <dt2-ground></dt2-ground>
  </dt2-wrapper>

  <script>
    window.addEventListener("click", (e) => {
      if (e.target.tagName === "DT2-DIGIMON") {
        e.target.setAttribute("selected", "");
      } else {
        document.querySelectorAll("dt2-digimon").forEach((digimon) => {
          digimon.removeAttribute("selected");
        });
      }
    });
  </script>
`;

export const selected = () => html`
  <dt2-wrapper src="/backgrounds/bg_Btl_Snow_Land_0.png">
    <dt2-field>
      <dt2-digimon
        id="agumon"
        digimon-id="d3"
        left="100"
        bottom="0"
        selected
        max-hp="100"
        hp="100"
        level="14"
      >
      </dt2-digimon>
    </dt2-field>
    <dt2-ground></dt2-ground>
  </dt2-wrapper>
`;
