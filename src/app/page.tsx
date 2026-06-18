"use client";

import React, { useState } from "react";
import {
  Cloud,
  Check,
  Award,
  Headphones,
  Star,
  Phone,
  MessageSquare,
  MapPin,
  ChevronDown
} from "lucide-react";

// Integrated Logo representing steam iron, cloud, and droplet
function LogoSteamPro({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="bg-blue-900 text-white p-2.5 rounded-xl flex items-center justify-center shadow-md relative overflow-hidden shrink-0">
        <svg className="w-6 h-6 text-white" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cloud Outline */}
          <path d="M42 20C40.5 15.5 35.5 13 30 14C24.5 15 21 19.5 21.5 25C17.5 25 14.5 28 14 32C13.5 36 16.5 40 21 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
          {/* Steam Iron */}
          <path d="M18 44H48C51.5 44 54 41 53.5 37C52.5 31 48 25 40 25H26C24 25 22 27 22 29V37" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          {/* Handle */}
          <path d="M26 25V20C26 17 29.5 15.5 36 15.5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
          {/* Droplet */}
          <path d="M38 43C38 41.5 39.5 39.5 40.5 39.5C41.5 39.5 43 41.5 43 43C43 44.5 40.7 45.5 40.5 45.5C40.3 45.5 38 44.5 38 43Z" fill="currentColor"/>
        </svg>
      </div>
      <span className="text-xl font-extrabold tracking-tight text-blue-900">
        SteamPro<span className="text-blue-500">.id</span>
      </span>
    </div>
  );
}

