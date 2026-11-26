import { HERO_IMAGE } from "@/lib/svipgems/images";
import { CLUB_HERO_IMAGE } from "@/lib/svipclub/images";
import { SLOT_HERO_IMAGE } from "@/lib/svipslot/images";

export const SVIP_GAME_CARDS = [
  {
    path: "/",
    name: "SVIP Gems",
    blurb: "Android APK guide for slots, Easypaisa and JazzCash deposits, withdrawals, and bonuses.",
    image: HERO_IMAGE,
  },
  {
    path: "/svip-club",
    name: "SVIP Club",
    blurb: "Official svip-club.com casino: live tables, EasyPaisa, JazzCash, and the welcome match.",
    image: CLUB_HERO_IMAGE,
  },
  {
    path: "/svip-slot",
    name: "SVIP Slot",
    blurb: "Slot-first APK with WhatsApp/SMS signup, Super Offer extras, and JazzCash QR top-ups.",
    image: SLOT_HERO_IMAGE,
  },
] as const;

export function getOtherSvipGames(currentPath: string) {
  return SVIP_GAME_CARDS.filter((game) => game.path !== currentPath);
}
