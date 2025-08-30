'use client';
import { useRef, useState } from 'react';
import MonogramReactor from './MonogramReactor';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function Hero() {
  const { t } = useTranslation('common');
  const [fast, setFast] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  function speed(on: boolean) {
    // brief speed-up, then settle back
    if (on) {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      setFast(true);
    } else {
      timeoutRef.current = window.setTimeout(() => setFast(false), 1200);
    }
  }

  return (
    <section className="relative bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
            <span className="text-pink-600">Rewiring</span><br />
            enterprise <span className="text-pink-600">IT</span><br />
            with <span className="text-pink-600">AI</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600 md:text-lg">
            Expert managed services, cybersecurity, and 24/7 support.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/services"
              onMouseEnter={() => speed(true)}
              onMouseLeave={() => speed(false)}
              className="rounded-full bg-pink-600 px-6 py-3 text-white shadow-sm transition-colors hover:bg-pink-700"
            >
              {t('hero.exploreServices')}
            </Link>
            <Link
              href="/contact"
              onMouseEnter={() => speed(true)}
              onMouseLeave={() => speed(false)}
              className="rounded-full border-2 border-teal-600 px-6 py-3 text-teal-600 hover:bg-teal-50"
            >
              {t('hero.requestConsultation')}
            </Link>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 text-sm text-neutral-600 max-w-md">
            <div><dt className="font-medium text-neutral-900">SLA</dt><dd>15-minute first response</dd></div>
            <div><dt className="font-medium text-neutral-900">Uptime</dt><dd>99.9% target</dd></div>
            <div><dt className="font-medium text-neutral-900">Location</dt><dd>Tokyo • Japan</dd></div>
          </dl>
        </div>

        <div className="flex items-center justify-center">
          <MonogramReactor fast={fast} />
        </div>
      </div>
    </section>
  );
}