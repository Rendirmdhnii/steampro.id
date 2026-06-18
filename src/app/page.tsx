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

export default function Home() {
  // Active FAQ index
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Apakah peralatan setrika uap & laundry sudah siap pakai?",
      answer: "Ya, betul sekali. Semua paket usaha dari TukangLaundry.co.id sudah dirancang dengan konsep 'Plug and Play'. Kami menyediakan semua peralatan lengkap, instalasi awal, parfum, deterjen, serta panduan operasional agar Anda dapat langsung memulai usaha tanpa ribet."
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

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-blue-900 selection:text-white overflow-x-hidden">
      
      {/* HEADER NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-900 text-white p-2 rounded-lg flex items-center justify-center">
              <Cloud className="w-5 h-5" />
            </div>
            <span className="text-lg font-extrabold tracking-tight text-blue-900">
              TukangLaundry.co.id
            </span>
          </div>
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
            <Cloud className="w-8 h-8 text-blue-900" />
            <span className="text-2xl font-black tracking-tight text-blue-900">TukangLaundry.co.id</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            
            {/* Kartu 1: PAKET VERSA */}
            <div className="flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group">
              {/* Judul dengan Background Biru Tua */}
              <div className="bg-blue-900 text-white p-4 font-black text-center text-sm sm:text-base tracking-wide uppercase">
                PAKET VERSA
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <p className="text-xs font-semibold text-slate-500 text-center mb-4">Usaha Laundry Kiloan</p>
                
                {/* Gray Placeholder Image */}
                <div className="w-full h-48 bg-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400 font-bold mb-6 select-none border border-slate-300/50">
                  <Cloud className="w-10 h-10 mb-1" />
                  <span className="text-xs">Gambar Paket Versa</span>
                  <span className="text-[10px] opacity-75">13 JT Paket Versa</span>
                </div>

                {/* Price Box */}
                <div className="text-center mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">HARGA PROMO</span>
                  <span className="text-2xl sm:text-3xl font-black text-blue-900">Rp 13.000.000</span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6 flex-1">
                  {[
                    "Mesin Pengering Gas 9Kg",
                    "Setrika Uap Boiler 10L",
                    "Timbangan Digital & Gantung",
                    "Perlengkapan Laundry (Keranjang, Hanger, Nota)",
                    "Paket Chemical 5L",
                    "Media Promo (Brosur, Banner)"
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
                  Pesan Paket Versa
                </a>
              </div>
            </div>

            {/* Kartu 2: PAKET MINIBAR */}
            <div className="flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group">
              {/* Judul dengan Background Biru Tua */}
              <div className="bg-blue-900 text-white p-4 font-black text-center text-sm sm:text-base tracking-wide uppercase">
                PAKET MINIBAR
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <p className="text-xs font-semibold text-slate-500 text-center mb-4">Usaha Laundry Kiloan (Lebih Lengkap)</p>
                
                {/* Gray Placeholder Image */}
                <div className="w-full h-48 bg-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400 font-bold mb-6 select-none border border-slate-300/50">
                  <Cloud className="w-10 h-10 mb-1" />
                  <span className="text-xs">Gambar Paket Minibar</span>
                  <span className="text-[10px] opacity-75">25.3 JT Paket Minibar</span>
                </div>

                {/* Price Box */}
                <div className="text-center mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">HARGA PROMO</span>
                  <span className="text-2xl sm:text-3xl font-black text-blue-900">Rp 25.300.000</span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6 flex-1">
                  {[
                    "Mesin Cuci LG Front Loading 7kg",
                    "Mesin Pengering Gas 9Kg",
                    "Setrika Uap Boiler 10L",
                    "Meja Front Office & Rak Kayu",
                    "Timbangan Digital",
                    "Paket Chemical 10L",
                    "Media Promo Lengkap"
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
                  Pesan Paket Minibar
                </a>
              </div>
            </div>

            {/* Kartu 3: PAKET MASTER */}
            <div className="flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group">
              {/* Judul dengan Background Biru Tua */}
              <div className="bg-blue-900 text-white p-4 font-black text-center text-sm sm:text-base tracking-wide uppercase">
                PAKET MASTER
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col">
                <p className="text-xs font-semibold text-slate-500 text-center mb-4">Laundry Kiloan, Satuan & Dryclean</p>
                
                {/* Gray Placeholder Image */}
                <div className="w-full h-48 bg-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400 font-bold mb-6 select-none border border-slate-300/50">
                  <Cloud className="w-10 h-10 mb-1" />
                  <span className="text-xs">Gambar Paket Master</span>
                  <span className="text-[10px] opacity-75">40 JT Paket Master</span>
                </div>

                {/* Price Box */}
                <div className="text-center mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">HARGA PROMO</span>
                  <span className="text-2xl sm:text-3xl font-black text-blue-900">Rp 40.000.000</span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6 flex-1">
                  {[
                    "2 Unit Mesin Cuci LG",
                    "Pengering SpeedQueen 10,5Kg",
                    "Vertical Steamer",
                    "Meja Front Office & Rak Kayu",
                    "Tablet Android Kasir + Printer Bluetooth",
                    "Aplikasi Cloud Kasir",
                    "Paket Chemical Lengkap"
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
                  Pesan Paket Master
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SECTION SIMULASI OMSET */}
      <section id="simulasi" className="py-12 px-4 md:py-20 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="text-xs font-black uppercase tracking-widest text-blue-900 mb-2">SIMULASI OMSET</h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Simulasi Usaha Laundry</p>
          </div>

          {/* Single Large Card */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-blue-900 text-white p-5 font-bold text-center text-sm sm:text-base uppercase tracking-wide">
              SIMULASI USAHA LAUNDRY
            </div>
            <div className="p-5 sm:p-8 space-y-6 flex-1 flex flex-col">
              <div className="text-center bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="text-xs sm:text-sm md:text-base font-extrabold text-blue-900">
                  Target 80kg/hari | Harga Jual Rp 7.000/kg | 30 Hari Kerja
                </p>
              </div>

              {/* Pemasukan & Pengeluaran Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                {/* Rincian Pemasukan */}
                <div className="space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-widest text-emerald-600">Rincian Pemasukan</h3>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Pemasukan Kiloan</span>
                      <span className="font-bold text-slate-900">Rp 16.800.000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Pemasukan Satuan & Bedcover</span>
                      <span className="font-bold text-slate-900">Rp 6.000.000</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-100 pt-3 font-extrabold text-slate-800">
                      <span>Total Pemasukan</span>
                      <span className="text-blue-900">Rp 22.800.000</span>
                    </div>
                  </div>
                </div>

                {/* Rincian Pengeluaran */}
                <div className="space-y-4 pt-6 md:pt-0 md:pl-6">
                  <h3 className="text-xs font-black uppercase tracking-widest text-red-600">Rincian Pengeluaran</h3>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-slate-600 leading-tight">Total Pengeluaran</span>
                      <span className="font-bold text-red-600 shrink-0">Rp 13.730.000</span>
                    </div>
                    <p className="text-[10px] text-slate-400 italic leading-tight">
                      (Termasuk biaya operasional: Listrik, Air, Gaji 4 Karyawan, Sewa Tempat, dll)
                    </p>
                  </div>
                </div>
              </div>

              {/* Laba Bersih (Box Biru Tua full width di dalam kartu) */}
              <div className="bg-blue-900 text-white p-4 rounded-xl text-center shadow-md">
                <span className="text-xs sm:text-sm font-black tracking-wider uppercase block">
                  ESTIMASI KEUNTUNGAN BERSIH: Rp 9.070.000 / BULAN
                </span>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
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

              {/* Profile */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                <div className="w-9 h-9 bg-blue-900 text-white rounded-full flex items-center justify-center font-extrabold text-xs">
                  IR
                </div>
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
                  "Alhamdulillah usaha laundry saya sudah jalan 2 bulan. Omset stabil setiap hari, terima kasih TukangLaundry.co.id."
                </p>
              </div>

              {/* Profile */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                <div className="w-9 h-9 bg-blue-900 text-white rounded-full flex items-center justify-center font-extrabold text-xs">
                  IY
                </div>
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

              {/* Profile */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                <div className="w-9 h-9 bg-blue-900 text-white rounded-full flex items-center justify-center font-extrabold text-xs">
                  MA
                </div>
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
                <Cloud className="w-5 h-5 text-white" />
                <span className="text-lg font-bold tracking-tight text-white">
                  TukangLaundry.co.id
                </span>
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
                Email: info@tukanglaundry.co.id
              </p>
            </div>
          </div>
          
          <div className="border-t border-blue-950 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-300 gap-4">
            <p>© {new Date().getFullYear()} TukangLaundry.co.id. Hak Cipta Dilindungi.</p>
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
