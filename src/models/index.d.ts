import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AboutMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Profile {
  readonly id: string;
  readonly username?: string;
  readonly posts?: (Post | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Profile, ProfileMetaData>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile, ProfileMetaData>) => MutableModel<Profile, ProfileMetaData> | void): Profile;
}

export declare class Post {
  readonly id: string;
  readonly title?: string;
  readonly description?: string;
  readonly images_url?: string;
  readonly tags?: string;
  readonly author?: Profile;
  readonly profileID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}

export declare class About {
  readonly id: string;
  readonly type?: string;
  readonly text?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<About, AboutMetaData>);
  static copyOf(source: About, mutator: (draft: MutableModel<About, AboutMetaData>) => MutableModel<About, AboutMetaData> | void): About;
}