import { Fragrance } from '../types';
import amber from '../images1/amber.png';
import linen from '../images1/linen.png';
import forest from '../images1/forest walk.png';

export const fragrances: Fragrance[] = [
  {
    id: '1',
    name: 'Vanilla & Amber',
    description: 'A warm and inviting blend that creates a cozy atmosphere.',
    mood: 'Relaxing & Comforting',
    topNotes: ['Vanilla Bean', 'Almond'],
    middleNotes: ['Tonka Bean', 'Coconut'],
    baseNotes: ['Amber', 'Musk'],
    image: amber,
  },
  {
    id: '2',
    name: 'Fresh Linen',
    description: 'Clean and crisp scent reminiscent of freshly laundered linens.',
    mood: 'Fresh & Clean',
    topNotes: ['Ozone', 'Citrus'],
    middleNotes: ['Cotton Blossom', 'Lily'],
    baseNotes: ['White Musk', 'Woody Notes'],
    image: linen,
  },
  {
    id: '3',
    name: 'Forest Walk',
    description: 'A refreshing blend of pine, cedar, and earthy notes.',
    mood: 'Energizing & Grounding',
    topNotes: ['Pine Needles', 'Eucalyptus'],
    middleNotes: ['Cedar', 'Fir Balsam'],
    baseNotes: ['Moss', 'Woody Notes'],
    image: forest,
  },
];