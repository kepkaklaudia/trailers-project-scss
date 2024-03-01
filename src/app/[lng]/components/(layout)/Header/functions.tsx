export const handleScroll = ({
  backgroundRef,
  headerRef,
  setIsScrolled,
}: {
  backgroundRef: React.RefObject<HTMLDivElement>;
  headerRef: React.RefObject<HTMLElement>;
  setIsScrolled: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const scrollTop = window.scrollY;
  if (backgroundRef.current !== null && headerRef.current !== null) {
    const backgroundHeight = backgroundRef.current.clientHeight;
    const headerHeight = headerRef.current.clientHeight;
    const height = backgroundHeight - headerHeight;
    setIsScrolled(scrollTop >= height);
  }
};
