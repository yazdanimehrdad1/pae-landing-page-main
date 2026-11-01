import {
  BarChart3,
  Boxes,
  FlaskConical,
  LineChart,
  Plug,
  ShieldCheck,
  Siren,
  Smartphone,
  Zap,
} from "lucide-react";
import { ComponentType } from "react";

export interface FeatureStat {
  value: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeatureCategory {
  id: string;
  tabLabel: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  stats: FeatureStat[];
  features: FeatureItem[];
}

export const featureCategories: FeatureCategory[] = [
  {
    id: "connect",
    tabLabel: "Connect",
    icon: Plug,
    title: "Connecting to the plant",
    stats: [
      { value: "10 s", label: "Modbus TCP poll" },
      { value: "16", label: "Register data types" },
      { value: "1 click", label: "Device ping" },
      { value: "0", label: "Duplicate readings" },
    ],
    features: [
      {
        title: "Talks to field devices directly",
        description:
          "Polls site controllers and devices over Modbus TCP every 10 seconds, either through an edge aggregator or straight to each device.",
      },
      {
        title: "Decodes 16 register data types",
        description:
          "16-, 32- and 64-bit integers, floats, enums, bitfields and status words, with configurable byte and word order and scaling. Whatever byte order the vendor chose, PlusDAS reads it correctly.",
      },
      {
        title: "Self-optimising reads",
        description:
          "PlusDAS works out the fewest block reads that cover every point, which keeps traffic on the plant network low. Engineers can override and lock the ranges.",
      },
      {
        title: "Data quality on every value",
        description:
          "Each reading carries a quality flag (good, bad address, bad conversion…), so a bad number is never quietly trended as a real one.",
      },
      {
        title: "Device ping",
        description:
          "One click shows whether a device is reachable, its latency in milliseconds and any connection error.",
      },
      {
        title: "Built to scale safely",
        description:
          "Only one copy of the poller runs at a time, even when the service is replicated, so readings are never duplicated.",
      },
    ],
  },
  {
    id: "model",
    tabLabel: "Model",
    icon: Boxes,
    title: "Modelling the site",
    stats: [
      { value: "100s", label: "Points edited at once" },
      { value: "20", label: "Points per virtual calc" },
      { value: "kW ⇄ MW", label: "Automatic scaling" },
      { value: "Every", label: "Time zone, searchable" },
    ],
    features: [
      {
        title: "Sites → devices → points",
        description:
          "A clean hierarchy for batteries, inverters, PV, meters, relays, generators, RTACs and more.",
      },
      {
        title: "Excel-like point editor",
        description:
          "Edit hundreds of register points at once in a spreadsheet grid with copy/paste from Excel, fill-down, multi-cell select, undo and filters.",
      },
      {
        title: "Human-readable states",
        description:
          "Give each enum code and bit a name (\"Bit 3 = Door open\"), and those labels appear in every chart, table and alarm.",
      },
      {
        title: "Standardised points",
        description:
          "Link each vendor's register to one common vocabulary, with automatic kW/MW unit scaling. \"State of charge\" then means the same thing on every battery.",
      },
      {
        title: "Virtual points: calculations",
        description:
          "Sum, average, min, max, difference or ratio over up to 20 points, such as total site PV or net export.",
      },
      {
        title: "Virtual points: conditions",
        description:
          "Turn raw values into named states with ALL/ANY rules (\"Charging\", \"Standby\", \"Fault\"), written up as a plain-English summary.",
      },
      {
        title: "Recording you control",
        description:
          "Switch recording on or off per point to save storage. PlusDAS refuses to turn off a point that an alarm or calculation depends on.",
      },
      {
        title: "Time zone aware",
        description:
          "Each site has its own time zone, chosen from a searchable list of every zone with its current UTC offset.",
      },
    ],
  },
  {
    id: "historian",
    tabLabel: "Historian",
    icon: LineChart,
    title: "Historian: the plant's memory",
    stats: [
      { value: "4 × 4", label: "Workspaces × charts" },
      { value: "3 days", label: "Every raw reading" },
      { value: "72 h", label: "PV forecast ahead" },
      { value: "0", label: "Spikes lost to sampling" },
    ],
    features: [
      {
        title: "Saved trend workspaces",
        description:
          "Up to 4 saved trend workspaces, each with up to 4 stacked charts. Workspace tabs can be reordered by dragging.",
      },
      {
        title: "Smart sampling",
        description:
          "Up to 3 days of data shows every raw reading. Longer ranges are downsampled so peaks and dips are preserved and no spike disappears.",
      },
      {
        title: "Honest gaps",
        description:
          "When a device goes quiet, the line breaks rather than drawing a straight line across the outage.",
      },
      {
        title: "Drag to zoom",
        description: "Select a time window and the data is fetched again at full detail.",
      },
      {
        title: "Discrete states shown clearly",
        description:
          "Plot an enum or bitfield as coloured state lanes under the chart, or as step lines. Individual bits can be plotted on their own.",
      },
      {
        title: "Forecast vs. actual",
        description:
          "Overlay a weather-driven PV forecast up to 72 hours ahead, calculated per array from tilt, azimuth, temperature and losses.",
      },
      {
        title: "Smart axes and styling",
        description:
          "One axis per unit, per point or shared; series colours chosen by meaning (real power green, reactive power grey); custom line styles saved per trend.",
      },
      {
        title: "Click a legend entry to find the point",
        description: "It scrolls to the point in the asset tree and highlights it.",
      },
      {
        title: "Site time or my time",
        description:
          "One toggle switches the times shown on every page, and it syncs across open browser tabs.",
      },
    ],
  },
  {
    id: "live",
    tabLabel: "Live ops",
    icon: Zap,
    title: "Live operations",
    stats: [
      { value: "13", label: "SLD element types" },
      { value: "5", label: "Saved debug sessions" },
      { value: "Live", label: "Registers in the browser" },
      { value: "Rule", label: "Checks as you draw" },
    ],
    features: [
      {
        title: "Live single-line diagram",
        description:
          "The site's electrical drawing shows live voltages, currents, battery state of charge, power, irradiance and a health verdict next to each element.",
      },
      {
        title: "SLD editor",
        description:
          "Build the one-line yourself from 13 element types (grid, POI, transformers, breakers, inverters, BESS, PV, wind, generators…), link each element to its device, and get rule checks as you edit.",
      },
      {
        title: "Smooth navigation",
        description:
          "Wheel-zoom toward the cursor, Space+drag to pan, and fit to screen, like a design tool.",
      },
      {
        title: "Live register streaming",
        description:
          "Watch raw Modbus registers update in real time in the browser. Up to 5 saved debug sessions can be resumed after a page reload.",
      },
      {
        title: "Point snapshots",
        description:
          "A side-by-side table of each point's last several polls, with enums decoded and bitfields expanded.",
      },
    ],
  },
  {
    id: "alarms",
    tabLabel: "Alarms",
    icon: Siren,
    title: "Alarms that respect engineers",
    stats: [
      { value: "ISA-18.2", label: "Alarm management" },
      { value: "ISA-101", label: "Operator screens" },
      { value: "±1 min", label: "Root-cause window" },
      { value: "No-code", label: "Rule builder" },
    ],
    features: [
      {
        title: "Built to ISA-18.2 and ISA-101",
        description:
          "The industry standards for alarm management and operator screens. Grey means normal, colour means act, and every severity has a colour, a shape and a word, so it reads for colour-blind users and in greyscale.",
      },
      {
        title: "App-wide alarm bell",
        description:
          "It rings red for faults and amber for warnings on every page, including on a phone.",
      },
      {
        title: "No-code rule builder",
        description:
          "Threshold rules (with deadband), multi-point ALL/ANY conditions, bit tests and \"device went silent\" detection, each with optional delays.",
      },
      {
        title: "Rules in plain English",
        description: "Each rule is written out in words with real device and point names.",
      },
      {
        title: "Trustworthy logic",
        description: "Missing or stale data never triggers or clears an alarm by mistake.",
      },
      {
        title: "Gantt-style alarm history",
        description:
          "Every event on a timeline lane per device. Select one and \"show events within ±1 min\" to find the root cause in a cascade.",
      },
      {
        title: "Site-specific alarms",
        description:
          "Alarms written for a particular plant are kept in sync with that plant's code.",
      },
    ],
  },
  {
    id: "reports",
    tabLabel: "Reports",
    icon: BarChart3,
    title: "Reports on autopilot",
    stats: [
      { value: "5", label: "Block types" },
      { value: "3", label: "Export formats" },
      { value: "Hourly", label: "To monthly schedules" },
      { value: "Same", label: "Numbers every time" },
    ],
    features: [
      {
        title: "Drag-together report builder",
        description:
          "5 block types: text, key figures, charts, statistics tables and alarm event logs.",
      },
      {
        title: "Template variables",
        description:
          "Write \"{site_name} peak export was {point:34.max}\" and PlusDAS fills in the numbers.",
      },
      {
        title: "Flexible periods",
        description:
          "Rolling (\"last 24 h\"), calendar (\"last month\") or custom, always on the site's own clock.",
      },
      {
        title: "Scheduling",
        description:
          "Hourly, daily, weekly on chosen days or monthly, described in plain words (\"Every Monday and Friday at 07:30\"), with automatic clean-up of old reports.",
      },
      {
        title: "Reproducible",
        description:
          "Each report is stored as a snapshot, so it shows the same numbers every time it's opened.",
      },
      {
        title: "Export anywhere",
        description:
          "PDF (always printed in a clean light theme), CSV per table, or JSON for the whole report.",
      },
      {
        title: "Built-in plant KPIs",
        description:
          "Inverter availability, energy produced and point-of-interconnection peak and average power, ready to drop into a report.",
      },
    ],
  },
  {
    id: "simulator",
    tabLabel: "Simulator",
    icon: FlaskConical,
    title: "Microgrid simulator: a digital twin you can break",
    stats: [
      { value: "100×", label: "Real-time speed" },
      { value: "14", label: "Injectable faults" },
      { value: "12", label: "Built-in scenarios" },
      { value: "1 s", label: "Full AC power flow" },
    ],
    features: [
      {
        title: "Real power-flow physics",
        description:
          "Solves the full AC network every second (Newton–Raphson), including grid strength, transformers, feeders and losses.",
      },
      {
        title: "Up to 100× speed",
        description:
          "A day of operation in about 15 minutes. Pause, step and schedule runs.",
      },
      {
        title: "Realistic batteries",
        description:
          "Power and apparent-power limits, ramp rates, state-of-charge limits, round-trip efficiency and auxiliary load.",
      },
      {
        title: "Realistic solar",
        description:
          "Irradiance-driven output, inverter clipping, curtailment and reactive power or power-factor control.",
      },
      {
        title: "Auto dispatch",
        description:
          "Batteries cycle on their own between SOC limits, so the site always has something to watch.",
      },
      {
        title: "Interactive one-line",
        description: "Open and close breakers on the diagram and watch the network re-energise.",
      },
      {
        title: "Fault injection",
        description:
          "Trigger any of 14 real-world faults (over-temperature, ground fault, emergency stop, blown string fuse…), communication loss, grid voltage sags and frequency excursions.",
      },
      {
        title: "Scripted scenarios",
        description:
          "Timelines of events that play automatically, with 12 built in (e.g. \"fan failure, then over-temperature\", \"grid frequency excursion\", \"POI trip\"). Each checks the readings it expects.",
      },
      {
        title: "Load and solar profiles",
        description:
          "5 load and 4 solar profiles (clear sky, heavy clipping, cloudy…). Upload your own while a run is going.",
      },
      {
        title: "Speaks Modbus like a real plant",
        description:
          "PlusDAS polls the simulator exactly as it would a real site, so the whole pipeline is tested end to end, from register to chart.",
      },
      {
        title: "Design your own sites",
        description:
          "Create microgrids with any number of batteries and PV plants, each checked for valid topology and ratings.",
      },
    ],
  },
  {
    id: "anywhere",
    tabLabel: "Anywhere",
    icon: Smartphone,
    title: "Works where you are",
    stats: [
      { value: "3", label: "Layouts: laptop, tablet, phone" },
      { value: "2", label: "Themes, light and dark" },
      { value: "Every", label: "Page has shift notes" },
      { value: "Self", label: "Healing after updates" },
    ],
    features: [
      {
        title: "Three layouts",
        description:
          "Laptop, tablet and phone, including a phone held sideways. Editing tools step aside on small screens so nobody changes a rule by accident.",
      },
      {
        title: "Light and dark themes",
        description: "An industrial palette, designed for control rooms.",
      },
      {
        title: "Notes panel on every page",
        description: "Quick shift notes in reach wherever you are in the app.",
      },
      {
        title: "Self-healing after updates",
        description:
          "If the app is updated while a tab is open, it reloads itself rather than breaking.",
      },
    ],
  },
  {
    id: "engineering",
    tabLabel: "Under the hood",
    icon: ShieldCheck,
    title: "Engineering under the hood",
    stats: [
      { value: "SBOM", label: "On every image" },
      { value: "Auto", label: "Rollback on failure" },
      { value: "Weekly", label: "Cloud backups" },
      { value: "Human", label: "Approval for production" },
    ],
    features: [
      {
        title: "Contract-first services",
        description:
          "Acquisition, simulation, AI and the web and mobile apps talk only through versioned, machine-checked APIs, so any one of them can be swapped without breaking the rest.",
      },
      {
        title: "Automatic verification",
        description:
          "Every change is linted, type-checked and tested, with throwaway databases for integration tests and an end-to-end check that compares every stored reading with the simulator's registers.",
      },
      {
        title: "Hardened delivery pipeline",
        description:
          "No secrets stored in CI, dependencies pinned, and a software bill of materials (SBOM) and provenance on every image.",
      },
      {
        title: "Safe deployments",
        description:
          "Database backup before every deploy, health-checked rollout and automatic rollback on failure. Production changes only with human approval.",
      },
      {
        title: "Backups",
        description: "Weekly backups to cloud storage, plus on-demand backup and restore.",
      },
    ],
  },
];
