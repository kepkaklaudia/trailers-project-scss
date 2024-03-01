"use client";

import { Loader } from "@googlemaps/js-api-loader";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import styles from "@/app/[lng]/(pages)/partners/partners.module.scss";
import { Form } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";

export const Content = () => {
  const t = useTranslations("partners");
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);
  const partners = [
    {
      companyName: "Tech Solutions Ltd.",
      address: "123 Tech Street, Tech City",
      website: "http://techsolutions.com",
      email: "info@techsolutions.com",
      tel: "+48 1111111111",
    },
    {
      companyName: "Global Innovations Inc.",
      address: "456 Innovation Avenue, Innovation Town",
      website: "http://globalinnovationsinc.com",
      email: "contact@globalinnovationsinc.com",
      tel: "+48 1111111111",
    },
    {
      companyName: "Data Dynamics Corp.",
      address: "789 Data Drive, Data City",
      website: "http://datadynamicscorp.com",
      email: "support@datadynamicscorp.com",
      tel: "+48 1111111111",
    },
    {
      companyName: "Creative Designs LLC",
      address: "101 Design Lane, Creative Town",
      website: "http://creativedesignsllc.com",
      email: "info@creativedesignsllc.com",
      tel: "+48 1111111111",
    },
    {
      companyName: "Infinite Technologies Group",
      address: "202 Infinite Road, Infinite City",
      website: "http://infinitetechnologiesgroup.com",
      email: "contact@infinitetechnologiesgroup.com",
      tel: "+48 1111111111",
    },
    {
      companyName: "Global Innovations Inc.",
      address: "456 Innovation Avenue, Innovation Town",
      website: "http://globalinnovationsinc.com",
      email: "contact@globalinnovationsinc.com",
      tel: "+48 1111111111",
    },
    {
      companyName: "Data Dynamics Corp.",
      address: "789 Data Drive, Data City",
      website: "http://datadynamicscorp.com",
      email: "support@datadynamicscorp.com",
      tel: "+48 1111111111",
    },
    {
      companyName: "Creative Designs LLC",
      address: "101 Design Lane, Creative Town",
      website: "http://creativedesignsllc.com",
      email: "info@creativedesignsllc.com",
      tel: "+48 1111111111",
    },
    {
      companyName: "Infinite Technologies Group",
      address: "202 Infinite Road, Infinite City",
      website: "http://infinitetechnologiesgroup.com",
      email: "contact@infinitetechnologiesgroup.com",
      tel: "+48 1111111111",
    },
  ];

  // Step 1: Create state
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPartners, setFilteredPartners] = useState(partners);

  // Step 2: Add onChange handler to update the search term
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    filterPartners(event.target.value);
  };

  // Step 3: Modify rendering logic to use filtered partners
  const filterPartners = (query: string) => {
    const filtered = partners.filter((partner) =>
      Object.values(partner).some((value) =>
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

      const { Map } = await loader.importLibrary("maps");
      const { AdvancedMarkerElement, PinElement } = await loader.importLibrary(
        "marker"
      );

      const position = {
        lat: 52.213694,
        lng: 21.059277,
      };

      const pinBackground = new PinElement({
        background: "#5ba5b0",
        glyphColor: "#FFF",
        borderColor: "#005157",
      });

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 6,
        mapId: "partners",
      };
      map.current = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new AdvancedMarkerElement({
        map: map.current,
        position: position,
        content: pinBackground.element,
      });
    };
    initMap();
  }, []);

  function focusOnPoint() {
    if (map.current) {
      // Współrzędne punktu, na który ma być skierowany focus
      const targetLatLng = { lat: 52.52, lng: 13.405 };

      // Ustawianie centrum mapy na nowe współrzędne
      map.current.setCenter(targetLatLng);

      // Opcjonalnie możesz również dostosować poziom zbliżenia
      // map.current.setZoom(12);
    }
  }
  {
    /*   useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { Marker } = await loader.importLibrary("marker");

      const position = {
        lat: 43.64,
        lng: 75.45,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 16,
        mapId: "partners",
      };
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new Marker({ map: map, position: position });
    };
    initMap();
  }, []); */
  }

  function buildContent(property: any) {
    const content = document.createElement("div");
    content.classList.add("property");
    content.innerHTML = `
      <div class="icon">
          <i aria-hidden="true" class="fa fa-icon fa-${property.email}" title="${property.email}"></i>
          <span class="fa-sr-only">${property.email}</span>
      </div>
      <div class="details">
          <div class="title">${property.tel}</div>
          <div class="address">${property.website}</div>
          <div class="features">
          </div>
      </div>
      `;
    return content;
  }

  const buildContent1 = (property: any) => {
    return (
      <>
        <div className={styles.marker}>
          <h3 className={styles.marker__title}>{property.companyName}</h3>
          <div className={styles.marker__flex}>
            <Image
              className={styles.tile__image}
              src="/assets/categories/boat.webp"
              width={60}
              height={60}
              alt=""
            />

            <div className={styles.tile__wrapper}>
              <p className={styles.paragraph}>{property.address}</p>

              <a
                href={property.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.tile__link}
              >
                {property.website}
              </a>
              <a href={`tel:${property.tel}`} className={styles.tile__link}>
                {property.tel}
              </a>
              <a
                href={`mailto:${property.email}`}
                className={styles.tile__link}
              >
                {property.email}
              </a>
            </div>
          </div>{" "}
        </div>
      </>
    );
  };

  return (
    <>
      <div className={styles.container__page}>
        <div className={styles.container__map} ref={mapRef} />
        <div className={styles.input__container}>
          <Form.Control
            className={styles.input}
            placeholder="Search partners..."
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <Image
            width={31}
            height={33}
            src="/assets/partners/glass.svg"
            alt=""
            className={styles.glass}
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
          <AnimatePresence>
            {filteredPartners.length === 0
              ? "Brak wyników"
              : filteredPartners.map((partner, index) => (
                  <motion.div
                    key={index}
                    className={styles.tile}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      className={styles.tile__image}
                      src="/logo.webp"
                      width={60}
                      height={60}
                      alt=""
                    />
                    <div className={styles.tile__wrapper}>
                      <h3 className={styles.tile__title}>
                        {partner.companyName}
                      </h3>
                      <p className={styles.paragraph}>{partner.address}</p>
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.tile__link}
                      >
                        {partner.website}
                      </a>
                      <a
                        href={`tel:${partner.tel}`}
                        className={styles.tile__link}
                      >
                        {partner.tel}
                      </a>
                      <a
                        href={`mailto:${partner.email}`}
                        className={styles.tile__link}
                      >
                        {partner.email}
                      </a>
                    </div>
                  </motion.div>
                ))}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};









