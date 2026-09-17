import React, { useState, useEffect } from 'react';
import { X, Sparkles, Calendar, Clock, CheckCircle2, ShieldCheck, Star } from 'lucide-react';
import { LOC_SERVICES, ADD_ON_SERVICES } from '../data/locServices';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedServiceId,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: preSelectedServiceId || LOC_SERVICES[0].id,
    date: '',
    time: '10:00 AM',
    clientName: '',
    clientPhone: '',
    clientEmail: '',
    locLength: 'shoulder',
    addOns: [],
    acceptedPolicies: false,
    notes: '',
  });

  const [step, setStep] = useState<'form' | 'success'>('form');

  useEffect(() => {
    if (preSelectedServiceId) {
      setFormData(prev => ({ ...prev, serviceId: preSelectedServiceId }));
    }
  }, [preSelectedServiceId]);

  useEffect(() => {
    // Default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, date: dateStr }));
  }, []);

  if (!isOpen) return null;

  const selectedService = LOC_SERVICES.find(s => s.id === formData.serviceId) || LOC_SERVICES[0];

  const handleAddOnToggle = (id: string) => {
    setFormData(prev => {
      const exists = prev.addOns.includes(id);
      return {
        ...prev,
        addOns: exists ? prev.addOns.filter(a => a !== id) : [...prev.addOns, id],
      };
    });
  };

  const addOnsTotal = formData.addOns.reduce((sum, addOnId) => {
    const item = ADD_ON_SERVICES.find(a => a.id === addOnId);
    return sum + (item ? item.price : 0);
  }, 0);

  const basePrice = selectedService.priceNumeric;
  const subtotal = basePrice + addOnsTotal;
  const deposit = Math.round(subtotal * 0.3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptedPolicies) {
      alert('Please accept the studio policies to proceed with your booking.');
      return;
    }
    setStep('success');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  const timeSlots = [
    '9:00 AM', '10:30 AM', '12:00 PM', '1:30 PM', '3:00 PM', '4:30 PM'
  ];

  return (
    <div 
      id="booking-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="booking-modal-dialog"
        className="relative w-full max-w-2xl bg-[#111827] text-white rounded-3xl border border-gray-700 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#1F2937] px-6 py-4 border-b border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#FFD166] text-xl font-black">★</span>
            <div>
              <h3 className="font-heading font-black text-lg text-white">
                Book Crown Magic
              </h3>
              <p className="text-xs text-gray-400">
                Locgician Studio Sanctuary • Tension-Free Loc Care
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'success' ? (
          /* Confirmation Screen */
          <div className="p-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-[#FFD166] text-[#111827] rounded-full flex items-center justify-center mx-auto shadow-lg shadow-[#FFD166]/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FFD166]">
                Appointment Request Received
              </span>
              <h4 className="font-heading font-black text-2xl text-white">
                Your Crown is Reserved, {formData.clientName || 'Crown Queen/King'}!
              </h4>
              <p className="text-gray-300 text-sm max-w-md mx-auto">
                We have sent an appointment confirmation & prep checklist to{' '}
                <span className="text-[#FFD166] font-semibold">{formData.clientEmail || 'your email'}</span>.
              </p>
            </div>

            {/* Booking Summary Box */}
            <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800 max-w-md mx-auto text-left space-y-3 text-xs">
              <div className="flex justify-between pb-2 border-b border-gray-800">
                <span className="text-gray-400">Service:</span>
                <span className="font-bold text-white text-right">{selectedService.name}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-800">
                <span className="text-gray-400">Date & Time:</span>
                <span className="font-bold text-[#FFD166]">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-800">
                <span className="text-gray-400">Hair Length:</span>
                <span className="font-semibold text-gray-200 capitalize">{formData.locLength}</span>
              </div>
              {formData.addOns.length > 0 && (
                <div className="flex justify-between pb-2 border-b border-gray-800">
                  <span className="text-gray-400">Add-ons:</span>
                  <span className="font-semibold text-gray-200 text-right">
                    {formData.addOns.length} selected (+${addOnsTotal})
                  </span>
                </div>
              )}
              <div className="flex justify-between pt-1 text-sm font-bold">
                <span className="text-white">Estimated Subtotal:</span>
                <span className="text-[#FFD166]">${subtotal}</span>
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>30% Deposit Due at Booking:</span>
                <span className="font-bold text-white">${deposit}</span>
              </div>
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={handleReset}
                className="bg-[#FFD166] hover:bg-[#E5A93C] text-[#111827] font-black text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-all shadow-md"
              >
                Done & Return to Studio
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            
            {/* 1. Select Service */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                1. Select Loc Care Service
              </label>
              <select
                value={formData.serviceId}
                onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFD166]"
              >
                {LOC_SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} — {s.price} ({s.duration})
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-gray-400 mt-1.5">
                {selectedService.summary}
              </p>
            </div>

            {/* 2. Hair Length & Density */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  2. Approximate Loc Length
                </label>
                <select
                  value={formData.locLength}
                  onChange={(e) => setFormData({ ...formData, locLength: e.target.value as any })}
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFD166]"
                >
                  <option value="starter">Starter / Short (Ear to Jaw)</option>
                  <option value="shoulder">Shoulder Length</option>
                  <option value="mid-back">Mid-Back Length</option>
                  <option value="waist-length">Waist Length</option>
                  <option value="thigh-length">Floor / Goddess Length</option>
                </select>
              </div>

              {/* Date selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  3. Preferred Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FFD166]"
                />
              </div>
            </div>

            {/* Time slot picker */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                4. Select Time Slot
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setFormData({ ...formData, time: slot })}
                    className={`py-2 px-1 text-xs font-bold rounded-lg border transition-all ${
                      formData.time === slot
                        ? 'bg-[#FFD166] text-[#111827] border-[#FFD166] shadow-sm'
                        : 'bg-gray-900 text-gray-300 border-gray-700 hover:border-gray-500'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                Optional Crown Add-Ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {ADD_ON_SERVICES.map((add) => {
                  const isChecked = formData.addOns.includes(add.id);
                  return (
                    <button
                      key={add.id}
                      type="button"
                      onClick={() => handleAddOnToggle(add.id)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                        isChecked
                          ? 'bg-gray-900 border-[#FFD166] text-white shadow-inner'
                          : 'bg-gray-900/60 border-gray-800 text-gray-300 hover:border-gray-700'
                      }`}
                    >
                      <span className="font-semibold">{add.name}</span>
                      <span className="text-[#FFD166] font-bold">+$ {add.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Client Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-bold uppercase text-gray-400 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Nia Royal"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-3 py-2.5 text-xs text-white focus:border-[#FFD166] outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase text-gray-400 mb-1">
                  Phone / SMS
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(555) 000-0000"
                  value={formData.clientPhone}
                  onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-3 py-2.5 text-xs text-white focus:border-[#FFD166] outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="crown@email.com"
                  value={formData.clientEmail}
                  onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                  className="w-full bg-gray-900 border border-gray-700 rounded-xl px-3 py-2.5 text-xs text-white focus:border-[#FFD166] outline-none"
                />
              </div>
            </div>

            {/* Policy Checkbox */}
            <div className="bg-gray-900/90 p-4 rounded-xl border border-gray-800 flex items-start gap-3">
              <input
                type="checkbox"
                id="policy-consent"
                checked={formData.acceptedPolicies}
                onChange={(e) => setFormData({ ...formData, acceptedPolicies: e.target.checked })}
                className="mt-1 w-4 h-4 rounded border-gray-700 text-[#FFD166] focus:ring-[#FFD166] accent-[#FFD166]"
              />
              <label htmlFor="policy-consent" className="text-xs text-gray-300 leading-normal cursor-pointer">
                I agree to the <strong className="text-white">Locgician Studio Policies</strong> (clean product-free hair, 15-min grace period, 30% deposit to confirm, no unsupervised guests).
              </label>
            </div>

            {/* Pricing Summary & Submit */}
            <div className="pt-2 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-gray-400">
                  Estimated Total: <span className="text-[#FFD166] font-extrabold text-base">${subtotal}</span>
                </div>
                <div className="text-[11px] text-gray-500">
                  Deposit required to reserve: <span className="text-white font-bold">${deposit}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#FFD166] hover:bg-[#E5A93C] text-[#111827] font-black text-xs uppercase tracking-wider px-8 py-3.5 rounded-full transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Confirm Appointment</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
