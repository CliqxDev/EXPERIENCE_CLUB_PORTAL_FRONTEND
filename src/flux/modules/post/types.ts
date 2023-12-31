import { IRequest } from 'models/iRequest';

type StatusObj = {
  rendered: string;
  protected?: boolean;
};

type AcfObj = {
  autores_colunistas: number;
  exibir_no_banner: boolean;
  tempo_leitura: string;
};

type LinkObj = {
  embeddable?: boolean;
  href: string;
  count?: number;
  taxonomy?: string;
  templated?: boolean;
};

type ImageObj = {
  file: string;
  width: number;
  height: number;
  filesize: number;
  mime_type: string;
  source_url: string;
};

type Meta = {
  inline_featured_image: boolean;
};

export type PostItem = {
  acf: AcfObj;
  id: number;
  date: string;
  date_gmt: string;
  guid: StatusObj;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: StatusObj;
  content: StatusObj;
  excerpt: StatusObj;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: false;
  template: string;
  format: string;
  formatos: number[];
  meta: Meta;
  categories: number[];
  tags: number[];
  _links: {
    self: LinkObj[];
    collection: LinkObj[];
    about: LinkObj[];
    author: LinkObj[];
    replies: LinkObj[];
    'version-history': LinkObj[];
    'predecessor-version': LinkObj[];
    'wp:featuredmedia': LinkObj[];
    'wp:attachment': LinkObj[];
    'wp:term': LinkObj[];
    curies: LinkObj[];
  };
};

export interface MediaItem {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  author: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: {
    inline_featured_image: false;
  };
  description: {
    rendered: string;
  };
  caption: {
    rendered: string;
  };
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: {
    width: number;
    height: number;
    file: string;
    filesize: number;
    sizes: {
      medium: ImageObj;
      thumbnail: ImageObj;
      medium_large: ImageObj;
      'independent-grid-large': ImageObj;
      'independent-grid-medium': ImageObj;
      'independent-grid-small': ImageObj;
      'independent-team-medium': ImageObj;
      full: ImageObj;
    };
    image_meta: {
      aperture: string;
      credit: string;
      camera: string;
      caption: string;
      created_timestamp: string;
      copyright: string;
      focal_length: string;
      iso: string;
      shutter_speed: string;
      title: string;
      orientation: string;
    };
  };
  post: null;
  source_url: string;
  _links: {
    self: LinkObj[];
    collection: LinkObj[];
    about: LinkObj[];
    author: LinkObj[];
    replies: LinkObj[];
  };
}

export type PostCategoryRequest = {
  page: number;
  category: number;
};

export type PostResponse = PostItem[];

export type ItemPostCategoryResponse = {
  pageNumber: number;
  data: PostItem[];
};

export type PostCategoryResponse = ItemPostCategoryResponse[];

export type MediaResponse = {
  [key: string]: MediaItem;
};

export type Columnists = {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: {
    [key: string]: string;
  };
  meta: any;
  _links: {
    self: LinkObj[];
    collection: LinkObj[];
  };
};

export type ColumnistsResponse = Columnists[];

export interface Post {
  general: IRequest<PostResponse>;
  postSearch: IRequest<PostResponse>;
  postCategories: IRequest<PostCategoryResponse>;
  media: IRequest<MediaResponse>;
  mediaById: IRequest<MediaResponse>;
  mediaCategory: IRequest<MediaResponse>;
  columnists: IRequest<ColumnistsResponse>;
  postById: IRequest<PostItem>;
  showShare: string | number;
}
