import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Activity, Brain, ShieldAlert, Gauge, Lock, BarChart3,
  Check, X, ArrowRight, PlayCircle, Sparkles, Twitter, Linkedin, Github,
} from "lucide-react";
import heroImg from "@/assets/hero-network.jpg";
import aboutImg from "@/assets/about-abstract.jpg";

const Logo = () => (
  <a href="#top" className="flex items-center gap-2 group">
    <span className="relative grid place-items-center w-9 h-9 rounded-lg bg-gradient-olive shadow-glow">
      <span className="absolute inset-0 rounded-lg bg-gradient-olive blur-md opacity-50 group-hover:opacity-80 transition-opacity" />
      <Sparkles className="relative w-4 h-4 text-cream" />
    </span>
    <span className="font-serif text-xl tracking-tight">Velor<span className="text-gradient-olive">Node</span></span>
  </a>
);

const Nav = () => (
  <header className="fixed top-4 inset-x-0 z-50 px-4">
    <div className="container glass rounded-full px-5 py-3 flex items-center justify-between">
      <Logo />
      <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#features" className="hover:text-foreground transition-colors">Features</a>
        <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
        <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </nav>
      <Button size="sm" className="rounded-full bg-chocolate hover:bg-chocolate-deep text-cream">Get Started</Button>
    </div>
  </header>
);