{/*
FINAL VERSION



"use client";

import { Loader } from "@googlemaps/js-api-loader";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import styles from "@/app/[lng]/(pages)/partners/partners.module.scss";
import { Form } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";
import "./styles.css";

export const Content = () => {
  const t = useTranslations("partners");
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useRef<google.maps.Map | null>(null);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const markerRef = useRef<any | null>(null);

  const partners = [
    {
      companyName: "Tech Solutions Ltd.",
      address: "123 Tech Street, Tech City",
      website: "http://techsolutions.com",
      email: "info@techsolutions.com",
      tel: "+48 1111111111",
      position: {
        lat: 53.351309,
        lng: 6.948346,
      },
    },
    {
      companyName: "Global Innovations Inc.",
      address: "456 Innovation Avenue, Innovation Town",
      website: "http://globalinnovationsinc.com",
      email: "contact@globalinnovationsinc.com",
      tel: "+48 1111111111",
      position: {
        lat: 53.733643,
        lng: 19.731936,
      },
    },
    {
      companyName: "Data Dynamics Corp.",
      address: "789 Data Drive, Data City",
      website: "http://datadynamicscorp.com",
      email: "support@datadynamicscorp.com",
      tel: "+48 1111111111",
      position: {
        lat: 53.788497,
        lng: 15.94453,
      },
    },
    {
      companyName: "Creative Designs LLC",
      address: "101 Design Lane, Creative Town",
      website: "http://creativedesignsllc.com",
      email: "info@creativedesignsllc.com",
      tel: "+48 1111111111",
      position: {
        lat: 50.423928529779644,
        lng: 19.1087629822001,
      },
    },
    {
      companyName: "Infinite Technologies Group",
      address: "202 Infinite Road, Infinite City",
      website: "http://infinitetechnologiesgroup.com",
      email: "contact@infinitetechnologiesgroup.com",
      tel: "+48 1111111111",
      position: {
        lat: 51.423928529779644,
        lng: 19.1087629822001,
      },
    },
    {
      companyName: "Global Innovations Inc.",
      address: "456 Innovation Avenue, Innovation Town",
      website: "http://globalinnovationsinc.com",
      email: "contact@globalinnovationsinc.com",
      tel: "+48 1111111111",
      position: {
        lat: 52.40578635332598,
        lng: 19.10465384268522,
      },
    },
    {
      companyName: "Data Dynamics Corp.",
      address: "789 Data Drive, Data City",
      website: "http://datadynamicscorp.com",
      email: "support@datadynamicscorp.com",
      tel: "+48 1111111111",
      position: {
        lat: 50.38343706184458,
        lng: 23.1087629822001,
      },
    },
    {
      companyName: "Creative Designs LLC",
      address: "101 Design Lane, Creative Town",
      website: "http://creativedesignsllc.com",
      email: "info@creativedesignsllc.com",
      tel: "+48 1111111111",
      position: {
        lat: 52.423928529779644,
        lng: 22.0234043698518,
      },
    },
    {
      companyName: "Infinite Technologies Group",
      address: "202 Infinite Road, Infinite City",
      website: "http://infinitetechnologiesgroup.com",
      email: "contact@infinitetechnologiesgroup.com",
      tel: "+48 1111111111",
      position: {
        lat: 51.34576403052,
        lng: 22.04455090047453,
      },
    },
  ];

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
      map.current = new Map(mapRef.current as HTMLDivElement, mapOptions);

      partners.forEach((partner) => {
        const pinBackground = new PinElement({
          background: "#5ba5b0",
          glyphColor: "#FFF",
          borderColor: "#005157",
        });

        markerRef.current = new AdvancedMarkerElement({
          position: partner.position,
          map: map.current,
          title: partner.companyName,
          content: pinBackground.element,
        });

        markerRef.current.addListener(
          "click",
          ({ latLng }: { latLng: { lat: number; lng: number } }) => {
            map.current?.panTo(latLng);
            const targetLatLng = {
              lat: partner.position.lat,
              lng: partner.position.lng,
            };
            infoWindowRef.current?.close();
            infoWindowRef.current?.setContent(buildContent(partner));
            infoWindowRef.current?.open(map.current as google.maps.Map);
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
          <img class="marker__image" src="/logo.webp" width="60" height="60" alt="" />
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

  function focusOnPoint({ lat, lng }: { lat: number; lng: number }) {
    if (map.current && markerRef.current && infoWindowRef.current) {
      const targetLatLng = { lat: lat, lng: lng };
      infoWindowRef.current?.close();
      map.current.panTo(targetLatLng);
      infoWindowRef.current?.setContent(
        buildContent(
          partners.find(
            (partner) =>
              partner.position.lat === lat && partner.position.lng === lng
          )
        )
      );
      infoWindowRef.current?.setPosition(targetLatLng);
      infoWindowRef.current?.open(map.current as google.maps.Map);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <>
      <div className={styles.container__page}>
        <div className={styles.container__map} ref={mapRef} />
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
            className={styles.glass}
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
          <AnimatePresence>
            {filteredPartners.length === 0 ? (
              <motion.p
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Brak wyników
              </motion.p>
            ) : (
              filteredPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  className={styles.tile}
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() =>
                    focusOnPoint({
                      lat: partner.position.lat,
                      lng: partner.position.lng,
                    })
                  }
                >
                  <Image
                    className={styles.tile__image}
                    src="/logo.webp"
                    width={60}
                    height={60}
                    alt=""
                  />
                  <div className={styles.tile__wrapper}>
                    <h3 className={styles.tile__title}>
                      {partner.companyName}
                    </h3>
                    <p className={styles.paragraph}>{partner.address}</p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.tile__link}
                    >
                      {partner.website}
                    </a>
                    <a
                      href={`tel:${partner.tel}`}
                      className={styles.tile__link}
                    >
                      {partner.tel}
                    </a>
                    <a
                      href={`mailto:${partner.email}`}
                      className={styles.tile__link}
                    >
                      {partner.email}
                    </a>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};



*/}