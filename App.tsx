
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Users, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  Sparkles,
  Scissors,
  Camera,
  Layout,
  Star,
  ChevronDown,
  FileText,
  Globe,
  Award,
  Clapperboard,
  TrendingUp,
  Infinity,
  Target,
  Quote,
  DollarSign,
  AlertCircle,
  TrendingDown,
  Briefcase,
  School,
  Store,
  Factory,
  Globe2,
  MapPin,
  Crown
} from 'lucide-react';

// --- Constants ---
const QUALIFICATION_URL = 'https://typebot.co/funil-cursos-lonline-514sptb';

// --- Sub-components ---

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex gap-4 justify-center items-center py-6">
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-6xl font-black text-fuchsia-500 font-luxury">{format(timeLeft.hours)}</span>
        <span className="text-xs uppercase tracking-widest text-zinc-500">Horas</span>
      </div>
      <span className="text-4xl font-bold text-zinc-700">:</span>
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-6xl font-black text-fuchsia-500 font-luxury">{format(timeLeft.minutes)}</span>
        <span className="text-xs uppercase tracking-widest text-zinc-500">Minutos</span>
      </div>
      <span className="text-4xl font-bold text-zinc-700">:</span>
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-6xl font-black text-fuchsia-500 font-luxury">{format(timeLeft.seconds)}</span>
        <span className="text-xs uppercase tracking-widest text-zinc-500">Segundos</span>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, desc, imageUrl }: { icon: any, title: string, desc: string, imageUrl: string }) => (
  <div className="bg-zinc-900/40 border border-zinc-800 rounded-[2rem] overflow-hidden hover:border-fuchsia-500/50 transition-all group flex flex-col h-full">
    <div className="h-56 relative overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
      <div className="absolute bottom-4 left-6">
        <div className="w-10 h-10 bg-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
          <Icon className="text-white w-5 h-5" />
        </div>
      </div>
    </div>
    <div className="p-8 pt-4 flex-grow flex flex-col">
      <h3 className="text-2xl font-bold mb-3 font-luxury group-hover:text-fuchsia-400 transition-colors">{title}</h3>
      <p className="text-zinc-400 text-sm leading-relaxed mb-4">{desc}</p>
      <div className="mt-auto pt-4 border-t border-zinc-800/50">
        <span className="text-xs font-bold text-fuchsia-500 uppercase tracking-widest flex items-center gap-2">
          <Zap className="w-3 h-3" /> Incluso no Projeto
        </span>
      </div>
    </div>
  </div>
);

