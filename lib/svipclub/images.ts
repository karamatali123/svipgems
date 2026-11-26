import type { SvipgemsImage } from "@/lib/svipgems/images";

export const SVIP_CLUB_IMAGE_DIR = "/svip-club-images" as const;

export const CLUB_HERO_IMAGE: SvipgemsImage = {
  src: `${SVIP_CLUB_IMAGE_DIR}/svip-club-logo.webp`,
  alt: "SVIP Club Casino official logo with red plane and gold Svip Club wordmark",
  width: 512,
  height: 512,
  caption: "Official SVIP Club app icon",
};

export const CLUB_SCREENSHOTS: SvipgemsImage[] = [
  {
    src: `${SVIP_CLUB_IMAGE_DIR}/svip-club-games-lobby.webp`,
    alt: "SVIP Club app games lobby with Aviator, Fortune Gems, Chicken Road, and jackpot slots",
    width: 460,
    height: 1024,
    caption: "Games lobby",
  },
  {
    src: `${SVIP_CLUB_IMAGE_DIR}/svip-club-slots.webp`,
    alt: "SVIP Club slots lobby showing Fortune Gems, Fortune Rabbit, Mahjong Ways, and Crazy777",
    width: 460,
    height: 1024,
    caption: "Slots lobby",
  },
  {
    src: `${SVIP_CLUB_IMAGE_DIR}/svip-club-deposit.webp`,
    alt: "SVIP Club deposit screen with PKR amounts from 100 to 50,000 and Extra 100 percent first deposit",
    width: 460,
    height: 1024,
    caption: "Deposit amounts",
  },
  {
    src: `${SVIP_CLUB_IMAGE_DIR}/svip-club-deposit-method.webp`,
    alt: "SVIP Club deposit methods EasyPaisa QR, JazzCash, and Easypaisa in Pakistan",
    width: 460,
    height: 1024,
    caption: "EasyPaisa & JazzCash",
  },
  {
    src: `${SVIP_CLUB_IMAGE_DIR}/svip-club-promotions.webp`,
    alt: "SVIP Club promotions including weekly check-in, VIP upgrade, agent promo, and slot bet rank",
    width: 460,
    height: 1024,
    caption: "Promotions",
  },
  {
    src: `${SVIP_CLUB_IMAGE_DIR}/svip-club-super-offer.webp`,
    alt: "SVIP Club Super Offer recharge extras from PKR 10 to 50 on one-time deposits",
    width: 460,
    height: 1024,
    caption: "Super Offer",
  },
];
