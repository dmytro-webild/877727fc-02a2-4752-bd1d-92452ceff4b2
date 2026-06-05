"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Award, FileText, Gift, Globe, Image, Lightbulb, LineChart, Monitor, ShieldCheck, Smartphone, Sparkles, Star, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="large"
        background="noiseDiagonalGradient"
        cardStyle="outline"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "الرئيسية",
          id: "#hero",
        },
        {
          name: "المميزات",
          id: "#features",
        },
        {
          name: "الأدوات",
          id: "#tools",
        },
        {
          name: "الأسعار",
          id: "#pricing",
        },
        {
          name: "الأسئلة الشائعة",
          id: "#faq",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/gradient-storm-logo-template_23-2149219332.jpg"
      logoAlt="Thunder AI Platform Logo"
      brandName="Thunder"
      button={{
        text: "تسجيل الدخول",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "sparkles-gradient",
      }}
      logoText="Thunder"
      description="Thunder - مستقبل الذكاء الاصطناعي والأدوات الذكية. منصة متكاملة لإنشاء المواقع والتطبيقات، الذكاء الاصطناعي، والأدوات الاحترافية."
      buttons={[
        {
          text: "ابدأ الآن",
          href: "#contact",
        },
        {
          text: "تجربة الذكاء الاصطناعي",
          href: "#features",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-low-poly-background-with-connecting-dots-lines_1048-5910.jpg"
      imageAlt="Thunder AI Platform Hero Image"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="ما هي منصة Thunder؟"
      description="Thunder هي بوابتك الشاملة لمستقبل الابتكار الرقمي. تجمع منصتنا بين قوة الذكاء الاصطناعي المتطور ومجموعة واسعة من الأدوات الاحترافية، لتمكين الأفراد والشركات من إنشاء المواقع والتطبيقات، تحليل البيانات، وإنشاء المحتوى بسهولة وفعالية لا مثيل لها. تصميمنا يركز على السرعة، الأمان، وتجربة مستخدم فاخرة."
      imageSrc="http://img.b2bpic.net/free-photo/ui-ux-representations-with-tablet_23-2150201863.jpg"
      imageAlt="AI, Web, and App Development Integration"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "مساعد ذكي متكامل وتحليل عميق",
          description: "احصل على إجابات فورية، حلل المواقع وشرح وظائفها، وقم بتحليل الصور وملفات PDF و Word بدقة.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/cyberpunk-illustration-with-futuristic-technology-bright-neon-lights_23-2151672050.jpg",
            imageAlt: "AI Assistant and Deep Analysis",
          },
          items: [
            {
              icon: Sparkles,
              text: "مساعد ذكي للإجابة على الأسئلة",
            },
            {
              icon: ScanText,
              text: "تحليل المواقع وشرح وظائفها",
            },
            {
              icon: Image,
              text: "تحليل الصور وملفات PDF/Word",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-vector/gradient-storm-logo-template_23-2149219332.jpg",
          imageAlt: "ai assistant concept blue purple",
        },
        {
          title: "توليد المحتوى والكود ببراعة",
          description: "دع الذكاء الاصطناعي يكتب المقالات، يولد الأكواد، وينشئ أوصاف يوتيوب جذابة لك بكل سهولة.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/double-exposure-caucasian-man-virtual-reality-vr-headset-is-presumably-gamer-hacker-cracking-code-into-secure-network-server-with-lines-code_146671-18909.jpg",
            imageAlt: "AI Content and Code Generation",
          },
          items: [
            {
              icon: FileText,
              text: "كتابة المقالات والأكواد البرمجية",
            },
            {
              icon: Youtube,
              text: "إنشاء أوصاف يوتيوب احترافية",
            },
            {
              icon: Languages,
              text: "الترجمة والتلخيص الفوري",
            },
          ],
          reverse: true,
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-low-poly-background-with-connecting-dots-lines_1048-5910.jpg",
          imageAlt: "ai assistant concept blue purple",
        },
        {
          title: "إبداع بصري ومشاريع مبتكرة",
          description: "حوّل أفكارك إلى واقع مع إنشاء الشعارات، الصور، والفيديوهات بالذكاء الاصطناعي. اكتشف أفكار مشاريع جديدة.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/organized-creative-workspace-graphic-designers-photographers_482257-126938.jpg",
            imageAlt: "AI Visual Creation and Project Ideas",
          },
          items: [
            {
              icon: Brush,
              text: "إنشاء شعارات وصور وفيديوهات بالذكاء الاصطناعي",
            },
            {
              icon: Lightbulb,
              text: "إنشاء أفكار مشاريع مبتكرة",
            },
            {
              icon: Megaphone,
              text: "تحويل النص إلى صور ومقاطع فيديو",
            },
          ],
          reverse: false,
          imageSrc: "http://img.b2bpic.net/free-photo/ui-ux-representations-with-tablet_23-2150201863.jpg",
          imageAlt: "ai assistant concept blue purple",
        },
        {
          title: "بناء المواقع والتطبيقات بسهولة",
          description: "أنشئ مواقع وتطبيقات كاملة بمجرد وصفها نصيًا، مما يوفر الوقت والجهد.",
          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/programming-background-collage_23-2149901780.jpg",
            imageAlt: "AI Website and Application Builder",
          },
          items: [
            {
              icon: Monitor,
              text: "إنشاء مواقع ويب كاملة من وصف نصي",
            },
            {
              icon: Smartphone,
              text: "إنشاء تطبيقات جوال كاملة من وصف نصي",
            },
            {
              icon: Workflow,
              text: "تبسيط عملية التطوير",
            },
          ],
          reverse: true,
          imageSrc: "http://img.b2bpic.net/free-photo/oman-eye-bondage-lying-floor_23-2147695046.jpg",
          imageAlt: "ai assistant concept blue purple",
        },
      ]}
      title="ميزات الذكاء الاصطناعي القوية"
      description="استفد من مجموعة أدوات الذكاء الاصطناعي المتكاملة لدينا لتبسيط مهامك وتحقيق أقصى إنتاجية وإبداع."
    />
  </div>

  <div id="tools" data-section="tools">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "أدوات الصور",
          price: "مجاناً",
          variant: "ضغط، إزالة الخلفية، تحويل",
          imageSrc: "http://img.b2bpic.net/free-photo/oman-eye-bondage-lying-floor_23-2147695046.jpg",
          imageAlt: "Image Tools Icon",
        },
        {
          id: "p2",
          name: "أدوات PDF",
          price: "مجاناً",
          variant: "دمج، تقسيم",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-showing-covid19-international-vaccination-certificate-with-qr-code-phone-pink-background_1268-19590.jpg",
          imageAlt: "PDF Tools Icon",
        },
        {
          id: "p3",
          name: "مولد QR واختصار الروابط",
          price: "مجاناً",
          variant: "روابط سريعة وآمنة",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-blockchain-technology_23-2151480215.jpg",
          imageAlt: "QR Generator and URL Shortener Icon",
        },
        {
          id: "p4",
          name: "أدوات المطورين والنصوص",
          price: "مجاناً",
          variant: "مساعدة برمجية وتحرير نصوص",
          imageSrc: "http://img.b2bpic.net/free-photo/black-friday-sales-sign-neon-light_23-2151833081.jpg",
          imageAlt: "Developer and Text Tools Icon",
        },
        {
          id: "p5",
          name: "أدوات الملفات والإنترنت",
          price: "مجاناً",
          variant: "إدارة الملفات والوصول الشبكي",
          imageSrc: "http://img.b2bpic.net/free-photo/sales-manager-examining-success-efficiency-metrics-within-firm_482257-90914.jpg",
          imageAlt: "File and Internet Tools Icon",
        },
        {
          id: "p6",
          name: "الحاسبات",
          price: "مجاناً",
          variant: "حاسبة العمر والنسبة المئوية",
          imageSrc: "http://img.b2bpic.net/free-photo/blockchain-technology-cartoon-illustration_23-2151572166.jpg",
          imageAlt: "Calculators Icon",
        },
        {
          id: "p7",
          name: "مولد كلمات المرور",
          price: "مجاناً",
          variant: "كلمات مرور قوية وآمنة",
          imageSrc: "http://img.b2bpic.net/free-photo/business-network-background-connecting-dots-technology-design_53876-160244.jpg",
          imageAlt: "Password Generator Icon",
        },
      ]}
      title="أدوات رقمية احترافية"
      description="مجموعة واسعة من الأدوات الرقمية لمساعدتك في مهامك اليومية، من تحرير الصور إلى إدارة الملفات."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: Zap,
          title: "سرعة فائقة",
          value: "10x أسرع",
        },
        {
          id: "m2",
          icon: LineChart,
          title: "نمو المستخدمين",
          value: "+1M مستخدم",
        },
        {
          id: "m3",
          icon: ShieldCheck,
          title: "أمان متقدم",
          value: "تشفير 256-bit",
        },
        {
          id: "m4",
          icon: Globe,
          title: "تغطية عالمية",
          value: "متوفر في 100+ دولة",
        },
      ]}
      title="إحصائيات Thunder"
      description="أرقام تتحدث عن نفسها: السرعة، النمو، الأمان، والتواجد العالمي لمنصة Thunder."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "free",
          tag: "الخطة المجانية",
          tagIcon: Gift,
          price: "0$",
          period: "شهرياً",
          description: "مثالية للبدء واستكشاف إمكانيات Thunder.",
          button: {
            text: "ابدأ مجاناً",
            href: "#contact",
          },
          featuresTitle: "الميزات المتضمنة:",
          features: [
            "عدد محدود من رسائل الذكاء الاصطناعي",
            "أدوات أساسية",
            "دعم مجتمعي",
          ],
        },
        {
          id: "monthly",
          tag: "الخطة الشهرية",
          tagIcon: Star,
          price: "5$",
          period: "شهرياً",
          description: "للمستخدمين النشطين الذين يحتاجون إلى المزيد من القوة.",
          button: {
            text: "اشترك الآن",
            href: "#contact",
          },
          featuresTitle: "جميع ميزات الخطة المجانية بالإضافة إلى:",
          features: [
            "رسائل ذكاء اصطناعي غير محدودة",
            "سرعة معالجة أعلى",
            "أدوات حصرية ومتقدمة",
            "إنشاء صور وفيديوهات بالذكاء الاصطناعي",
            "إنشاء مواقع وتطبيقات كاملة",
            "إزالة الإعلانات",
          ],
        },
        {
          id: "annual",
          tag: "الخطة السنوية",
          tagIcon: Award,
          price: "15$",
          period: "سنوياً",
          description: "القيمة الأفضل للمحترفين والشركات.",
          button: {
            text: "وفّر الآن",
            href: "#contact",
          },
          featuresTitle: "جميع ميزات الخطة الشهرية بالإضافة إلى:",
          features: [
            "خصم كبير على الاشتراك السنوي",
            "دعم فني ذو أولوية",
            "وصول مبكر للميزات الجديدة",
            "تدريب وموارد حصرية",
          ],
        },
      ]}
      title="خطط الاشتراكات"
      description="اختر الخطة التي تناسب احتياجاتك، من الخيارات المجانية إلى الميزات المتقدمة للخطط المدفوعة."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "منصة غيرت قواعد اللعبة!",
          quote: "Thunder أحدثت ثورة في عملي. القدرة على إنشاء محتوى وأكواد بسرعة لا تصدق هي ميزة لا تقدر بثمن. أوصي بها بشدة لكل مطور ومبدع.",
          name: "سارة أحمد",
          role: "مديرة تنفيذية لشركة تقنية",
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-grey-background_613910-3695.jpg",
          imageAlt: "Sarah Ahmed, CEO Tech Company",
        },
        {
          id: "2",
          title: "أدوات رائعة وكفاءة عالية.",
          quote: "أدوات Thunder الرقمية لا تضاهى. من ضغط الصور إلى إدارة ملفات PDF، كل شيء سلس وفعال. ساعدتني على توفير ساعات من العمل.",
          name: "علي محمد",
          role: "مهندس برمجيات",
          imageSrc: "http://img.b2bpic.net/free-photo/focused-man-sitting-table-with-laptop-looking-camera_74855-4223.jpg",
          imageAlt: "Ali Mohammed, Software Engineer",
        },
        {
          id: "3",
          title: "مستقبل إنشاء المحتوى.",
          quote: "كصانع محتوى، قدرة Thunder على توليد أفكار للفيديوهات وإنشاء صور وفيديوهات بالذكاء الاصطناعي هي شيء لم أكن أتخيله. إبداع بلا حدود!",
          name: "فاطمة الزهراء",
          role: "مديرة تسويق رقمي",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-blonde-woman-sitting-desk_23-2148470969.jpg",
          imageAlt: "Fatima Al-Zahra, Digital Marketing Manager",
        },
        {
          id: "4",
          title: "تحليل قوي ونتائج دقيقة.",
          quote: "أعتمد على Thunder لتحليل مواقع الويب الخاصة بعملائي وشرح ميزاتها. الدقة والسرعة في الحصول على رؤى عميقة هي ما يميز هذه المنصة.",
          name: "خالد محمود",
          role: "محلل أعمال",
          imageSrc: "http://img.b2bpic.net/free-photo/elderly-businessman-entrepreneur-sitting-workspace-looking-camera_482257-8143.jpg",
          imageAlt: "Khalid Mahmoud, Business Analyst",
        },
        {
          id: "5",
          title: "بناء التطبيقات لم يكن أسهل من قبل.",
          quote: "فكرة بناء تطبيق كامل من وصف نصي كانت حلماً، Thunder جعلتها حقيقة. سرعة التطوير والجودة كانت مذهلة.",
          name: "ليلى حسن",
          role: "رائدة أعمال",
          imageSrc: "http://img.b2bpic.net/free-photo/pov-businessman-attending-videocall-meeting-office-using-online-videoconference-talk-consultant-about-financial-strategy-company-employee-chatting-remote-teleconference-close-up_482257-40929.jpg",
          imageAlt: "Laila Hassan, Entrepreneur",
        },
      ]}
      title="ماذا يقول عملاؤنا"
      description="شهادات من مستخدمينا حول كيف غيرت Thunder طريقة عملهم وإبداعهم."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "ما هي الميزات الرئيسية لمنصة Thunder؟",
          content: "تقدم Thunder مجموعة واسعة من الميزات، بما في ذلك أدوات الذكاء الاصطناعي لإنشاء المحتوى، الصور، والفيديوهات، بالإضافة إلى أدوات رقمية مثل ضغط الصور وإدارة ملفات PDF، وميزات بناء المواقع والتطبيقات من وصف نصي.",
        },
        {
          id: "f2",
          title: "هل Thunder يدعم إنشاء المواقع والتطبيقات؟",
          content: "نعم، إحدى أبرز ميزات Thunder هي قدرتها على إنشاء مواقع وتطبيقات كاملة من وصف نصي، مما يتيح لك تحويل أفكارك إلى منتجات رقمية بسرعة وفعالية.",
        },
        {
          id: "f3",
          title: "ما هي خيارات الاشتراكات المتاحة؟",
          content: "لدينا خطة مجانية تتيح لك تجربة الميزات الأساسية، بالإضافة إلى خطط شهرية وسنوية مدفوعة توفر رسائل ذكاء اصطناعي غير محدودة، سرعة أعلى، أدوات حصرية، وميزات متقدمة أخرى.",
        },
        {
          id: "f4",
          title: "هل يمكنني استخدام Thunder كمدير لمشاريعي؟",
          content: "بالتأكيد! Thunder ليس مجرد مجموعة أدوات، بل هو مساعد ذكي يمكنه مساعدتك في تحليل المواقع، كتابة الأكواد، وحتى إنشاء أفكار مشاريع، مما يجعله مثالياً لإدارة المشاريع وتطويرها.",
        },
        {
          id: "f5",
          title: "كيف تضمن Thunder أمان بياناتي؟",
          content: "الأمان هو أولويتنا القصوى. نستخدم حماية متقدمة وتشفير بيانات قوي، بالإضافة إلى مراقبة مستمرة لتسجيل محاولات الدخول وحماية من هجمات السبام لضمان سرية وأمان معلوماتك.",
        },
      ]}
      title="الأسئلة الشائعة"
      description="إجابات سريعة لأكثر الأسئلة تكراراً حول منصة Thunder وميزاتها."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "animated-grid",
      }}
      tag="انضم إلى مجتمع Thunder"
      title="ابدأ رحلة الابتكار الآن"
      description="سجل اليوم لتجربة مستقبل الذكاء الاصطناعي والأدوات الرقمية. الوصول السريع عبر جوجل أو بريدك الإلكتروني."
      inputPlaceholder="أدخل بريدك الإلكتروني"
      buttonText="تسجيل الدخول / الاشتراك"
      termsText="بالنقر على تسجيل الدخول/الاشتراك، فإنك تؤكد موافقتك على الشروط والأحكام."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/illustration-rain-futuristic-city_23-2151406611.jpg"
      imageAlt="Thunder Platform Digital Landscape"
      videoAriaLabel="Footer video"
      logoSrc="http://img.b2bpic.net/free-vector/gradient-storm-logo-template_23-2149219332.jpg"
      logoAlt="Thunder AI Platform Logo"
      logoText="Thunder"
      columns={[
        {
          title: "المنصة",
          items: [
            {
              label: "الميزات",
              href: "#features",
            },
            {
              label: "الأدوات",
              href: "#tools",
            },
            {
              label: "الأسعار",
              href: "#pricing",
            },
            {
              label: "الإحصائيات",
              href: "#metrics",
            },
          ],
        },
        {
          title: "الدعم",
          items: [
            {
              label: "الأسئلة الشائعة",
              href: "#faq",
            },
            {
              label: "اتصل بنا",
              href: "#contact",
            },
            {
              label: "API للمطورين",
              href: "#",
            },
          ],
        },
        {
          title: "قانوني",
          items: [
            {
              label: "سياسة الخصوصية",
              href: "#",
            },
            {
              label: "شروط الخدمة",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Thunder. جميع الحقوق محفوظة."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
