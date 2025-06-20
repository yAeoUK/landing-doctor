export const doctorConfig = {
  // Basic Information
  doctorName: "Dr. Sarah Mitchell",
  specialty: "Cardiology",
  clinicName: "Heart & Wellness Medical Center",
  location: "Downtown Seattle, WA",
  phone: "(555) 123-4567",
  email: "info@heartwellness.com",
  address: "123 Medical Plaza, Suite 200, Seattle, WA 98101",

  // Arabic translations
  arabic: {
    doctorName: "د. سارة ميتشل",
    specialty: "أمراض القلب",
    clinicName: "مركز القلب والعافية الطبي",
    location: "وسط مدينة سياتل، واشنطن",
    address: "123 ميديكال بلازا، جناح 200، سياتل، واشنطن 98101",
  },

  // Services (you can enable/disable by commenting out)
  services: [
    {
      name: "Comprehensive Heart Exams",
      nameAr: "فحوصات القلب الشاملة",
      description: "Complete cardiovascular assessments including EKG, echocardiogram, and stress testing.",
      descriptionAr: "تقييمات القلب والأوعية الدموية الشاملة بما في ذلك تخطيط القلب وتخطيط صدى القلب واختبار الإجهاد.",
      icon: "Heart",
    },
    {
      name: "Preventive Cardiology",
      nameAr: "أمراض القلب الوقائية",
      description: "Risk assessment and prevention strategies for heart disease and stroke.",
      descriptionAr: "تقييم المخاطر واستراتيجيات الوقاية من أمراض القلب والسكتة الدماغية.",
      icon: "Shield",
    },
    {
      name: "Cardiac Rehabilitation",
      nameAr: "إعادة تأهيل القلب",
      description: "Supervised exercise and education programs for heart disease recovery.",
      descriptionAr: "برامج التمارين المراقبة والتعليم لاستعادة أمراض القلب.",
      icon: "Activity",
    },
    {
      name: "Hypertension Management",
      nameAr: "إدارة ارتفاع ضغط الدم",
      description: "Comprehensive blood pressure monitoring and treatment plans.",
      descriptionAr: "مراقبة ضغط الدم الشاملة وخطط العلاج.",
      icon: "TrendingUp",
    },
    {
      name: "Cholesterol Management",
      nameAr: "إدارة الكوليسترول",
      description: "Lipid testing and personalized treatment for optimal heart health.",
      descriptionAr: "فحص الدهون والعلاج الشخصي لصحة القلب المثلى.",
      icon: "BarChart3",
    },
    {
      name: "Heart Rhythm Disorders",
      nameAr: "اضطرابات نظم القلب",
      description: "Diagnosis and treatment of arrhythmias and irregular heartbeats.",
      descriptionAr: "تشخيص وعلاج اضطراب النظم وضربات القلب غير المنتظمة.",
      icon: "Zap",
    },
  ],

  // Specializations (you can enable/disable by commenting out)
  specializations: [
    "Interventional Cardiology",
    "Electrophysiology",
    "Heart Failure Management",
    "Preventive Cardiology",
    "Cardiac Imaging",
    "Women's Heart Health",
  ],

  specializationsAr: [
    "أمراض القلب التداخلية",
    "الفيزيولوجيا الكهربائية",
    "إدارة فشل القلب",
    "أمراض القلب الوقائية",
    "تصوير القلب",
    "صحة قلب المرأة",
  ],

  // Special Programs (you can enable/disable by commenting out)
  specialPrograms: [
    {
      name: "Heart Health Screening Program",
      nameAr: "برنامج فحص صحة القلب",
      description: "Comprehensive early detection program for cardiovascular disease",
      descriptionAr: "برنامج شامل للكشف المبكر عن أمراض القلب والأوعية الدموية",
    },
    {
      name: "Cardiac Wellness Package",
      nameAr: "باقة العافية القلبية",
      description: "Complete heart health assessment with personalized lifestyle recommendations",
      descriptionAr: "تقييم شامل لصحة القلب مع توصيات نمط الحياة الشخصية",
    },
    {
      name: "Executive Physical Program",
      nameAr: "برنامج الفحص التنفيذي",
      description: "Comprehensive health evaluation designed for busy professionals",
      descriptionAr: "تقييم صحي شامل مصمم للمهنيين المشغولين",
    },
    {
      name: "Women's Heart Health Initiative",
      nameAr: "مبادرة صحة قلب المرأة",
      description: "Specialized care addressing unique cardiovascular risks in women",
      descriptionAr: "رعاية متخصصة تتناول المخاطر القلبية الوعائية الفريدة للنساء",
    },
  ],

  // Insurance (you can enable/disable by commenting out)
  acceptedInsurance: [
    "Blue Cross Blue Shield",
    "Aetna",
    "Cigna",
    "UnitedHealthcare",
    "Medicare",
    "Medicaid",
    "Humana",
    "Kaiser Permanente",
  ],

  // Office Hours (you can enable/disable by commenting out)
  officeHours: [
    { day: "Monday", dayAr: "الاثنين", hours: "8:00 AM - 6:00 PM", hoursAr: "8:00 ص - 6:00 م" },
    { day: "Tuesday", dayAr: "الثلاثاء", hours: "8:00 AM - 6:00 PM", hoursAr: "8:00 ص - 6:00 م" },
    { day: "Wednesday", dayAr: "الأربعاء", hours: "8:00 AM - 6:00 PM", hoursAr: "8:00 ص - 6:00 م" },
    { day: "Thursday", dayAr: "الخميس", hours: "8:00 AM - 6:00 PM", hoursAr: "8:00 ص - 6:00 م" },
    { day: "Friday", dayAr: "الجمعة", hours: "8:00 AM - 5:00 PM", hoursAr: "8:00 ص - 5:00 م" },
    { day: "Saturday", dayAr: "السبت", hours: "9:00 AM - 2:00 PM", hoursAr: "9:00 ص - 2:00 م" },
    { day: "Sunday", dayAr: "الأحد", hours: "Closed", hoursAr: "مغلق" },
  ],

  // Credentials (you can enable/disable by commenting out)
  credentials: [
    "Board Certified in Cardiovascular Disease",
    "Fellow of the American College of Cardiology",
    "American Heart Association Member",
    "Top Doctor Award 2023",
    "Excellence in Patient Care Award",
    "Medical School: Harvard Medical School",
    "Residency: Johns Hopkins Hospital",
    "Fellowship: Mayo Clinic",
  ],

  credentialsAr: [
    "معتمد من مجلس أمراض القلب والأوعية الدموية",
    "زميل الكلية الأمريكية لأمراض القلب",
    "عضو جمعية القلب الأمريكية",
    "جائزة أفضل طبيب 2023",
    "جائزة التميز في رعاية المرضى",
    "كلية الطب: كلية الطب بجامعة هارفارد",
    "الإقامة: مستشفى جونز هوبكنز",
    "الزمالة: مايو كلينك",
  ],

  // Testimonials
  testimonials: [
    {
      name: "Robert Johnson",
      nameAr: "روبرت جونسون",
      text: "Dr. Mitchell saved my life. Her thorough examination caught a heart condition that other doctors missed. I'm forever grateful for her expertise and caring approach.",
      textAr:
        "د. ميتشل أنقذت حياتي. فحصها الدقيق اكتشف حالة قلبية فاتها أطباء آخرون. أنا ممتن إلى الأبد لخبرتها ونهجها الرعوي.",
      rating: 5,
    },
    {
      name: "Maria Rodriguez",
      nameAr: "ماريا رودريغيز",
      text: "The best cardiologist I've ever worked with. She takes time to explain everything and really listens to her patients. Highly recommend!",
      textAr: "أفضل طبيب قلب تعاملت معه على الإطلاق. تأخذ وقتاً لشرح كل شيء وتستمع حقاً لمرضاها. أنصح بشدة!",
      rating: 5,
    },
    {
      name: "David Chen",
      nameAr: "ديفيد تشين",
      text: "Professional, knowledgeable, and compassionate. Dr. Mitchell helped me understand my heart condition and develop a treatment plan that works for my lifestyle.",
      textAr: "مهنية ومعرفة ورحيمة. د. ميتشل ساعدتني على فهم حالة قلبي ووضع خطة علاج تناسب نمط حياتي.",
      rating: 5,
    },
  ],

  // Blog Posts
  blogPosts: [
    {
      title: "5 Signs You Should See a Cardiologist",
      titleAr: "5 علامات تدل على أنك بحاجة لرؤية طبيب قلب",
      excerpt: "Learn about the warning signs that indicate it's time to schedule a heart health consultation.",
      excerptAr: "تعرف على العلامات التحذيرية التي تشير إلى أن الوقت قد حان لجدولة استشارة صحة القلب.",
      date: "March 15, 2024",
      dateAr: "15 مارس 2024",
      readTime: "5 min read",
      readTimeAr: "5 دقائق قراءة",
    },
    {
      title: "Heart-Healthy Diet: What You Need to Know",
      titleAr: "النظام الغذائي الصحي للقلب: ما تحتاج لمعرفته",
      excerpt: "Discover the foods that can help protect your heart and reduce cardiovascular disease risk.",
      excerptAr: "اكتشف الأطعمة التي يمكن أن تساعد في حماية قلبك وتقليل خطر الإصابة بأمراض القلب والأوعية الدموية.",
      date: "March 10, 2024",
      dateAr: "10 مارس 2024",
      readTime: "7 min read",
      readTimeAr: "7 دقائق قراءة",
    },
    {
      title: "Understanding High Blood Pressure",
      titleAr: "فهم ارتفاع ضغط الدم",
      excerpt: "Everything you need to know about hypertension, its risks, and how to manage it effectively.",
      excerptAr: "كل ما تحتاج لمعرفته حول ارتفاع ضغط الدم ومخاطره وكيفية إدارته بفعالية.",
      date: "March 5, 2024",
      dateAr: "5 مارس 2024",
      readTime: "6 min read",
      readTimeAr: "6 دقائق قراءة",
    },
  ],

  // UI Text Translations
  translations: {
    en: {
      // Navigation
      home: "Home",
      about: "About",
      services: "Our Services",
      testimonials: "Patient Reviews",
      blog: "Health Tips",
      contact: "Contact Us",
      bookAppointment: "Book Appointment",

      // Hero Section
      expertCare: "Expert",
      careIn: "Care in",
      heroDescription:
        "provides comprehensive cardiovascular care with a focus on prevention, early detection, and personalized treatment plans for optimal heart health.",
      callNow: "Call",
      learnMore: "Learn More About Our Services",
      yearsExperience: "Years Experience",
      patientsTreated: "Patients Treated",
      emergencySupport: "Emergency Support",

      // About Section
      aboutTitle: "About",
      aboutDescription:
        "A leading specialist dedicated to providing exceptional cardiovascular care with the latest medical advances and personalized treatment approaches.",
      specializations: "Specializations",
      specialPrograms: "Special Programs",
      credentialsTitle: "Credentials & Achievements",

      // Services Section
      servicesTitle: "Our Services",
      servicesDescription:
        "Comprehensive cardiovascular care tailored to your individual needs, from prevention to advanced treatment options.",

      // Testimonials Section
      testimonialsTitle: "What Our Patients Say",
      testimonialsDescription: "Real experiences from patients who trust us with their heart health",

      // Blog Section
      blogTitle: "Health Tips & Insights",
      blogDescription: "Stay informed with the latest heart health information and medical insights",
      readMore: "Read More",
      viewAllArticles: "View All Articles",

      // Contact Section
      contactTitle: "Schedule Your Appointment",
      contactDescription: "Ready to take control of your heart health? Contact us today to book your consultation.",
      contactInfo: "Contact Information",
      officeHours: "Office Hours",
      insuranceAccepted: "Insurance Accepted",
      callToBook: "Call Now to Book",
      insuranceNote: "Don't see your insurance? Call us to verify coverage.",

      // Footer
      footerDescription: "Providing exceptional care with compassion, expertise, and the latest medical advances.",
      quickLinks: "Quick Links",
      emergency: "Emergency",
      emergencyText: "For medical emergencies, please call 911 or go to your nearest emergency room.",
      urgentCare: "For urgent cardiac concerns outside office hours, call our emergency line:",
      emergencyNumber: "(555) 911-HEART",
      copyright: "All rights reserved.",
    },
    ar: {
      // Navigation
      home: "الرئيسية",
      about: "حول",
      services: "خدماتنا",
      testimonials: "آراء المرضى",
      blog: "نصائح صحية",
      contact: "اتصل بنا",
      bookAppointment: "احجز موعد",

      // Hero Section
      expertCare: "رعاية متخصصة في",
      careIn: "في",
      heroDescription:
        "يقدم رعاية شاملة للقلب والأوعية الدموية مع التركيز على الوقاية والكشف المبكر وخطط العلاج الشخصية لصحة القلب المثلى.",
      callNow: "اتصل",
      learnMore: "تعرف على المزيد حول خدماتنا",
      yearsExperience: "سنوات خبرة",
      patientsTreated: "مريض تم علاجه",
      emergencySupport: "دعم طوارئ",

      // About Section
      aboutTitle: "حول",
      aboutDescription:
        "أخصائي رائد مكرس لتقديم رعاية استثنائية للقلب والأوعية الدموية مع أحدث التطورات الطبية والنهج العلاجية الشخصية.",
      specializations: "التخصصات",
      specialPrograms: "البرامج الخاصة",
      credentialsTitle: "الشهادات والإنجازات",

      // Services Section
      servicesTitle: "خدماتنا",
      servicesDescription:
        "رعاية شاملة للقلب والأوعية الدموية مصممة خصيصاً لاحتياجاتك الفردية، من الوقاية إلى خيارات العلاج المتقدمة.",

      // Testimonials Section
      testimonialsTitle: "ماذا يقول مرضانا",
      testimonialsDescription: "تجارب حقيقية من المرضى الذين يثقون بنا في صحة قلوبهم",

      // Blog Section
      blogTitle: "نصائح ورؤى صحية",
      blogDescription: "ابق على اطلاع بأحدث معلومات صحة القلب والرؤى الطبية",
      readMore: "اقرأ المزيد",
      viewAllArticles: "عرض جميع المقالات",

      // Contact Section
      contactTitle: "احجز موعدك",
      contactDescription: "هل أنت مستعد للسيطرة على صحة قلبك؟ اتصل بنا اليوم لحجز استشارتك.",
      contactInfo: "معلومات الاتصال",
      officeHours: "ساعات العمل",
      insuranceAccepted: "التأمين المقبول",
      callToBook: "اتصل الآن للحجز",
      insuranceNote: "لا ترى تأمينك؟ اتصل بنا للتحقق من التغطية.",

      // Footer
      footerDescription: "نقدم رعاية استثنائية بالرحمة والخبرة وأحدث التطورات الطبية.",
      quickLinks: "روابط سريعة",
      emergency: "طوارئ",
      emergencyText: "في حالات الطوارئ الطبية، يرجى الاتصال بـ 911 أو الذهاب إلى أقرب غرفة طوارئ.",
      urgentCare: "للمخاوف القلبية العاجلة خارج ساعات العمل، اتصل بخط الطوارئ:",
      emergencyNumber: "(555) 911-HEART",
      copyright: "جميع الحقوق محفوظة.",
    },
  },
}
