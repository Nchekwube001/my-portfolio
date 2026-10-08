export const myEmail = "unekwenchekwube@gmail.com";
import dotHmo from "../assets/hmoLogo.svg";
import atlasRemit from "../assets/atlasremit.png";
import credellexLogo from "../assets/AppLogoWhite.svg";
import dotMfb from "../assets/dot.svg";
import monkeymusic from "../assets/monkeymusic.svg";
import worldhero from "../assets/worldhero.svg";
import digicore from "../assets/digicore.svg";
import tribapay from "../assets/tribapay2.svg";
import dotIcon from "../assets/dot.png";
import dotBusinessIcon from "../assets/dotbusiness.png";
import dotPayIcon from "../assets/dotpay.png";
import tribapayIcon from "../assets/tribapay.png";
import tribapayBusinessIcon from "../assets/tribusiness.png";
import unifiIcon from "../assets/unifi.png";
import lapoIcon from "../assets/lapo.png";
import fusionIcon from "../assets/fusion.png";
import locatrackIcon from "../assets/locatrack.png";
import safepazzIcon from "../assets/safepazz.png";
import kinnectIcon from "../assets/kinnect.png";
import advantageIcon from "../assets/advantage.png";
import leetaIcon from "../assets/leeta.png";
export type ProjectSector =
  | "Money"
  | "Health"
  | "Energy"
  | "Safety"
  | "Insurance"
  | "Relationships"
  | "Community";

