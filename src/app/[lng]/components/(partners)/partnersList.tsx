import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { PartnersListProps } from "@/app/[lng]/components/(partners)/types";
import styles from "@/app/[lng]/components/(partners)/partnersList.module.scss";

export const PartnersList = ({
  mapRef,
  infoWindowRef,
  markerRef,
  partners,
  filteredPartners,
  buildContent,
}: PartnersListProps) => {
  const t = useTranslations("partners");

  const initial = { opacity: 0, y: 0 };
  const animate = { opacity: 1, y: 0 };
  const transition = { duration: 0.2 };

  function focusOnPoint({ lat, lng }: { lat: number; lng: number }) {
    if (mapRef.current && markerRef.current && infoWindowRef.current) {
      const targetLatLng = { lat: lat, lng: lng };
      infoWindowRef.current?.close();
      mapRef.current.panTo(targetLatLng);
      infoWindowRef.current?.setContent(
        buildContent(
          partners.find(
            (partner) =>
              partner.position.lat === lat && partner.position.lng === lng
          )
        )
      );
      infoWindowRef.current?.setPosition(targetLatLng);
      infoWindowRef.current?.open(mapRef.current as google.maps.Map);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <AnimatePresence>
      {filteredPartners.length === 0 ? (
        <motion.p initial={initial} animate={animate} transition={transition}>
          {t("No results")}
        </motion.p>
      ) : (
        filteredPartners.map((partner, index) => (
          <motion.div
            key={index}
            className={styles.tile}
            initial={initial}
            animate={animate}
            transition={transition}
            onClick={() =>
              focusOnPoint({
                lat: partner.position.lat,
                lng: partner.position.lng,
              })
            }
          >
            <Image
              className={styles.tile__image}
              src={`${partner.src}`}
              width={60}
              height={60}
              alt={partner.src}
            />
            <div className={styles.tile__wrapper}>
              <h3 className={styles.tile__title}>{partner.companyName}</h3>
              <p className={styles.tile__paragraph}>{partner.address}</p>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.tile__link}
              >
                {partner.website}
              </a>
              <a href={`tel:${partner.tel}`} className={styles.tile__link}>
                {partner.tel}
              </a>
              <a href={`mailto:${partner.email}`} className={styles.tile__link}>
                {partner.email}
              </a>
            </div>
          </motion.div>
        ))
      )}
    </AnimatePresence>
  );
};
