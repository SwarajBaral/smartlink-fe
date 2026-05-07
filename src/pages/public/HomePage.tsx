import { Link } from 'react-router-dom';
import {
  Zap, QrCode, RefreshCw, Smartphone, ArrowRight, Check,
  Star, Users, TrendingUp, Clock, Menu, X, ChevronRight,
  MapPin, Phone, Wallet, Globe, Instagram, Trash2, Layers, BarChart3,
} from 'lucide-react';
import { useState, useEffect } from 'react';

const HERO_IMG = 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80';

const STATS = [
  {
    icon: Trash2,
    value: '88%',
    label: 'of paper cards thrown away within a week',
    detail: 'Your contact lands in the bin before they even get home.',
    source: 'Adobe',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
  },
  {
    icon: Layers,
    value: '27.9M',
    label: 'paper cards printed every day globally',
    detail: 'The printing never stops. Neither does the waste.',
    source: 'Statista',
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
  },
  {
    icon: BarChart3,
    value: '10x',
    label: 'more engagement vs paper cards',
    detail: 'Clickable links beat a printed number every time.',
    source: 'Industry avg.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
  },
  {
    icon: Clock,
    value: '2 sec',
    label: 'to share your complete contact details',
    detail: 'QR scan to live card to contact saved. Done.',
    source: 'SmartLink',
    color: 'text-sky-400',
    bg: 'bg-sky-500/10',
    border: 'border-sky-500/20',
  },
];

const FEATURES = [
  {
    icon: QrCode,
    title: 'Instant QR Generation',
    desc: 'Every card gets a unique, scannable QR code the moment you create it. No design tools needed.',
    points: ['Unique QR per card', 'Works with any camera app', 'SVG quality at any size'],
  },
  {
    icon: RefreshCw,
    title: 'Always Up-to-Date',
    desc: 'Change your phone number, add Instagram, update your logo. The QR never changes.',
    points: ['Edit without reprinting', 'Real-time updates', 'Enable or disable anytime'],
  },
  {
    icon: Smartphone,
    title: 'One-Tap Everything',
    desc: 'Your contacts can call, WhatsApp, pay via UPI, navigate to your location, and save your vCard from one page.',
    points: ['Download contact (vCard)', 'WhatsApp and UPI support', 'Google Maps and Reviews'],
  },
];

const STEPS = [
  {
    step: '01',
    title: 'Create Your Card',
    desc: 'Fill in your business details: name, phone, socials, UPI, maps link. Takes under 2 minutes.',
  },
  {
    step: '02',
    title: 'Share Your QR',
    desc: 'Download your QR code and put it anywhere: banner, receipt, WhatsApp status, email signature.',
  },
  {
    step: '03',
    title: 'Get Connected',
    desc: 'Anyone who scans lands on your live card. They save your contact, call you, or pay in one tap.',
  },
];

const TESTIMONIALS = [
  {
    avatar: 'https://i.pravatar.cc/48?img=12',
    name: 'Ravi Sharma',
    role: 'Owner, Sharma Electronics',
    quote: 'I put the QR on my shop counter. Customers scan it, save my number, and send WhatsApp orders directly. My repeat business went up 30%.',
  },
  {
    avatar: 'https://i.pravatar.cc/48?img=33',
    name: 'Priya Nair',
    role: 'Freelance Architect',
    quote: 'I used to carry 200 cards to every expo. Now I just show them my phone screen. Half the people save my contact before we finish talking.',
  },
  {
    avatar: 'https://i.pravatar.cc/48?img=57',
    name: 'Arjun Mehta',
    role: 'Founder, GreenBite Cafe',
    quote: 'Added the Google review link to the card. Scans at checkout tripled my review count in the first month. Game changer.',
  },
];

const CARD_LINKS = [
  { icon: Phone, label: 'Call Now' },
  { icon: Wallet, label: 'Pay via UPI' },
  { icon: MapPin, label: 'Open Maps' },
  { icon: Globe, label: 'Website' },
  { icon: Instagram, label: 'Instagram' },
];

