'use client';

import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  Utensils, 
  ShoppingBag, 
  CheckCircle2, 
  ArrowRight, 
  Flame, 
  Sparkles,
  Calendar,
  ShieldCheck,
  Languages
} from 'lucide-react';

export default function OleasTacosMaster() {
  const [lang, setLang] = useState<'EN' | 'ES'>('EN');
  const [guests, setGuests] = useState(50);
  const [selectedMeat, setSelectedMeat] = useState<string[]>(['Carne Asada', 'Adobada', 'Cabeza']);
  const [cateringSent, setCateringSent] = useState(false);

  const toggleMeat = (meat: string) => {
    if (selectedMeat.includes(meat)) {
      if (selectedMeat.length > 1) setSelectedMeat(selectedMeat.filter(m => m !== meat));
    } else {
      setSelectedMeat([...selectedMeat, meat]);
    }
  };

  const t = {
    EN: {
      alertBar: "Food Trailer Open: Thursday – Sunday • 6:00 PM – 12:00 AM • 2700 N Oracle Rd",
      langButton: "Español",
      brandSub: "Sonoran Taqueria & Event Catering • Tucson, AZ",
      navMenu: "Menu & Prices",
      navCatering: "Event Catering",
      navLocation: "Hours & Location",
      callOrder: "Call to Order",
      heroBadge: "2700 N Oracle Rd (Kelso & Glenn St), Tucson, AZ",
      heroH1Pre: "The Real Mexican Flavour",
      heroH1Accent: "Straight to Tucson",
      heroP: "Authentic Sonoran street cooking. Charcoal-grilled skirt steak, crisp caramelo loaded with melted cheese, slow-steamed beef cabeza, and crispy quesabirrias with seasoned dipping consomé.",
      btnCall: "Call Ahead for Pickup",
      btnCatering: "Get a Catering Quote",
      proofGrill: "Mesquite Charcoal Grill",
      proofSalsa: "Daily Scratch Salsas",
      proofEvents: "Private Event Taquizas",
      promoTag: "Weekly Featured Special",
      promoTitle: "4 Cabeza Tacos",
      promoPrice: "$15",
      promoSoda: "+ $1 for Can Soda",
      promoSub: "Tender, slow-steamed beef served on double warm corn tortillas with sweet white onions, cilantro, grilled limes, and house green salsa.",
      promoBest: "Most Ordered Dish on Oracle Rd",
      promoBtn: "Call to Order (520) 658-5967",
      menuPre: "Off The Griddle",
      menuTitle: "Official Menu & Direct Pricing",
      menuSub: "Direct trailer pricing in Tucson. All orders come with handmade salsas, lime wedges, and grilled chiles toreados.",
      catTag: "Private Event Food Service",
      catTitlePre: "Full-Service Taco Bar Catering for",
      catTitleAccent: "Weddings, Birthdays & Parties",
      catP: "We bring our charcoal grill, crew, and the complete Olea's Tacos experience straight to your private party anywhere in Tucson. Includes your choice of 3 meats, warm corn and flour tortillas, full fresh salsa bar, pinto beans, and grilled chiles.",
      catFeat1: "Live On-Site Charcoal Grilling",
      catFeat2: "Complete Scratch Salsa Bar",
      catFeat3: "All Tucson & Pima County",
      catFeat4: "Plates, Napkins & Utensils Included",
      calcTitle: "Instant Catering Quote",
      calcSub: "Estimate your party cost and reserve your date in 30 seconds",
      calcGuests: "Estimated Guests:",
      calcMeatLabel: "Select Meats for Event:",
      calcName: "Your Full Name",
      calcDate: "Event Date",
      calcPhone: "Mobile Phone (For Quote)",
      calcBtn: "Reserve Date & Check Availability",
      calcCall: "Or call our catering coordinator directly:",
      locPre: "Official Location",
      locTitle: "2700 N Oracle Rd, Tucson, AZ",
      locSub: "Located between Kelso & Glenn St in Central Tucson. Easy on-site parking.",
      locHoursTitle: "Public Hours of Operation",
      locHoursOpen: "Thursday to Sunday: 6:00 PM – 12:00 AM",
      locHoursClosed: "Monday to Wednesday: Closed to public (Private catering available)",
      locPhoneTitle: "Direct Kitchen Lines",
      locMapBtn: "Open in Google Maps",
      locAtmoTitle: "Atmosphere",
      locAtmoVal: "Outdoor Trailer Seating & Fast Takeout",
      locPayTitle: "Payment Options",
      locPayVal: "Cash, Credit/Debit Cards, Apple Pay",
      locCatTitle: "Private Catering",
      locCatVal: "Available 7 Days a Week in Tucson",
      mobileCall: "Call Kitchen",
      mobileCatering: "Book Catering"
    },
    ES: {
      alertBar: "Trailer Abierto: Jueves a Domingo • 6:00 PM – 12:00 AM • 2700 N Oracle Rd",
      langButton: "English",
      brandSub: "Taquería Sonorense & Catering • Tucson, AZ",
      navMenu: "Menú y Precios",
      navCatering: "Taquizas Para Eventos",
      navLocation: "Ubicación y Horarios",
      callOrder: "Llamar Pedido",
      heroBadge: "2700 N Oracle Rd (Kelso & Glenn St), Tucson, AZ",
      heroH1Pre: "El Verdadero Sabor Mexicano",
      heroH1Accent: "Directo en Tucson",
      heroP: "Auténtica comida callejera sonorense. Carne asada al carbón, caramelo crujiente con queso derretido, tacos de cabeza al vapor y quesabirrias con consomé sazonado para chopear.",
      btnCall: "Llamar Para Recoger",
      btnCatering: "Cotizar Taquiza Para Evento",
      proofGrill: "Asado al Carbón",
      proofSalsa: "Salsas Hechas al Día",
      proofEvents: "Eventos y Taquizas",
      promoTag: "Especial de la Semana",
      promoTitle: "4 Tacos de Cabeza",
      promoPrice: "$15",
      promoSoda: "+ $1 por Soda de Lata",
      promoSub: "Cabeza de res cocida a fuego lento, suave y jugosa en doble tortilla de maíz caliente con cebolla, cilantro, limones asados y salsa verde.",
      promoBest: "El Más Vendido en Oracle Rd",
      promoBtn: "Ordenar al (520) 658-5967",
      menuPre: "Directo del Comal",
      menuTitle: "Menú Oficial & Precios",
      menuSub: "Precios directos de nuestro trailer en Tucson. Todas las órdenes incluyen salsas caseras, limones y chiles toreados.",
      catTag: "Servicio de Comida Para Eventos",
      catTitlePre: "Taquizas y Comida Mexicana Para",
      catTitleAccent: "Bodas, XV Años y Fiestas",
      catP: "Llevamos el asador al carbón y la experiencia completa de Olea's Tacos directo a tu fiesta en cualquier parte de Tucson. Incluye 3 carnes a elegir, tortillas de maíz y harina, barra completa de salsas, frijoles y chiles asados.",
      catFeat1: "Asado en Vivo en Tu Fiesta",
      catFeat2: "Barra Completa de Salsas",
      catFeat3: "Todo Tucson y Condado de Pima",
      catFeat4: "Platos, Servilletas y Cubiertos Incluidos",
      calcTitle: "Calculadora de Taquizas",
      calcSub: "Calcula el costo de tu evento y aparta tu fecha en 30 segundos",
      calcGuests: "Cantidad de Invitados:",
      calcMeatLabel: "Selecciona Carnes Para el Evento:",
      calcName: "Tu Nombre Completo",
      calcDate: "Fecha del Evento",
      calcPhone: "Teléfono Móvil (Para Confirmar)",
      calcBtn: "Apartar Fecha & Recibir Menú",
      calcCall: "O habla directamente con nuestro coordinador:",
      locPre: "Punto de Venta",
      locTitle: "2700 N Oracle Rd, Tucson, AZ",
      locSub: "Ubicados entre Kelso & Glenn St en Central Tucson. Estacionamiento disponible.",
      locHoursTitle: "Horario de Servicio al Público",
      locHoursOpen: "Jueves a Domingo: 6:00 PM – 12:00 AM",
      locHoursClosed: "Lunes a Miércoles: Cerrado al público (Catering privado disponible)",
      locPhoneTitle: "Líneas Directas de Pedidos",
      locMapBtn: "Abrir en Google Maps",
      locAtmoTitle: "Ambiente",
      locAtmoVal: "Trailer con Comedor Exterior & Para Llevar",
      locPayTitle: "Formas de Pago",
      locPayVal: "Efectivo, Tarjetas de Débito/Crédito, Apple Pay",
      locCatTitle: "Taquizas Para Eventos",
      locCatVal: "Disponibles los 7 Días de la Semana en Tucson",
      mobileCall: "Llamar Pedido",
      mobileCatering: "Cotizar Taquiza"
    }
  }[lang];

  const dishes = [
    {
      name: lang === 'EN' ? 'Sonoran Caramelo' : 'Caramelo Sonorense',
      price: '$13.75',
      desc: lang === 'EN' 
        ? 'Crisp griddled flour tortilla wrapped in foil with bubbling melted cheese, mesquite charcoal-grilled steak, and fresh guacamole.'
        : 'Tortilla de harina dorada a la plancha envuelta en papel aluminio con abundante queso derretido, carne asada al carbón y guacamole fresco.',
      badge: lang === 'EN' ? 'Sonoran Classic' : 'Clásico Sonorense',
      sub: lang === 'EN' ? 'Foil Wrapped • Melted Cheese' : 'Envuelto en Aluminio • Queso Fundido',
      img: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=700&q=80'
    },
    {
      name: lang === 'EN' ? 'Carne Asada Street Tacos' : 'Tacos de Carne Asada',
      price: '$7.00',
      desc: lang === 'EN' 
        ? 'Double warm corn tortillas stacked with mesquite-charred steak, sweet grilled onions, fresh cilantro, and house roasted salsa.'
        : 'Doble tortilla de maíz taquera con generosa porción de carne asada al carbón, cebolla asada, cilantro fresco y salsa de la casa.',
      badge: lang === 'EN' ? 'Best Seller' : 'Más Vendido',
      sub: lang === 'EN' ? '100% Mesquite Charcoal' : 'Carbón de Mezquite 100%',
      img: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=700&q=80'
    },
    {
      name: lang === 'EN' ? 'Quesabirrias with Consomé' : 'Quesabirrias con Consomé',
      price: '$10.50',
      desc: lang === 'EN' 
        ? 'Crisp cheese crust folded around tender shredded beef birria. Served with a seasoned 6oz hot dipping consomé broth.'
        : 'Costra crujiente de queso con birria de res deshebrada ultra tierna. Servida con su vaso de 6oz de consomé caliente para chopear.',
      badge: lang === 'EN' ? 'House Specialty' : 'Especialidad',
      sub: lang === 'EN' ? 'Includes 6oz Hot Consomé' : 'Incluye Consomé Caliente 6oz',
      img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=700&q=80'
    },
    {
      name: lang === 'EN' ? 'Adobada Street Tacos' : 'Tacos de Adobada',
      price: '$5.00',
      desc: lang === 'EN' 
        ? 'Slow-marinated spiced pork roasted with traditional Mexican chilies, topped with pickled red onions, cilantro, and limes.'
        : 'Puerco marinado en adobo sonorense con chiles secos y especias, dorado al comal con cebolla morada curtida, cilantro y limones.',
      badge: lang === 'EN' ? 'Traditional' : 'Tradicional',
      sub: lang === 'EN' ? 'House Recipe Red Adobo' : 'Adobo Rojo de la Casa',
      img: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=700&q=80'
    },
    {
      name: lang === 'EN' ? 'Special: 4 Cabeza Tacos' : 'Promo: 4 Tacos de Cabeza',
      price: '$15.00',
      desc: lang === 'EN' 
        ? '4 tender slow-steamed beef cabeza tacos served with diced onion, cilantro, grilled limes, and salsa (+ $1 for can soda).'
        : '4 tacos suaves de cabeza al vapor jugosa servidos con cebollita, cilantro, limones asados y salsa (+ $1 lata de soda).',
      badge: lang === 'EN' ? 'Weekly Deal' : 'Promo Semanal',
      sub: lang === 'EN' ? 'Add Can Soda for +$1' : 'Añade Soda de Lata por +$1',
      img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=700&q=80'
    },
    {
      name: lang === 'EN' ? 'Fresh Aguas Frescas (32oz)' : 'Aguas Frescas Naturales (32oz)',
      price: '$4.50',
      desc: lang === 'EN' 
        ? 'Scratch-made Mexican Horchata infused with cinnamon and sweet cream, and cold tart Jamaica brewed fresh daily over crushed ice.'
        : 'Horchata de arroz con canela natural y dulce crema, y Agua de Jamaica fresca hechas desde cero todos los días con hielo picado.',
      badge: lang === 'EN' ? 'Scratch Made' : 'Hechas al Día',
      sub: lang === 'EN' ? '32oz Giant Cup' : 'Vaso Gigante de 32oz',
      img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-500 selection:text-stone-950 pb-20 md:pb-0 antialiased">
      
      {/* 1. TOP OPERATING BANNER */}
      <div className="bg-gradient-to-r from-red-700 via-amber-600 to-red-700 text-white text-xs font-black py-2.5 px-4 shadow-md border-b border-red-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="uppercase tracking-wider text-[11px]">
              {t.alertBar}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-extrabold">
            <button 
              onClick={() => setLang(lang === 'EN' ? 'ES' : 'EN')}
              className="bg-stone-950 hover:bg-stone-900 text-amber-300 px-3 py-1 rounded-full text-[11px] font-black border border-amber-400/40 transition flex items-center gap-1.5"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{t.langButton}</span>
            </button>
            <a href="tel:5206585967" className="hover:underline flex items-center gap-1 text-white">
              <Phone className="w-3.5 h-3.5" /> (520) 658-5967
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <header className="sticky top-0 z-40 bg-stone-950/95 backdrop-blur-xl border-b border-stone-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            {/* The Real Logo File */}
            <div className="relative w-12 h-12 rounded-full bg-white p-0.5 border-2 border-red-600 shadow-md overflow-hidden shrink-0">
              <img 
                src="/logo.png" 
                alt="Olea's Tacos Logo" 
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-black text-xl sm:text-2xl tracking-tight text-white uppercase leading-none">
                  Olea's Tacos
                </span>
                <span className="text-[9px] font-black bg-red-600 text-white px-1.5 py-0.5 rounded uppercase">
                  Tucson
                </span>
              </div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-amber-400 block mt-1">
                {t.brandSub}
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-black uppercase tracking-wider text-stone-300">
            <a href="#menu" className="hover:text-amber-400 transition">{t.navMenu}</a>
            <a href="#catering" className="hover:text-amber-400 transition">{t.navCatering}</a>
            <a href="#location" className="hover:text-amber-400 transition">{t.navLocation}</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:5206585967"
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider shadow-lg shadow-amber-500/20 transition active:scale-95 flex items-center gap-2"
            >
              <Phone className="w-4 h-4 fill-stone-950" />
              <span>(520) 658-5967</span>
            </a>
          </div>

        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative py-14 lg:py-20 px-4 overflow-hidden border-b border-stone-800 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-red-600/15 blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-stone-900/90 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-400 shadow-md">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>{t.heroBadge}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[1.03] text-white">
              {t.heroH1Pre} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-500">
                {t.heroH1Accent}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-300 max-w-xl leading-relaxed font-medium">
              {t.heroP}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a 
                href="tel:5206585967"
                className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs uppercase tracking-wider px-6 py-4 rounded-xl shadow-lg shadow-amber-500/25 transition flex items-center gap-2 active:scale-95"
              >
                <Phone className="w-4 h-4 fill-stone-950" />
                <span>{t.btnCall}</span>
              </a>
              <a 
                href="#catering" 
                className="bg-stone-900 hover:bg-stone-800 text-stone-100 font-black text-xs uppercase tracking-wider px-6 py-4 rounded-xl border border-stone-700 transition flex items-center gap-2 active:scale-95"
              >
                <Utensils className="w-4 h-4 text-amber-400" />
                <span>{t.btnCatering}</span>
              </a>
            </div>

            {/* Clean Quality Strip */}
            <div className="pt-4 border-t border-stone-800/80 flex items-center gap-6 text-xs text-stone-400 font-semibold">
              <span className="flex items-center gap-1.5 text-stone-300">
                <Flame className="w-3.5 h-3.5 text-red-500" /> {t.proofGrill}
              </span>
              <span className="text-stone-700">•</span>
              <span className="flex items-center gap-1.5 text-stone-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> {t.proofSalsa}
              </span>
              <span className="text-stone-700">•</span>
              <span className="flex items-center gap-1.5 text-stone-300">
                <Star className="w-3.5 h-3.5 text-amber-400" /> {t.proofEvents}
              </span>
            </div>
          </div>

          {/* REAL PROMO SPOTLIGHT CARD */}
          <div className="lg:col-span-5 relative">
            <div className="bg-gradient-to-br from-red-600 via-amber-600 to-orange-600 rounded-3xl p-1 shadow-2xl">
              <div className="bg-stone-950 rounded-[22px] p-6 sm:p-7 space-y-4 text-left">
                
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider bg-red-600 text-white px-2 py-0.5 rounded shadow">
                      {t.promoTag}
                    </span>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mt-2">
                      {t.promoTitle}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-black text-amber-400">{t.promoPrice}</span>
                    <span className="block text-[10px] text-stone-400 font-bold">{t.promoSoda}</span>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden aspect-video border border-stone-800 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80" 
                    alt="Cabeza Tacos Special" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-stone-950/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-amber-300">
                    🔥 {t.promoBest}
                  </div>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed">
                  {t.promoSub}
                </p>

                <div className="pt-1">
                  <a 
                    href="tel:5206585967"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 fill-stone-950" />
                    <span>{t.promoBtn}</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. REAL MENU GRID */}
      <section id="menu" className="py-20 px-4 max-w-7xl mx-auto border-b border-stone-800">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-amber-400 block mb-1">
            {t.menuPre}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            {t.menuTitle}
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm mt-2">
            {t.menuSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {dishes.map((item, idx) => (
            <div key={idx} className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition duration-300 group shadow-lg flex flex-col justify-between">
              <div>
                <div className="h-52 overflow-hidden relative">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow">
                    {item.badge}
                  </span>
                  <span className="absolute bottom-2 right-2 bg-stone-950/90 text-amber-400 text-base font-black px-3 py-1 rounded-lg backdrop-blur-sm shadow">
                    {item.price}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-black text-lg text-white group-hover:text-amber-400 transition mb-1">
                    {item.name}
                  </h3>
                  <span className="text-[10px] font-bold text-amber-500 block uppercase tracking-wider mb-2">
                    {item.sub}
                  </span>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a 
                  href="tel:5206585967" 
                  className="w-full bg-stone-950 hover:bg-stone-800 border border-stone-800 text-stone-200 hover:text-white py-2.5 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-1.5 transition"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.callOrder}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CATERING TAQUIZA CALCULATOR */}
      <section id="catering" className="py-20 px-4 max-w-7xl mx-auto border-b border-stone-800">
        <div className="bg-gradient-to-br from-stone-900 via-neutral-900 to-stone-900 border-2 border-stone-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-xs font-black uppercase tracking-widest text-red-500 bg-red-950/60 border border-red-800/60 px-3 py-1 rounded-full">
                {t.catTag}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                {t.catTitlePre} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  {t.catTitleAccent}
                </span>
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                {t.catP}
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs font-bold text-stone-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.catFeat1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.catFeat2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.catFeat3}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.catFeat4}</span>
                </div>
              </div>
            </div>

            {/* Quote Engine */}
            <div className="lg:col-span-5 bg-stone-950 border border-stone-800 rounded-2xl p-6 sm:p-7 shadow-xl text-left">
              <h3 className="font-black text-lg text-white mb-1">
                {t.calcTitle}
              </h3>
              <p className="text-xs text-stone-400 mb-4">
                {t.calcSub}
              </p>

              {cateringSent ? (
                <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-6 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-black text-white text-base">Request Received!</h4>
                  <p className="text-xs text-stone-300">
                    We will call you directly from (520) 658-5967 to confirm meat selections and lock in your date.
                  </p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setCateringSent(true); }} className="space-y-3.5">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-stone-300">{t.calcGuests}</span>
                      <span className="text-amber-400 font-black">{guests} Guests (~${guests * 15})</span>
                    </div>
                    <input 
                      type="range" 
                      min="20" 
                      max="200" 
                      step="5"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full accent-amber-500 bg-stone-800 rounded-lg cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-1.5">
                      {t.calcMeatLabel}
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 text-xs">
                      {['Carne Asada', 'Adobada', 'Cabeza'].map((meat) => (
                        <button
                          key={meat}
                          type="button"
                          onClick={() => toggleMeat(meat)}
                          className={`py-1.5 rounded-lg border font-bold text-xs transition ${
                            selectedMeat.includes(meat)
                              ? 'border-amber-500 bg-amber-500/10 text-white'
                              : 'border-stone-800 bg-stone-900 text-stone-500'
                          }`}
                        >
                          ✓ {meat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold text-stone-400 mb-1">{t.calcName}</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Carlos" 
                        className="w-full px-3 py-2 text-xs bg-stone-900 border border-stone-800 rounded-xl text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-stone-400 mb-1">{t.calcDate}</label>
                      <input 
                        type="date" 
                        required 
                        className="w-full px-3 py-2 text-xs bg-stone-900 border border-stone-800 rounded-xl text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-400 mb-1">{t.calcPhone}</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="(520) 000-0000" 
                      className="w-full px-3 py-2 text-xs bg-stone-900 border border-stone-800 rounded-xl text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition active:scale-[0.98] flex items-center justify-center gap-1.5"
                  >
                    <span>{t.calcBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              <div className="mt-3 text-center">
                <span className="text-[11px] text-stone-500">{t.calcCall} </span>
                <a href="tel:5206585967" className="text-xs font-bold text-amber-400 hover:underline">(520) 658-5967</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. OUTDOOR FOOD TRUCK / TRAILER ATMOSPHERE SECTION */}
      <section id="location" className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
          
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 block mb-1">
                {t.locPre}
              </span>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                {t.locTitle}
              </h2>
              <p className="text-stone-400 text-sm mt-1">
                {t.locSub}
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white text-sm font-bold">2700 N Oracle Rd</strong>
                  <span className="text-stone-400 block mt-0.5">
                    Central Tucson, AZ 85705 (Between Kelso & Glenn St)
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white text-sm font-bold">{t.locHoursTitle}</strong>
                  <span className="text-stone-300 block mt-0.5 font-semibold">{t.locHoursOpen}</span>
                  <span className="text-stone-500 block">{t.locHoursClosed}</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white text-sm font-bold">{t.locPhoneTitle}</strong>
                  <div className="flex gap-4 mt-0.5 font-bold">
                    <a href="tel:5206585967" className="text-amber-400 underline">(520) 658-5967</a>
                    <a href="tel:5204277225" className="text-amber-400 underline">(520) 427-7225</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="https://maps.google.com/?q=2700+N+Oracle+Rd+Tucson+AZ"
                target="_blank"
                rel="noreferrer"
                className="inline-flex bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-lg items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>{t.locMapBtn}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-stone-900 border border-stone-800 rounded-3xl p-6 relative overflow-hidden shadow-2xl">
            {/* Outdoor Food Truck Photo with String Lights & Night Street Setting */}
            <div className="relative rounded-2xl overflow-hidden aspect-video border border-stone-800 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=900&q=80" 
                alt="Olea's Tacos Trailer Night Atmosphere" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 bg-red-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded">
                📍 2700 N Oracle Rd
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-bold text-stone-400">{t.locAtmoTitle}</span>
                <span className="font-bold text-white">{t.locAtmoVal}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-stone-400">{t.locPayTitle}</span>
                <span className="font-bold text-white">{t.locPayVal}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-stone-400">{t.locCatTitle}</span>
                <span className="font-bold text-amber-400">{t.locCatVal}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. PERSISTENT MOBILE ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-stone-950/95 backdrop-blur-md border-t border-stone-800 p-2.5 flex gap-2 md:hidden shadow-2xl">
        <a 
          href="tel:5206585967" 
          className="flex-1 bg-amber-500 text-stone-950 font-black text-xs py-3.5 rounded-xl flex items-center justify-center gap-1.5 shadow"
        >
          <Phone className="w-4 h-4 fill-stone-950" />
          <span>{t.mobileCall}</span>
        </a>
        <a 
          href="#catering" 
          className="flex-1 bg-red-600 text-white font-black text-xs py-3.5 rounded-xl flex items-center justify-center gap-1.5 shadow"
        >
          <Utensils className="w-4 h-4" />
          <span>{t.mobileCatering}</span>
        </a>
      </div>

    </div>
  );
}