import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum AboutSectionType {
  BLURB = "BLURB",
  CONTENT = "CONTENT",
  FOUNDER_STATEMENT = "FOUNDER_STATEMENT"
}



type POSTMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AboutMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class POST {
  readonly id: string;
  readonly title?: string;
  readonly image?: (string | null)[];
  readonly description?: string;
  readonly caption?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<POST, POSTMetaData>);
  static copyOf(source: POST, mutator: (draft: MutableModel<POST, POSTMetaData>) => MutableModel<POST, POSTMetaData> | void): POST;
}

export declare class About {
  readonly id: string;
  readonly type: AboutSectionType | keyof typeof AboutSectionType;
  readonly text?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<About, AboutMetaData>);
  static copyOf(source: About, mutator: (draft: MutableModel<About, AboutMetaData>) => MutableModel<About, AboutMetaData> | void): About;
}