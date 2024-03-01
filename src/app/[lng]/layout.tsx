import "normalize.css/normalize.css";
import "./styles/bootstrap.scss";
import "./styles/swiper.scss";
import "./styles/globals.scss";
import { Barlow } from "next/font/google";

import { register } from "swiper/element/bundle";
register();

import { NextIntlClientProvider, useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { TanstackWrapper } from "./TanstackWrapper";
import Script from "next/script";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Balhanger",
  description:
    "Balhanger - We offer trailers adapted to various types of use. Check our offer!",
};

interface Props {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: Props) {
  const locale = useLocale();
  let messages;
  try {
    messages = (await import(`@/lib/i18n/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={barlow.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <TanstackWrapper>{children}</TanstackWrapper>
        </NextIntlClientProvider>
      </body>
      <Script src="https://ucarecdn.com/libs/widget/3.x/uploadcare.full.min.js" />
    </html>
  );
}
