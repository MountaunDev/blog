// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IAuthorFields {
  /** name */
  name: string;

  /** shortBiography */
  shortBiography?: string | undefined;

  /** email */
  email: string;

  /** profileImage */
  profileImage?: string | undefined;

  /** sex */
  sex?: "F" | "M" | undefined;
}

/** This is the information about the author */

export interface IAuthor extends Entry<IAuthorFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "author";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBlogPostFields {
  /** title */
  title: string;

  /** content */
  content: Document;

  /** publishDate */
  publishDate?: string | undefined;

  /** views */
  views?: number | undefined;

  /** likes */
  likes?: number | undefined;

  /** dislikes */
  dislikes?: number | undefined;

  /** shortDescription */
  shortDescription: string;

  /** imagesBanner */
  imagesBanner?: string[] | undefined;

  /** featureImages */
  featureImages?: string[] | undefined;

  /** minToRead */
  minToRead?: number | undefined;

  /** postAuthor */
  postAuthor?: Entry<{ [fieldId: string]: unknown }> | undefined;

  /** topics */
  topics?: ITopics[] | undefined;
}

/** Each record here is a post in our blog */

export interface IBlogPost extends Entry<IBlogPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blogPost";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ITopicsFields {
  /** label */
  label?: string | undefined;
}

/** Each record should be one topic that will be used in the blogPost. */

export interface ITopics extends Entry<ITopicsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "topics";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "author" | "blogPost" | "topics";

export type IEntry = IAuthor | IBlogPost | ITopics;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
