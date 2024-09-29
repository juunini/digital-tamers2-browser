```ts
export class ComponentName extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {

  }

  disconnectedCallback() {

  }

  adoptedCallback() {

  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) {
      return;
    }
  }
}
```

```ts
customElements.define("component-name", ComponentName);
```