const Hero = () => (
  <section id="top" className="relative pt-36 pb-28 overflow-hidden bg-gradient-warm">
    <div className="absolute inset-0 bg-flow opacity-90 pointer-events-none" />
    <img
      src={heroImg}
      alt="Abstract network traffic flowing through olive and chocolate ribbons of light"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply"
    />
    <div className="container relative grid lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-7 reveal">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs tracking-wide uppercase text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse" /> AI Network Intelligence
        </span>
        <h1 className="mt-6 font-serif text-5xl md:text-7xl leading-[1.05]">
          AI-Powered <em className="not-italic text-gradient-olive">Network Traffic</em><br />
          Intelligence Platform
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Real-time monitoring, anomaly detection, and predictive optimization — VelorNode brings calm, intelligent
          visibility to every packet that moves across your infrastructure.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" className="rounded-full bg-chocolate hover:bg-chocolate-deep text-cream shadow-soft">
            Get Started <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full border-chocolate/20 hover:bg-chocolate/5">
            <PlayCircle className="mr-1 w-4 h-4" /> View Demo
          </Button>
        </div>
        <div className="mt-10 grid grid-cols-3 max-w-md gap-6 text-sm">
          {[["99.99%","Uptime SLA"],["12ms","Avg detection"],["3.2x","Faster MTTR"]].map(([n,l])=>(
            <div key={l}>
              <div className="font-serif text-3xl text-foreground">{n}</div>
              <div className="text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-5 reveal">
        <div className="glass rounded-2xl p-6 animate-float-slow">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Live signal</span>
            <span className="text-xs text-olive">● streaming</span>
          </div>
          <svg viewBox="0 0 400 140" className="w-full h-32">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="hsl(var(--olive))" />
                <stop offset="100%" stopColor="hsl(var(--moss))" />
              </linearGradient>
            </defs>
            <path d="M0,90 C60,40 100,120 160,80 C220,40 260,110 320,70 C360,45 380,85 400,60"
              fill="none" stroke="url(#g1)" strokeWidth="2.5" />
            <path d="M0,110 C50,90 110,130 170,100 C230,80 280,120 340,95 C370,82 390,100 400,90"
              fill="none" stroke="hsl(var(--chocolate))" strokeOpacity="0.35" strokeWidth="1.5" />
          </svg>
          <div className="grid grid-cols-3 gap-3 mt-4 text-xs">
            {[["Throughput","842 Gb/s"],["Anomalies","2 flagged"],["Latency","11.4 ms"]].map(([k,v])=>(
              <div key={k} className="rounded-lg bg-cream/60 border border-border p-3">
                <div className="text-muted-foreground">{k}</div>
                <div className="font-medium text-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-28 bg-background">
    <div className="container grid lg:grid-cols-2 gap-16 items-center">
      <div className="reveal order-2 lg:order-1">
        <img src={aboutImg} alt="Abstract AI brain merged with network" loading="lazy" width={1024} height={1024}
          className="rounded-3xl shadow-soft w-full" />
      </div>
      <div className="reveal order-1 lg:order-2">
        <span className="text-xs uppercase tracking-widest text-olive">About VelorNode</span>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl leading-tight">
          Predictive intelligence for the networks that move the world.
        </h2>
        <p className="mt-6 text-muted-foreground text-lg">
          VelorNode unifies traffic telemetry, AI inference, and policy automation into a single, calm surface.
          Instead of staring at dashboards, your team gets answers — what changed, why it matters, what to do next.
        </p>
        <ul className="mt-6 space-y-3 text-foreground/90">
          {["Continuous AI-powered traffic visibility","Predictive optimization, not reactive firefighting","Zero-config integrations with NetFlow, sFlow, eBPF"].map(t=>(
            <li key={t} className="flex gap-3"><Check className="w-5 h-5 text-olive shrink-0 mt-0.5" />{t}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const features = [
  { icon: Activity, title: "Real-Time Monitoring", desc: "Sub-second telemetry across every interface, region and tenant." },
  { icon: Brain, title: "AI-Based Analysis", desc: "Foundation models that understand traffic semantics, not just metrics." },
  { icon: ShieldAlert, title: "Anomaly Detection", desc: "Catch DDoS, exfiltration and silent regressions before users notice." },
  { icon: Gauge, title: "Performance Optimization", desc: "Continuous routing and QoS tuning powered by reinforcement learning." },
  { icon: Lock, title: "Security Intelligence", desc: "Behavioral baselining, threat correlation, automatic containment." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Boardroom-ready reporting with natural-language explanations." },
];

const Features = () => (
  <section id="features" className="relative py-28 bg-gradient-warm">
    <div className="absolute inset-0 bg-flow opacity-70 pointer-events-none" />
    <div className="container relative">
      <div className="max-w-2xl reveal">
        <span className="text-xs uppercase tracking-widest text-olive">Capabilities</span>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">A complete intelligence layer for your network.</h2>
      </div>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f,i)=>(
          <div key={f.title} className="reveal glass rounded-2xl p-7 lift" style={{transitionDelay:`${i*60}ms`}}>
            <div className="w-11 h-11 rounded-xl bg-gradient-olive grid place-items-center shadow-glow">
              <f.icon className="w-5 h-5 text-cream" />
            </div>
            <h3 className="mt-5 font-serif text-2xl">{f.title}</h3>
            <p className="mt-2 text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Comparison = () => {
  const rows = [
    ["Manual tracking", "AI automation"],
    ["Delayed insights", "Real-time analysis"],
    ["Reactive fixes", "Predictive optimization"],
    ["Limited visibility", "Full traffic intelligence"],
    ["Tool sprawl", "Single calm surface"],
  ];
  return (
    <section className="py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-widest text-olive">The difference</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Traditional monitoring vs VelorNode.</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="reveal rounded-2xl border border-border p-8 bg-secondary/40">
            <h3 className="font-serif text-2xl text-muted-foreground">Traditional Monitoring</h3>
            <ul className="mt-6 space-y-4">
              {rows.map(([a])=>(
                <li key={a} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-6 h-6 rounded-full bg-secondary grid place-items-center"><X className="w-3.5 h-3.5"/></span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal rounded-2xl p-8 bg-gradient-chocolate text-cream shadow-soft relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-olive/40 blur-3xl" />
            <h3 className="font-serif text-2xl">VelorNode</h3>
            <ul className="mt-6 space-y-4 relative">
              {rows.map(([,b])=>(
                <li key={b} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-olive grid place-items-center"><Check className="w-3.5 h-3.5 text-cream"/></span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { n: "01", t: "Data Input", d: "Stream network logs, NetFlow, sFlow and eBPF events through secure connectors." },
    { n: "02", t: "AI Processing Engine", d: "Foundation models contextualize traffic at line rate." },
    { n: "03", t: "Pattern Detection", d: "Identify anomalies, regressions and emergent threats automatically." },
    { n: "04", t: "Optimization Insights", d: "Receive prescriptive actions — or let VelorNode apply them safely." },
  ];
  return (
    <section id="how" className="relative py-32 bg-chocolate-deep text-cream overflow-hidden">
      <div className="absolute inset-0 bg-flow-dark opacity-90" />
      <div className="container relative">
        <div className="max-w-2xl reveal">
          <span className="text-xs uppercase tracking-widest text-moss">How it works</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">From raw packets to prescriptive intelligence.</h2>
          <p className="mt-5 text-cream/70">A continuous loop — every signal becomes a smarter decision.</p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s,i)=>(
            <div key={s.n} className="reveal glass-dark rounded-2xl p-7 lift relative" style={{transitionDelay:`${i*80}ms`}}>
              <div className="font-serif text-5xl text-moss/80">{s.n}</div>
              <h3 className="mt-3 font-serif text-2xl">{s.t}</h3>
              <p className="mt-2 text-cream/70 text-sm">{s.d}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-5 top-10 w-6 h-6 text-moss/60" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const tiers = [
    { name: "Starter", price: "$249", per: "/mo", desc: "For small teams getting started with intelligent monitoring.", features: ["Up to 50 Gbps","5 integrations","Email alerts","Community support"], featured: false },
    { name: "Professional", price: "$899", per: "/mo", desc: "Most popular — predictive intelligence for growing networks.", features: ["Up to 1 Tbps","Unlimited integrations","Anomaly + threat AI","Slack & PagerDuty","SAML SSO"], featured: true },
    { name: "Enterprise", price: "Custom", per: "", desc: "Dedicated, on-prem or hybrid for global infrastructure.", features: ["Unlimited scale","Private model tuning","Dedicated TAM","SLA 99.99%","Compliance pack"], featured: false },
  ];
  return (
    <section id="pricing" className="py-28 bg-gradient-warm relative">
      <div className="absolute inset-0 bg-flow opacity-60" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-widest text-olive">Pricing</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Scales with your network, not your headcount.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {tiers.map((t,i)=>(
            <div key={t.name}
              className={`reveal lift rounded-2xl p-8 ${t.featured ? "bg-chocolate text-cream shadow-soft scale-[1.02]" : "glass"}`}
              style={{transitionDelay:`${i*70}ms`}}>
              {t.featured && <span className="inline-block text-xs px-3 py-1 rounded-full bg-olive text-cream mb-4">Most popular</span>}
              <h3 className="font-serif text-2xl">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-serif text-5xl">{t.price}</span>
                <span className={t.featured ? "text-cream/70" : "text-muted-foreground"}>{t.per}</span>
              </div>
              <p className={`mt-3 text-sm ${t.featured ? "text-cream/80" : "text-muted-foreground"}`}>{t.desc}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map(f=>(
                  <li key={f} className="flex gap-2 items-center">
                    <Check className={`w-4 h-4 ${t.featured ? "text-moss" : "text-olive"}`} />{f}
                  </li>
                ))}
              </ul>
              <Button className={`mt-8 w-full rounded-full ${t.featured ? "bg-cream text-chocolate hover:bg-cream/90" : "bg-chocolate text-cream hover:bg-chocolate-deep"}`}>
                Choose {t.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Demo = () => (
  <section className="relative py-28 bg-chocolate text-cream overflow-hidden">
    <div className="absolute inset-0 bg-flow-dark opacity-90" />
    <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
      <div className="reveal">
        <span className="text-xs uppercase tracking-widest text-moss">Live demo</span>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">See VelorNode reason about your traffic in real time.</h2>
        <p className="mt-5 text-cream/70 max-w-lg">A 20-minute walkthrough with one of our network intelligence engineers — using your topology, on your terms.</p>
        <Button size="lg" className="mt-8 rounded-full bg-olive hover:bg-moss text-cream">Request Live Demo <ArrowRight className="ml-1 w-4 h-4"/></Button>
      </div>
      <div className="reveal glass-dark rounded-2xl aspect-video grid place-items-center group cursor-pointer lift">
        <div className="w-20 h-20 rounded-full bg-cream/10 grid place-items-center group-hover:bg-cream/20 transition-colors">
          <PlayCircle className="w-10 h-10 text-cream" />
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => {
  const t = [
    { q: "VelorNode collapsed our six monitoring tools into a single intelligent surface. We saw an anomaly an hour before our paging system did.", a: "Lena Okafor", r: "VP Infrastructure, Northwind Telecom" },
    { q: "The AI explanations are the killer feature. Our junior NOC engineers now ship optimizations a senior used to own.", a: "Mateus Alencar", r: "Director of Networks, Helio Cloud" },
    { q: "Calm, accurate, fast. It's the first observability product that actually feels designed.", a: "Priya Raman", r: "Principal SRE, Atlas Bank" },
  ];
  return (
    <section className="py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-widest text-olive">Trusted by network teams</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Built for operators, loved by leadership.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {t.map((x,i)=>(
            <figure key={x.a} className="reveal glass rounded-2xl p-7 lift" style={{transitionDelay:`${i*70}ms`}}>
              <blockquote className="font-serif text-xl leading-snug">"{x.q}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-olive" />
                <div>
                  <div className="font-medium">{x.a}</div>
                  <div className="text-sm text-muted-foreground">{x.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-28 bg-gradient-warm relative">
    <div className="absolute inset-0 bg-flow opacity-70" />
    <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
      <div className="reveal">
        <span className="text-xs uppercase tracking-widest text-olive">Get in touch</span>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">Let's design the calm, intelligent network you deserve.</h2>
        <p className="mt-5 text-muted-foreground max-w-md">Our team responds within one business day. No sales gauntlet — just engineers who care.</p>
      </div>
      <form
        onSubmit={(e)=>{e.preventDefault(); toast.success("Message sent — we'll be in touch shortly.");}}
        className="reveal glass rounded-2xl p-8 space-y-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-muted-foreground">Name</label>
            <Input required className="mt-1 bg-background/60" placeholder="Ada Lovelace" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground">Email</label>
            <Input required type="email" className="mt-1 bg-background/60" placeholder="ada@company.com" />
          </div>
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Message</label>
          <Textarea required rows={5} className="mt-1 bg-background/60" placeholder="Tell us about your network..." />
        </div>
        <Button type="submit" className="w-full rounded-full bg-chocolate hover:bg-chocolate-deep text-cream">Get in Touch</Button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-chocolate-deep text-cream/80 pt-20 pb-10">
    <div className="container grid md:grid-cols-4 gap-10">
      <div className="md:col-span-2">
        <Logo />
        <p className="mt-4 max-w-sm text-sm text-cream/60">
          VelorNode is the AI-powered network traffic intelligence platform for teams that prefer answers over alerts.
        </p>
        <div className="mt-6 flex gap-3">
          {[Twitter, Linkedin, Github].map((I,i)=>(
            <a key={i} href="#" className="w-9 h-9 rounded-full glass-dark grid place-items-center hover:bg-olive/30 transition-colors">
              <I className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
      <div>
        <div className="font-serif text-cream mb-4">Product</div>
        <ul className="space-y-2 text-sm">
          <li><a href="#about" className="hover:text-cream">About</a></li>
          <li><a href="#features" className="hover:text-cream">Features</a></li>
          <li><a href="#pricing" className="hover:text-cream">Pricing</a></li>
          <li><a href="#contact" className="hover:text-cream">Contact</a></li>
        </ul>
      </div>
      <div>
        <div className="font-serif text-cream mb-4">Developers</div>
        <ul className="space-y-2 text-sm">
          <li><span className="text-cream/50">Developer API</span> <span className="ml-2 text-[10px] uppercase tracking-widest text-moss">Coming soon</span></li>
          <li><a href="#" className="hover:text-cream">Documentation</a></li>
          <li><a href="#" className="hover:text-cream">Status</a></li>
        </ul>
      </div>
    </div>
    <div className="container mt-14 pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/50">
      <span>© {new Date().getFullYear()} VelorNode. All rights reserved.</span>
      <span>Crafted with intention.</span>
    </div>
  </footer>
);

const Index = () => {
  useReveal();
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Features />
      <Comparison />
      <HowItWorks />
      <Pricing />
      <Demo />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
