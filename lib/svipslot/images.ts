import type { SvipgemsImage } from "@/lib/svipgems/images";

export const SVIP_SLOT_IMAGE_DIR = "/svip-slot-images" as const;

export const SLOT_HERO_IMAGE: SvipgemsImage = {
  src: `${SVIP_SLOT_IMAGE_DIR}/svip-slot-logo.webp`,
  alt: "SVIP Slot official logo with red plane marked SS and gold SvipSlot wordmark",
  width: 554,
  height: 554,
  caption: "Official SVIP Slot app icon",
};

export const SLOT_SCREENSHOTS: SvipgemsImage[] = [
  {
    src: `${SVIP_SLOT_IMAGE_DIR}/svip-slot-games-lobby.webp`,
    alt: "SVIP Slot games lobby with Aviator, Fortune Gems, Chicken Road, Fishing Frenzy, and jackpot slots",
    width: 371,
    height: 742,
    caption: "Games lobby",
  },
  {
    src: `${SVIP_SLOT_IMAGE_DIR}/svip-slot-register.webp`,
    alt: "SVIP Slot Verify and Win signup with WhatsApp or SMS OTP for Pakistan +92 numbers",
    width: 376,
    height: 750,
    caption: "Register with OTP",
  },
  {
    src: `${SVIP_SLOT_IMAGE_DIR}/svip-slot-super-offer.webp`,
    alt: "SVIP Slot Super Offer recharge extras up to 60 credits on one-time deposits",
    width: 376,
    height: 750,
    caption: "Super Offer",
  },
  {
    src: `${SVIP_SLOT_IMAGE_DIR}/svip-slot-invite.webp`,
    alt: "SVIP Slot invite friends ranking bonus up to PKR 300",
    width: 376,
    height: 750,
    caption: "Invite friends",
  },
  {
    src: `${SVIP_SLOT_IMAGE_DIR}/svip-slot-splash.webp`,
    alt: "SVIP Slot loading screen with VPN access tip and licensing marks",
    width: 376,
    height: 751,
    caption: "App splash",
  },
  {
    src: `${SVIP_SLOT_IMAGE_DIR}/svip-slot-badge.webp`,
    alt: "SVipSlot Game gold badge logo with slot reel and seven symbol",
    width: 554,
    height: 554,
    caption: "SVipSlot Game badge",
  },
];
