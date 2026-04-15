'use client'

import Link from 'next/link'
import { Zap, Instagram, Facebook, Youtube, Mail } from 'lucide-react'
import { clearConsent } from '@/lib/cookie-consent'
import { usePolicies } from '@/hooks/use-policies'

const footerLinks = {
  shop: [
    { label: 'Tutti i Prodotti', href: '/products' },
    { label: 'ScalpZen Pro', href: '/products/scalpzen-pro-massaggiatore-elettrico-per-cuoio-capelluto' },
    { label: 'DuoPack', href: '/products/scalpzen-duopack-kit-coppia-massaggiatore-cuoio-capelluto' },
    { label: 'Collezioni', href: '/collections' },
  ],
  help: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Spedizione e Resi', href: '/shipping' },
    { label: 'Contattaci', href: '/contact' },
  ],
}

export default function Footer() {
  const { policies } = usePolicies()

  const companyLinks = [
    { label: 'Chi Siamo', href: '/about' },
  ]
  if (policies?.privacy_policy)
    companyLinks.push({ label: 'Privacy Policy', href: '/privacy' })
  if (policies?.terms_of_service)
    companyLinks.push({ label: 'Termini di Servizio', href: '/terms' })
  if (policies?.refund_policy)
    companyLinks.push({ label: 'Politica di Rimborso', href: '/refund-policy' })
  if (policies?.cookie_policy)
    companyLinks.push({ label: 'Cookie Policy', href: '/cookie-policy' })

  return (
    <footer className="border-t bg-[hsl(210_25%_10%)] text-white">
      <div className="container-custom py-16">
        {/* Top: brand + links grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[hsl(168_55%_36%)] flex items-center justify-center">
                <Zap className="h-3.5 w-3.5 text-white fill-white" />
              </div>
              <span className="font-heading text-xl font-semibold tracking-tight text-white">
                ScalpZen
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/55 leading-relaxed max-w-xs">
              Tecnologia e benessere per il tuo cuoio capelluto. Rilassa, stimola, rigenera — ogni giorno.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-5">
              <a href="#" aria-label="Instagram" className="text-white/40 hover:text-white transition-colors">
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-white/40 hover:text-white transition-colors">
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a href="#" aria-label="YouTube" className="text-white/40 hover:text-white transition-colors">
                <Youtube className="h-4.5 w-4.5" />
              </a>
              <a href="mailto:ciao@scalpzen.com" aria-label="Email" className="text-white/40 hover:text-white transition-colors">
                <Mail className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-widest mb-4 text-white/40">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-widest mb-4 text-white/40">Assistenza</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-widest mb-4 text-white/40">Azienda</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            &copy; {new Date().getFullYear()} ScalpZen. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                clearConsent()
                window.dispatchEvent(new Event('manage-cookies'))
              }}
              className="text-xs text-white/35 hover:text-white/60 transition-colors"
            >
              Gestisci Cookie
            </button>
            <span className="text-xs text-white/25">Powered by Amboras</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
