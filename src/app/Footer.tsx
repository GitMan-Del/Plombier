import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative text-white font-poppins bg-[#3338C3]">
      {/* Imaginea ca background */}

      {/* Continutul peste imagine */}
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo & Description */}
          <div className="md:w-1/3">
            <h2 className="text-4xl font-league mb-3 flex items-center gap-2">
              <Image src="/logo-plombix.png" width={30} height={30} alt="Plombix" />
              Plombix.
            </h2>
            <p className="text-sm">
              Plombix est votre partenaire de confiance pour tous vos besoins en plomberie à Paris et en Île-de-France. Interventions rapides, dépannage d&apos;urgence, installations et rénovations – avec professionnalisme, clarté et garantie.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:w-1/3">
            <h3 className="text-white tracking-widest  text-xl mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#accueil" className="hover:underline">Accueil</a></li>
              <li><a href="#services" className="hover:underline">Nos Services</a></li>
              <li><Link href="/tarifs" className="hover:underline">Tarifs & Devis</Link></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:w-1/3">
            <h3 className="text-white text-xl mb-4 tracking-widest">Coordonnées</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="text-blue-300" />
                Adresse: Paris, Île-de-France
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-blue-300" />
                Téléphone: 06 55 94 65 92
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-blue-300" />
                Email: contact@plombix.fr
              </li>
              <li>
                Horaires: 7j/7 - 09h à 22h
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-left text-xs text-white/70">
          © 2025 Plombix – Tous droits réservés
        </div>
      </div>
    </footer>
  );
}