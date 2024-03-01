"use client";

import "./styles.css";
import { Loader } from "@googlemaps/js-api-loader";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import styles from "@/app/[lng]/partners/partners.module.scss";
import { PartnersList } from "@/app/[lng]/components/(partners)/partnersList";
import partners from "../../../../public/assets/partners.json";

export const Content = () => {
  const t = useTranslations("partners");
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const markerRef = useRef<any | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPartners, setFilteredPartners] = useState(partners);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    filterPartners(event.target.value);
  };

  const filterPartners = (query: string) => {
    const filtered = partners.filter((partner) =>
      Object.values(partner).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredPartners(filtered);
  };

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map, InfoWindow } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement, PinElement } = await loader.importLibrary(
        "marker"
      );

      infoWindowRef.current = new InfoWindow({
        minWidth: 250,
      });

      const center = {
        lat: 52.112795,
        lng: 19.211946,
      };

      const mapOptions: google.maps.MapOptions = {
        center: center,
        zoom: 6,
        mapId: "partners",
      };
      mapRef.current = new Map(
        mapContainerRef.current as HTMLDivElement,
        mapOptions
      );

      partners.forEach((partner) => {
        const pinBackground = new PinElement({
          background: "#5ba5b0",
          glyphColor: "#FFF",
          borderColor: "#005157",
        });

        markerRef.current = new AdvancedMarkerElement({
          position: partner.position,
          map: mapRef.current,
          title: partner.companyName,
          content: pinBackground.element,
        });

        markerRef.current.addListener(
          "click",
          ({ latLng }: { latLng: { lat: number; lng: number } }) => {
            mapRef.current?.panTo(latLng);
            const targetLatLng = {
              lat: partner.position.lat,
              lng: partner.position.lng,
            };
            infoWindowRef.current?.close();
            infoWindowRef.current?.setContent(buildContent(partner));
            infoWindowRef.current?.open(mapRef.current as google.maps.Map);
            infoWindowRef.current?.setPosition(targetLatLng);
          }
        );
      });
    };

    initMap();
  }, []);

  function buildContent(property: any) {
    const content = document.createElement("div");
    content.classList.add("marker");

    content.innerHTML = `
      <h3 class="marker__title">${property.companyName}</h3>
      <div class="marker_flex">
        <div class="marker__image">
          <img class="marker__image" src="${property.src}" width="60" height="60" alt="" />
        </div>
        <div class="marker__wrapper">
          <p class="marker__paragraph">${property.address}</p>
          <a href="${property.website}" target="_blank" rel="noopener noreferrer" class="marker__link">${property.website}</a>
          <a href="tel:${property.tel}" class="marker__link">${property.tel}</a>
          <a href="mailto:${property.email}" class="marker__link">${property.email}</a>
        </div>
      </div>
    `;
    return content;
  }

  return (
    <>
      <div className={styles.container__page}>
        <div className={styles.container__map} ref={mapContainerRef} />
        <div className={styles.input__container}>
          <Form.Control
            className={styles.input}
            placeholder={t("Search partners")}
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <Image
            width={31}
            height={33}
            src="/assets/partners/glass.svg"
            alt=""
            className={styles.input__glass}
          />
        </div>
        <div className={styles.description__container}>
          <div className={styles.description__title}>
            <h1 className={styles.description__heading}>{t("Our partners")}</h1>
            <Image
              className={styles.description__stroke}
              width={300}
              height={6}
              src="/assets/strokes/stroke.svg"
              alt=""
            />
          </div>
          <PartnersList
            mapRef={mapRef}
            infoWindowRef={infoWindowRef}
            markerRef={markerRef}
            partners={partners}
            filteredPartners={filteredPartners}
            buildContent={buildContent}
          />
        </div>
      </div>
    </>
  );
};
