import { Product, ScientificStudy, Milestone, Testimonial, FAQItem, CompanyValue } from "./types";

export const COMPANY_NAME = "AETHERIS";
export const COMPANY_SLOGAN = "La fusión perfecta entre sabiduría botánica y rigor científico";
export const COMPANY_DESCRIPTION = "Diseñamos suplementos adaptógenos de última generación. Fusionamos los compuestos bioactivos de hongos ancestrales y extractos botánicos con la biotecnología moderna para optimizar tu bienestar mental, físico y celular.";

export const COMPANY_HISTORY = `Aetheris nació de la convergencia de dos mundos aparentemente opuestos: el misticismo de la botánica ancestral y el rigor inalterable de la investigación científica. Fundada en 2018 por un equipo multidisciplinario de neurocientíficos y etnobotánicos, la empresa surgió tras un viaje de investigación por los bosques nubosos de Asia Central y los Andes. Allí, nuestro equipo experimentó de primera mano el poder regulador de los adaptógenos naturales.

Decididos a rescatar estos principios activos pero despojándolos de cualquier pseudociencia, establecimos nuestro laboratorio de biotecnología celular. Hoy en día, aislamos los compuestos con una precisión nanométrica para asegurar que cada gota y cada cápsula ofrezca la concentración exacta requerida para regular la respuesta fisiológica al estrés, el enfoque mental y el descanso celular.`;

export const COMPANY_MISSION = "Democratizar el acceso a la biotecnología botánica aplicada, proporcionando soluciones limpias y científicamente validadas que permitan a las personas alcanzar su máximo potencial cognitivo y físico de manera sostenible.";
export const COMPANY_VISION = "Convertirnos en el referente global de suplementación adaptógena avanzada, reconocidos por nuestra integridad científica, transparencia absoluta en la cadena de suministro y un compromiso inquebrantable con el bienestar humano.";

export const COMPANY_VALUES: CompanyValue[] = [
  {
    title: "Rigor Científico",
    description: "Cada formulación pasa por tres fases de ensayos in vitro para validar la biodisponibilidad de sus compuestos activos antes de llegar al público.",
    iconName: "Beaker"
  },
  {
    title: "Pureza Sostenible",
    description: "Cosechamos de manera ética en ecosistemas controlados y libres de pesticidas, protegiendo la biodiversidad y apoyando a agricultores locales.",
    iconName: "Leaf"
  },
  {
    title: "Transparencia Radical",
    description: "Publicamos los análisis cromatográficos de cada lote en nuestro portal. El consumidor sabe exactamente qué entra en su cuerpo.",
    iconName: "ShieldCheck"
  },
  {
    title: "Innovación Celular",
    description: "Utilizamos procesos de extracción asistida por ultrasonido para preservar intactos los betaglucanos y terpenos más termosensibles.",
    iconName: "Cpu"
  }
];

export const TIMELINE: Milestone[] = [
  {
    year: "2018",
    title: "El Origen",
    description: "Fundación de la marca y establecimiento del laboratorio inicial en colaboración con el Centro Ficticio de Biotecnología Aplicada."
  },
  {
    year: "2020",
    title: "Patente de Nano-Extracción",
    description: "Desarrollo y patente de nuestro método de micro-encapsulado liposomal, que multiplica por 5 la absorción de los compuestos activos."
  },
  {
    year: "2022",
    title: "Expansión Sostenible",
    description: "Inauguración de nuestros cultivos hidropónicos verticales de hongos adaptógenos Reishi y Melena de León, operados con energía solar 100% limpia."
  },
  {
    year: "2024",
    title: "Reconocimiento Académico",
    description: "Presentación de nuestros tres primeros ensayos simulados ante la Alianza Ficticia de Nutrición Integrativa, consolidando nuestra reputación."
  },
  {
    year: "2026",
    title: "Consolidación Global",
    description: "Lanzamiento de la línea de elíxires líquidos de alta concentración y apertura de canales de distribución directa a más de 15 países."
  }
];

