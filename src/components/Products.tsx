import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FeatureExplorer from "@/components/FeatureExplorer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Activity,
  ArrowRight,
  BellRing,
  Bot,
  Calculator,
  Check,
  CloudSun,
  Database,
  FileText,
  FlaskConical,
  Languages,
  Network,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  X,
} from "lucide-react";

const beforeItems = [
  "Five vendor tools, none of them talking",
  "Register dumps nobody can read",
  "Spreadsheets exported at 2 a.m., mid-alarm",
  "Hours lost debugging Modbus polls by hand",
  "Logic and reports locked in by the vendor",
  "Shared logins and open ports",
  "One-size-fits-all tools",
];

const afterItems = [
  "One live screen for the whole plant",
  "Every second recorded, every question answered",
  "Every \"what if\" tried on a twin first",
  "Built-in Modbus poll debugging",
  "Your own logic and reports, fully customisable",
  "Authenticated and secure by default",
  "Flexible to fit how your engineers work",
];

const demoStats = [
  { value: "12.47 kV", label: "Microgrid" },
  { value: "2 × 2.5 MW", label: "10 MWh batteries" },
  { value: "5 MW", label: "Solar plant" },
  { value: "3 MW", label: "Load" },
  { value: "1 s", label: "Power-flow solve" },
];

const seeItFeatures = [
  {
    icon: Network,
    title: "The one-line diagram is live.",
    description:
      "The site's electrical drawing isn't a static PDF. Each symbol is tied to the device it represents.",
  },
  {
    icon: Activity,
    title: "Live data as it happens.",
    description:
      "Register values stream from the field in real time, organised by asset, so finding \"battery 2's inverter\" takes one click, not a register map.",
  },
  {
    icon: BellRing,
    title: "Alarms that respect your attention.",
    description:
      "Built on the ISA-18.2 and ISA-101 standards for alarm management and operator screens: grey means normal, colour means act, and severity is never shown by colour alone. Engineers write their own alarm rules, and every event leaves a trail.",
  },
];

const understandItFeatures = [
  {
    icon: Database,
    title: "Every point, every poll, kept.",
    description: "A full time-series historian behind every device.",
  },
  {
    icon: Languages,
    title: "One vocabulary for every vendor.",
    description:
      "Each manufacturer names things differently. PlusDAS maps them all to one standard, so \"state of charge\" means the same thing on every battery in the fleet.",
  },
  {
    icon: Calculator,
    title: "Virtual points.",
    description:
      "Need a value no device reports, such as site net export or combined PV output? Define it once and PlusDAS calculates, stores and trends it like a real sensor.",
  },
  {
    icon: CloudSun,
    title: "Forecast vs. reality.",
    description:
      "A weather-driven PV forecast sits on the same chart as actual production, so underperformance stands out straight away.",
  },
];

const simulatorBenefits = [
  "control engineers can test dispatch logic against a site that behaves like the real one, without a commissioning window or a single kilowatt at risk.",
  "every part of the data pipeline can be proven end to end before a site goes live.",
  "trips, curtailments and odd weather can be replayed on demand, so problems that are hard to catch in the field can be reproduced at a desk.",
];

const audienceRows = [
  {
    audience: "Own or operate sites",
    benefit: "One view of health, history and reports for every site, from any vendor",
  },
  {
    audience: "Build controls and EMS",
    benefit: "A realistic, protocol-accurate site to develop against, any time",
  },
  {
    audience: "Commission plants",
    benefit: "Point maps and data flow checked before energisation",
  },
  {
    audience: "Train people",
    benefit: "A live plant where mistakes cost nothing",
  },
];

const infrastructurePoints = [
  {
    icon: Server,
    description:
      "Independent services for acquisition, simulation, AI and the web and mobile apps. They talk only through versioned, machine-checked API contracts, so any one of them can be upgraded or replaced without breaking the others.",
  },
  {
    icon: ShieldCheck,
    description:
      "Every change is tested automatically, built and deployed to a cloud environment the same day it's merged. Production only changes with an explicit human approval.",
  },
  {
    icon: Rocket,
    description:
      "Python and FastAPI, React and TypeScript, React Native, PostgreSQL, Docker and Google Cloud.",
  },
];

const IconTile = ({ icon: Icon }: { icon: typeof Activity }) => (
  <div className="w-fit shrink-0 p-3 rounded-lg bg-cyan-500/10 ring-1 ring-cyan-400/30">
    <Icon className="h-6 w-6 text-cyan-400" />
  </div>
);

const SectionHeading = ({ label, heading }: { label?: string; heading: string }) => (
  <div className="mb-10">
    {label && (
      <p className="font-mono text-sm uppercase tracking-widest text-cyan-600 mb-2">{label}</p>
    )}
    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{heading}</h3>
  </div>
);

