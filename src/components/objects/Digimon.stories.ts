import { html } from "lit";
import type { Meta } from "@storybook/web-components";

import "./Digimon";

export default {
  title: "Components/Digimons/Digimon",
  argTypes: {},
} as Meta;

export const argumon = () => html`
  <section
    style="
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 200px;
    "
  >
    <dt2-digimon id="agumon" name="agumon" digimon-id="d3"></dt2-digimon>
  </section>

  <button
    type="button"
    onclick="agumon.idle({loop:Boolean(loop.checked),count:parseInt(count.value)})"
  >
    Idle
  </button>
  <button
    type="button"
    onclick="agumon.walk({loop:Boolean(loop.checked),count:parseInt(count.value)})"
  >
    Walk
  </button>
  <button
    type="button"
    onclick="agumon.eat({loop:Boolean(loop.checked),count:parseInt(count.value)})"
  >
    Eat
  </button>
  <button
    type="button"
    onclick="agumon.angry({loop:Boolean(loop.checked),count:parseInt(count.value)})"
  >
    Angry
  </button>
  <button
    type="button"
    onclick="agumon.win({loop:Boolean(loop.checked),count:parseInt(count.value)})"
  >
    Win
  </button>
  <button
    type="button"
    onclick="agumon.lose({loop:Boolean(loop.checked),count:parseInt(count.value)})"
  >
    Lose
  </button>
  <button
    type="button"
    onclick="agumon.atk01({loop:Boolean(loop.checked),count:parseInt(count.value)})"
  >
    Attack1
  </button>
  <button
    type="button"
    onclick="agumon.atk02({loop:Boolean(loop.checked),count:parseInt(count.value)})"
  >
    Attack2
  </button>
  <button
    type="button"
    onclick="agumon.atkSP({loop:Boolean(loop.checked),count:parseInt(count.value)})"
  >
    Special Attack
  </button>
  <button
    type="button"
    onclick="agumon.block({loop:Boolean(loop.checked),count:parseInt(count.value)})"
  >
    Block
  </button>
  <button
    type="button"
    onclick="agumon.dmg({loop:Boolean(loop.checked),count:parseInt(count.value)})"
  >
    Damaged
  </button>
  <button
    type="button"
    onclick="agumon.jump({loop:Boolean(loop.checked),count:parseInt(count.value)})"
  >
    Jump
  </button>

  <br />
  <br />

  <label for="count">
    Count
    <input id="count" type="number" value="3" />
  </label>

  <br />

  <label for="loop">
    Loop
    <input type="checkbox" id="loop" />
  </label>
`;
