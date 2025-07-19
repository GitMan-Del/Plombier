"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useState } from "react";

export default function Home() {
  // Testimoniale pentru slider
  const testimonials = [
    {
      img: "/testimonial-claire.png",
      alt: "Claire D.",
      name: "Claire D., Propriétaire à Vincennes",
      stars: 5,
      text: "“Leur service client est exceptionnel. Le plombier a pris le temps de m’expliquer chaque étape. Résultat impeccable du premier appel à aux sans hésitation !”"
    },
    {
      img: "/testimonial-jean.png",
      alt: "Jean M.",
      name: "Jean M., Entrepreneur à Paris",
      stars: 5,
      text: "“J’ai contacté Expert de Maison pour une fuite dans ma cuisine. L’équipe est arrivée en 25 minutes, super professionnelle et très rassurante. Travail propre et rapide.”"
    },
    {
      img: "/testimonial-olivier.png",
      alt: "Olivier S.",
      name: "Olivier S., Freelance à Boulogne",
      stars: 5,
      text: "“J’ai contacté Expert de Maison pour une fuite dans ma cuisine. L’équipe est arrivée en 25 minutes, super professionnelle et très rassurante. Travail propre et rapide.”"
    }
  ];
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const handlePrev = () => setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () => setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));


  return (


    <div className="w-full min-h-fit p-0 flex flex-col overflow-hidden">
    <Navbar />
    {/* Hero */}
    <main id="accueil" className="w-full h-screen bg-white text-white ">
      {/* SVG valuri responsive, doar desktop */}
      <svg
        viewBox="0 0 1439 466"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[45vw] min-h-[200px] max-h-[700px] md:h-[70%] absolute inset-0 z-0 pointer-events-none select-none hidden md:block"
        style={{
          objectFit: "cover",
          top: 0,
          left: 0,
        }}
        aria-hidden="true"
        focusable="false"
        preserveAspectRatio="none"
      >
        <g filter="url(#filter0_n_1_3)">
          <path
            d="M454 446.086C366.5 463.851 -1 483.535 -1 438.164V0H1439V171.219C1439 288.655 683.945 372.044 594.586 372.044C505.228 372.044 541.5 428.322 454 446.086Z"
            fill="#3338C3"
          />
        </g>
        <defs>
          <filter
            id="filter0_n_1_3"
            x="-1"
            y="0"
            width="1440"
            height="466"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.042194090783596039 0.042194090783596039"
              stitchTiles="stitch"
              numOctaves="3"
              result="noise"
              seed="9507"
            />
            <feColorMatrix
              in="noise"
              type="luminanceToAlpha"
              result="alphaNoise"
            />
            <feComponentTransfer in="alphaNoise" result="coloredNoise1">
              <feFuncA
                type="discrete"
                tableValues="0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
              />
            </feComponentTransfer>
            <feComposite
              operator="in"
              in2="shape"
              in="coloredNoise1"
              result="noise1Clipped"
            />
            <feComponentTransfer in="alphaNoise" result="coloredNoise2">
              <feFuncA
                type="discrete"
                tableValues="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 "
              />
            </feComponentTransfer>
            <feComposite
              operator="in"
              in2="shape"
              in="coloredNoise2"
              result="noise2Clipped"
            />
            <feFlood floodColor="rgba(102, 0, 255, 0.25)" result="color1Flood" />
            <feComposite
              operator="in"
              in2="noise1Clipped"
              in="color1Flood"
              result="color1"
            />
            <feFlood floodColor="rgba(0, 0, 0, 0.25)" result="color2Flood" />
            <feComposite
              operator="in"
              in2="noise2Clipped"
              in="color2Flood"
              result="color2"
            />
            <feMerge result="effect1_noise_1_3">
              <feMergeNode in="shape" />
              <feMergeNode in="color1" />
              <feMergeNode in="color2" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      {/* Imagine PNG doar pe mobil */}
      <Image
        src="/Vector (1).png"
        alt="Decor vector"
        width={750}
        height={521}
        className="w-full h-full absolute inset-0 z-0 pointer-events-none select-none block md:hidden"
        style={{
          objectFit: "cover",
          top: 0,
          left: 0,
        }}
        aria-hidden="true"
        priority
      />
      <style jsx>{`
        @media (max-width: 768px) {
          svg[class*="absolute"] {
            height: 40vw !important;
            min-height: 120px !important;
            max-height: 300px !important;
          }
        }
      `}</style>
      {/* End responsive SVG */}

      <div className="w-full h-screen flex flex-col items-center justify-center relative z-20">
      <Image src="/hero-plumber.png" loading="lazy" alt="img" width={1500} height={1500} className="absolute -bottom-3 right-0 z-10 w-1/2" />
        <div className="w-full max-w-[90%] mx-auto  p-0 flex flex-col gap-3 items-start justify-center">
          <h1 className="text-7xl text-white max-w-[800px]">
          Plombier à Paris et Île-de-France Intervention rapide & efficace
          </h1>
          <p className="text-md  text-white w-[800px]">
          Fuite d’eau? Canalisation bouchée? Besoin d’un dépannage en urgence?Nos artisans plombiers interviennent 7j/7 à Paris, Val-de-Marne, Hauts-de-Seine, Seine-Saint-Denis et toute l’Île-de-France.
          </p>
          <div className="gap-4 flex flex-row items-center mt-5">
          <button className="btn bg-white text-black text-lg hover:cursor-pointer hover:scale-105 transition-all">📞 06 59 51 46 92</button>
          <a className="text-white hover:underline " href="/aa">Explorez nos prestations →</a>
          </div>
        </div>
        <div className="w-[90%] gap-5 absolute bottom-10 flex flex-row ">
          <Image src="/social-facebook.png" alt="Social" width={30} height={30}  className="hover:cursor-pointer hover:scale-110 transition-all"/>
          <Image src="/social-instagram.png" alt="Social" width={30} height={30} className="hover:cursor-pointer hover:scale-110 transition-all" />
          <Image src="/social-linkedin.png" alt="Social" width={30} height={30}  className="hover:cursor-pointer hover:scale-110 transition-all"/>
          <Image src="/social-x.png" alt="Social" width={30} height={30}         className="hover:cursor-pointer hover:scale-110 transition-all"/>
        </div>
      </div>
    </main>
      {/* Separator */}
      <section id="services" className="-space-y-5 z-20 min-w-fit">
        {/* ./. */}
        <div className="overflow-hidden bg-[#3338C3] py-3 text-lg -rotate-2 text-white">
          <div className="flex whitespace-nowrap gap-10 animate-marquee">
            <p>Besoin d’un plombier ? On intervient en moins de 30 minutes à Paris et en Île-de-France !</p>
            <p>Besoin d’un plombier ? On intervient en moins de 30 minutes à Paris et en Île-de-France !</p>
            <p>Besoin d’un plombier ? On intervient en moins de 30 minutes à Paris et en Île-de-France !</p>
          </div>
        </div>
        <div className="overflow-hidden bg-black py-3 text-lg rotate-2 text-white">
          <div className="flex whitespace-nowrap gap-10 animate-marquee">
            <p>Besoin d’un plombier ? On intervient en moins de 30 minutes à Paris et en Île-de-France !</p>
            <p>Besoin d’un plombier ? On intervient en moins de 30 minutes à Paris et en Île-de-France !</p>
            <p>Besoin d’un plombier ? On intervient en moins de 30 minutes à Paris et en Île-de-France !</p>
          </div>
        </div>
        <style jsx global>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.333%); }
          }
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
        `}</style>
      </section>
      {/* Stats */}
      <section className="w-full  md:max-w-[90%] h-fit mx-auto flex flex-col  md:flex-row gap-8 py-12 px-4 md:items-stretch items-center">
        <div className="flex md:text-left text-center flex-col gap-6 md:w-[30%] ">
          <Image
            src="/intervention-action.png"
            alt="Interventie"
            width={320}
            height={80}
            className="rounded-xl object-cover md:block hidden justify-center  w-full h-[100px]"
          />
          <h2 className="font-league text-5xl text-black leading-tight">
            Des interventions efficaces, des résultats concrets.
          </h2>
          <div className="flex md:flex-row items-start gap-3">
            <div className="md:flex hidden  bg-[#3338C3] rounded-xl p-2 items-center justify-center">
              <svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M8 12l4-4 4 4M12 16V8"/></svg>
            </div>
            <span className="text-xs text-black font-poppins">
              Chaque intervention est une promesse tenue : rapidité, propreté et efficacité, partout en Île-de-France.
            </span>
          </div>
        </div>
        <div className="flex flex-col w-[80%] relative">
          <Image
            src="/services-main.svg"
            alt="Interventie mare"
            width={600}
            height={350}
            className="rounded-3xl object-cover w-full "
          />
          <a
            href="#"
            className="hover:cursor-pointer hover:scale-105 transition-all absolute bottom-3 right-0 bg-[#3338C3] text-white font-poppins rounded-full px-8 py-5 shadow-lg text-xs font-semibold"
          >
            Découvrez pourquoi nos clients nous recommandent
          </a>
        </div>
        <div className="flex md:flex-col justify-between md:w-[18%] md:min-w-[150px] w-full text-black font-poppins">
          <div>
            <div className="text-5xl">12+</div>
            <div className="text-xs">ann&eacute;es d&apos;exp&eacute;rience dans la plomberie</div>
          </div>
          <div>
            <div className="text-5xl">1</div>
            <div className="text-xs">objectif : votre satisfaction</div>
          </div>
          <div>
            <div className="text-5xl">400+</div>
            <div className="text-xs">interventions réussies chaque mois</div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section id="tarifs" className="w-full py-16 bg-white flex flex-col items-center">
        <h2 className="text-5xl font-league text-black text-center mb-2">
          Ils parlent de nous mieux que personne.
        </h2>
        <p className="text-center text-black text-sm max-w-2xl mb-1">
          Des centaines de clients satisfaits en Île-de-France témoignent de notre sérieux, notre réactivité et la qualité de nos interventions.<br/>
          Découvrez leurs avis et pourquoi ils nous font confiance chaque jour.
        </p>
        {/* MOBILE: slider testimonial */}
        <div className="flex flex-row justify-center gap-8 mt-8 w-full max-w-5xl md:hidden">
          <div className="w-full flex justify-center">
            <div className="bg-[#3338C3] rounded-2xl w-[300px] min-h-[380px] flex flex-col items-center p-6 text-white shadow-lg transition-all">
              <Image src={testimonials[testimonialIndex].img} alt={testimonials[testimonialIndex].alt} width={64} height={64} className="rounded-full mb-2" />
              <div className="text-lg mb-1 text-center">{testimonials[testimonialIndex].name}</div>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-white text-xs">5.0</span>
              </div>
              <p className="text-xs text-center mt-10">{testimonials[testimonialIndex].text}</p>
            </div>
          </div>
        </div>
        {/* DESKTOP: toate testimonialele */}
        <div className="hidden md:flex flex-row justify-center gap-8 mt-8 w-full max-w-5xl">
          {/* Card 1 */}
          <div className="bg-[#3338C3] rounded-2xl w-[300px] min-h-[380px] flex flex-col items-center p-6 text-white shadow-lg -rotate-6 hover:cursor-pointer hover:scale-95 hover:translate-y-3 transition-all">
            <Image src="/testimonial-claire.png" alt="Claire D." width={64} height={64} className="rounded-full mb-2" />
            <div className="text-lg mb-1 text-center">Claire D., Propriétaire à Vincennes</div>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-white text-xs">5.0</span>
            </div>
            <p className="text-xs text-center mt-10">
              “Leur service client est exceptionnel. Le plombier a pris le temps de m’expliquer chaque étape. Résultat impeccable du premier appel à aux sans hésitation !”
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-[#3338C3] rounded-2xl w-[300px] min-h-[380px] flex flex-col items-center p-6 text-white shadow-lg hover:cursor-pointer hover:scale-95 hover:translate-y-3 transition-all">
            <Image src="/testimonial-jean.png" alt="Jean M." width={64} height={64} className="rounded-full mb-2" />
            <div className="text-lg mb-1 text-center">Jean M., Entrepreneur à Paris</div>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-white text-xs">5.0</span>
            </div>
            <p className="text-xs text-center mt-10">
              “J’ai contacté Expert de Maison pour une fuite dans ma cuisine. L’équipe est arrivée en 25 minutes, super professionnelle et très rassurante. Travail propre et rapide.”
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-[#3338C3] rounded-2xl w-[300px] min-h-[380px] flex flex-col items-center p-6 text-white shadow-lg rotate-6 hover:cursor-pointer hover:scale-95 hover:translate-y-3 transition-all">
            <Image src="/testimonial-olivier.png" alt="Olivier S." width={64} height={64} className="rounded-full mb-2" />
            <div className="text-lg mb-1 text-center">Olivier S., Freelance à Boulogne</div>
            <div className="flex items-center gap-1 mb-1">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-white text-xs">5.0</span>
            </div>
            <p className="text-xs text-center mt-10">
              “J’ai contacté Expert de Maison pour une fuite dans ma cuisine. L’équipe est arrivée en 25 minutes, super professionnelle et très rassurante. Travail propre et rapide.”
            </p>
          </div>
        </div>
        {/* Butoane navigare slider - doar pe mobil */}
        <div className="flex flex-row gap-4 mt-10 md:hidden">
          <button onClick={handlePrev} className="hover:cursor-pointer hover:scale-105 transition-all w-10 h-10 rounded-full border border-black flex items-center justify-center text-black hover:bg-gray-100">
            <span className="text-2xl">&#8592;</span>
          </button>
          <button onClick={handleNext} className="hover:cursor-pointer hover:scale-105 transition-all w-10 h-10 rounded-full border border-black bg-black flex items-center justify-center text-white hover:bg-gray-900 ">
            <span className="text-2xl">&#8594;</span>
          </button>
        </div>
      </section>   

      {/* Servici */}
      <section className="w-full flex justify-center items-center py-16 bg-white">
        <div className="flex md:flex-row flex-col gap-16 w-full max-w-6xl mx-auto items-center justify-center">
          {/* Card stânga */}
          <div className="bg-white rounded-xl shadow border p-8 flex flex-col items-start justify-center w-[400px]">
            <h2 className="text-5xl mb-2 font-league text-black leading-tight text-left">
              Vous avez un besoin ?<br />Nous avons la solution.
            </h2>
            <p className="text-sm text-black mt-4 text-left">
              Que ce soit une urgence ou un projet de rénovation, notre équipe de plombiers intervient rapidement avec professionnalisme et efficacité.
            </p>
          </div>
          {/* Carduri dreapta */}
          <div className="grid grid-cols-2 grid-rows-2 gap-6 w-[520px]">
            {/* Card 1 */}
            <div className="bg-[#3338C3] rounded-xl p-5 text-white shadow flex flex-col min-h-[150px]">
              <div className="w-5 h-5 bg-gray-300 rounded mb-2" />
              <div className="text-left">Dépannage express</div>
              <div className="text-xs mt-1 mb-3 text-left">Notre équipe intervient en moins de 30 minutes pour toute fuite ou problème urgent.</div>
              <a href="#" className="text-xs underline mt-auto text-left">En savoir plus &gt;</a>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl p-5 text-black border shadow flex flex-col min-h-[150px]">
              <div className="w-5 h-5 bg-gray-400 rounded mb-2" />
              <div className="text-left">Installation sanitaire</div>
              <div className="text-xs mt-1 mb-3 text-left">Pose ou remplacement de WC, lavabos, robinetterie, ballon d’eau chaude – clé en main.</div>
              <a href="#" className="text-xs underline mt-auto text-left">En savoir plus &gt;</a>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl p-5 text-black border shadow flex flex-col min-h-[150px]">
              <div className="w-5 h-5 bg-gray-400 rounded mb-2" />
              <div className="text-left">Débouchage canalisation</div>
              <div className="text-xs mt-1 mb-3 text-left">Éviers, toilettes, baignoires… Nous débouchons avec du matériel haute pression.</div>
              <a href="#" className="text-xs underline mt-auto text-left">En savoir plus &gt;</a>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-xl p-5 text-black border shadow flex flex-col min-h-[150px]">
              <div className="w-5 h-5 bg-gray-400 rounded mb-2" />
              <div className="text-left">Rénovation salle de bain</div>
              <div className="text-xs mt-1 mb-3 text-left">Transformation complète de votre salle de bain avec finitions soignées.</div>
              <a href="#" className="text-xs underline mt-auto text-left">En savoir plus &gt;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs transparents & devis gratuits */}
      <section className="w-full flex flex-col items-center py-16 bg-white">
        <h2 className="text-5xl font-league text-black text-center mb-2">Tarifs transparents & devis gratuits</h2>
        <p className="text-center text-black text-sm max-w-2xl mb-6">
          Chez <span className="text-[#3338C3]">Plombix</span>, vous savez à quoi vous attendre. Nos prix sont clairs, sans surprise, et chaque intervention fait l&apos;objet d&apos;un devis personnalisé, <span className="text-[#3338C3] underline cursor-pointer">gratuit et sans engagement</span>.
        </p>
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-[#3338C3] rounded-2xl shadow-xl p-8 w-[320px] min-h-[420px] flex flex-col text-white">
            <div className="text-sm mb-2">Dépannage rapide</div>
            <div className="text-2xl mb-1">À partir de 89 € TTC</div>
            <div className="text-xs mb-4">Recherche de fuite, robinet cassé, chasse d&apos;eau, ballon d&apos;eau chaude</div>
            <ul className="text-sm flex flex-col gap-3 mt-5">
              <li className="flex items-center gap-2"><span className="w-3 h-3 bg-white rounded-full inline-block"></span>Diagnostic gratuit</li>
              <li className="flex items-center gap-2"><span className="w-3 h-3 bg-white rounded-full inline-block"></span>Intervention sous 2h</li>
              <li className="flex items-center gap-2"><span className="w-3 h-3 bg-white rounded-full inline-block"></span>Garantie 1 an</li>
              <li className="flex items-center gap-2 opacity-40"><span className="w-3 h-3 bg-white rounded-full inline-block"></span>-------</li>
            </ul>
          </div>
          {/* Card 2 */}
          <div className="bg-[#3338C3] rounded-2xl shadow-xl p-8 w-[320px] min-h-[420px] flex flex-col text-white">
            <div className="text-sm mb-2">Débouchage canalisation</div>
            <div className="text-2xl mb-1">À partir de 119 € TTC</div>
            <div className="text-xs mb-4">Évier, toilettes, baignoire, colonne principale</div>
            <ul className="text-sm flex flex-col gap-3 mt-5">
              <li className="flex items-center gap-2"><span className="w-3 h-3 bg-white rounded-full inline-block"></span>Caméra d&apos;inspection</li>
              <li className="flex items-center gap-2"><span className="w-3 h-3 bg-white rounded-full inline-block"></span>Haute pression</li>
              <li className="flex items-center gap-2"><span className="w-3 h-3 bg-white rounded-full inline-block"></span>Nettoyage complet</li>
              <li className="flex items-center gap-2 opacity-40"><span className="w-3 h-3 bg-white rounded-full inline-block"></span>-------</li>
            </ul>
          </div>
          {/* Card 3 */}
          <div className="bg-[#3338C3] rounded-2xl shadow-xl p-8 w-[320px] min-h-[420px] flex flex-col text-white">
            <div className="text-sm mb-2">Devis rénovation</div>
            <div className="text-2xl mb-1">Devis 100% gratuit</div>
            <div className="text-xs mb-4">Installation sanitaire, salle de bain, rénovation complète</div>
            <ul className="text-sm flex flex-col gap-3 mt-5">
              <li className="flex items-center gap-2"><span className="w-3 h-3 bg-white rounded-full inline-block"></span>Diagnostic gratuit</li>
              <li className="flex items-center gap-2"><span className="w-3 h-3 bg-white rounded-full inline-block"></span>Intervention sous 2h</li>
              <li className="flex items-center gap-2"><span className="w-3 h-3 bg-white rounded-full inline-block"></span>Garantie 1 an</li>
              <li className="flex items-center gap-2 opacity-40"><span className="w-3 h-3 bg-white rounded-full inline-block"></span>-------</li>
            </ul>
          </div>
        </div>
        {/* Bara de jos */}
        <div className="flex flex-col md:flex-row w-[98%] max-w-[950px] h-auto md:h-[100px] rounded-2xl overflow-hidden shadow-lg mx-auto">
          <div className="relative w-full md:w-[45%] h-[180px] md:h-full flex items-end justify-start overflow-hidden p-2">
            {/* Imaginea de fundal */}
            <Image
              src="/intervention-action.png"
              alt="Salon"
              fill
              style={{ objectFit: 'cover' }}
              className="z-0"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
            {/* SVG triunghi albastru */}
            <svg
              className="absolute top-0 right-0 z-10 hidden md:block"
              width="120"
              height="90"
              viewBox="0 0 120 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ minWidth: 120, minHeight: 90 }}
            >
              <polygon points="120,0 120,90 0,0" fill="#3338C3" />
            </svg>
            {/* SVG triunghi albastru pentru mobil */}
            <svg
              className="absolute top-0 right-0 z-10 block md:hidden"
              width="60"
              height="45"
              viewBox="0 0 60 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ minWidth: 60, minHeight: 45 }}
            >
              <polygon points="60,0 60,45 0,0" fill="#3338C3" />
            </svg>
            {/* Butonul telefon */}
            <button className="text-xs relative z-40 bg-white text-black px-4 py-2 rounded-full shadow flex items-center gap-2 hover:cursor-pointer hover:scale-105 transition-all mt-2 md:mt-0">
              📞  06 59 51 46 92
            </button>
          </div>
          <div className="w-full md:w-[55%] h-auto md:h-full bg-[#3338C3] flex flex-col justify-center text-right px-4 py-4 md:px-8 md:py-0">
            <div className="text-white text-md mb-1 text-center md:text-right">Tarifs transparents & devis gratuits</div>
            <div className="text-white text-xs text-center md:text-right">
              Contactez-nous dès maintenant pour obtenir votre devis gratuit et sans engagement. Notre équipe d&apos;experts est à votre disposition pour répondre à tous vos besoins.
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full h-[50vh] flex flex-col justify-center items-center text-black">
        <h2 className="text-5xl mb-1 text-center">Et si vous étiez notre prochain témoignage ?</h2>
        <p className="text-center text-black text-sm max-w-2xl mt-3">
        Rejoignez les centaines de clients satisfaits partout en Île-de-France. Nous sommes prêts 
        à intervenir chez vous en moins de 30 minutes – rapide, propre, garanti.
        </p>
      <button className="btn bg-black text-white mt-5 hover:cursor-pointer hover:scale-105 transition-all">Obtenez -15% maintenant</button>
      </section>


      <Footer />
    </div>
  );
}