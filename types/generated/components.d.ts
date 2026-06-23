import type { Schema, Struct } from '@strapi/strapi';

export interface GeoCoordinates extends Struct.ComponentSchema {
  collectionName: 'components_geo_coordinates';
  info: {
    displayName: 'coordinates';
  };
  attributes: {};
}

export interface SharedContentBlocks extends Struct.ComponentSchema {
  collectionName: 'components_shared_content_blocks';
  info: {
    displayName: 'contentBlocks';
  };
  attributes: {
    content: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    displayName: 'faq-item';
  };
  attributes: {};
}

export interface SharedStatItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat_items';
  info: {
    displayName: 'stat-item';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'geo.coordinates': GeoCoordinates;
      'shared.content-blocks': SharedContentBlocks;
      'shared.faq-item': SharedFaqItem;
      'shared.stat-item': SharedStatItem;
    }
  }
}