const FaqItem = ({ question, answer, highlight = false }: { question: string, answer: string, highlight?: boolean }) => {
  const [isOpen, setIsOpen] = useState(highlight);
  return (
    <div className={`border-b border-zinc-800 ${highlight ? 'bg-fuchsia-950/20 rounded-2xl border-fuchsia-500/30 px-6 my-6 shadow-[0_0_30px_rgba(236,72,153,0.1)]' : ''}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-fuchsia-400 transition-colors"
      >
        <span className={`text-lg font-semibold ${highlight ? 'text-fuchsia-400' : ''}`}>{question}</span>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''} ${highlight ? 'text-fuchsia-500' : ''}`} />
      </button>
      {isOpen && (
        <div className={`pb-6 leading-relaxed ${highlight ? 'text-zinc-200 font-medium' : 'text-zinc-400'}`}>
          {answer}
          {highlight && (
            <div className="mt-4 p-4 bg-fuchsia-600/10 border-l-4 border-fuchsia-600 rounded-r-xl">
              <span className="text-xs uppercase font-black tracking-[0.2em] text-fuchsia-500 block mb-1">Nota de Mentalidade:</span>
              Dívida é quando você gasta com algo que não volta. Investimento é quando você coloca dinheiro para ele se multiplicar.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const handleCtaClick = () => {
    window.open(QUALIFICATION_URL, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30">
      
      {/* Sticky Top Banner */}
      <div className="bg-fuchsia-600 text-white text-center py-2 text-xs md:text-sm font-bold tracking-widest uppercase px-4 sticky top-0 z-50">
        Oferta exclusiva: 75% OFF + Bônus Inéditos de Lançamento ⚡
      </div>

      {/* Hero Section */}
      <header className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32 px-4">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-fuchsia-600/20 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full -z-10"></div>

        {/* FLOATING TILTED BADGE (SELO) */}
        <div className="hidden lg:block absolute right-[5%] top-[25%] -rotate-12 z-20 pointer-events-none">
          <div className="bg-zinc-900/90 border-2 border-fuchsia-500/40 backdrop-blur-xl px-8 py-4 rounded-[2rem] shadow-[0_20px_50px_rgba(236,72,153,0.3)] animate-pulse">
            <span className="text-2xl font-black tracking-tighter uppercase text-gradient">
              CRIE SEU CURSO ONLINE <br/> AGORA MESMO
            </span>
            <div className="mt-2 flex items-center gap-2">
              <Star className="w-4 h-4 text-fuchsia-500 fill-fuchsia-500" />
              <Star className="w-4 h-4 text-fuchsia-500 fill-fuchsia-500" />
              <Star className="w-4 h-4 text-fuchsia-500 fill-fuchsia-500" />
              <Star className="w-4 h-4 text-fuchsia-500 fill-fuchsia-500" />
              <Star className="w-4 h-4 text-fuchsia-500 fill-fuchsia-500" />
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto text-center">
          {/* HIGH IMPACT AUTHORITY BADGE */}
          <div className="inline-flex items-center gap-3 bg-zinc-900/80 border border-fuchsia-500/30 px-6 py-3 rounded-full text-white text-xs md:text-sm mb-12 backdrop-blur-md shadow-[0_0_20px_rgba(236,72,153,0.2)] animate-pulse">
            <Crown className="w-4 h-4 text-fuchsia-500" />
            <span className="font-bold tracking-[0.2em] uppercase">De Profissional de Sucesso a Mentora Reconhecida</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] font-luxury tracking-tight max-w-5xl mx-auto">
            Deixe de ser <span className="text-fuchsia-500 italic">Refém da Cadeira</span> e escale seu <span className="text-gradient">Legado Digital</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-zinc-400 max-w-4xl mx-auto mb-16 leading-relaxed font-light px-4">
            Pare de trocar horas por dinheiro e comece a vender sua maestria. Nós construímos toda a <span className="text-white font-bold border-b border-fuchsia-600">engenharia do seu curso</span> para você faturar 24h por dia, mesmo sem experiência com câmeras.
          </p>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-[3rem] p-10 mb-12 max-w-xl mx-auto backdrop-blur-md shadow-[0_30px_100px_rgba(0,0,0,0.5)] border-t border-t-white/5 relative">
             {/* Mobile/Small Badge reinforcement */}
            <div className="lg:hidden absolute -top-8 -right-4 -rotate-6 z-20">
               <div className="bg-zinc-900 border border-fuchsia-500/50 px-4 py-2 rounded-xl shadow-lg">
                  <span className="text-[10px] font-black uppercase text-gradient">CRIE SEU CURSO AGORA</span>
               </div>
            </div>

            <p className="text-zinc-500 uppercase tracking-widest text-xs font-black mb-4 flex items-center justify-center gap-2">
               <Clock className="w-4 h-4 text-fuchsia-600" /> O cronômetro da sua liberdade já começou:
            </p>
            <CountdownTimer />
            <button 
              onClick={handleCtaClick}
              className="glow-button w-full bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-black py-6 rounded-[2rem] text-xl flex items-center justify-center gap-3 transition-all shadow-[0_15px_30px_rgba(236,72,153,0.3)]"
            >
              TRANSFORMAR MINHA TÉCNICA EM IMPÉRIO <ArrowRight className="w-6 h-6" />
            </button>
            <div className="mt-6 flex items-center justify-center gap-4 text-zinc-500 text-[10px] uppercase font-bold tracking-widest">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> 100% Seguro</span>
              <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
              <span className="flex items-center gap-1"><Sparkles className="w-3 h-3" /> Resultado Real</span>
            </div>
          </div>
        </div>
      </header>

      {/* Pain Point Section */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight font-luxury">
              Você não precisa atender mais clientes... <br/>
              <span className="text-fuchsia-500">Você precisa ensinar.</span>
            </h2>
            <div className="space-y-8">
              <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-zinc-900/40 border border-zinc-800/80 hover:bg-zinc-900 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-fuchsia-700 shadow-[0_8px_20px_rgba(236,72,153,0.3)] border-t border-fuchsia-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <TrendingUp className="text-white w-8 h-8" />
                </div>
                <p className="text-zinc-200 text-lg md:text-xl font-medium leading-tight">Todo profissional da beleza que escala faz isso ensinando.</p>
              </div>
              
              <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-zinc-900/40 border border-zinc-800/80 hover:bg-zinc-900 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-fuchsia-700 shadow-[0_8px_20px_rgba(236,72,153,0.3)] border-t border-fuchsia-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Infinity className="text-white w-8 h-8" />
                </div>
                <p className="text-zinc-200 text-lg md:text-xl font-medium leading-tight">Atendimento tem limite físico. Curso online não tem.</p>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-zinc-900/40 border border-zinc-800/80 hover:bg-zinc-900 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-fuchsia-700 shadow-[0_8px_20px_rgba(236,72,153,0.3)] border-t border-fuchsia-300 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Target className="text-white w-8 h-8" />
                </div>
                <p className="text-zinc-200 text-lg md:text-xl font-medium leading-tight">Você não precisa virar influencer. Você precisa de método.</p>
              </div>
            </div>
          </div>
          
          <div className="relative group w-full h-[600px]">
            <div className="absolute -inset-4 bg-fuchsia-600/30 blur-[60px] rounded-[3rem] opacity-70 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative z-10 w-full h-full rounded-[2.5rem] border-4 border-zinc-800 shadow-2xl overflow-hidden bg-black">
              <iframe 
                className="w-full h-full object-cover scale-[1.02]"
                src="https://www.youtube.com/embed/2SDo0_4-TOs?autoplay=1&mute=1&loop=1&playlist=2SDo0_4-TOs&controls=0&modestbranding=1&rel=0&showinfo=0" 
                title="Beauty Pro Digital Strategy" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            <div className="absolute -bottom-10 -right-6 bg-gradient-to-br from-fuchsia-600 to-pink-700 p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(236,72,153,0.4)] z-20 max-w-[260px] border-t border-fuchsia-400 transform hover:scale-105 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                <span className="text-white/80 text-[10px] uppercase font-black tracking-widest">Digital Freedom</span>
              </div>
              <p className="text-white font-black text-xl leading-tight">"A liberdade mora no digital."</p>
              <div className="mt-4 w-12 h-1.5 bg-white/40 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Grid */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <span className="text-fuchsia-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Seu Negócio Escalonável</span>
            <h2 className="text-4xl md:text-7xl font-black mb-6 font-luxury leading-tight">O Que Nós Fazemos Por Você</h2>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto font-light">
              Não entregamos apenas ferramentas. Entregamos a <span className="text-white font-bold underline decoration-fuchsia-600">engrenagem completa</span> para o seu sucesso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            <FeatureCard 
              icon={Layout} 
              title="Estrutura Completa" 
              desc="Aulas organizadas em módulos lógicos que guiam sua aluna do básico ao avançado com clareza absoluta." 
              imageUrl="https://images.unsplash.com/photo-1542744094-3a31f272c491?q=80&w=2070&auto=format&fit=crop"
            />
            <FeatureCard 
              icon={FileText} 
              title="Roteiro de Aulas" 
              desc="Não perca tempo tentando saber o que falar. Scripts validados palavra por palavra para você gravar com confiança." 
              imageUrl="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop"
            />
            <FeatureCard 
              icon={Globe} 
              title="Página de Vendas" 
              desc="Design magnético focado em conversão. Sua vitrine digital profissional pronta para faturar alto." 
              imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop"
            />
            <FeatureCard 
              icon={Smartphone} 
              title="Estratégia de Vendas" 
              desc="O passo a passo para transformar seus seguidores em alunas pagantes usando apenas o seu celular." 
              imageUrl="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
            />
            <FeatureCard 
              icon={Award} 
              title="Certificado Oficial" 
              desc="Design de luxo para os seus certificados. Gere valor e desejo para o seu método de ensino." 
              imageUrl="https://images.unsplash.com/photo-1633519069299-d5c411516e88?q=80&w=2012&auto=format&fit=crop"
            />
            <FeatureCard 
              icon={Clapperboard} 
              title="Modelos de Criativos" 
              desc="Anúncios que param o scroll. Templates que as pessoas não conseguem ignorar nas redes sociais." 
              imageUrl="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* AUTHORITY SECTION - EXPERTISE COMPROVADA */}
      <section className="py-24 px-4 bg-zinc-950 relative overflow-hidden border-y border-zinc-900">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.1),transparent_50%)]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-fuchsia-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Trajetória de Sucesso</span>
              <h2 className="text-4xl md:text-6xl font-black mb-8 font-luxury leading-tight">
                Não somos consultores. <br/>Somos <span className="text-gradient">construtores de impérios.</span>
              </h2>
              <p className="text-zinc-400 text-xl leading-relaxed mb-10">
                Com mais de <span className="text-white font-bold">12 anos de estrada</span> no coração da área da beleza, nós não apenas falamos. Nós fazemos. Nossa história é escrita com resultados reais em todo o território nacional.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-zinc-900/60 p-6 rounded-3xl border border-zinc-800">
                  <div className="w-12 h-12 bg-fuchsia-600/10 rounded-2xl flex items-center justify-center mb-4">
                    <Store className="text-fuchsia-500 w-6 h-6" />
                  </div>
                  <h4 className="text-3xl font-black text-white mb-1">32+</h4>
                  <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest">Salões Montados no Brasil</p>
                </div>
                <div className="bg-zinc-900/60 p-6 rounded-3xl border border-zinc-800">
                  <div className="w-12 h-12 bg-fuchsia-600/10 rounded-2xl flex items-center justify-center mb-4">
                    <School className="text-fuchsia-500 w-6 h-6" />
                  </div>
                  <h4 className="text-3xl font-black text-white mb-1">12</h4>
                  <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest">Escolas Físicas Fundadas</p>
                </div>
                <div className="bg-zinc-900/60 p-6 rounded-3xl border border-zinc-800">
                  <div className="w-12 h-12 bg-fuchsia-600/10 rounded-2xl flex items-center justify-center mb-4">
                    <MapPin className="text-fuchsia-500 w-6 h-6" />
                  </div>
                  <h4 className="text-3xl font-black text-white mb-1">8</h4>
                  <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest">Estados Brasileiros</p>
                </div>
                <div className="bg-zinc-900/60 p-6 rounded-3xl border border-zinc-800">
                  <div className="w-12 h-12 bg-fuchsia-600/10 rounded-2xl flex items-center justify-center mb-4">
                    <Users className="text-fuchsia-500 w-6 h-6" />
                  </div>
                  <h4 className="text-3xl font-black text-white mb-1">300+</h4>
                  <p className="text-zinc-500 text-xs uppercase font-bold tracking-widest">Cursos Estruturados</p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/40 p-10 rounded-[3rem] border border-fuchsia-500/20 backdrop-blur-xl relative group">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-fuchsia-600 rounded-3xl flex items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-transform">
                <Factory className="text-white w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black mb-6 mt-6 font-luxury">Domínio Completo da Cadeia</h3>
              <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
                Além de estruturar negócios e escolas, somos <span className="text-fuchsia-500 font-bold">fabricantes de cosméticos profissionais</span>. 
                Nós damos a você o poder de ter sua <span className="text-white font-bold">própria marca capilar</span>, elevando seu espaço de beleza ao nível máximo de autoridade e lucro.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-zinc-300">
                  <CheckCircle2 className="text-fuchsia-500 w-5 h-5" />
                  <span className="font-semibold">Fórmulas Profissionais Exclusivas</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-300">
                  <CheckCircle2 className="text-fuchsia-500 w-5 h-5" />
                  <span className="font-semibold">Private Label para Donas de Salão</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-300">
                  <CheckCircle2 className="text-fuchsia-500 w-5 h-5" />
                  <span className="font-semibold">Marca Própria: Lucro de Fabricante</span>
                </div>
              </div>
              <div className="mt-12 h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full w-full bg-gradient-to-r from-fuchsia-600 to-pink-500 animate-wave bg-[length:200%_100%]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for? - REVAMPED WITH WAVE GRADIENT */}
      <section className="py-24 px-4 bg-zinc-950 border-y border-zinc-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[400px] bg-fuchsia-600/10 blur-[150px] -z-10 rounded-full"></div>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-4 font-luxury tracking-tighter">O Mundo Digital é Para Você?</h2>
            <p className="text-zinc-400 text-lg">Clique na sua área para confirmar o seu futuro.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Cabeleireiras", "Designers de Sobrancelha", "Maquiadoras", 
              "Lash Designers", "Megarristas", "Especialistas em Cachos", 
              "Terapeutas Capilares", "Manicures de Luxo", "Esteticistas"
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="relative group cursor-pointer"
                onClick={handleCtaClick}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 via-pink-500 to-fuchsia-600 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-wave -z-10 shadow-[0_0_30px_rgba(236,72,153,0.4)]"></div>
                <div className="bg-zinc-900/80 border border-zinc-800 p-8 rounded-[2rem] flex items-center justify-between group-hover:bg-transparent group-hover:border-white/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors shadow-inner">
                      <Sparkles className="text-fuchsia-500 w-6 h-6 group-hover:text-white" />
                    </div>
                    <span className="font-black text-xl md:text-2xl leading-tight group-hover:text-white transition-colors">{item}</span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-zinc-700 group-hover:text-white transition-all transform group-hover:translate-x-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study: Milly - HIGH IMPACT TESTIMONIAL */}
      <section className="py-24 px-4 bg-black relative">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-10 md:p-20 rounded-[4rem] relative overflow-hidden border-fuchsia-500/20">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-fuchsia-600/10 blur-[100px] rounded-full"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
              <div className="shrink-0 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-[3rem] blur-xl opacity-30 animate-pulse"></div>
                <img 
                  src="https://i.ibb.co/cSddLTVr/Whats-App-Image-2026-02-15-at-10-53-38.jpg" 
                  alt="Milly Success Story" 
                  className="w-48 h-64 md:w-64 md:h-80 object-cover rounded-[3rem] border-4 border-zinc-800 relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-4 -left-4 bg-fuchsia-600 text-white font-black px-6 py-2 rounded-2xl shadow-xl z-20 text-sm italic">
                  Aluna Milly
                </div>
              </div>

              <div className="flex-grow">
                <Quote className="text-fuchsia-600 w-16 h-16 mb-6 opacity-30" />
                <h2 className="text-4xl md:text-5xl font-black mb-6 font-luxury leading-tight">
                  "Em apenas <span className="text-fuchsia-500">2 dias faturei R$ 1.700,00</span> com uma única estratégia..."
                </h2>
                <div className="space-y-4 mb-8">
                  <p className="text-zinc-300 text-xl leading-relaxed italic">
                    "Eu estava precisando muito desse resultado e o curso me entregou exatamente o que eu precisava no momento certo. Já projetei fechar meus primeiros <span className="text-white font-bold underline decoration-fuchsia-600">R$ 8.000,00 logo no primeiro mês</span>!"
                  </p>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 px-5 py-3 bg-fuchsia-600/20 rounded-2xl border border-fuchsia-500/30">
                    <DollarSign className="text-fuchsia-500 w-5 h-5" />
                    <span className="text-white font-bold text-sm tracking-tight">+ R$ 1.700,00 em 48h</span>
                  </div>
                  <div className="flex items-center gap-2 px-5 py-3 bg-zinc-800/50 rounded-2xl border border-zinc-700/50">
                    <CheckCircle2 className="text-green-500 w-5 h-5" />
                    <span className="text-zinc-300 font-bold text-sm tracking-tight">Resultado Comprovado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Next Success Call to Action Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-black to-zinc-950 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-pink-600/10 blur-[130px] rounded-full"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block p-4 bg-zinc-900 border border-zinc-800 rounded-3xl mb-10 shadow-xl">
            <Briefcase className="w-12 h-12 text-fuchsia-500 mx-auto" />
          </div>
          <h2 className="text-5xl md:text-8xl font-black mb-8 font-luxury leading-tight">
            Pode ser <span className="text-gradient">VOCÊ</span>
          </h2>
          <p className="text-2xl md:text-4xl font-light text-zinc-300 mb-12 leading-tight">
            A próxima profissional da beleza a ter a <span className="text-white font-black underline decoration-pink-600 decoration-4 underline-offset-8">vida completamente transformada</span> investindo tão pouco em si mesma.
          </p>

          {/* ADDED PIX RESULTS IMAGE FOR DESIRE AGITATION */}
          <div className="max-w-2xl mx-auto mb-20 relative group">
            <div className="absolute -inset-4 bg-fuchsia-600/20 blur-[60px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src="https://i.ibb.co/4ZJk16fr/Whats-App-Image-2026-02-14-at-21-33-48.jpg" 
              alt="Social Proof - Pix Notifications" 
              className="relative z-10 w-full rounded-[2.5rem] border-4 border-zinc-800 shadow-[0_30px_60px_rgba(0,0,0,0.8)] transform -rotate-2 group-hover:rotate-0 transition-all duration-500 hover:scale-[1.02]"
            />
            <div className="absolute -bottom-6 -right-6 bg-fuchsia-600 text-white font-black py-4 px-8 rounded-2xl z-20 shadow-2xl animate-bounce">
              RESULTADOS REAIS 💰
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
            <div className="bg-zinc-900/50 p-6 rounded-[2rem] border border-zinc-800">
              <Sparkles className="text-fuchsia-500 mb-4 w-8 h-8" />
              <h4 className="text-xl font-bold mb-2">Transformação Real</h4>
              <p className="text-zinc-400 text-sm">Saia da cadeira do salão e comece a escalar seu nome nacionalmente.</p>
            </div>
            <div className="bg-zinc-900/50 p-6 rounded-[2rem] border border-zinc-800">
              <Zap className="text-fuchsia-500 mb-4 w-8 h-8" />
              <h4 className="text-xl font-bold mb-2">Escala Ilimitada</h4>
              <p className="text-zinc-400 text-sm">Venda para 100, 500 ou 1.000 alunas ao mesmo tempo, sem cansaço físico.</p>
            </div>
          </div>
          <button 
            onClick={handleCtaClick}
            className="mt-16 glow-button bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-black px-12 py-6 rounded-3xl text-xl flex items-center justify-center gap-3 mx-auto transition-all"
          >
            EU QUERO SER A PRÓXIMA <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Objections / FAQ */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 font-luxury">Suas Dúvidas Acabam Aqui</h2>
            <p className="text-zinc-500">Transparência total para você dar o próximo passo.</p>
          </div>
          <div className="space-y-4">
            {/* HIGHLIGHTED MONEY QUESTION */}
            <FaqItem 
              highlight={true}
              question="E se eu não tiver o dinheiro para investir agora?" 
              answer="Esta é exatamente a razão pela qual você PRECISA entrar. Se você não tem R$ 497 hoje, você está vivendo no limite da sobrevivência. Use o poder da ALAVANCAGEM: se for necessário, tome emprestado ou use le limite do cartão, pois este é o investimento que vai te tirar dessa situação. Não veja como uma dívida, mas como a semente do seu próximo nível de faturamento. Quem quer dá um jeito, quem não quer dá uma desculpa." 
            />
            
            <FaqItem 
              question="Eu não sei gravar aula, e agora?" 
              answer="Fique tranquila. Você receberá roteiros prontos e suporte técnico para gravar com le celular que você já tem. Não precisa de câmera de cinema, apenas do seu conhecimento." 
            />
            <FaqItem 
              question="Eu não entendo nada de tecnologia..." 
              answer="Nós estruturamos toda a parte técnica: plataforma de curso, checkout de pagamento e página de vendas. Você só precisa seguir o passo a passo e apertar 'publicar'." 
            />
            <FaqItem 
              question="Nunca fiz um curso online antes." 
              answer="Ninguém nasce sabendo. Você não precisa de experiência prévia no digital, apenas da técnica que você já domina com maestria no seu salão." 
            />
            <FaqItem 
              question="Tenho medo de não conseguir vender." 
              answer="Vender é processo. Entregamos a estrutura validada que outros grandes nomes usam. Se você tiver técnica e disposição, o método funciona." 
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 relative bg-zinc-950 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-600 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 blur-[150px] rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-zinc-900 border-2 border-fuchsia-600/50 p-8 md:p-16 rounded-[40px] shadow-2xl backdrop-blur-sm">
            <div className="bg-fuchsia-600 text-white text-[10px] font-black uppercase tracking-[0.4em] px-6 py-2 rounded-full inline-block mb-8 animate-pulse">
              Oferta de Lançamento Ativa
            </div>
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-[0.2em] text-zinc-500">Seu Futuro Começa Hoje</h2>
            
            {/* INVERTED PRICE STRUCTURE: HIGHLIGHTING INSTALLMENT */}
            <div className="mb-10">
              <div className="mt-4">
                <span className="text-lg font-black text-fuchsia-500 uppercase tracking-[0.3em]">Apenas 12x de</span>
                <div className="text-7xl md:text-9xl font-black text-white font-luxury my-4 tracking-tighter drop-shadow-[0_10px_10px_rgba(236,72,153,0.4)]">
                  R$ 48,04
                </div>
                <div className="inline-flex flex-col items-center">
                   <p className="text-zinc-500 text-sm uppercase tracking-widest font-bold mb-2">ou se preferir</p>
                   <p className="text-zinc-400 text-3xl font-light italic bg-zinc-800/50 px-8 py-3 rounded-2xl border border-zinc-700">R$ 497 à vista</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-left max-w-sm mx-auto mb-12 bg-black/40 p-6 rounded-3xl border border-zinc-800">
              <div className="flex gap-3 items-center">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span className="text-sm font-semibold">Acesso Vitalício à Estrutura</span>
              </div>
              <div className="flex gap-3 items-center">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span className="text-sm font-semibold">Mentoria de Acompanhamento</span>
              </div>
              <div className="flex gap-3 items-center">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span className="text-sm font-semibold">Templates de Design Exclusivos</span>
              </div>
            </div>

            <button 
              onClick={handleCtaClick}
              className="glow-button w-full bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-black py-7 rounded-[2rem] text-2xl flex items-center justify-center gap-3 uppercase tracking-tighter shadow-2xl"
            >
              Quero Criar Meu Curso Agora <ArrowRight className="w-8 h-8" />
            </button>
            <p className="mt-8 text-zinc-500 text-xs flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-zinc-600" /> Transação Criptografada & Segura
            </p>
          </div>

          <div className="mt-16 bg-zinc-900/50 p-10 rounded-[3rem] border border-zinc-800 max-w-2xl mx-auto shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative">
                <div className="absolute inset-0 bg-fuchsia-600 blur-xl opacity-20 rounded-full"></div>
                <div className="w-24 h-24 bg-gradient-to-br from-fuchsia-600 to-pink-700 rounded-full flex items-center justify-center shrink-0 relative z-10">
                  <ShieldCheck className="w-12 h-12 text-white" />
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-2 font-luxury">Risco Zero para Você</h3>
                <p className="text-zinc-400 leading-relaxed italic">"Se você seguir o método e ainda tiver dificuldade de estruturar, continuamos te ajudando de perto até o seu curso ficar pronto. Seu sucesso é nosso compromisso."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call */}
      <footer className="py-24 px-4 bg-black border-t border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent"></div>
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-4xl font-black mb-8 font-luxury leading-tight">Imagine seu projeto faturando enquanto você dorme...</h2>
          <p className="text-zinc-400 text-lg mb-12">O conhecimento que você tem hoje vale ouro no mercado digital. No deixe ele parado na prateleira.</p>
          
          <div className="grid grid-cols-3 gap-8 mb-16 border-y border-zinc-900 py-10">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-fuchsia-600/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-fuchsia-500" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-zinc-500">Escala</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-fuchsia-600/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-fuchsia-500" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-zinc-500">Rapidez</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-fuchsia-600/10 rounded-full flex items-center justify-center mb-4">
                <Star className="text-fuchsia-500 w-6 h-6" />
              </div>
              <span className="text-xs font-black uppercase tracking-widest text-zinc-500">Status</span>
            </div>
          </div>

          <p className="text-zinc-600 text-[10px] uppercase tracking-widest leading-loose">
            © 2024 BEAUTY PRO DIGITAL STRATEGY.<br/>
            CNPJ: XX.XXX.XXX/0001-XX | TODOS OS DIREITOS RESERVADOS.<br/>
            ESTE SITE NÃO É DO FACEBOOK OU FACEBOOK INC.
          </p>
        </div>
      </footer>

      {/* Floating CTA (Mobile) */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-[100]">
        <button 
          onClick={handleCtaClick}
          className="glow-button w-full bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white font-black py-5 rounded-2xl shadow-2xl flex items-center justify-center gap-3 text-sm uppercase tracking-tighter"
        >
          Começar agora <ArrowRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
