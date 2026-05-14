import React from 'react';
import { motion } from 'motion/react';
import { TRANSPORT_VERBS } from './transportData';
import { Info, ArrowRight, Table } from 'lucide-react';

export default function TransportTheory() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      {/* Introduction Section */}
      <section className="space-y-8">
        <div className="border-l-8 border-orange-500 pl-6">
          <h2 className="text-4xl sm:text-5xl font-black italic uppercase tracking-tighter text-slate-900">
            Subir / Tomar / Montar
          </h2>
          <p className="text-slate-400 font-bold italic uppercase text-xs tracking-widest mt-2">
            Տարբերությունները և կանոնները
          </p>
        </div>

        <div className="grid gap-8">
          {/* Rule 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-4"
          >
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">1</div>
               <h3 className="text-2xl font-black italic uppercase tracking-tight">Subir a + transporte</h3>
            </div>
            <p className="text-slate-600 font-bold italic">Նշանակում է՝ <span className="text-slate-900">նստել / բարձրանալ տրանսպորտի մեջ</span>։ Շեշտը ֆիզիկական գործողության վրա է։</p>
            <div className="bg-slate-50 p-6 rounded-2xl space-y-2 border-l-4 border-blue-500">
               <p className="font-bold text-lg italic text-slate-900">Subo al autobús.</p>
               <p className="text-slate-500 text-sm italic font-bold">Ես նստում եմ ավտոբուս / բարձրանում եմ ավտոբուս։</p>
            </div>
          </motion.div>

          {/* Rule 2 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-4"
          >
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold">2</div>
               <h3 className="text-2xl font-black italic uppercase tracking-tight">Tomar + transporte</h3>
            </div>
            <p className="text-slate-600 font-bold italic">Նշանակում է՝ <span className="text-slate-900">օգտվել տրանսպորտից / վերցնել տրանսպորտ</span>։ Շեշտը ընտրության վրա է։</p>
            <div className="bg-slate-50 p-6 rounded-2xl space-y-2 border-l-4 border-emerald-500">
               <p className="font-bold text-lg italic text-slate-900">Tomo el autobús.</p>
               <p className="text-slate-500 text-sm italic font-bold">Ես ավտոբուս եմ նստում / օգտվում եմ ավտոբուսից։</p>
            </div>
          </motion.div>

          {/* Rule 3 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-4"
          >
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">3</div>
               <h3 className="text-2xl font-black italic uppercase tracking-tight">Montar en + ...</h3>
            </div>
            <p className="text-slate-600 font-bold italic">Նշանակում է՝ <span className="text-slate-900">քշել / հեծնել</span> (հեծանիվ, մոտո, ինքնագլոր)։</p>
            <div className="space-y-4">
               <div className="bg-slate-50 p-6 rounded-2xl space-y-2 border-l-4 border-orange-500">
                  <p className="font-bold text-lg italic text-slate-900">Monto en bicicleta.</p>
                  <p className="text-slate-500 text-sm italic font-bold">Ես հեծանիվ եմ քշում։</p>
               </div>
               <div className="bg-orange-50 p-4 rounded-2xl flex items-center gap-2 text-orange-700 italic font-black text-xs uppercase tracking-widest">
                  <Info size={16} /> Բայց՝ Monto a caballo (Ձի հեծնել)
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Summary Rule */}
      <section className="bg-slate-900 text-white p-10 sm:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl -translate-y-12 translate-x-12" />
        <div className="relative z-10 space-y-8">
           <h3 className="text-3xl font-black italic uppercase tracking-tighter text-orange-500 flex items-center gap-4">
             🧠 Շատ կարճ կանոն
           </h3>
           <div className="space-y-6">
              <div className="flex items-start gap-4">
                 <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                 <p className="text-lg italic font-bold">Subir al autobús — <span className="text-slate-400">ֆիզիկապես նստել / մտնել ավտոբուս։</span></p>
              </div>
              <div className="flex items-start gap-4">
                 <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                 <p className="text-lg italic font-bold">Tomar el autobús — <span className="text-slate-400">օգտվել ավտոբուսից որպես տրանսպորտ։</span></p>
              </div>
              <div className="flex items-start gap-4">
                 <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                 <p className="text-lg italic font-bold">Montar en bicicleta — <span className="text-slate-400">քշել հեծանիվ / մոտո / ինքնագլոր։</span></p>
              </div>
              <div className="flex items-start gap-4">
                 <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                 <p className="text-lg italic font-bold">Sentarse — <span className="text-slate-400">Նստել (աթոռին)։ Me siento en la silla.</span></p>
              </div>
              <div className="flex items-start gap-4">
                 <div className="w-2 h-2 rounded-full bg-orange-500 mt-2" />
                 <p className="text-lg italic font-bold">Bajar del autobús — <span className="text-slate-400">Իջնել ավտոբուսից։</span></p>
              </div>
           </div>
        </div>
      </section>

      {/* Conjugation Tables */}
      <section className="space-y-12">
        <div className="text-center space-y-2">
           <Table className="mx-auto text-orange-500" size={32} />
           <h3 className="text-3xl font-black italic uppercase tracking-tighter">Բայերի Խոնարհումը</h3>
           <p className="text-slate-400 font-bold italic uppercase text-xs tracking-widest">Presente de Indicativo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {TRANSPORT_VERBS.map(verb => (
             <motion.div 
               key={verb.verb}
               whileHover={{ scale: 1.02 }}
               className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden"
             >
                <div className="bg-slate-900 px-8 py-6 flex justify-between items-center text-white">
                   <h4 className="text-2xl font-black italic uppercase tracking-tighter">{verb.verb}</h4>
                   <span className="text-[10px] font-black uppercase tracking-widest opacity-50">{verb.translation}</span>
                </div>
                <div className="p-8 space-y-4">
                   {verb.conjugations.map(conj => (
                     <div key={conj.person} className="flex justify-between items-center border-b border-slate-50 pb-2">
                        <span className="text-slate-400 font-black italic uppercase text-xs tracking-widest">{conj.person}</span>
                        <span className="text-xl font-black italic text-slate-900">{conj.word}</span>
                     </div>
                   ))}
                </div>
             </motion.div>
           ))}
        </div>
      </section>
    </div>
  );
}
