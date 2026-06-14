export const SVIPGEMS_IMAGE_DIR = "/svipgems-images" as const;

export type SvipgemsImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

export const HERO_IMAGE: SvipgemsImage = {
  src: `${SVIPGEMS_IMAGE_DIR}/svipgems-76.jpeg`,
  alt: "SVIP Gems Game app showing slot games, Fortune Tiger, and casino titles on Android",
  width: 300,
  height: 168,
  caption: "SVIP Gems game lobby on Android",
};

export const OG_IMAGE: SvipgemsImage = {
  src: `${SVIPGEMS_IMAGE_DIR}/svipgems-1.jpeg`,
  alt: "SVIP Gems Game Android app interface with games and Easypaisa JazzCash payment options",
  width: 275,
  height: 183,
  caption: "SVIP Gems app interface preview",
};

export const SCREENSHOTS: SvipgemsImage[] = [
  {
    src: `${SVIPGEMS_IMAGE_DIR}/svipgems-1.jpeg`,
    alt: "SVIP Gems app home screen with game categories and navigation menu",
    width: 275,
    height: 183,
    caption: "Home screen",
  },
  {
    src: `${SVIPGEMS_IMAGE_DIR}/svipgems-2.jpeg`,
    alt: "SVIP Gems games lobby showing Teen Patti, slots, and color prediction games",
    width: 183,
    height: 275,
    caption: "Games lobby",
  },
  {
    src: `${SVIPGEMS_IMAGE_DIR}/svipgems-6.jpeg`,
    alt: "SVIP Gems mobile app wallet screen with Easypaisa and JazzCash deposit options",
    width: 165,
    height: 306,
    caption: "Wallet & deposits",
  },
  {
    src: `${SVIPGEMS_IMAGE_DIR}/svipgems6.jpeg`,
    alt: "SVIP Gems Android app main dashboard with bonus banner and play buttons",
    width: 154,
    height: 327,
    caption: "App dashboard",
  },
  {
    src: `${SVIPGEMS_IMAGE_DIR}/svipgems-76.jpeg`,
    alt: "SVIP Gems slot games screen showing Fortune Tiger and popular casino titles",
    width: 300,
    height: 168,
    caption: "Slot games",
  },
  {
    src: `${SVIPGEMS_IMAGE_DIR}/svipgems8.jpeg`,
    alt: "SVIP Gems game selection screen with Dragon Tiger, Roulette, and card games",
    width: 275,
    height: 183,
    caption: "Game selection",
  },
  {
    src: `${SVIPGEMS_IMAGE_DIR}/svipgems-download.jpeg`,
    alt: "SVIP Gems APK download page for Android with install instructions",
    width: 306,
    height: 165,
    caption: "APK download",
  },
];

export function getSchemaScreenshots(baseUrl: string): string[] {
  return SCREENSHOTS.map((image) => `${baseUrl}${image.src}`);
}
