import { InfernoChildren, VNode } from 'inferno';

declare namespace Inferno {

  type Key = string | number;

  type Ref<T> = (instance: T) => any;

  interface Attributes {
    key?: Key;
  }

  interface ClassAttributes<T> extends Attributes {
    ref?: Ref<T>;
  }

  interface DOMAttributes<T> {
    children?: InfernoChildren;
  }

  interface HTMLAttributes<T> extends DOMAttributes<T> {
  }

  interface HTMLProps<T> extends HTMLAttributes<T>, ClassAttributes<T> {
  }
}

declare global {
  namespace JSX {
    interface Element extends VNode {
    }
    interface IntrinsicElements {
      a: Inferno.HTMLProps<HTMLAnchorElement>;
    }
  }
}
