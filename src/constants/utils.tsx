export const myEmail = "unekwenchekwube@gmail.com";
import credellex from "../assets/AppLogoWhite.svg";
import dotHmo from "../assets/hmoLogo.svg";
import dotMfb from "../assets/dot.svg";
import kinnect from "../assets/kinnect.svg";
import monkeymusic from "../assets/monkeymusic.svg";
import worldhero from "../assets/worldhero.svg";
import digicore from "../assets/digicore.svg";
import tribapay from "../assets/tribapay2.svg";
import enterprise from "../assets/enterprise.svg";
import safepazz from "../assets/safepazz.svg";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { FaSwift, FaFlutter } from "react-icons/fa6";
import { SiKotlin, SiTypescript } from "react-icons/si";

export const technologyList = [
  {
    reactNative: <RiReactjsLine className="text-4xl text-cyan-400" />,
  },
  {
    typescript: <SiTypescript className="text-4xl text-blue-400" />,
  },
  {
    node: <FaNodeJs className="text-4xl text-green-500" />,
  },
  {
    flutter: <FaFlutter className="text-4xl text-blue-400" />,
  },
  {
    kotlin: <SiKotlin className="text-4xl text-purple-400" />,
  },
  {
    swift: <FaSwift className="text-4xl text-orange-500" />,
  },
];
export const HERO_CONTENT =
  "Senior Mobile Engineer with 6+ years of experience delivering cross-platform applications across fintech, health, and e-commerce. Proven ability to lead and scale mobile solutions — from architecture to production — with over 12 apps live on iOS and Android, some surpassing 1M+ users. Expert in Flutter, Kotlin, Jetpack Compose, and React Native (Expo), with a strong eye for clean UI, performance, and end-user experience. Adept at collaborating with designers, backend teams, and stakeholders to deliver high-quality, user-driven mobile solutions.";

interface projectType {
  title: string;
  desc: string;
  icon: string;
  playUrl?: string;
  appUrl?: string;
}
export const PROJECTS: projectType[] = [
  {
    title: "Dot Personal Banking App",
    desc: "Banking should not frustrate you.Whether it's online, phone, or smartphone banking, we're here around the clock, every single day, to make your banking sweet.",
    icon: dotMfb,
    appUrl: "https://apps.apple.com/us/app/dot-by-changan-rts-mfb/id1605176010",
    playUrl: "https://play.google.com/store/apps/details?id=com.digicore.dot",
  },
  {
    title: "Dot HMO",
    desc: "Your Health, Simplified. At Dot HMO, we make accessing and managing your healthcare straightforward and stress-free. Our app is designed to provide you with everything you need to stay on top of your health and wellness",
    icon: dotHmo,
    playUrl: "https://play.google.com/store/apps/details?id=com.app.dothmo",
  },
  {
    title: "Tribapay",
    desc: "Tribapay empowers you with a suite of dynamic features designed to deliver real results. From secure Cashpin transactions to transforming airtime into cash, Tribapay ensures your financial journey is seamless, efficient, and rewarding.",
    icon: tribapay,
    appUrl:
      "https://apps.apple.com/ng/app/tribapay-redefining-payments/id1630686804",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.tribapay&hl=en&gl=US",
  },
  {
    title: "Credellex",
    desc: "Credellex is a finance platform where you can enjoy secure, fast, and reliable financial services. Credellex guarantees security for buyers and sellers. Conduct your transactions with confidence.",
    icon: credellex,
    appUrl: "https://apps.apple.com/ng/app/credellex/id6737557030",
  },
  {
    title: "Safepazz",
    desc: "SafePazz, is an innovative software-as-a-service (SaaS) platform developed by CamelCase Technologies Limited dedicated to enhancing the security and management of visitor access in diverse settings such as residential estates, government buildings, schools, and corporate facilities.",
    icon: safepazz,
    appUrl: "https://apps.apple.com/ng/app/safepazz/id6502186332",
    playUrl: "https://play.google.com/store/apps/details?id=com.safepazz.app",
  },
  {
    title: "Advantage Connect",
    desc: "Introducing AdvantageConnect : Your Financial Security companion! AdvantageConnect easily connects you to a Life Planner who can help you in many ways to plan and manage your future with personalized financial protection against some of life's inevitable events as well as its uncertainties",
    icon: enterprise,
    appUrl: "https://apps.apple.com/ng/app/advantageconnect/id6447586720",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.digicore.advantageapp",
  },
  {
    title: "Kinnect",
    desc: "Kinnect is specifically designed to foster authentic relationships. Whether you're nurturing an existing connection or seeking new ones, our platform combines expert coaching with personalized guidance to help you thrive in love and friendships. Join our supportive community, develop valuable insights, and discover what it means to truly belong.",
    icon: kinnect,
    playUrl: "https://play.google.com/store/apps/details?id=com.app.kinnect",
  },
  {
    title: "WorldHero Pay",
    desc: "Send money to over 20 countries with competitive exchange rates and low fees. Pay bills, shop online, and make in-app purchases seamlessly with our secure virtual cards. Manage multiple currencies in one convenient app. Enjoy lightning-fast transfers that typically arrive within minutes. Benefit from 24/7 customer support and robust security measures. Download WorldHero Pay today and experience the freedom of global finance.",
    icon: worldhero,
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
    icon: credellex,
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
