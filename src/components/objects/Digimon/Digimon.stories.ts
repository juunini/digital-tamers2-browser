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
        left="20"
        bottom="0"
      ></dt2-digimon>
    </dt2-field>
    <dt2-ground></dt2-ground>
  </dt2-wrapper>
`;

export const selected = () => html`
  <dt2-wrapper src="/backgrounds/bg_Btl_Snow_Land_0.png">
    <dt2-field>
      <dt2-digimon id="agumon" digimon-id="d3" left="100" bottom="0" selected>
      </dt2-digimon>
    </dt2-field>
    <dt2-ground></dt2-ground>
  </dt2-wrapper>
`;
