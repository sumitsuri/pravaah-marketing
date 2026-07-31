import { brand } from "@/lib/content";

/** Opens WhatsApp chat with optional override message. */
export function whatsappHref(message = brand.whatsapp.defaultMessage): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${brand.whatsapp.phoneE164}?text=${text}`;
}
