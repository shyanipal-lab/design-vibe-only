import GradientMenu from "@/components/ui/gradient-menu";
import { IoHomeOutline, IoPersonOutline, IoBriefcaseOutline, IoGameControllerOutline, IoChatbubbleOutline } from 'react-icons/io5';

const DEMO_ITEMS = [
  { label: "Home", href: "#", icon: <IoHomeOutline />, id: "home", gradientFrom: '#037DD6', gradientTo: '#02c39a' },
  { label: "About", href: "#", icon: <IoPersonOutline />, id: "about", gradientFrom: '#037DD6', gradientTo: '#F6851B' },
  { label: "Work", href: "#", icon: <IoBriefcaseOutline />, id: "work", gradientFrom: '#F6851B', gradientTo: '#FFD02F' },
  { label: "Games", href: "#", icon: <IoGameControllerOutline />, id: "fun", gradientFrom: '#0500FF', gradientTo: '#037DD6' },
  { label: "Chat", href: "#", icon: <IoChatbubbleOutline />, id: "contact", gradientFrom: '#F6851B', gradientTo: '#f434e2' },
];

export default function Demo() {
  return (
    <div className="flex w-full h-screen justify-center items-center bg-zinc-950">
      <GradientMenu items={DEMO_ITEMS} />
    </div>
  );
}
