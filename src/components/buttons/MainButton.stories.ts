import { html } from "lit";
import type { Meta } from "@storybook/web-components";

import "@/components/layouts/Wrapper";
import { MainButton } from "./MainButton";

export default {
  title: "Components/Buttons/Main Button",
  argTypes: {},
} as Meta;

customElements.define("main-button", MainButton);

export const mainButtons = () => html`
  <dt2-wrapper src="/backgrounds/bg_Btl_Snow_Land_0.png">
    <div
      style="
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      padding: 0 5px 10px 5px;
      "
    >
      <div
        style="
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;
      "
      >
        <main-button
          src="/buttons/digivice_icon.png"
          line1="DigiVice"
        ></main-button>
        <main-button
          src="/buttons/training_icon.png"
          line1="Training"
        ></main-button>
        <main-button
          src="/buttons/battle_items_icon.png"
          line1="Battle"
          line1-align="left"
          line2="Items"
          line2-align="right"
        ></main-button>
        <main-button
          src="/buttons/evolution_icon.png"
          line1="Evolution"
        ></main-button>
        <main-button
          src="/buttons/database_icon.png"
          line1="Database"
        ></main-button>
      </div>
      <main-button
        src="/buttons/digitize_icon.png"
        line1="Digitize"
        color="secondary"
      ></main-button>
    </div>
  </dt2-wrapper>
`;

export const digivice = () =>
  html`
    <main-button
      src="/buttons/digivice_icon.png"
      line1="DigiVice"
    ></main-button>
  `;

export const shop = () =>
  html` <main-button src="/buttons/shop_icon.png" line1="Shop"></main-button> `;

export const training = () =>
  html`
    <main-button
      src="/buttons/training_icon.png"
      line1="Training"
    ></main-button>
  `;

export const evolution = () =>
  html`
    <main-button
      src="/buttons/evolution_icon.png"
      line1="Evolution"
    ></main-button>
  `;

export const database = () =>
  html`
    <main-button
      src="/buttons/database_icon.png"
      line1="Database"
    ></main-button>
  `;

export const battleItems = () =>
  html`
    <main-button
      src="/buttons/battle_items_icon.png"
      line1="Battle"
      line1-align="left"
      line2="Items"
      line2-align="right"
    >
    </main-button>
  `;

export const digitize = () =>
  html`
    <main-button
      src="/buttons/digitize_icon.png"
      line1="Digitize"
      color="secondary"
    ></main-button>
  `;