const FeatureGrid = ({
  features,
}: {
  features: { icon: typeof Activity; title: string; description: string }[];
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {features.map((feature) => (
      <Card
        key={feature.title}
        className="h-full bg-slate-900 border-slate-800 transition-colors duration-300 hover:border-cyan-400/50"
      >
        <CardHeader className="pb-2">
          <div className="mb-4">
            <IconTile icon={feature.icon} />
          </div>
          <CardTitle className="text-lg font-bold text-white">{feature.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-400 leading-relaxed">{feature.description}</p>
        </CardContent>
      </Card>
    ))}
  </div>
);

const Products = () => {
  return (
    <div className="min-h-screen bg-white text-gray-600">
      {/* Hero */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-emerald-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Live
          </div>
          <h2 className="text-6xl md:text-7xl font-bold mb-3">
            <span className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
              PlusDAS
            </span>
          </h2>
          <p className="font-mono text-gray-500 mb-8">
            Data acquisition, plus everything after it.
          </p>
          <p className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Your plant is talking. PlusDAS makes it make sense.
          </p>
          <p className="text-lg text-gray-600">
            Connect, record, monitor and simulate your solar-plus-storage site in one place.
          </p>

          {/* Before / after */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-[1fr_auto_1.15fr] items-center gap-6 text-left">
            {/* Before: quiet and muted, so the eye moves to the right */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-7">
              <p className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-5">
                Today
              </p>
              <ul className="space-y-4">
                {beforeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-500">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100">
                      <X className="h-3 w-3 text-red-500" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 shadow-lg shadow-cyan-500/30">
              <ArrowRight className="h-5 w-5 rotate-90 md:rotate-0 text-white" />
            </div>

            {/* After: the hero of the hook, dark card with a gradient frame */}
            <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 p-[2px] shadow-2xl shadow-cyan-500/20">
              <div className="rounded-[14px] bg-slate-900 p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-5">
                  With PlusDAS
                </p>
                <ul className="space-y-4">
                  {afterItems.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-lg font-medium text-white">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15">
                        <Check className="h-3 w-3 text-emerald-400" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureExplorer />

      {/* Demo stats */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">
              The demo · simulated microgrid · no hardware needed
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-px overflow-hidden rounded-lg border border-slate-800 bg-slate-800">
              {demoStats.map((stat) => (
                <div key={stat.label} className="bg-slate-900 px-4 py-5">
                  <p className="font-mono text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-gray-600">Push it around. You can't break it.</p>
          </div>

          <p className="mt-10 font-mono text-sm text-gray-500">
            Designed and built from the protocol layer up to the browser.
          </p>
        </div>
      </section>

      {/* See it */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="See it" heading="One screen in place of five vendor tools." />
          <FeatureGrid features={seeItFeatures} />
        </div>
      </section>

      {/* Understand it */}
      <section className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Understand it"
            heading="History that answers questions, not just stores numbers."
          />
          <FeatureGrid features={understandItFeatures} />
        </div>
      </section>

      {/* Report it */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Report it"
            heading="The monthly report, without the monthly afternoon."
          />
          <div className="flex items-start gap-4 max-w-3xl">
            <IconTile icon={FileText} />
            <p className="text-lg text-gray-600 leading-relaxed">
              Build a template once, schedule it, and let PlusDAS produce stored, export-ready
              snapshots on time.
            </p>
          </div>
        </div>
      </section>

      {/* Rehearse it */}
      <section className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Rehearse it" heading="A digital twin you're allowed to crash." />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                This is the part I'm proudest of. PlusDAS includes a real-time microgrid simulator
                that solves the full AC power flow of a grid-connected site every second: battery
                limits and state of charge, solar curtailment, load swings and grid impedance.
              </p>
              <p>
                The key detail is that the simulator speaks Modbus, exactly like a real plant.
                PlusDAS can't tell the difference. That means:
              </p>
            </div>
            <Card className="bg-slate-900 border-cyan-400/40">
              <CardContent className="p-8">
                <div className="mb-4">
                  <IconTile icon={FlaskConical} />
                </div>
                <ul className="space-y-4 text-slate-400 leading-relaxed list-disc pl-5 marker:text-cyan-400">
                  {simulatorBenefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
                <p className="mt-6 rounded-md bg-slate-950 p-4 font-mono text-sm text-emerald-400">
                  Try it in the demo: tell Battery 1 to discharge 2 MW, then watch the grid
                  connection respond within seconds.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ask it */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <p className="font-mono text-sm uppercase tracking-widest text-cyan-600">Ask it</p>
              <Badge className="bg-amber-400/15 text-amber-700 border-amber-400/40 hover:bg-amber-400/15">
                Coming next
              </Badge>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              An engineer that knows your site.
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-900 border-slate-800 lg:col-span-2">
              <CardContent className="p-8 flex items-start gap-4">
                <IconTile icon={Bot} />
                <p className="text-slate-400 leading-relaxed">
                  An AI assistant, powered by Claude, that answers plain-English questions such as
                  "Why did inverter 2 drop out at 14:00?" It reads live data, history and your
                  team's own fault guides, then suggests likely causes and what to check. It is
                  read-only by design: it can investigate, but it can never operate the plant.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-8 flex items-start gap-4">
                <IconTile icon={Smartphone} />
                <p className="text-slate-400 leading-relaxed">
                  Also coming: a PlusDAS mobile app for alarms on the go, and battery dispatch
                  optimisation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading heading="Who it's for" />
          <Card className="bg-slate-900 border-slate-800 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-slate-800 hover:bg-transparent">
                  <TableHead className="w-1/3 font-mono uppercase tracking-widest text-xs text-cyan-400">
                    If you…
                  </TableHead>
                  <TableHead className="font-mono uppercase tracking-widest text-xs text-cyan-400">
                    PlusDAS gives you…
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {audienceRows.map((row) => (
                  <TableRow key={row.audience} className="border-slate-800 hover:bg-slate-800/50">
                    <TableCell className="font-medium text-white">{row.audience}</TableCell>
                    <TableCell className="text-slate-400">{row.benefit}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </section>

      {/* Built like infrastructure */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading heading="Built like infrastructure, because it is." />
          <p className="text-lg text-gray-600 mb-10">
            Energy software has to keep running, so PlusDAS is built that way:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {infrastructurePoints.map((point) => (
              <div key={point.description} className="flex items-start gap-4">
                <IconTile icon={point.icon} />
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="py-20 border-t border-gray-100 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
            Curious? The demo is live, and it's yours to push around.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-semibold hover:opacity-90"
          >
            <Link to="/contact">Get in touch →</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
