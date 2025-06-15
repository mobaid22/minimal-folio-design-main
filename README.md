# 🚀 Minimal Folio Design

Modern ve şık bir kişisel portfolio web sitesi. React, TypeScript ve Tailwind CSS kullanılarak geliştirilmiş, responsive tasarıma sahip profesyonel bir portföy platformu.

## ✨ Özellikler

- 🎨 **Modern Tasarım**: Minimal ve şık arayüz
- 📱 **Responsive**: Tüm cihazlarda mükemmel görünüm
- ⚡ **Hızlı**: Vite ile optimize edilmiş performans
- 🎯 **SEO Dostu**: Arama motorları için optimize edilmiş
- 🛠️ **Kolay Özelleştirme**: shadcn-ui bileşenleri ile esnek yapı

## 🛠️ Teknolojiler

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn-ui
- **Build Tool**: Vite

## 📁 Proje Yapısı

```
src/
├── components/          # Ana bileşenler
│   ├── About.tsx       # Hakkımda bölümü
│   ├── Contact.tsx     # İletişim formu
│   ├── Hero.tsx        # Ana banner
│   ├── Projects.tsx    # Projeler galeri
│   ├── Skills.tsx      # Yetenekler listesi
│   └── ui/            # UI bileşenleri
├── hooks/             # Custom React hooks
├── lib/               # Yardımcı fonksiyonlar
└── pages/             # Sayfa bileşenleri
```

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Adımlar

```bash
# Projeyi klonlayın
git clone <YOUR_GIT_URL>

# Proje dizinine gidin
cd minimal-folio-design-main

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda `http://localhost:5173` adresini açın.

## 🎨 Özelleştirme

### Kişisel Bilgilerinizi Ekleyin

1. **Projeler**: [`src/components/Projects.tsx`](src/components/Projects.tsx) dosyasında proje bilgilerinizi güncelleyin
2. **Hakkımda**: [`src/components/About.tsx`](src/components/About.tsx) dosyasında kişisel bilgilerinizi düzenleyin
3. **İletişim**: [`src/components/Contact.tsx`](src/components/Contact.tsx) dosyasında iletişim bilgilerinizi güncelleyin
4. **Yetenekler**: [`src/components/Skills.tsx`](src/components/Skills.tsx) dosyasında teknik yeteneklerinizi listeleyin

### Tasarım Özelleştirme

Tailwind CSS ve shadcn-ui kullanarak kolayca özelleştirebilirsiniz:

```bash
# Yeni UI bileşeni eklemek için
npx shadcn-ui@latest add [component-name]
```

## 📦 Build ve Deploy

### Production Build

```bash
npm run build
```


## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 📞 İletişim

Proje hakkında sorularınız için:
- 🌐 **Demo**: [Live Preview](https://lovable.dev/projects/638e46ae-9957-49f5-b213-591ba67a1c59)
- 📧 **Email**: [your-email@example.com]
- 💼 **LinkedIn**: [Your LinkedIn Profile]

---

⭐ Bu projeyi beğendiyseniz, lütfen yıldız verin!
