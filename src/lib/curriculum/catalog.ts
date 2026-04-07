export type CatalogModule = {
  slug: string;
  title: string;
  summary: string;
};

export type CatalogCourse = {
  slug: string;
  title: string;
  level: 'básico' | 'intermedio';
  summary: string;
  estimatedHours: number;
  modules: CatalogModule[];
};

export type CatalogTrack = {
  slug: string;
  title: string;
  summary: string;
  courses: CatalogCourse[];
};

export const curriculumCatalog: CatalogTrack[] = [
  {
    slug: 'filosofia',
    title: 'Filosofía Griega Clásica',
    summary: '',
    courses: [
      {
        slug: 'presocraticos',
        title: 'Presocráticos',
        level: 'básico',
        summary: '',
        estimatedHours: 15,
        modules: [
          {
            slug: 'tales',
            title: 'Tales de Mileto',
            summary: '',
          },
          {
            slug: 'anaximandro',
            title: 'Anaximandro de Mileto',
            summary: '',
          },
          {
            slug: 'anaximenes',
            title: 'Anaxímenes de Mileto',
            summary: '',
          },
          {
            slug: 'jenofanes',
            title: 'Jenófanes de Colofón',
            summary: '',
          },
          {
            slug: 'pitagoras',
            title: 'Pitágoras de Samos',
            summary: '',
          },
          {
            slug: 'heraclito',
            title: 'Heráclito de Éfeso',
            summary: '',
          },
          {
            slug: 'parmenides',
            title: 'Parménides de Elea',
            summary: '',
          },
          {
            slug: 'zenon',
            title: 'Zenón de Elea',
            summary: '',
          },
          {
            slug: 'meliso',
            title: 'Meliso de Samos',
            summary: '',
          },
          {
            slug: 'atomistas',
            title: 'Los Atomistas: Leucipo y Demócrito',
            summary: '',
          },
          {
            slug: 'anaxagoras',
            title: 'Anaxágoras de Clazómenas',
            summary: '',
          },
          {
            slug: 'empedocles',
            title: 'Empédocles de Acragas',
            summary: '',
          },
          {
            slug: 'sofistas',
            title: 'Los Sofistas',
            summary: '',
          },
        ]
      },
      {
        slug: 'socrates',
        title: 'Sócrates',
        level: 'básico',
        summary: '',
        estimatedHours: 0,
        modules: [
          {
            slug: 'aristofanes',
            title: 'Según Aristófanes',
            summary: '',
          },
          {
            slug: 'jenofonte',
            title: 'Según Jenofónte',
            summary: '',
          },
          {
            slug: 'apologia',
            title: 'Apología',
            summary: '',
          },
          {
            slug: 'criton',
            title: 'Critón',
            summary: '',
          },
          {
            slug: 'eutifron',
            title: 'Eutifrón',
            summary: '',
          },
        ]
      },
      {
        slug: 'misc',
        title: 'Misceláneo',
        level: 'básico',
        summary: '',
        estimatedHours: 0,
        modules: [
          {
            slug: 'lista',
            title: 'Lista de Palabras',
            summary: '',
          },
          {
            slug: 'letras',
            title: 'Alfabeto Griego',
            summary: '',
          },
          {
            slug: 'conceptos',
            title: 'Algunos Conceptos',
            summary: '',
          },
        ]
      },
    ]
  },
  /*{
    slug: 'desarrollo-web',
    title: 'Desarrollo Web',
    summary: 'Ruta orientada a construir productos web modernos y desplegables.',
    courses: [
      {
        slug: 'frontend-moderno',
        title: 'En Construcción: Frontend Moderno',
        level: 'básico',
        summary: 'HTML semántico, CSS utilitario y componentes reutilizables.',
        estimatedHours: 0,
        modules: [
          {
            slug: 'fundamentos-ui',
            title: 'Fundamentos de UI',
            summary: 'Bases para interfaces claras, accesibles y mantenibles.',
          }
        ]
      }
    ]
  }*/
];
