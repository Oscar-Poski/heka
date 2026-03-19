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
          }
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
            slug: 'apologia',
            title: 'Apología',
            summary: '',
          }
        ]
      }
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
