import React from 'react';
import { XMarkIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { UX_AUDIT_POINTS } from '../data/companyInfo';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal: React.FC<AuditModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-stone-200 max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-stone-200 bg-stone-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-xl font-bold">
                  Laporan Audit & Transformasi UX/UI Heviny.com
                </h2>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Selesai Diperbaiki
                </span>
              </div>
              <p className="text-xs text-stone-300">
                Analisis mendalam masalah website lama vs solusi arsitektur modern kelas dunia
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with Scroll */}
        <div className="p-6 overflow-y-auto space-y-8 text-stone-800">
          
          {/* Executive Summary */}
          <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-5">
            <h3 className="font-serif font-bold text-amber-950 text-base mb-2">
              Executive Summary: Mengapa Desain Lama Kaku & Tidak Menjual?
            </h3>
            <p className="text-sm text-amber-900/90 leading-relaxed">
              Website lama <code className="font-mono text-xs bg-white px-1.5 py-0.5 rounded border border-amber-200">heviny.com</code> beroperasi layaknya blog/katalog arsip pasif era 2010-an. Hal ini menurunkan persepsi nilai (*perceived value*) merek kosmetik Heviny yang sebenarnya memiliki keunggulan manufaktur 20+ tahun di Surabaya, formula alami bersertifikasi BPOM/Halal, serta jaringan ribuan salon mitra. Website baru ini dirancang untuk mendongkrak penjualan retail sekaligus melayani transaksi grosir salon & spa resmi bernilai tinggi.
            </p>
          </div>

          {/* Audit Point Grid */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-stone-900 border-b border-stone-200 pb-2">
              Tabel Komparasi Masalah Lama vs Solusi Baru
            </h4>

            <div className="grid gap-4">
              {UX_AUDIT_POINTS.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-stone-200 rounded-xl p-4 bg-white shadow-2xs hover:border-amber-300 transition"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-stone-100 text-stone-800 border border-stone-200">
                      {item.category}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                        item.impact === 'Critical'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      Dampak: {item.impact}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-xs sm:text-sm">
                    {/* Old Problem */}
                    <div className="p-3 rounded-lg bg-rose-50/70 border border-rose-200/60 text-rose-950">
                      <div className="flex items-center gap-1.5 font-bold text-rose-800 mb-1">
                        <ExclamationTriangleIcon className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>Kelemahan Website Lama:</span>
                      </div>
                      <p className="text-stone-700">{item.issueOldSite}</p>
                    </div>

                    {/* New Solution */}
                    <div className="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200/60 text-emerald-950">
                      <div className="flex items-center gap-1.5 font-bold text-emerald-800 mb-1">
                        <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Implementasi Solusi Baru:</span>
                      </div>
                      <p className="text-stone-700">{item.solutionNewSite}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Pilar Arsitektur Baru */}
          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 space-y-3">
            <h4 className="font-serif text-base font-bold text-stone-900">
              4 Fitur Kunci Transformasi Bisnis pada Versi Baru:
            </h4>
            <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="bg-white p-3 rounded-lg border border-stone-200">
                <strong className="text-stone-900 block">1. Katalog Interaktif Multi-Kemasan</strong>
                <span className="text-stone-600">Filter cepat, pencarian real-time, dan tampilan transparan ukuran retail (250ml) vs grosir salon (1L & 5L).</span>
              </div>

              <div className="bg-white p-3 rounded-lg border border-stone-200">
                <strong className="text-stone-900 block">2. Spesifikasi Kemasan & Grosir Salon</strong>
                <span className="text-stone-600">Informasi spesifikasi packing karton dan kemasan jerigen 5L untuk pemilik salon, spa, dan distributor grosir.</span>
              </div>

              <div className="bg-white p-3 rounded-lg border border-stone-200">
                <strong className="text-stone-900 block">3. Diagnostic Kulit & Rambut</strong>
                <span className="text-stone-600">Fitur konsultasi mandiri 3 langkah untuk meningkatkan engagement dan konversi keranjang belanja.</span>
              </div>

              <div className="bg-white p-3 rounded-lg border border-stone-200">
                <strong className="text-stone-900 block">4. Transparansi Legalitas Hana Cosmetics</strong>
                <span className="text-stone-600">Pencantuman nomor resmi BPOM RI, Halal MUI, alamat perusahaan Surabaya, dan formulir kontak email.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-stone-500">
            Perubahan ini langsung aktif pada web applet ini.
          </p>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition"
          >
            Tutup & Jelajahi Website Baru
          </button>
        </div>

      </div>
    </div>
  );
};
