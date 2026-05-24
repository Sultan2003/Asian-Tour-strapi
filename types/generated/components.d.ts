import type { Schema, Struct } from '@strapi/strapi';

export interface GeoCoordinates extends Struct.ComponentSchema {
  collectionName: 'components_geo_coordinates';
  info: {
    displayName: 'coordinates';
  };
  attributes: {
    lat: Schema.Attribute.Decimal;
    lng: Schema.Attribute.Decimal;
  };
}

export interface SharedFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_items';
  info: {
    displayName: 'faq-item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface SharedStatItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_stat_items';
  info: {
    displayName: 'stat-item';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'geo.coordinates': GeoCoordinates;
      'shared.faq-item': SharedFaqItem;
      'shared.stat-item': SharedStatItem;
    }
  }
}
