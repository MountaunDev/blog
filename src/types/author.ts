export interface AuthorPost {
  metadata: Metadata;
  sys:      AuthorPostSys;
  fields:   Fields;
}

export interface Fields {
  name:           string;
  shortBiography: string;
  email:          string;
}

export interface Metadata {
  tags: any[];
}

export interface AuthorPostSys {
  space:       ContentType;
  id:          string;
  type:        string;
  createdAt:   Date;
  updatedAt:   Date;
  environment: ContentType;
  revision:    number;
  contentType: ContentType;
  locale:      string;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  type:     string;
  linkType: string;
  id:       string;
}