export const SCIENTIFIC_STUDIES: ScientificStudy[] = [
  {
    id: "study-1",
    title: "Efecto de la Melena de León Liposomada en la Velocidad de Procesamiento Cognitivo y Memoria de Trabajo",
    university: "Instituto Superior de Neurociencia Aplicada de Eldoria (ISNAE)",
    abstract: "Este ensayo aleatorizado de doble ciego evaluó el impacto de Zenith Focus Elixir durante 8 semanas en 120 sujetos bajo condiciones de estrés cognitivo controlado. Los resultados demostraron una mejora estadísticamente significativa en el procesamiento visuoespacial y un aumento del 34% en la retención de memoria a corto plazo, respaldado por la estimulación del factor de crecimiento nervioso (NGF).",
    citation: "Vance, R., & Sterling, M. (2025). Cognitive enhancement through ultrasonic-assisted Hericium erinaceus extractions. Journal of Fictional Neuro-Biochemistry, 14(3), 112-126.",
    badge: "Función Cognitiva",
    metrics: [
      { label: "Muestra", value: "120 sujetos", description: "Estudio clínico aleatorizado de doble ciego" },
      { label: "Duración", value: "8 Semanas", description: "Consumo diario de 1.5ml de Zenith Focus" },
      { label: "Retención", value: "+34%", description: "Mejora en memoria espacial y de trabajo" }
    ],
    chart: {
      title: "Puntuación de Rendimiento Cognitivo (Escala de 1 a 100)",
      yAxisLabel: "Puntuación de Precisión",
      data: [
        { label: "Semana 0", value: 45 },
        { label: "Semana 2", value: 52 },
        { label: "Semana 4", value: 68 },
        { label: "Semana 6", value: 79 },
        { label: "Semana 8 (Aetheris)", value: 88 },
        { label: "Semana 8 (Placebo)", value: 48 }
      ]
    }
  },
  {
    id: "study-2",
    title: "Regulación del Eje Hipotálamo-Pituitaria-Adrenal (HPA) y Reducción del Cortisol Salival Mediante Extractos de Ashwagandha y Reishi",
    university: "Universidad Metropolitana de Ciencias Fitoterapéuticas de Oakhaven",
    abstract: "Investigación clínica orientada a monitorizar los niveles hormonales de cortisol en saliva en 150 profesionales expuestos a alto estrés laboral crónico. El grupo experimental consumió la formulación activa de Anima y Somnia, mostrando un descenso estabilizado de los picos de cortisol matutinos y una modulación óptima de la respuesta simpática sin efectos sedantes.",
    citation: "García-Alba, T., et al. (2024). Adaptogenic homeostasis: Synergy of Withania somnifera and Ganoderma lucidum. Fictional Therapeutics Review, 29(1), 45-59.",
    badge: "Estrés y Cortisol",
    metrics: [
      { label: "Muestra", value: "150 voluntarios", description: "Profesionales de entornos corporativos de alta demanda" },
      { label: "Reducción Cortisol", value: "-41%", description: "Reducción de cortisol salival matutino" },
      { label: "Estabilización", value: "+58%", description: "Aumento percibido en resiliencia mental y calma" }
    ],
    chart: {
      title: "Nivel de Cortisol Salival Promedio (ng/mL)",
      yAxisLabel: "Concentración Cortisol",
      data: [
        { label: "Día 1 (Inicial)", value: 18.5 },
        { label: "Día 15 (Progreso)", value: 15.2 },
        { label: "Día 30 (Progreso)", value: 12.1 },
        { label: "Día 45 (Placebo)", value: 17.9 },
        { label: "Día 60 (Aetheris)", value: 10.9 }
      ]
    }
  },
  {
    id: "study-3",
    title: "Optimización de la Arquitectura del Sueño y Prolongación de las Fases No-REM (Sueño Profundo) y REM",
    university: "Centro Ficticio de Cronobiología Celular de Valenica",
    abstract: "A través de análisis de polisomnografía portátil de última generación, este estudio analizó los ciclos del sueño en 90 pacientes con insomnio de conciliación leve. Los resultados arrojaron que el consumo nocturno de Somnia Sleep Drops acortó el tiempo de latencia del sueño en un 48% y prolongó las fases de sueño profundo reparador (Fase N3 y REM) en un promedio de 42 minutos por noche.",
    citation: "Dr. Aris, L. N. (2025). EEG evaluation of sleep architecture under organic GABA-pathway botanical precursors. Journal of Somnological Adaptogens, 8(2), 204-219.",
    badge: "Sueño Profundo",
    metrics: [
      { label: "Latencia del Sueño", value: "-48%", description: "Reducción de tiempo necesario para quedarse dormido" },
      { label: "Sueño REM/N3", value: "+42 min", description: "Tiempo extra en las fases más restauradoras" },
      { label: "Polisomnografías", value: "540 registros", description: "Pruebas de actividad eléctrica cerebral" }
    ],
    chart: {
      title: "Minutos Adicionales de Sueño Profundo (N3/REM)",
      yAxisLabel: "Minutos de Incremento",
      data: [
        { label: "Línea Base", value: 0 },
        { label: "Semana 1", value: 12 },
        { label: "Semana 2", value: 24 },
        { label: "Semana 3", value: 35 },
        { label: "Semana 4 (Somnia)", value: 42 },
        { label: "Semana 4 (Placebo)", value: 4 }
      ]
    }
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Zenith Focus Elixir",
    description: "Concentrado líquido de alta biodisponibilidad diseñado para potenciar la neuroplasticidad, el enfoque láser y la claridad mental.",
    benefits: [
      "Estimula la producción del factor de crecimiento nervioso (NGF).",
      "Mejora la memoria de trabajo y la retención cognitiva.",
      "Optimiza el rendimiento mental sin sobrecargar el sistema nervioso."
    ],
    price: 34.99,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=600",
    category: "Enfoque & Mente",
    rating: 4.9,
    specs: {
      servingSize: "1.5 ml (30 gotas)",
      servings: 30,
      mainIngredient: "Melena de León y Rodiola Orgánica"
    }
  },
  {
    id: "prod-2",
    name: "Somnia Sleep Drops",
    description: "Fórmula adaptógena nocturna que apoya la transición natural hacia un sueño profundo, continuo y reparador.",
    benefits: [
      "Acorta significativamente el tiempo de conciliación del sueño.",
      "Prolonga las fases de sueño profundo y sueño REM.",
      "Permite despertar con vitalidad renovada, libre de somnolencia residual."
    ],
    price: 29.99,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
    category: "Sueño & Relajación",
    rating: 4.8,
    specs: {
      servingSize: "1.0 ml (20 gotas)",
      servings: 30,
      mainIngredient: "Reishi Rojo, Pasiflora y L-Teanina"
    }
  },
  {
    id: "prod-3",
    name: "Resilience Defence Blend",
    description: "Cápsulas botánicas cargadas de polisacáridos inmunomoduladores para fortalecer las defensas inmunes frente a la fatiga física.",
    benefits: [
      "Optimiza la respuesta del sistema inmune celular innato.",
      "Aumenta la resiliencia celular frente a radicales libres de oxígeno.",
      "Contrarresta el desgaste físico derivado del sobreentrenamiento o estrés crónico."
    ],
    price: 32.49,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600",
    category: "Inmunidad & Energía",
    rating: 4.7,
    specs: {
      servingSize: "2 cápsulas",
      servings: 60,
      mainIngredient: "Extracto de Chaga Silvestre y Astrágalo"
    }
  },
  {
    id: "prod-4",
    name: "Anima Mood Booster",
    description: "Formulación de amplio espectro destinada a regular el eje HPA, reduciendo los síntomas de la ansiedad cotidiana y el desánimo.",
    benefits: [
      "Ayuda a regular los niveles de serotonina y dopamina de forma natural.",
      "Reduce la irritabilidad y modula las respuestas físicas al estrés.",
      "Promueve un estado de serenidad activa y enfoque relajado."
    ],
    price: 36.99,
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&q=80&w=600",
    category: "Enfoque & Mente",
    rating: 4.9,
    specs: {
      servingSize: "2 cápsulas",
      servings: 30,
      mainIngredient: "Azafrán premium (Safr'Inside), Ashwagandha KSM-66 y Albahaca Sagrada"
    }
  },
  {
    id: "prod-5",
    name: "Vitality Cordyceps Complex",
    description: "Potenciador celular y respiratorio natural. Ideal para deportistas y personas que buscan rendimiento físico sostenido.",
    benefits: [
      "Incrementa la síntesis de ATP mitocondrial para mayor energía celular.",
      "Mejora la eficiencia en el consumo máximo de oxígeno (VO2 máx).",
      "Disminuye el tiempo de recuperación post-ejercicio."
    ],
    price: 31.99,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600",
    category: "Inmunidad & Energía",
    rating: 4.8,
    specs: {
      servingSize: "1.5 ml o 2 cápsulas",
      servings: 30,
      mainIngredient: "Cordyceps Militaris fermentado y Ginseng Siberiano"
    }
  },
  {
    id: "prod-6",
    name: "Radiance Skin Glow Syrup",
    description: "Elíxir de belleza integral que hidrata la barrera celular cutánea y combate el envejecimiento prematuro desde el interior.",
    benefits: [
      "Estimula la producción endógena de colágeno estructural.",
      "Mantiene la elasticidad e hidratación profunda de las células epiteliales.",
      "Contiene potentes polifenoles antioxidantes contra el daño solar."
    ],
    price: 39.99,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600",
    category: "Nutricosmética",
    rating: 4.6,
    specs: {
      servingSize: "1 cucharada (15 ml)",
      servings: 25,
      mainIngredient: "Hongo Tremella (Ácido Hialurónico vegetal) y Schisandra Berry"
    }
  },
  {
    id: "prod-7",
    name: "Clarity Matcha Adaptogen",
    description: "Matcha ceremonial japonés combinado con adaptógenos cognitivos. El sustituto definitivo del café convencional.",
    benefits: [
      "Aporte de L-Teanina pura para una energía mental sostenida de 6 horas.",
      "Sin picos de ansiedad, palpitaciones ni bajones repentinos.",
      "Rico en galato de epigalocatequina (EGCG), un poderoso antioxidante neuroprotector."
    ],
    price: 27.49,
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&q=80&w=600",
    category: "Enfoque & Mente",
    rating: 4.9,
    specs: {
      servingSize: "1 cucharadita (2g)",
      servings: 25,
      mainIngredient: "Té Verde Matcha Grado Ceremonial, Melena de León y Ginkgo Biloba"
    }
  },
  {
    id: "prod-8",
    name: "Aura Balance Powder",
    description: "Mezcla molecular ultra-fina de 7 hongos adaptógenos seleccionados para restaurar la homeostasis biológica integral.",
    benefits: [
      "Modula simultáneamente el sistema inmune, el sistema nervioso y el digestivo.",
      "Soporta la salud de la microbiota intestinal mediante betaglucanos prebióticos.",
      "Altamente versátil: agrégalo a tu café, batido o té matutino."
    ],
    price: 45.00,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600",
    category: "Equilibrio Diario",
    rating: 5.0,
    specs: {
      servingSize: "3 gramos",
      servings: 45,
      mainIngredient: "Sinergia de Reishi, Chaga, Cordyceps, Melena de León, Maitake, Shiitake y Tremella"
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Dra. Valeria Santillán",
    role: "Neuróloga y Neurocientífica Cognitiva",
    text: "Como investigadora, siempre fui escéptica ante los suplementos de hierbas. Sin embargo, tras analizar el proceso de nano-extracción de Aetheris y probar el Zenith Focus, he observado en mí misma un aumento medible de la velocidad de atención sostenida sin sufrir las clásicas arritmias asociadas a la cafeína.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "test-2",
    name: "Carlos Mendoza",
    role: "Desarrollador de Software Senior",
    text: "Mi nivel de burnout estaba por las nubes. El combo de Anima por las mañanas y Somnia por las noches cambió mi vida por completo. Mis niveles de cortisol se normalizaron y, por primera vez en tres años, duermo 7 horas seguidas de forma natural. Recomiendo esto a cualquier programador bajo presión.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: "test-3",
    name: "Elena Rostova",
    role: "Atleta de Alto Rendimiento (Ultra-trail)",
    text: "Uso Vitality Cordyceps en mis entrenamientos de fondo. He registrado un incremento del 4% en mi umbral aeróbico y mi fatiga de recuperación muscular se ha acortado a la mitad. El respaldo de la pureza y los análisis cromatográficos me dan total tranquilidad con las pruebas antidoping.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Qué son exactamente los adaptógenos y cómo funcionan?",
    answer: "Los adaptógenos son compuestos activos naturales (terpenoides, betaglucanos, saponinas) presentes en ciertas plantas y hongos raros. Actúan a nivel de la célula nerviosa y suprarrenal para regular la producción de hormonas de estrés como el cortisol, ayudando al cuerpo a resistir factores de estrés físico, químico o biológico. No aceleran ni deprimen los sistemas; en su lugar, restauran la homeostasis (el equilibrio natural).",
    category: "Ciencia & Efectos"
  },
  {
    id: "faq-2",
    question: "¿Cuánto tiempo tardaré en notar los resultados cognitivos y físicos?",
    answer: "Los efectos de enfoque cognitivo con Zenith Focus suelen percibirse entre los primeros 20 a 40 minutos después de la ingesta. Sin embargo, los efectos inmunomoduladores, celulares y de reducción de cortisol estresante son acumulativos y se manifiestan de forma óptima a partir de la segunda y tercera semana de consumo ininterrumpido.",
    category: "Ciencia & Efectos"
  },
  {
    id: "faq-3",
    question: "¿Tienen contraindicaciones con medicamentos u otros suplementos?",
    answer: "Nuestros adaptógenos son seguros, libres de metales pesados e ingredientes sintéticos. Sin embargo, al tener efectos sobre la inmunidad y el cortisol, las personas bajo tratamiento de inmunosupresores, anticoagulantes potentes o mujeres en periodo de gestación/lactancia deben consultar siempre con su médico antes de iniciar el consumo.",
    category: "Seguridad & Consumo"
  },
  {
    id: "faq-4",
    question: "¿Cuál es la diferencia entre sus extractos líquidos y los polvos?",
    answer: "Nuestros elíxires líquidos están diseñados mediante nano-emulsiones liposomadas que permiten la absorción sublingual directa, puenteando el sistema digestivo para un efecto cognitivo más veloz. Los polvos, por su parte, son ideales para un soporte homeostático sistémico prolongado, cargados de betaglucanos prebióticos que nutren de forma lenta pero profunda tu microbiota intestinal.",
    category: "Productos"
  },
  {
    id: "faq-5",
    question: "¿Cómo garantizan la pureza botánica de sus productos?",
    answer: "Cada lote de materias primas que entra en nuestro laboratorio es sometido a espectrometría de masas y cromatografía de gases líquida. Certificamos la ausencia absoluta de trazas de pesticidas, plomo, mercurio y contaminación fúngica perjudicial. Puedes consultar los análisis del número de lote impreso en tu botella directamente en nuestra sección de contacto.",
    category: "Seguridad & Consumo"
  }
];

export const CONTACT_INFO = {
  address: "Av. Biotecnología Adaptativa 405, Distrito Tecnológico, Tecno-City, CP 94002",
  phone: "+34 91 555 4239 / +54 11 4821 0050",
  email: "info@aetherisbiolabs.edu.es",
  schedule: "Lunes a Viernes: 08:30 a 18:30 | Sábados: 09:00 a 13:00 (GTM+1)",
  coordinates: { lat: 40.416775, lng: -3.703790 }, // Fictional center placement in Madrid Tech District
};

export const EDUCATIONAL_DISCLAIMER = "Este sitio web ha sido programado únicamente con fines ilustrativos y evaluativos académicos de desarrollo front-end. No se comercializan productos reales.";

export const COPYRIGHT_TEXT = "© 2026 AETHERIS BioLabs. Diseñado con fines académicos. Todos los derechos simulados.";

export const PRIVACY_POLICY = {
  title: "Protección de Datos Académicos",
  sections: [
    {
      title: "1. Tratamiento de Datos",
      content: "Aetheris BioLabs no almacena, vende ni procesa datos personales reales. El formulario de contacto de este sitio web es una simulación visual y no envía información a servidores externos ni bases de datos persistentes comerciales."
    },
    {
      title: "2. Cookies del Carrito",
      content: "Usamos almacenamiento local (localStorage) exclusivamente para guardar temporalmente el estado de tus productos seleccionados en el carrito, permitiendo que tu experiencia persista si refrescas el navegador. No se utilizan cookies de rastreo comercial."
    },
    {
      title: "3. Seguridad",
      content: "Toda información introducida en esta interfaz no tiene validez legal ni comercial, garantizando el absoluto anonimato de los usuarios en el entorno educativo de IA Studio."
    }
  ]
};

export const TERMS_OF_SERVICE = {
  title: "Términos de Uso Académico",
  sections: [
    {
      title: "1. Ámbito de Aplicación",
      content: "Al navegar por este sitio web ficticio de simulación, aceptas que el sitio constituye un proyecto educativo sin fines de lucro, desarrollado exclusivamente para evaluación académica."
    },
    {
      title: "2. Exclusión de Responsabilidad",
      content: "Aetheris no es una entidad legal farmacéutica o biotecnológica real. No asumimos responsabilidad alguna por personas que intenten buscar los productos citados (\"Zenith Focus\", \"Somnia Sleep Drops\") en farmacias o tiendas reales, dado que son marcas registradas ficticias."
    },
    {
      title: "3. Propiedad Intelectual",
      content: "Los logotipos, descripciones químicas, nombres de universidades ficticias y abstracts científicos pertenecen en su totalidad al creador del proyecto y han sido generados mediante modelos de inteligencia artificial para enriquecer la simulación visual."
    }
  ]
};

