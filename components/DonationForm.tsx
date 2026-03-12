'use client';

import { useState } from 'react';
import { type Locale } from '@/lib/i18n';
import { CreditCard, Phone, Landmark, Heart } from 'lucide-react';

interface DonationFormProps {
    lang: Locale;
}

export default function DonationForm({ lang }: DonationFormProps) {
    const [method, setMethod] = useState<'card' | 'mobile' | 'bank'>('card');
    const [amount, setAmount] = useState('50');
    const [customAmount, setCustomAmount] = useState('');

    const methods = [
        { id: 'card', name: lang === 'fr' ? 'Carte Bancaire' : 'Credit Card', icon: CreditCard },
        { id: 'mobile', name: lang === 'fr' ? 'Mobile Money' : 'Mobile Money', icon: Phone },
        { id: 'bank', name: lang === 'fr' ? 'Virement Bancaire' : 'Bank Transfer', icon: Landmark },
    ];

    const amounts = ['10', '25', '50', '100', '250'];

    return (
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 border border-gray-100">
            <div className="flex items-center space-x-3 mb-8">
                <div className="bg-primary/10 p-3 rounded-full">
                    <Heart className="text-primary" size={24} />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                        {lang === 'fr' ? 'Faites un don' : 'Make a donation'}
                    </h2>
                    <p className="text-gray-500 text-sm">
                        {lang === 'fr' ? 'Soutenez nos actions durablement' : 'Support our actions over time'}
                    </p>
                </div>
            </div>

            <div className="space-y-8">
                {/* Amount Selection */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                        {lang === 'fr' ? 'Choisissez un montant ($)' : 'Choose an amount ($)'}
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                        {amounts.map((a) => (
                            <button
                                key={a}
                                onClick={() => { setAmount(a); setCustomAmount(''); }}
                                className={`py-3 px-2 rounded-xl border-2 transition-all font-bold ${amount === a && !customAmount
                                        ? 'border-primary bg-primary/5 text-primary'
                                        : 'border-gray-100 hover:border-gray-200 text-gray-600'
                                    }`}
                            >
                                {a}$
                            </button>
                        ))}
                        <div className="col-span-1 md:col-span-1">
                            <input
                                type="number"
                                placeholder={lang === 'fr' ? 'Autre' : 'Other'}
                                value={customAmount}
                                onChange={(e) => { setCustomAmount(e.target.value); setAmount(''); }}
                                className={`w-full py-3 px-2 rounded-xl border-2 transition-all text-center focus:outline-none ${customAmount
                                        ? 'border-primary bg-primary/5 text-primary'
                                        : 'border-gray-100'
                                    }`}
                            />
                        </div>
                    </div>
                </div>

                {/* Payment Method */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                        {lang === 'fr' ? 'Mode de paiement' : 'Payment Method'}
                    </label>
                    <div className="grid md:grid-cols-3 gap-4">
                        {methods.map((m) => {
                            const Icon = m.icon;
                            return (
                                <button
                                    key={m.id}
                                    onClick={() => setMethod(m.id as any)}
                                    className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all ${method === m.id
                                            ? 'border-primary bg-primary/5 text-primary'
                                            : 'border-gray-100 hover:border-gray-200 text-gray-600'
                                        }`}
                                >
                                    <Icon size={24} className="mb-2" />
                                    <span className="text-sm font-medium">{m.name}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Dynamic Payment Details */}
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 animate-in fade-in slide-in-from-bottom-2">
                    {method === 'card' && (
                        <div className="space-y-4">
                            <input type="text" placeholder={lang === 'fr' ? 'Nom sur la carte' : 'Cardholder Name'} className="w-full p-3 rounded-lg border border-gray-200" />
                            <input type="text" placeholder="#### #### #### ####" className="w-full p-3 rounded-lg border border-gray-200" />
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="MM/YY" className="w-full p-3 rounded-lg border border-gray-200" />
                                <input type="text" placeholder="CVC" className="w-full p-3 rounded-lg border border-gray-200" />
                            </div>
                        </div>
                    )}
                    {method === 'mobile' && (
                        <div className="space-y-4">
                            <p className="text-xs text-gray-500 mb-2">
                                {lang === 'fr' ? 'Opérateurs supportés : M-Pesa, Airtel Money, Orange Money' : 'Supported carriers: M-Pesa, Airtel Money, Orange Money'}
                            </p>
                            <div className="flex space-x-2">
                                <select className="p-3 rounded-lg border border-gray-200 bg-white">
                                    <option>+243</option>
                                </select>
                                <input type="tel" placeholder="000 000 000" className="flex-1 p-3 rounded-lg border border-gray-200" />
                            </div>
                        </div>
                    )}
                    {method === 'bank' && (
                        <div className="text-gray-700 text-sm space-y-2">
                            <p><strong>{lang === 'fr' ? 'Banque :' : 'Bank:'}</strong> RAWBANK</p>
                            <p><strong>{lang === 'fr' ? 'Titulaire :' : 'Account Holder:'}</strong> THE BYTHIAH PROJECT</p>
                            <p><strong>IBAN :</strong> CD76 0000 1234 5678 9012 345</p>
                            <p><strong>BIC/SWIFT :</strong> RAWBCDXX</p>
                        </div>
                    )}
                </div>

                <button className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-transform active:scale-95 shadow-lg shadow-primary/20">
                    {lang === 'fr' ? 'Confirmer mon don' : 'Confirm my donation'}
                </button>

                <p className="text-center text-xs text-gray-400">
                    {lang === 'fr'
                        ? 'Vos données sont sécurisées et cryptées.'
                        : 'Your data is secure and encrypted.'}
                </p>
            </div>
        </div>
    );
}