interface projectType {
  title: string;
  desc: string;
  icon: string;
  sector: ProjectSector;
  playUrl?: string;
  appUrl?: string;
}
export const PROJECTS: projectType[] = [
  {
    title: "DOT Business",
    desc: "A mobile banking app for businesses to manage payments and move money.",
    icon: dotBusinessIcon,
    sector: "Money",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.app.dotbusiness",
  },
  {
    title: "Leeta",
    desc: "A gas refill app connecting customers with nearby vendors for ordering, delivery tracking, and in-app payments.",
    icon: leetaIcon,
    sector: "Energy",
    appUrl: "https://apps.apple.com/us/app/leeta/id6755038826",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.leetatech.customer",
  },
  {
    title: "Atlas Remit",
    desc: "A digital wallet for bank transfers, wallet funding, and transaction tracking.",
    icon: atlasRemit,
    sector: "Money",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.phrancix.AtlasRemit",
  },
  {
    title: "Dot Personal Banking App",
    desc: "A mobile banking app for everyday transactions, with customer support available around the clock.",
    icon: dotIcon,
    sector: "Money",
    appUrl: "https://apps.apple.com/us/app/dot-by-changan-rts-mfb/id1605176010",
    playUrl: "https://play.google.com/store/apps/details?id=com.digicore.dot",
  },

  {
    title: "DOTPay",
    desc: "A payments app connecting customers with agents for transfers and bill payments.",
    icon: dotPayIcon,
    sector: "Money",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.dotpayafrica.dotpay.mobile",
  },
  {
    title: "Dot HMO",
    desc: "A healthcare app designed to make accessing and managing health services more straightforward.",
    icon: dotHmo,
    sector: "Health",
    playUrl: "https://play.google.com/store/apps/details?id=com.app.dothmo",
  },
  {
    title: "Tribapay",
    desc: "A payments app with Cashpin transactions and a feature for converting airtime to cash.",
    icon: tribapayIcon,
    sector: "Money",
    appUrl:
      "https://apps.apple.com/ng/app/tribapay-redefining-payments/id1630686804",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.tribapay&hl=en&gl=US",
  },
  {
    title: "Tribapay Business",
    desc: "A business payments app for transfers, payment links, bills, and virtual cards.",
    icon: tribapayBusinessIcon,
    sector: "Money",
    appUrl: "https://apps.apple.com/ng/app/tribapay-business/id6497878820",
    playUrl: "https://play.google.com/store/apps/details?id=com.tpbusiness",
  },

  {
    title: "UniFi",
    desc: "Unity Bank’s mobile app for account management, transfers, bills, airtime, and more.",
    icon: unifiIcon,
    sector: "Money",
    appUrl: "https://apps.apple.com/ng/app/unifi-by-unity-bank/id1433927004",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.teamapt.unitymobile",
  },
  {
    title: "LAPO Mobile App",
    desc: "A mobile banking app for LAPO Microfinance Bank customers.",
    icon: lapoIcon,
    sector: "Money",
    appUrl: "https://apps.apple.com/ng/app/lapo-mobile-app/id6448030325",
    playUrl: "https://play.google.com/store/apps/details?id=com.digicore.lapo",
  },
  {
    title: "Safepazz",
    desc: "A visitor access platform for residential communities, schools, government buildings, and workplaces.",
    icon: safepazzIcon,
    sector: "Safety",
    appUrl: "https://apps.apple.com/ng/app/safepazz/id6502186332",
    playUrl: "https://play.google.com/store/apps/details?id=com.safepazz.app",
  },
  {
    title: "Advantage Connect",
    desc: "A financial planning app that connects people with a Life Planner for personalized protection guidance.",
    icon: advantageIcon,
    sector: "Insurance",
    appUrl: "https://apps.apple.com/ng/app/advantageconnect/id6447586720",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.digicore.advantageapp",
  },
  {
    title: "Advantage Connect Life Planner",
    desc: "A mobile app that helps Life Planners manage client relationships and financial protection guidance.",
    icon: advantageIcon,
    sector: "Insurance",
    appUrl:
      "https://apps.apple.com/ng/app/advantageconnect-lifeplanner/id6447558010",
    playUrl: "https://play.google.com/store/apps/details?id=com.enterpriselife",
  },
  {
    title: "Kinnect",
    desc: "A relationships app combining coaching and personalized guidance for friendships and romantic connections.",
    icon: kinnectIcon,
    sector: "Relationships",
    playUrl: "https://play.google.com/store/apps/details?id=com.app.kinnect",
  },
  {
    title: "Fusion",
    desc: "A social platform for communities, creator content, events, and everyday payments.",
    icon: fusionIcon,
    sector: "Community",
    appUrl: "https://apps.apple.com/ng/app/fusion-by-c-one/id1671525916",
    playUrl: "https://play.google.com/store/apps/details?id=com.cone.fusion",
  },
  {
    title: "LocaTrack",
    desc: "A location sharing and safety app for keeping track of people, vehicles, and devices.",
    icon: locatrackIcon,
    sector: "Safety",
    appUrl: "https://apps.apple.com/ng/app/locatrack/id1515871533",
    playUrl:
      "https://play.google.com/store/apps/details?id=za.co.smartcall.locatrack",
  },
  {
    title: "WorldHero Pay",
    desc: "A multi-currency payments app for sending money to more than 20 countries, paying bills, and using virtual cards.",
    icon: worldhero,
    sector: "Money",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.worldhero.swiftpay",
    appUrl: "https://apps.apple.com/ng/app/worldhero-pay/id6504638005",
  },
];

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Senior Mobile Engineer",
    company: "Dotlabs",
    icon: dotMfb,
  },
  {
    year: "2024 - 2025",
    role: "Senior Mobile Engineer",
    company: "World Hero",
    icon: worldhero,
  },
  {
    year: "2024 - 2025",
    role: "Senior Mobile Engineer",
    company: "Credellex",
    icon: credellexLogo,
  },
  {
    year: "2023 - 2024",
    role: "Senior Mobile Engineer",
    company: "Tribapay",
    icon: tribapay,
  },
  {
    year: "2021 - 2024",
    role: "Mobile Engineer",
    company: "Digicore",
    icon: digicore,
  },
  {
    year: "2021 - 2024",
    role: "Software Engineer",
    company: "Monkey Music",
    icon: monkeymusic,
  },
];
