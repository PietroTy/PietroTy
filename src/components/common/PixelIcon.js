import React from "react";
import { Calendar } from "pixelarticons/react/Calendar";
import { Clock } from "pixelarticons/react/Clock";
import { Mail } from "pixelarticons/react/Mail";
import { User } from "pixelarticons/react/User";
import { Briefcase } from "pixelarticons/react/Briefcase";
import { Lock } from "pixelarticons/react/Lock";
import { ExternalLink } from "pixelarticons/react/ExternalLink";
import { ChevronLeft } from "pixelarticons/react/ChevronLeft";
import { ChevronRight } from "pixelarticons/react/ChevronRight";
import { ChevronDown } from "pixelarticons/react/ChevronDown";
import { Whatsapp } from "pixelarticons/react/Whatsapp";
import { Github } from "pixelarticons/react/Github";
import { Instagram } from "pixelarticons/react/Instagram";
import { Linkedin } from "pixelarticons/react/Linkedin";
import { Code } from "pixelarticons/react/Code";
import { Terminal } from "pixelarticons/react/Terminal";
import { Headphone } from "pixelarticons/react/Headphone";
import { MapPin } from "pixelarticons/react/MapPin";
import { WarningDiamond } from "pixelarticons/react/WarningDiamond";
import { Reload } from "pixelarticons/react/Reload";
import { Check } from "pixelarticons/react/Check";
import { Notes } from "pixelarticons/react/Notes";

const ICON_MAP = {
  calendar: Calendar,
  clock: Clock,
  mail: Mail,
  user: User,
  briefcase: Briefcase,
  lock: Lock,
  "external-link": ExternalLink,
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "chevron-down": ChevronDown,
  "arrow-down": ChevronDown,
  "message-text": Whatsapp,
  whatsapp: Whatsapp,
  code: Code,
  camera: Instagram,
  instagram: Instagram,
  terminal: Terminal,
  headphone: Headphone,
  spotify: Headphone,
  pin: MapPin,
  "map-pin": MapPin,
  alert: WarningDiamond,
  reload: Reload,
  check: Check,
  notes: Notes,
  linkedin: Linkedin,
  github: Github,
};

export default function PixelIcon({ name, className = "", style = {}, size = 18, ...props }) {
  const IconComponent = ICON_MAP[name] || Calendar;
  return (
    <IconComponent
      width={size}
      height={size}
      className={`pixel-icon ${className}`}
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        shapeRendering: "crispEdges",
        imageRendering: "pixelated",
        flexShrink: 0,
        ...style,
      }}
      {...props}
    />
  );
}