export function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">

      {/* Navbar */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/90 backdrop-blur border-b border-zinc-800/60' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/home" className="flex items-center gap-2 font-semibold text-lg">
            <Zap size={20} className="text-emerald-400" />
            <span>SmartLink</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
            <button onClick={() => scrollTo('features')} className="hover:text-zinc-100 transition-colors">Features</button>
            <button onClick={() => scrollTo('how-it-works')} className="hover:text-zinc-100 transition-colors">How it works</button>
            <button onClick={() => scrollTo('stats')} className="hover:text-zinc-100 transition-colors">Why digital</button>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Login</Link>
            <Link
              to="/login"
              className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              Get Started Free <ChevronRight size={14} />
            </Link>
          </div>

          <button className="md:hidden p-2 text-zinc-400" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-zinc-900 border-b border-zinc-800 px-4 pb-4 flex flex-col gap-3 text-sm">
            <button onClick={() => scrollTo('features')} className="text-left py-2 text-zinc-400">Features</button>
            <button onClick={() => scrollTo('how-it-works')} className="text-left py-2 text-zinc-400">How it works</button>
            <button onClick={() => scrollTo('stats')} className="text-left py-2 text-zinc-400">Why digital</button>
            <Link to="/login" className="py-2 text-center bg-emerald-500 text-zinc-950 font-semibold rounded-lg">
              Get Started Free
            </Link>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-36 pb-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
              <Zap size={12} /> The future of business networking
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5">
              Your Business Card,{' '}
              <span className="text-emerald-400">Reimagined</span>
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-lg">
              One QR code. Your phone, WhatsApp, UPI, location, and socials in a single scan.
              Update it anytime. No reprints. No waste.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                to="/login"
                className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Create Your Card Free <ArrowRight size={16} />
              </Link>
              <button
                onClick={() => scrollTo('how-it-works')}
                className="flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 px-6 py-3 rounded-xl transition-colors text-sm"
              >
                See how it works
              </button>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
              {['Free to start', 'No credit card', 'Share in seconds'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <Check size={13} className="text-emerald-500" /> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={HERO_IMG} alt="Professional networking" className="w-full h-80 object-cover" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-xl w-56">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">RS</div>
                <div>
                  <p className="text-sm font-medium text-zinc-100">Ravi Sharma</p>
                  <p className="text-xs text-zinc-500">Sharma Electronics</p>
                </div>
              </div>
              <div className="space-y-1.5">
                {CARD_LINKS.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-zinc-800/60 text-xs text-zinc-400">
                    <Icon size={11} className="text-zinc-500" /> {label}
                  </div>
                ))}
              </div>
              <div className="mt-2 flex items-center justify-center gap-1 text-xs text-emerald-600 pt-1 border-zinc-800">
                <Zap size={9} /> Powered by SmartLink
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-sm font-medium tracking-wide uppercase mb-3">The paper card problem</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">The numbers don't lie</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Paper business cards are expensive, wasteful, and forgettable. Here's what the data says.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map(({ icon: Icon, value, label, detail, source, color, bg, border }) => (
              <div key={value} className={`bg-zinc-900 border ${border} rounded-2xl p-7 hover:scale-[1.02] transition-transform`}>

                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${bg} border ${border} mb-4`}>
                  <Icon size={18} className={color} />
                </div>

                <p className={`text-4xl font-bold ${color} mb-2 tracking-tight`}>{value}</p>
                <p className="text-zinc-200 text-sm font-medium mb-1 leading-snug">{label}</p>
                <p className="text-zinc-500 text-xs leading-relaxed mb-4">{detail}</p>

                <div className={`inline-flex items-center gap-1 text-xs ${color} opacity-60 border ${border} rounded-full px-2 py-0.5`}>
                  Source: {source}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 text-center">
            <p className="text-zinc-300 text-base">
              The average professional spends{' '}
              <span className="text-emerald-400 font-semibold">Rs. 5,000 to 15,000 per year</span> on business cards.
              SmartLink costs <span className="text-emerald-400 font-semibold">Rs. 0</span> and your contact info is always current.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-28 px-4 sm:px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-18">
            <p className="text-emerald-400 text-sm font-medium tracking-wide uppercase mb-3">What you get</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything in one card</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">No more juggling ten links. Your customers get everything they need from a single scan.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map(({ icon: Icon, title, desc, points }) => (
              <div key={title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors group">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors">
                  <Icon size={20} className="text-emerald-400" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-1.5">
                  {points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-zinc-500">
                      <Check size={12} className="text-emerald-500 flex-shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-28 px-4 sm:px-6 bg-zinc-900/30 border-y border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-18">
            <p className="text-emerald-400 text-sm font-medium tracking-wide uppercase mb-3">Simple setup</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Live in 3 steps</h2>
            <p className="text-zinc-400">From signup to sharing your QR in under 5 minutes.</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[calc(16.66%-1px)] right-[calc(16.66%-1px)] h-px bg-zinc-800" />
            <div className="grid md:grid-cols-3 gap-10">
              {STEPS.map(({ step, title, desc }) => (
                <div key={step} className="relative text-center">
                  <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-5 relative z-10">
                    <span className="text-xl font-bold text-emerald-400">{step}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold px-8 py-3.5 rounded-xl transition-colors"
            >
              Start for free <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-18">
            <div className="flex justify-center gap-0.5 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-emerald-400 fill-emerald-400" />)}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Loved by small businesses</h2>
            <p className="text-zinc-400">Real people, real results.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(({ avatar, name, role, quote }) => (
              <div key={name} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 transition-colors">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-emerald-400 fill-emerald-400" />)}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-5">"{quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={avatar} alt={name} className="w-10 h-10 rounded-full border border-zinc-700" />
                  <div>
                    <p className="text-sm font-medium">{name}</p>
                    <p className="text-xs text-zinc-500">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="py-14 border-y border-zinc-800 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6 text-zinc-500 text-sm">
            <span className="flex items-center gap-2"><Users size={14} className="text-emerald-500" /> Trusted by 1,000+ businesses</span>
            <span className="text-zinc-700">·</span>
            <span className="flex items-center gap-2"><QrCode size={14} className="text-emerald-500" /> 5,000+ QR codes generated</span>
            <span className="text-zinc-700">·</span>
            <span className="flex items-center gap-2"><TrendingUp size={14} className="text-emerald-500" /> 50,000+ card views per month</span>
            <span className="text-zinc-700">·</span>
            <span className="flex items-center gap-2"><Clock size={14} className="text-emerald-500" /> Setup in under 5 minutes</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <Zap size={28} className="text-emerald-400" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-5 leading-tight">
            Stop handing out paper.<br />
            <span className="text-emerald-400">Start making connections.</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Create your first digital visiting card in minutes. Free forever.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold px-8 py-4 rounded-xl transition-colors text-lg"
          >
            Create Your Free Card <ArrowRight size={18} />
          </Link>
          <p className="text-zinc-600 text-sm mt-5">No credit card required. No expiry.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-zinc-400">
            <Zap size={16} className="text-emerald-500" />
            <span className="font-semibold text-zinc-200">SmartLink</span>
            <span className="text-zinc-700 mx-2">·</span>
            <span className="text-sm">Digital visiting cards for modern businesses</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-zinc-600">
            <Link to="/login" className="hover:text-zinc-400 transition-colors">Login</Link>
            <span>© SmartLink 2025</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
