import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Layout {
  readonly name?: string;
  readonly layers?: (Layer | null)[];
  constructor(init: ModelInit<Layout>);
}

export declare class Layer {
  readonly name?: string;
  readonly bindings: (string | null)[];
  constructor(init: ModelInit<Layer>);
}

export declare class Configuration {
  readonly id: string;
  readonly name?: string;
  readonly layouts?: (Layout | null)[];
  constructor(init: ModelInit<Configuration>);
  static copyOf(source: Configuration, mutator: (draft: MutableModel<Configuration>) => MutableModel<Configuration> | void): Configuration;
}