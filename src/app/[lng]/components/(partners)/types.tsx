export interface Partner {
  companyName: string;
  address: string;
  website: string;
  email: string;
  tel: string;
  src: string;
  position: {
    lat: number;
    lng: number;
  };
}

export interface PartnersListProps {
  mapRef: React.MutableRefObject<google.maps.Map | null>;
  infoWindowRef: React.MutableRefObject<google.maps.InfoWindow | null>;
  markerRef: React.MutableRefObject<any | null>;
  partners: Partner[];
  filteredPartners: Partner[];
  buildContent: (property: any) => HTMLDivElement;
}