export default function Home() {
  // Calculator States
  const [cucianPerHari, setCucianPerHari] = useState<number>(80);
  const [paketDipilih, setPaketDipilih] = useState<"starter" | "premium" | "laundry">("laundry");

  // Active FAQ index
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apakah peralatan setrika uap & laundry sudah siap pakai?",
      answer: "Ya, betul sekali. Semua paket usaha dari SteamPro.id sudah dirancang dengan konsep 'Plug and Play'. Kami menyediakan semua peralatan lengkap, instalasi awal, parfum, deterjen, serta panduan operasional agar Anda dapat langsung memulai usaha tanpa ribet."
    },
    {
      question: "Bagaimana dengan pengiriman dan instalasi ke luar kota?",
      answer: "Kami melayani pengiriman ke seluruh wilayah Indonesia. Untuk wilayah sekitar workshop kami, tim teknisi kami akan datang langsung melakukan pemasangan, instalasi selang boiler, dan memberikan training langsung secara offline di lokasi Anda."
    },
    {
      question: "Apakah ada training atau bimbingan setelah pembelian?",
      answer: "Tentu saja. Anda akan mendapatkan bimbingan lengkap, video panduan penggunaan alat, serta akses ke Grup Konsultasi WA khusus mitra."
    }
  ];

  // Calculator Formulas
  const getSimulasiData = () => {
    if (paketDipilih === "starter") {
      const hargaPerKg = 4000;
      const pemasukanHarianKiloan = cucianPerHari * hargaPerKg;
      const pemasukanBulananKiloan = pemasukanHarianKiloan * 30;
      
      const pemasukanSatuanBulanan = Math.round((cucianPerHari / 80) * 1000000);
      const totalPemasukan = pemasukanBulananKiloan + pemasukanSatuanBulanan;

      const gajiKaryawan = 1500000; // 1 Orang
      const sewaTempat = 500000;
      const biayaLainLain = 500000 + Math.round(cucianPerHari * 600 * 30);
      const totalPengeluaran = gajiKaryawan + sewaTempat + biayaLainLain;
      const labaBersih = totalPemasukan - totalPengeluaran;

      return {
        hargaPerKg,
        pemasukanHarianKiloan,
        pemasukanSatuanBulanan,
        totalPemasukan,
        gajiKaryawan,
        sewaTempat,
        biayaLainLain,
        totalPengeluaran,
        labaBersih
      };
    } else if (paketDipilih === "premium") {
      const hargaPerKg = 4500;
      const pemasukanHarianKiloan = cucianPerHari * hargaPerKg;
      const pemasukanBulananKiloan = pemasukanHarianKiloan * 30;
      
      const pemasukanSatuanBulanan = Math.round((cucianPerHari / 80) * 2000000);
      const totalPemasukan = pemasukanBulananKiloan + pemasukanSatuanBulanan;

      const gajiKaryawan = 3000000; // 2 Orang
      const sewaTempat = 1000000;
      const biayaLainLain = 1000000 + Math.round(cucianPerHari * 800 * 30);
      const totalPengeluaran = gajiKaryawan + sewaTempat + biayaLainLain;
      const labaBersih = totalPemasukan - totalPengeluaran;

      return {
        hargaPerKg,
        pemasukanHarianKiloan,
        pemasukanSatuanBulanan,
        totalPemasukan,
        gajiKaryawan,
        sewaTempat,
        biayaLainLain,
        totalPengeluaran,
        labaBersih
      };
    } else {
      // Laundry Lengkap (MUST match exactly Laba Bersih Rp 9.070.000 at 80 Kg)
      const hargaPerKg = 7000;
      const pemasukanHarianKiloan = cucianPerHari * hargaPerKg;
      const pemasukanBulananKiloan = pemasukanHarianKiloan * 30;
      
      // Scaling Pemasukan Satuan so it is exactly 6M at 80 Kg
      const pemasukanSatuanBulanan = Math.round((cucianPerHari / 80) * 6000000);
      const totalPemasukan = pemasukanBulananKiloan + pemasukanSatuanBulanan;

      const gajiKaryawan = 6000000; // 4 Orang
      const sewaTempat = 2000000;
      
      // Scaling variable cost so that it is exactly 5.730.000 at 80 Kg
      // 2.000.000 (fixed) + 3.730.000 (variable)
      // 3.730.000 / (80 * 30) = 1554.1667 per Kg
      const biayaLainLain = 2000000 + Math.round(cucianPerHari * 1554.1667 * 30);
      const totalPengeluaran = gajiKaryawan + sewaTempat + biayaLainLain;
      const labaBersih = totalPemasukan - totalPengeluaran;

      return {
        hargaPerKg,
        pemasukanHarianKiloan,
        pemasukanSatuanBulanan,
        totalPemasukan,
        gajiKaryawan,
        sewaTempat,
        biayaLainLain,
        totalPengeluaran,
        labaBersih
      };
    }
  };

  const calc = getSimulasiData();

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-900 selection:text-white overflow-x-hidden">
      
      {/* HEADER NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <LogoSteamPro />
          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-slate-600">
            <a href="#katalog" className="hover:text-blue-900 transition-colors">Katalog Paket</a>
            <a href="#simulasi" className="hover:text-blue-900 transition-colors">Simulasi Omset</a>
            <a href="#testimoni" className="hover:text-blue-900 transition-colors">Testimoni</a>
            <a href="#faq" className="hover:text-blue-900 transition-colors">FAQ</a>
          </nav>
          <div>
            <a 
              href="https://wa.me/6289678449424"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold shadow-md hover:bg-blue-800 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Hubungi CS</span>
            </a>
          </div>
        </div>
      </header>

      {/* 1. HEADER & HERO SECTION */}
      <section className="bg-slate-50 py-12 px-4 md:py-20 md:px-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo Placeholder */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <LogoSteamPro />
          </div>

          {/* Judul Utama */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase max-w-3xl mx-auto">
            PUSAT PAKET USAHA SETRIKA UAP & LAUNDRY
          </h1>

          {/* 3 Badges (Flex-col on mobile, md:flex-row on desktop) */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-center mt-8 max-w-3xl mx-auto w-full px-2">
            {/* Badge 1 */}
            <div className="flex items-center justify-center gap-3 bg-blue-900 text-white px-6 py-4 rounded-xl shadow-md border border-blue-950 flex-1">
              <Check className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-center">PAKET LENGKAP</span>
            </div>
            {/* Badge 2 */}
            <div className="flex items-center justify-center gap-3 bg-blue-900 text-white px-6 py-4 rounded-xl shadow-md border border-blue-950 flex-1">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-center">KUALITAS TERBAIK</span>
            </div>
            {/* Badge 3 */}
            <div className="flex items-center justify-center gap-3 bg-blue-900 text-white px-6 py-4 rounded-xl shadow-md border border-blue-950 flex-1">
              <Headphones className="w-5 h-5 text-sky-400 shrink-0" />
              <span className="text-xs sm:text-sm font-black tracking-wider uppercase text-center">SUPPORT & KONSULTASI</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="mt-8 text-base sm:text-xl font-extrabold text-blue-900 tracking-wide max-w-2xl mx-auto leading-relaxed">
            "Solusi Memulai Usaha, Dari Rumah Jadi Penghasilan"
          </p>
          
          <p className="mt-3 text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
            Mulai langkah sukses Anda dengan peralatan terjamin, panduan langsung, dan bimbingan sampai jalan.
          </p>
        </div>
      </section>

      {/* 2. SECTION KATALOG PAKET */}
      <section id="katalog" className="py-12 px-4 md:py-20 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-xs font-black uppercase tracking-widest text-blue-900 mb-2">KATALOG PRODUK</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Pilih Paket Usaha Laundry Anda</p>
          </div>

          {/* Catalog Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Kartu 1: PAKET STARTER SETRIKA UAP */}
            <div className="flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group">
              <img 
                src="/paket_starter.png" 
                alt="Paket Starter Setrika Uap" 
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="bg-blue-900 text-white p-4 font-black text-center text-sm sm:text-base tracking-wide uppercase">
                PAKET STARTER SETRIKA UAP
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <p className="text-xs font-semibold text-slate-500 text-center mb-4">Cocok untuk Pemula</p>

                {/* Price Box */}
                <div className="text-center mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">HARGA PROMO</span>
                  <span className="text-2xl sm:text-3xl font-black text-blue-900">Rp 1.700.000</span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6 flex-1">
                  {[
                    "Setrika Uap Portable",
                    "Meja Setrika",
                    "Gantungan Baju",
                    "Selang Uap Tambahan",
                    "Panduan Penggunaan",
                    "Grup Konsultasi"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/6289678449424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-900 text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition-colors text-sm uppercase tracking-wider text-center"
                >
                  SIAP PAKAI
                </a>
              </div>
            </div>

            {/* Kartu 2: PAKET PREMIUM SETRIKA UAP */}
            <div className="flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group">
              <img 
                src="/paket_premium.png" 
                alt="Paket Premium Setrika Uap" 
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="bg-blue-900 text-white p-4 font-black text-center text-sm sm:text-base tracking-wide uppercase">
                PAKET PREMIUM SETRIKA UAP
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <p className="text-xs font-semibold text-slate-500 text-center mb-4">Usaha Rumahan Lebih Profesional</p>

                {/* Price Box */}
                <div className="text-center mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">HARGA PROMO</span>
                  <span className="text-2xl sm:text-3xl font-black text-blue-900">Rp 3.200.000</span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6 flex-1">
                  {[
                    "Setrika Uap Boiler",
                    "Meja Setrika Premium",
                    "Gantungan Baju Stainless",
                    "Selang Uap Anti Panas",
                    "Parfum Laundry 1L",
                    "Panduan & Training Online",
                    "Grup Konsultasi"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/6289678449424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-900 text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition-colors text-sm uppercase tracking-wider text-center"
                >
                  LEBIH CEPAT & RAPI
                </a>
              </div>
            </div>

            {/* Kartu 3: PAKET LAUNDRY LENGKAP */}
            <div className="flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group">
              <img 
                src="/paket_laundry.png" 
                alt="Paket Laundry Lengkap" 
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="bg-blue-900 text-white p-4 font-black text-center text-sm sm:text-base tracking-wide uppercase">
                PAKET LAUNDRY LENGKAP
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <p className="text-xs font-semibold text-slate-500 text-center mb-4">Usaha Laundry Siap Jalan</p>

                {/* Price Box */}
                <div className="text-center mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">HARGA PROMO</span>
                  <span className="text-2xl sm:text-3xl font-black text-blue-900">Rp 13.000.000</span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6 flex-1">
                  {[
                    "2 Unit Mesin Cuci",
                    "1 Unit Pengering",
                    "Setrika Uap Boiler + Meja Setrika",
                    "Rak Laundry & Meja Lipat",
                    "Timbangan Digital",
                    "Perlengkapan Laundry Lengkap",
                    "Training & SOP Usaha Laundry",
                    "Desain Banner & Branding"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/6289678449424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-900 text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition-colors text-sm uppercase tracking-wider text-center"
                >
                  SIAP JALAN & PROFESIONAL
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION SIMULASI (KALKULATOR PENDAPATAN INTERAKTIF) */}
      <section id="simulasi" className="py-12 px-4 md:py-20 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-xs font-black uppercase tracking-widest text-blue-900 mb-2">SIMULASI OMSET</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              KALKULATOR SIMULASI PENDAPATAN STEAMPRO.ID
            </p>
            <p className="mt-3 text-slate-500 text-xs sm:text-sm">
              Sesuaikan target harian Anda untuk melihat estimasi real-time omset dan keuntungan bulanan.
            </p>
          </div>

          {/* Interactive Calculator Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
            {/* Input & Form Control Column */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider text-blue-900 mb-4">Pengaturan Proyeksi</h3>
                
                {/* Tabs to choose package simulation */}
                <div className="flex border border-slate-200 rounded-xl overflow-hidden mb-6">
                  <button
                    type="button"
                    onClick={() => setPaketDipilih("starter")}
                    className={`flex-1 py-3 text-center text-xs font-bold transition-all ${
                      paketDipilih === "starter"
                        ? "bg-blue-900 text-white shadow-inner"
                        : "bg-white text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    Paket Starter
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaketDipilih("premium")}
                    className={`flex-1 py-3 text-center text-xs font-bold transition-all ${
                      paketDipilih === "premium"
                        ? "bg-blue-900 text-white shadow-inner"
                        : "bg-white text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    Paket Premium
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaketDipilih("laundry")}
                    className={`flex-1 py-3 text-center text-xs font-bold transition-all ${
                      paketDipilih === "laundry"
                        ? "bg-blue-900 text-white shadow-inner"
                        : "bg-white text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    Laundry Lengkap
                  </button>
                </div>

                {/* Slider / Text Input */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm font-extrabold text-slate-700">Target Cucian Harian (Kg):</span>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="10"
                        max="150"
                        value={cucianPerHari}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          if (val >= 10 && val <= 150) setCucianPerHari(val);
                          else if (val < 10) setCucianPerHari(10);
                          else if (val > 150) setCucianPerHari(150);
                        }}
                        className="w-16 px-2 py-1 border border-slate-200 rounded text-center text-xs font-bold text-blue-900"
                      />
                      <span className="text-xs font-black text-slate-400">Kg</span>
                    </div>
                  </div>

                  <input
                    type="range"
                    min="10"
                    max="150"
                    step="5"
                    value={cucianPerHari}
                    onChange={(e) => setCucianPerHari(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-900"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold">
                    <span>10 Kg / Hari</span>
                    <span>150 Kg / Hari</span>
                  </div>
                </div>
              </div>

              {/* Rincian Breakdown */}
              <div className="space-y-4 border-t border-slate-100 pt-6">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Rincian Perhitungan Bulanan</h4>
                
                <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-slate-500 block">Pemasukan Kiloan:</span>
                    <span className="font-extrabold text-slate-800">
                      Rp {calc.pemasukanHarianKiloan.toLocaleString("id-ID")} x 30 Hari
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-500 block">Subtotal:</span>
                    <span className="font-bold text-slate-900">
                      Rp {(calc.pemasukanHarianKiloan * 30).toLocaleString("id-ID")}
                    </span>
                  </div>

                  {calc.pemasukanSatuanBulanan > 0 && (
                    <>
                      <div>
                        <span className="text-slate-500 block">Pemasukan Satuan & Bedcover:</span>
                        <span className="font-extrabold text-slate-800">Estimasi bulanan</span>
                      </div>
                      <div className="text-right">
                        <span className="text-slate-500 block">Subtotal:</span>
                        <span className="font-bold text-emerald-600">
                          + Rp {calc.pemasukanSatuanBulanan.toLocaleString("id-ID")}
                        </span>
                      </div>
                    </>
                  )}

                  <div className="col-span-2 border-t border-dashed border-slate-200 my-1"></div>

                  <div className="font-extrabold text-slate-800">
                    TOTAL PEMASUKAN
                  </div>
                  <div className="text-right font-black text-blue-900">
                    Rp {calc.totalPemasukan.toLocaleString("id-ID")}
                  </div>
                </div>
              </div>
            </div>

            {/* Output & Visualisation Column */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              
              {/* Cost breakdown card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-red-600 mb-4">Estimasi Pengeluaran Bulanan</h3>
                  
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Gaji Karyawan</span>
                      <span className="font-bold text-slate-800">Rp {calc.gajiKaryawan.toLocaleString("id-ID")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Sewa Tempat</span>
                      <span className="font-bold text-slate-800">Rp {calc.sewaTempat.toLocaleString("id-ID")}</span>
                    </div>
                    <div className="flex justify-between leading-snug">
                      <div>
                        <span className="text-slate-600 block">Operasional & Chemical</span>
                        <span className="text-[9px] text-slate-400 block">(Listrik, Air, Gas, Depresiasi)</span>
                      </div>
                      <span className="font-bold text-slate-800 align-bottom">Rp {calc.biayaLainLain.toLocaleString("id-ID")}</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-100 pt-3 font-extrabold text-slate-800">
                      <span>TOTAL PENGELUARAN</span>
                      <span className="text-red-600">Rp {calc.totalPengeluaran.toLocaleString("id-ID")}</span>
                    </div>
                  </div>
                </div>

                {/* Micro-animated Growth Visualisation Image */}
                <div className="mt-6 flex flex-col items-center justify-center bg-slate-50 border border-slate-100 p-4 rounded-xl overflow-hidden min-h-[140px] relative">
                  <img
                    src="/image_3.png"
                    alt="Wealth Growth Visualisation"
                    className="h-28 object-contain transition-all duration-300 ease-out"
                    style={{ transform: `scale(${0.85 + (cucianPerHari / 300)})` }}
                  />
                  <span className="text-[9px] text-slate-400 mt-2 font-bold tracking-wide">VISUALISASI KEUNTUNGAN MITRA</span>
                </div>
              </div>

              {/* Laba Bersih Display */}
              <div className="space-y-2">
                <div className="bg-blue-900 text-white p-5 rounded-2xl text-center shadow-md border border-blue-950 flex flex-col justify-center items-center">
                  <span className="text-[10px] font-black tracking-widest uppercase text-blue-200 block mb-1">
                    ESTIMASI LABA BERSIH
                  </span>
                  <span className="text-base sm:text-lg md:text-xl font-black tracking-tight block">
                    {calc.labaBersih >= 0
                      ? `LABA BERSIH BULANAN: Rp ${calc.labaBersih.toLocaleString("id-ID")} / BULAN`
                      : `ESTIMASI RUGI: Rp ${Math.abs(calc.labaBersih).toLocaleString("id-ID")} / BULAN`}
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 italic text-center font-semibold">
                  * (Belum termasuk layanan antar jemput)
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION TESTIMONI */}
      <section id="testimoni" className="py-12 px-4 md:py-20 md:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-xs font-black uppercase tracking-widest text-blue-900 mb-2">TESTIMONI MITRA</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Kisah Sukses Bersama Kami</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Testimoni 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                {/* Quote Text */}
                <p className="text-slate-600 italic text-xs sm:text-sm leading-relaxed mb-6">
                  "Paket setrika uapnya lengkap dan mudah digunakan. Sekarang saya bisa dapat penghasilan tambahan dari rumah."
                </p>
              </div>

              {/* Profile with portrait image */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                <img
                  src="/testi_rina.png"
                  alt="Ibu Rina"
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-sm"
                />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">Ibu Rina</h4>
                  <span className="text-[10px] text-slate-400 flex items-center gap-0.5">
                    <MapPin className="w-3 h-3" /> Sidoarjo
                  </span>
                </div>
              </div>
            </div>

            {/* Testimoni 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                {/* Quote Text */}
                <p className="text-slate-600 italic text-xs sm:text-sm leading-relaxed mb-6">
                  "Alhamdulillah usaha laundry saya sudah jalan 2 bulan. Omset stabil setiap hari, terima kasih SteamPro.id."
                </p>
              </div>

              {/* Profile with portrait image */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                <img
                  src="/testi_yanti.png"
                  alt="Ibu Yanti"
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-sm"
                />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">Ibu Yanti</h4>
                  <span className="text-[10px] text-slate-400 flex items-center gap-0.5">
                    <MapPin className="w-3 h-3" /> Surabaya
                  </span>
                </div>
              </div>
            </div>

            {/* Testimoni 3 */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                {/* Quote Text */}
                <p className="text-slate-600 italic text-xs sm:text-sm leading-relaxed mb-6">
                  "Pelayanannya ramah, pemasangan cepat, dan after sales-nya selalu siap bantu."
                </p>
              </div>

              {/* Profile with portrait image */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                <img
                  src="/testi_andi.png"
                  alt="Mas Andi"
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-sm"
                />
                <div>
                  <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">Mas Andi</h4>
                  <span className="text-[10px] text-slate-400 flex items-center gap-0.5">
                    <MapPin className="w-3 h-3" /> Jombang
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-12 px-4 md:py-20 md:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-xs font-black uppercase tracking-widest text-blue-900 mb-2">FAQ</h2>
            <p className="text-2xl font-extrabold text-slate-900 tracking-tight">Tanya Jawab</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-slate-800 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors text-xs sm:text-sm"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <div 
                    className={`transition-all duration-200 overflow-hidden ${
                      isOpen ? "max-h-60 border-t border-slate-100" : "max-h-0"
                    }`}
                  >
                    <p className="p-4 sm:p-5 text-xs sm:text-sm text-slate-500 leading-relaxed bg-slate-50/50">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-slate-300 py-12 px-4 md:px-8 border-t border-blue-950 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <LogoSteamPro />
              </div>
              <p className="text-slate-300 max-w-sm leading-relaxed text-xs">
                Penyedia boiler setrika uap, mesin cuci laundry, dan perlengkapan siap pakai bergaransi di Indonesia.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white text-xs tracking-wider uppercase mb-4">Navigasi</h4>
              <ul className="space-y-2">
                <li><a href="#katalog" className="hover:text-white transition-colors">Katalog Paket</a></li>
                <li><a href="#simulasi" className="hover:text-white transition-colors">Simulasi Omset</a></li>
                <li><a href="#testimoni" className="hover:text-white transition-colors">Testimoni Mitra</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white text-xs tracking-wider uppercase mb-4">Kontak</h4>
              <p className="leading-relaxed text-xs text-slate-300">
                Jl. Raya Laundry No. 88, Jawa Timur<br />
                WhatsApp: 089678449424<br />
                Email: info@steampro.id
              </p>
            </div>
          </div>
          
          <div className="border-t border-blue-950 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-300 gap-4">
            <p>© {new Date().getFullYear()} SteamPro.id. Hak Cipta Dilindungi.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-white">Kebijakan Privasi</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 group">
        {/* Hover Popover Greeting */}
        <div className="bg-white text-slate-800 text-[10px] font-bold py-1.5 px-3 rounded-lg shadow-lg border border-slate-100 flex items-center gap-1.5 max-w-xs transition-all duration-300 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping shrink-0"></div>
          <span>Tanya Paket Usaha?</span>
        </div>
        
        {/* Floating Circle Button */}
        <a
          href="https://wa.me/6289678449424"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl hover:bg-emerald-400 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center relative border border-emerald-400/20"
        >
          <MessageSquare className="w-5 h-5 fill-white/10" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[9px] text-white font-bold items-center justify-center">1</span>
          </span>
        </a>
      </div>

    </div>
  );
}
