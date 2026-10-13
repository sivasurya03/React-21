export const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'features', label: 'Features' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'pricing', label: 'Pricing' },
]

export const BENEFITS = [
  {
    icon: 'repeat',
    title: 'Repeat your best batch',
    text: 'Save a roast as a profile and see, second by second, where the next one drifts from it.',
  },
  {
    icon: 'package',
    title: 'Never run out of green',
    text: 'Stock drops as you roast, and Firstcrack tells you how many days of each origin you have left.',
  },
  {
    icon: 'truck',
    title: 'Turn orders into a roast plan',
    text: 'Wholesale orders become a weekly schedule, with the roast sizes already worked out.',
  },
]

export const STATS = [
  { value: '38%', label: 'fewer off-profile batches' },
  { value: '6 hrs', label: 'saved on paperwork each week' },
  { value: '2,400+', label: 'roast profiles logged' },
]

export const FEATURES = [
  {
    id: 'roast-log',
    icon: 'activity',
    title: 'Roast logging that keeps up with the drum',
    text: 'Chart bean temperature, rate of rise and development time as you roast. Add notes at first crack, then compare any batch against your saved profile.',
    span: 'lg:col-span-7',
    visual: 'curve',
  },
  {
    id: 'inventory',
    icon: 'sprout',
    title: 'Green coffee inventory',
    text: 'Track lots by origin, bag count and arrival date. Stock falls with every roast.',
    span: 'lg:col-span-5',
    visual: 'stock',
  },
  {
    id: 'cupping',
    icon: 'coffee',
    title: 'Cupping and quality notes',
    text: 'Score each batch on a cupping sheet and link the result to the roast that made it.',
    span: 'lg:col-span-5',
    visual: 'cupping',
  },
  {
    id: 'orders',
    icon: 'clipboard',
    title: 'Wholesale orders',
    text: "Take recurring orders from cafés, plan the week's roasts from them, and print packing lists.",
    span: 'lg:col-span-7',
    visual: 'orders',
  },
  {
    id: 'import',
    icon: 'upload',
    title: 'Import or type it in',
    text: 'Bring roast logs in from a CSV file, or enter a batch by hand. Your roaster does not need to be connected.',
    span: 'lg:col-span-6',
    chips: ['CSV import', 'Manual entry', 'CSV export'],
  },
  {
    id: 'labels',
    icon: 'tag',
    title: 'Labels with a lot trail',
    text: 'Print bag labels with roast date and lot, so any bag can be traced to the batch it came from.',
    span: 'lg:col-span-6',
    chips: ['Roast date', 'Lot code', 'Batch number'],
  },
]

export const STOCK = [
  { origin: 'Ethiopia Guji', kg: 42, max: 120 },
  { origin: 'Colombia Huila', kg: 88, max: 120 },
  { origin: 'Brazil Cerrado', kg: 19, max: 120 },
  { origin: 'Kenya Nyeri', kg: 61, max: 120 },
]

export const ORDERS = [
  { name: 'Hollow Oak Café', detail: '12 kg house blend', day: 'Thu' },
  { name: 'Marrow Street Bakery', detail: '6 kg Huila', day: 'Thu' },
  { name: 'Tidewater Co-op', detail: '20 kg espresso', day: 'Fri' },
]

export const STEPS = [
  {
    icon: 'plug',
    title: 'Set up your roaster',
    text: 'Enter your machine, batch sizes and the origins you roast. Import past logs from a CSV if you have them.',
    detail: 'Takes about 10 minutes',
  },
  {
    icon: 'flame',
    title: 'Log each roast',
    text: 'Record temperatures and events during the roast. Firstcrack plots the curve and works out development time for you.',
    detail: 'Works on a phone beside the drum',
  },
  {
    icon: 'scale',
    title: 'Compare and adjust',
    text: 'Lay the new batch over your saved profile. Change charge temperature or airflow next time based on what you see.',
    detail: 'Profiles stay with every origin',
  },
  {
    icon: 'send',
    title: 'Pack and ship',
    text: 'Match finished batches to open orders, print labels and mark orders ready for pickup or delivery.',
    detail: 'Stock updates automatically',
  },
]

export const TESTIMONIALS = [
  {
    id: 't1',
    quote:
      "Comparing today's batch against our saved Guji profile takes seconds. We caught a drifting charge temperature in the first week, and our cupping scores have been steadier since.",
    name: 'Maya Okonkwo',
    role: 'Head roaster, Lantern Row Coffee',
    rating: 5,
    tone: 'bg-ember-soft text-ember-deep',
  },
  {
    id: 't2',
    quote:
      'Wholesale orders used to live in three different spreadsheets. Sunday planning is now one screen, and I can see how many days of green coffee I have left for each origin.',
    name: 'Daniel Reyes',
    role: 'Owner, Salt & Ember Roasters',
    rating: 5,
    tone: 'bg-moss-light text-moss-dark',
  },
  {
    id: 't3',
    quote:
      'The profile overlay is what sold our second roaster. New staff can see exactly how far a batch is from the target, so training takes far less of my time.',
    name: 'Priya Venkataraman',
    role: 'Production lead, Common Grounds Collective',
    rating: 5,
    tone: 'bg-roast text-ember',
  },
]

export const BILLING_DISCOUNT = 0.2

export const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    blurb: 'For a single small-batch roaster.',
    monthly: 29,
    features: ['1 roaster', 'Unlimited roast logs', 'Green coffee inventory', 'CSV import and export'],
  },
  {
    id: 'studio',
    name: 'Studio',
    blurb: 'For roasteries selling wholesale.',
    monthly: 79,
    recommended: true,
    features: [
      'Up to 3 roasters',
      'Everything in Starter',
      'Wholesale orders and roast planning',
      'Cupping sheets and bag labels',
      '5 team seats',
    ],
  },
  {
    id: 'roastery',
    name: 'Roastery',
    blurb: 'For multi-site and high-volume teams.',
    monthly: 189,
    features: [
      'Unlimited roasters',
      'Everything in Studio',
      'Lot traceability reports',
      'Unlimited team seats',
      'Priority email support',
    ],
  },
]

export const FOOTER_COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How it works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Reviews', href: '#testimonials' },
      { label: 'Back to top', href: '#top' },
    ],
  },
]

export const SOCIALS = [
  { label: 'Firstcrack on X', href: 'https://x.com', icon: 'twitter' },
  { label: 'Firstcrack on Instagram', href: 'https://www.instagram.com', icon: 'instagram' },
  { label: 'Firstcrack on LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
  { label: 'Firstcrack on GitHub', href: 'https://github.com', icon: 'github' },
]
