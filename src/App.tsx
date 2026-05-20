/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Search, 
  ShoppingBag, 
  Menu, 
  MapPin, 
  Plus, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Phone, 
  Instagram, 
  Youtube,
  ShoppingCart
} from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: '튀김소보로',
    description: '바삭한 소보로 안에 달콤한 팥앙금이 가득한 성심당의 영원한 베스트셀러. 겉바속촉의 정석을 보여줍니다.',
    price: '1,700원',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKX_HUYOmUiGcoyG8MDx8nId3rGR7BlqMoXqHK0BBjVxWMHcj7lWONByo2n5n00RTUj2LifKodtfMmI_CsATyLpCpjz62FCfSK1ftGqekUYzEziMGlVW8yTdGWG7bLa8Y3tQqe_2GrJF7Nm_7bOZOHo_XEhJAwtw5brgsFsRWfYv-ZEfyWFHdExFumRlkRfH5D-f6ymif0pRqfeUrmQ7MUUNrEvBn8KVkRajbLt1oP5fpGRD640UYFk6PuTxG1yPSxV8XruAwkgdM',
    tag: '베스트 1위'
  },
  {
    id: 2,
    name: '판타롱부추빵',
    description: '향긋한 부추와 계란, 고기가 어우러져 한 끼 식사로도 손색없는 담백하고 든든한 빵입니다.',
    price: '2,000원',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUy5pG6YLKBUslm5Uc1lFQ01KCUX-MJe8E0uaS_qgJFIq5TfFvgD6r-UcqkuVXMU5qofYWF62teETArCDCInM4owX16-JXbTiaUKBImhvnsyuxZSkVlsOkYtwxiVPe1sP4wBwW11jfEg3wp5FExeFiT7ay1WCz7eKSu6qaoh5wB4km6Jjn7iqyeLeZCcG25WaVNsYI9DNGF1WG0mswUAu48Z9el0ZIiC5aRR6uh6aaC1x9To-K93b1u7zFsFcrYV6vU5XJANnOzSk'
  },
  {
    id: 3,
    name: '명란바게트',
    description: '바삭한 바게트 속에 짭조름한 명란이 가득. 씹을수록 고소한 풍미가 일품인 퓨전 바게트입니다.',
    price: '3,800원',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAM0oDytmOAzKfW8niNogiHi4aXNvmzCAWrE-ISOTgiTiw9jWqCBjvee9goLm47OF1mLGr_0gl6otX_XjbBLXGFLKCQGutfIeYp5FhD-497NUGjwWu4Yqm6YgkeTEXylTna_HW8qGbD2i7yCHq6rYN4x5F1nHlUULhaeQuNg7NMX18h1QUy0WD-tETjw4mWsCO9WnikatQeSOZSb9vuq8v_K8hK8uCn-wJWvr-uj6M7uYiaDJccacYKzzYuo8XWySNTLvwtCrX1Z5U'
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-surface/90 backdrop-blur-md z-50 border-b border-outline-variant/30 h-20 flex items-center">
        <div className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop flex justify-between items-center">
          <div className="flex items-center gap-12">
            <a href="/" className="text-2xl font-bold text-deep-mahogany hover:opacity-80 transition-opacity">
              성심당
            </a>
            <ul className="hidden md:flex items-center gap-8">
              <li><a href="#" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm font-bold text-primary border-b-2 border-primary pb-1">Products</a></li>
              <li><a href="#" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">Locations</a></li>
              <li><a href="#" className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <button className="p-2 hover:bg-surface-container rounded-full transition-colors"><Search size={22} className="text-on-surface-variant" /></button>
              <button className="p-2 hover:bg-surface-container rounded-full transition-colors"><ShoppingBag size={22} className="text-on-surface-variant" /></button>
            </div>
            <button className="hidden md:block bg-honey-gold text-deep-mahogany px-6 py-2.5 rounded-full text-sm font-bold border border-toasted-wheat shadow-sm hover:scale-[0.98] transition-transform">
              Order Online
            </button>
            <button className="md:hidden p-2 hover:bg-surface-container rounded-full"><Menu size={24} /></button>
          </div>
        </div>
      </nav>

      <main className="w-full pt-20">
        {/* Hero Section */}
        <section className="relative w-full bg-surface-container-highest overflow-hidden pt-16 pb-24 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-flour-cream/90 border border-toasted-wheat text-primary text-xs font-bold tracking-widest uppercase">
                Est. 1956
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-semibold text-deep-mahogany mb-6 leading-tight">
                ‹‹‹‹‹‹ ✱ ‹‹‹‹‹‹<br />
                갓구운 빵 한 조각<br />
                오늘 하루의 에너지 충전!
              </h1>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
                1956년부터 이어온 대전의 자부심, 성심당에서 진정한 빵의 향연을 느껴보세요.
              </p>
              <button className="inline-flex items-center gap-2 bg-honey-gold text-deep-mahogany px-8 py-4 rounded-full text-sm font-bold shadow-md hover:scale-[0.98] transition-all border border-toasted-wheat">
                매장 찾기 <MapPin size={18} />
              </button>
            </motion.div>

            <motion.div 
              className="mt-16 rounded-[2rem] overflow-hidden shadow-2xl aspect-[21/9]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr0sjiu2YC4WT4MwFZWp6RsfkoNPPrtGM_w6NVAfEExwichlwbeV9xhrDokoJbFtyUwb9qkUtBauERw5hXWlxj29EuItHWacULPwEG17UBZk3L9P-opl8IvAx5bztqIoQ3Z9P_gWeCmXbtxW-0KNzS8zOBDWjuj-Mm40Nl5s1FDzTLATXrJdRm3SMn8VSjxo7SfslvQCu8sRGptWmQ94ZCTrVIHb5fFNDM9_JwvogKysAWIT1_X-OV3ny9rRhi8vs37nDd_IDb4WE" 
                alt="Bakery Showcase"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </section>

        {/* Signature Products Section */}
        <section className="w-full py-24 bg-textured relative px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-deep-mahogany mb-4">성심당 시그니처</h2>
              <div className="w-20 h-1 bg-honey-gold mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
                수십 년간 사랑받아 온 성심당의 대표 메뉴들을 만나보세요.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {PRODUCTS.map((product, idx) => (
                <motion.div
                  key={product.id}
                  className="bg-surface rounded-2xl overflow-hidden shadow-sm border border-toasted-wheat hover:-translate-y-2 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    {product.tag && (
                      <span className="absolute top-4 left-4 z-10 bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-[10px] font-bold shadow-sm">
                        {product.tag}
                      </span>
                    )}
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-display font-bold text-deep-mahogany mb-3">{product.name}</h3>
                    <p className="text-sm text-on-surface-variant mb-6 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-primary font-bold">{product.price}</span>
                      <button className="p-3 rounded-full border border-toasted-wheat text-primary hover:bg-honey-gold hover:text-deep-mahogany transition-colors">
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-deep-mahogany font-bold transition-all border-b border-transparent hover:border-deep-mahogany pb-1">
                모든 빵 보기 <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Atmosphere Section */}
        <section className="w-full py-24 bg-surface px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="max-w-container-max mx-auto flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rotate-[-2deg] rounded-[2rem] overflow-hidden border-[12px] border-flour-cream shadow-2xl aspect-square">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR1NE4DmK7PtfVBcGBDuLVS9qPsSGDOI51IBwBKY-ps1J3iZJhO5uk3lvbwUWtj_ati7HnYUyzDsGI20sc86S6nR8Djw7_iIKXyQi7gNGwxMlo1y8E2KrFtoSzaxd6gs6DJwvSDD0DSoaBn9M1PJOR5vfk3xWqi0JPAPEo1eQHUdBx1iC2kYdzL1BrBg3iLFvKLxwD1ubQ1ze6KpZJKf8I_kvbsJMaH9Fbv_yy1p8_zXzk2rKpGLLzyA8iRAXRjd5_fuXSyQconW4" 
                  alt="Bakery Atmosphere"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6 text-honey-gold">
                <span className="font-bold tracking-[0.2em] text-[10px] uppercase">Artisanal Process</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-deep-mahogany mb-6 leading-tight">
                매일 아침 피어오르는<br />따뜻한 빵 내음
              </h2>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed mb-10">
                <p>
                  성심당 본점은 언제나 활기찬 에너지와 갓 구운 빵의 향기로 가득합니다. 좋은 재료와 정직한 마음으로 반죽을 빚고, 오븐 앞을 지키는 제빵사들의 정성이 매일 수많은 빵으로 탄생합니다.
                </p>
                <p>
                  단순한 빵집을 넘어, 대전 시민들과 함께 호흡하고 온기를 나누는 공간. 대를 이어 전해지는 성심당만의 깊은 맛과 철학을 매장에서 직접 경험해 보세요.
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  '매일 직접 끓이는 국내산 팥앙금',
                  '자연 발효종을 사용한 건강한 반죽',
                  '당일 생산, 당일 판매 원칙'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-on-surface-variant font-medium">
                    <CheckCircle2 size={20} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Location Section */}
        <section className="w-full py-24 bg-flour-cream border-t border-toasted-wheat/30 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <div className="bg-surface rounded-3xl p-8 md:p-16 shadow-xl border border-toasted-wheat relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                <div>
                  <h2 className="text-3xl font-display font-semibold text-deep-mahogany mb-2">성심당 본점</h2>
                  <p className="text-primary font-bold text-sm tracking-wide mb-10 uppercase opacity-70">Daejeon Sung Sim Dang Main Store</p>
                  
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
                        <MapPin size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-deep-mahogany mb-1">주소</p>
                        <p className="text-on-surface-variant">대전광역시 중구 대종로 480번길 15 (은행동 145)</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
                        <Clock size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-deep-mahogany mb-1">영업시간</p>
                        <p className="text-on-surface-variant">매일 08:00 ~ 22:00</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
                        <Phone size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-deep-mahogany mb-1">전화번호</p>
                        <p className="text-on-surface-variant">1588-8069</p>
                      </div>
                    </div>
                  </div>

                  <button className="mt-12 w-full bg-surface hover:bg-honey-gold text-deep-mahogany border border-toasted-wheat py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group">
                    오시는 길 상세 보기 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-toasted-wheat aspect-square lg:aspect-auto">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk9pWqr8m76V6QOXK6rES3dHOc8HGuHtaHmmuNHZP_mtMaB6gL2cDMVScbZdjO1zuZuCeRtuEQhWQWkZuA4GQ0EcuMgfUslpXS3Y82u9X3unYEW4ZtHYzaucSfDr6WAIjGnW2Y5ozmClFVhAUCfRC1jRRwygR_3D_-qskEltBhtNk7b3UaijsotnLSxxKVPmwPF2n5omoqNoCtlMpihBijD3TV_tAVPFq4uBzhSmts9kJ8CSF86E54ZARPPKfkmd1HF_zeYrGYP94" 
                    alt="Map" 
                    className="w-full h-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="bg-surface px-4 py-2 rounded-lg shadow-lg border border-toasted-wheat mb-2 text-xs font-bold text-deep-mahogany">성심당 본점</div>
                    <MapPin size={40} className="text-error fill-error" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-deep-mahogany py-16 px-margin-mobile md:px-margin-desktop text-honey-gold">
        <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-honey-gold mb-6">성심당</h3>
            <p className="text-sm opacity-60 leading-relaxed max-w-xs">
              © 2024 SUNG SIM DANG Co., Ltd.<br />All Rights Reserved.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-6 font-sans">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a></li>
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-6 font-sans">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Recruitment</a></li>
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Customer Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-6 font-sans">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-honey-gold/30 flex items-center justify-center hover:bg-honey-gold hover:text-deep-mahogany transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-honey-gold/30 flex items-center justify-center hover:bg-honey-gold hover:text-deep-mahogany transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
