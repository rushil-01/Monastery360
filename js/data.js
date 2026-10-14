// =============================================================================
// Monastery360 — Master Data File
// =============================================================================
// Comprehensive Sikkim monastic tourism, cultural heritage, festival calendar,
// accommodation directory, and multimedia gallery data.
//
// 🆕 EXTENDING THIS DATA:
// All arrays below are designed for easy extension. Simply follow the schema
// outlined in each section and add new objects. All application views
// (index.html, tours.html, events.html, gallery.html, etc.) dynamically render
// from this central data repository.
// =============================================================================

window.M360Data = {
  // ───────────────────────────────────────────────────────────────────────────
  // MONASTERIES (GOMPAS & SACRED HERITAGE SITES)
  // ───────────────────────────────────────────────────────────────────────────
  monasteries: [
    {
      id: 'rumtek',
      name: 'Rumtek Monastery',
      img: 'images/rumtek.jpg',
      panoImg: 'images/rumtek_pano.png',
      location: 'East Sikkim',
      lat: 27.2358,
      lng: 88.5697,
      description: 'The Dharma Chakra Centre stands as the premier seat of the Karma Kagyu lineage in exile, founded under the direction of the 16th Gyalwang Karmapa. Perched opposite Gangtok on a verdant ridge, this sprawling monastery complex features magnificent Tibetan architecture, vibrant golden stupas, and sacred hand-painted scroll murals. It is considered one of the holiest and most artistically rich Buddhist monastic complexes in the Himalayas.',
      tags: ['Kagyu', 'Heritage', '360° Tour', 'Gangtok', 'Golden Stupa'],
      rating: 4.8,
      reviews: 3420,
      sect: 'Karma Kagyu',
      founded: '1740 (rebuilt 1966)',
      alt: '5,800 ft · 24 km from Gangtok',
      timings: '6:00 AM – 6:00 PM',
      entryFee: 'Free (Camera ₹50)',
      bestTime: 'Oct – May',
      distance: '24 km from Gangtok',
      highlights: [
        'Golden Stupa containing relics of the 16th Karmapa',
        'Rare 300-year-old Kagyu lineage thangkas and silk brocades',
        'Annual Cham Sacred Mask Dance during Losar and Tibetan New Year',
        'Karma Shri Nalanda Institute for Higher Buddhist Studies'
      ]
    },
    {
      id: 'pemayangtse',
      name: 'Pemayangtse Monastery',
      img: 'images/pemayangtse.jpg',
      panoImg: 'images/pemayangtse_pano.png',
      location: 'West Sikkim',
      lat: 27.2996,
      lng: 88.2427,
      description: 'Pemayangtse, meaning "Perfect Sublime Lotus", is one of Sikkim’s oldest, most revered Nyingma monasteries, situated near Pelling with breathtaking views of Mt. Kanchenjunga. Founded by Lama Lhatsun Chempo, only celibate Ta-Sang monks of pure Tibetan descent are initiated here. The top floor houses the world-famous Sangthokpalri, an intricate seven-tiered hand-carved wooden model depicting Guru Rinpoche’s heavenly palace.',
      tags: ['Nyingma', 'Heritage', '360° Tour', 'Pelling', 'Sangthokpalri'],
      rating: 4.9,
      reviews: 2890,
      sect: 'Nyingma',
      founded: '1705',
      alt: '6,840 ft · 130 km from Gangtok',
      timings: '7:00 AM – 5:00 PM',
      entryFee: '₹50 per person',
      bestTime: 'Mar – May & Sep – Dec',
      distance: '130 km from Gangtok (2 km from Pelling)',
      highlights: [
        'Sangthokpalri — legendary seven-tiered wooden masterpiece carved by Dungzin Rinpoche',
        'Direct panoramic vista of Mt. Kanchenjunga and Himalayan peaks',
        'Ancient statues of Padmasambhava and pristine antique thangkas',
        'Annual Cham mask dance festival held during the 28th and 29th days of the 12th lunar month'
      ]
    },
    {
      id: 'tashiding',
      name: 'Tashiding Monastery',
      img: 'images/tashiding.jpg',
      panoImg: 'images/tashiding_pano.webp',
      location: 'West Sikkim',
      lat: 27.3190,
      lng: 88.3160,
      description: 'Crowned atop a heart-shaped conical hill between the sacred Rathong and Rangit rivers, Tashiding is considered the spiritual heart and holiest sanctuary of Sikkim. It is believed that even a mere glimpse of Tashiding and its Thongwa Rangdol Chorten cleanses one of all earthly sins. The monastery is famed for the sacred Bumchu Holy Water festival, where centuries-old prophecies for the kingdom are divined from blessed vase water.',
      tags: ['Nyingma', 'Pilgrimage', '360° Tour', 'Holy Water', 'Bumchu'],
      rating: 4.7,
      reviews: 1980,
      sect: 'Nyingma',
      founded: '1641',
      alt: '4,800 ft · 120 km from Gangtok',
      timings: '6:30 AM – 5:30 PM',
      entryFee: 'Free',
      bestTime: 'Oct – Apr',
      distance: '120 km from Gangtok (19 km from Yuksom)',
      highlights: [
        'Thongwa Rangdol Chorten (Liberation by Sight stupa)',
        'Centuries-old Bumchu holy water vase ceremony',
        'Stone prayer slabs carved with holy mantras by master artisans',
        'Sacred confluence point of Rathong Chu and Rangeet rivers'
      ]
    },
    {
      id: 'dodrul',
      name: 'Do-Drul Chorten',
      img: 'images/dodrul.jpg',
      panoImg: 'images/dodrul_pano.png',
      location: 'East Sikkim',
      lat: 27.3253,
      lng: 88.6065,
      description: 'Built in 1945 by Trulshik Rinpoche, head of the Nyingma order of Tibetan Buddhism, Do-Drul Chorten is a commanding stupa surmounted by a gleaming golden spire near Deorali. The stupa is encircled by 108 Mani Lhakor prayer wheels that pilgrims turn while chanting sacred mantras. Within the stupa are preserved complete sets of holy Dorjee Phurba relics, Kangyur scripture volumes, and ancient mandala offerings.',
      tags: ['Nyingma', 'Spiritual', 'Stupa', 'Gangtok', 'Prayer Wheels'],
      rating: 4.6,
      reviews: 2410,
      sect: 'Nyingma',
      founded: '1945',
      alt: '5,400 ft · 2 km from Gangtok Center',
      timings: '8:00 AM – 6:00 PM',
      entryFee: 'Free',
      bestTime: 'Year-round',
      distance: '2 km from Gangtok MG Marg',
      highlights: [
        '108 prayer wheels inscribed with Om Mani Padme Hum',
        'Towering golden steeple visible across southern Gangtok',
        'Sacred Dorjee Phurba (Vajrakilaya) relics preserved inside the dome',
        'Adjacent Chorten Lakhang and Guru Lakhang shrines'
      ]
    },
    {
      id: 'enchey',
      name: 'Enchey Monastery',
      img: 'images/enchey.jpg',
      panoImg: 'images/enchey_pano.jpg',
      location: 'East Sikkim',
      lat: 27.3382,
      lng: 88.6124,
      description: 'Nestled amid pine conifers high above Gangtok, Enchey ("the Solitary Temple") was originally established on a ridge blessed by the Tantric flying master Lama Druptob Karpo. The present Chinese pagoda-style structure was rebuilt under Chogyal Sidkeong Tulku in 1909. It is intimately tied to the guardian deities Khangchendzonga and Yabdean, celebrating vibrant Cham dances each winter during the Singhe Chaam and Pang Lhabsol festivals.',
      tags: ['Nyingma', 'Heritage', 'Gangtok', 'Cham Dance', 'Scenic Ridge'],
      rating: 4.6,
      reviews: 2150,
      sect: 'Nyingma',
      founded: '1840 (rebuilt 1909)',
      alt: '6,100 ft · 3 km from Gangtok Center',
      timings: '6:00 AM – 6:00 PM',
      entryFee: 'Free',
      bestTime: 'Sep – Jun',
      distance: '3 km from Gangtok Center',
      highlights: [
        'Pagoda architectural styling with radiant golden cupola',
        'Fresco paintings of the Four Guardian Kings and cosmic Mandalas',
        'Sacred annual mask dances during the Detor Cham in December',
        'Magnificent pine-framed overlook of Gangtok and Kanchenjunga'
      ]
    },
    {
      id: 'ralang',
      name: 'Ralang Monastery',
      img: 'images/ralang.png',
      panoImg: 'images/ralang_pano.jpg',
      location: 'South Sikkim',
      lat: 27.2515,
      lng: 88.3958,
      description: 'Ralang Monastery is considered the most significant Kagyu center in South Sikkim, built by the 9th Karmapa who tossed grains of rice from Tibet which landed here. The extensive Palchen Choeling Monastic Institute (New Ralang Gompa), established in 1995 by Gyaltsab Rinpoche, houses hundreds of monks and showcases stupendous Himalayan craftsmanship. Its annual Mahakala dance and Pang Lhabsol ceremonies attract devotees from across the world.',
      tags: ['Kagyu', 'Ravangla', 'Monastic College', 'Mahakala Cham'],
      rating: 4.7,
      reviews: 1730,
      sect: 'Karma Kagyu',
      founded: '1768 (New Gompa 1995)',
      alt: '5,200 ft · 68 km from Gangtok',
      timings: '7:00 AM – 5:00 PM',
      entryFee: 'Free',
      bestTime: 'Sep – May',
      distance: '68 km from Gangtok (13 km from Ravangla)',
      highlights: [
        'Palchen Choeling Monastic Institute with colossal prayer assembly hall',
        'World-renowned Pang Lhabsol & Mahakala Chaam mask dance rituals',
        'Extensive collection of hand-woven thangkas and golden iconography',
        'Serene forest setting near Ravangla and Buddha Park'
      ]
    },
    {
      id: 'dubdi',
      name: 'Dubdi Monastery',
      img: 'images/dubdi.png',
      panoImg: 'images/dubdi_pano.jpeg',
      location: 'West Sikkim',
      lat: 27.3755,
      lng: 88.2201,
      description: 'Dubdi Monastery, occasionally called the Hermit\'s Cell, stands proudly as the very first and oldest monastery established in Sikkim. Built in 1701 by Chogyal Chakdor Namgyal following the coronation of Sikkim\'s first monarch at Yuksom, it is reached via a mystical hour-long forest trek through dense oak and chestnut groves. The two-story stone structure houses exquisitely painted images of divinities and historical founding lamas.',
      tags: ['Nyingma', 'Oldest in Sikkim', 'Yuksom', 'Historical', 'Trekking'],
      rating: 4.8,
      reviews: 1540,
      sect: 'Nyingma',
      founded: '1701',
      alt: '7,000 ft · 135 km from Gangtok',
      timings: '7:00 AM – 4:30 PM',
      entryFee: 'Free',
      bestTime: 'Oct – May',
      distance: '135 km from Gangtok (3 km trek from Yuksom)',
      highlights: [
        'Recognized as the oldest surviving monastery in Sikkim (1701)',
        'Ancient wood-block printed scriptures and original terracotta idols',
        'Enchanting nature walk pathway lined with prayer flags and rhododendrons',
        'Intimate ties with Yuksom Norbugang Coronation Stone'
      ]
    },
    {
      id: 'phensang',
      name: 'Phensang Monastery',
      img: 'images/phensang.png',
      panoImg: 'images/phensang_pano.jpg',
      location: 'North Sikkim',
      lat: 27.4137,
      lng: 88.5413,
      description: 'Located in North Sikkim along the scenic North Sikkim Highway toward Mangan, Phensang Gompa was founded in 1721 by the 3rd Lhatsun Jigme Pawo. Perched on a gentle mountain slope offering panoramic valley vistas, it houses one of the largest monastic brotherhoods under the Nyingmapa order in northern Sikkim. The monastery was painstakingly reconstructed following a fire in 1947 and features sublime frescoes and sacred prayer sanctuaries.',
      tags: ['Nyingma', 'North Sikkim', 'Scenic', 'Mangan', 'Chaam Festival'],
      rating: 4.6,
      reviews: 1120,
      sect: 'Nyingma',
      founded: '1721',
      alt: '5,500 ft · 40 km from Gangtok',
      timings: '7:00 AM – 5:00 PM',
      entryFee: 'Free',
      bestTime: 'Mar – Jun & Oct – Dec',
      distance: '40 km north of Gangtok',
      highlights: [
        'Spectacular vantage point overlooking northern Himalayan valleys',
        'Celebrated annual ritual mask dance performed during the Sikkimese New Year',
        'Peaceful monastery grounds with traditional Nyingma sanctuary',
        'Gateway to the pristine high-altitude landscapes of North Sikkim'
      ]
    }
  ],

  // ──────────────────────────────────────────────
  // 🆕 TO ADD A NEW MONASTERY:
  // Copy one of the objects above, paste at the end
  // of the monasteries array, and fill in all fields.
  // The site will automatically pick it up on all pages.
  // ──────────────────────────────────────────────

  // ───────────────────────────────────────────────────────────────────────────
  // FESTIVALS & CULTURAL EVENTS
  // ───────────────────────────────────────────────────────────────────────────
  events: [
    {
      id: 'losar-rumtek',
      name: 'Losar (Tibetan New Year) at Rumtek',
      emoji: '🎊',
      month: 2,
      day: 17,
      type: 'losar',
      isFestival: true,
      duration: '3 Days',
      description: 'Vibrant Tibetan New Year celebrations marked by sacred Gutor Cham rituals, horns, and prayers welcoming spiritual renewal.',
      longDesc: 'Losar at Rumtek Monastery is one of the most magnificent Tibetan New Year festivals in the world. Two days before the new year, monks don elaborate wrathful deity silk robes and carved masks to perform the sacred Gutor ritual dance, banishing evil spirits and negativity of the departing year. Family gatherings, butter lamp offerings, butter-fried pastries (Khapse), and community dances follow as the entire monastic complex rejoices in peaceful blessings.',
      monastery: 'rumtek',
      monasteryName: 'Rumtek Monastery'
    },
    {
      id: 'losar-pemayangtse',
      name: 'Losar & Gutor Dance at Pemayangtse',
      emoji: '🎭',
      month: 2,
      day: 18,
      type: 'losar',
      isFestival: true,
      duration: '2 Days',
      description: 'Traditional Nyingma monastic dances and sacred bonfire ceremonies on the scenic slopes of West Sikkim.',
      longDesc: 'At Pemayangtse, Losar begins with the ancient Gutor Cham mask dance performed by lamas in the courtyard overlooking Mount Kanchenjunga. The rituals culminate in a dramatic effigy burning ritual that symbolizes the annihilation of demonic and obstacle-causing forces. Devotees and visitors gather from surrounding villages dressed in customary Bakhu attire to receive sacred cord blessings and share traditional chang barley wine.',
      monastery: 'pemayangtse',
      monasteryName: 'Pemayangtse Monastery'
    },
    {
      id: 'bumchu-tashiding',
      name: 'Bumchu Holy Water Festival',
      emoji: '🏺',
      month: 3,
      day: 14,
      type: 'bumchu',
      isFestival: true,
      duration: '2 Days',
      description: 'Miraculous opening of the holy water vessel to divine the peace, prosperity, and fortunes of the land for the coming year.',
      longDesc: 'The sacred Bumchu ceremony takes place exclusively at Tashiding Monastery on the 14th and 15th days of the first Tibetan lunar month. An ancient, sealed copper-and-gold sacred vase containing water blessed by Guru Padmasambhava in the 8th century is reverently unsealed. Monks carefully measure the water level: if full to the brim, it portends an abundant year; if depleted, drought; if cloudy, civil turmoil. Pilgrims wait throughout the night to receive a sacred drop of the divine nectar.',
      monastery: 'tashiding',
      monasteryName: 'Tashiding Monastery'
    },
    {
      id: 'saga-dawa-rumtek',
      name: 'Saga Dawa Triple Blessed Day',
      emoji: '🌸',
      month: 5,
      day: 23,
      type: 'saga',
      isFestival: true,
      duration: '1 Day',
      description: 'The triple-blessed full moon celebrating the birth, enlightenment, and Parinirvana of Gautama Buddha.',
      longDesc: 'Saga Dawa is the most sacred month in the Buddhist calendar, reaching its zenith on the full moon day. At Rumtek, monks conduct grand Mahayana puja ceremonies, release captive animals to generate boundless merit, and light thousands of golden butter lamps throughout the main shrine. Merit accumulated during Saga Dawa is believed to multiply a hundred thousand times, inspiring pilgrims to practice circumambulation, prostration, and selfless generosity.',
      monastery: 'rumtek',
      monasteryName: 'Rumtek Monastery'
    },
    {
      id: 'saga-dawa-dodrul',
      name: 'Saga Dawa Stupa Procession',
      emoji: '☸️',
      month: 6,
      day: 4,
      type: 'saga',
      isFestival: true,
      duration: '1 Day',
      description: 'Hundreds of devotees circumambulate Do-Drul Chorten, turning prayer wheels and reciting mantras under golden sunshine.',
      longDesc: 'On Saga Dawa, the streets surrounding Do-Drul Chorten fill with thousands of monks, nuns, and lay devotees carrying ancient Kangyur holy scriptures on their shoulders. The reverberation of chanting and the continuous rhythm of 108 prayer wheels spinning clockwise create a deeply peaceful aura. Free community meals (Kora prasad) and sweet butter tea are distributed to all visitors in an inspiring display of community unity.',
      monastery: 'dodrul',
      monasteryName: 'Do-Drul Chorten'
    },
    {
      id: 'pang-lhabsol-enchey',
      name: 'Pang Lhabsol Warrior Dance',
      emoji: '🛡️',
      month: 9,
      day: 10,
      type: 'pang',
      isFestival: true,
      duration: '2 Days',
      description: 'Unique Sikkimese festival honoring Mount Kanchenjunga as the sworn guardian deity of Sikkim and brotherhood.',
      longDesc: 'Pang Lhabsol is unique to Sikkim, instituted to honor Mount Kanchenjunga (Khangchendzonga) as both divine protector of the kingdom and witness to the historic blood brotherhood treaty between the Lepchas and Bhutias. At Enchey Monastery, monks enact the majestic Chaos Mask Dance where the fiery red-faced commander Dzonga leaps across the courtyard brandishing a battle standard. The dances are accompanied by resonant conch shells, cymbals, and thundering long-horns (Dungchen).',
      monastery: 'enchey',
      monasteryName: 'Enchey Monastery'
    },
    {
      id: 'kagyed-pemayangtse',
      name: 'Kagyed Dance Festival',
      emoji: '🗡️',
      month: 12,
      day: 28,
      type: 'other',
      isFestival: true,
      duration: '2 Days',
      description: 'Ancient tantric mask dance drama enacting the triumph of good over malevolent spirits before the lunar year concludes.',
      longDesc: 'Held annually in late December, the Kagyed Dance at Pemayangtse features intricate enactments of Buddhist lore and cosmic struggles. Monks clad in vivid silk brocades and monstrous, terrifying masks portray protective divinities subduing demons of sickness and misfortune. The performance ends with the burning of a huge demonic dough effigy (Torma), purifying the earth and ushering in good fortune for the impending agricultural cycle.',
      monastery: 'pemayangtse',
      monasteryName: 'Pemayangtse Monastery'
    },
    {
      id: 'drukpa-tsheshi-ralang',
      name: 'Drukpa Tsheshi First Turning of the Wheel',
      emoji: '📜',
      month: 7,
      day: 28,
      type: 'other',
      isFestival: true,
      duration: '1 Day',
      description: 'Commemoration of Buddha’s very first sermon at the Deer Park in Sarnath, preaching the Four Noble Truths.',
      longDesc: 'Drukpa Tsheshi falls on the fourth day of the sixth Tibetan month, commemorating Lord Buddha’s historic first sermon on the Four Noble Truths and the Eightfold Noble Path. At Ralang Monastery, the monastic college conducts deep philosophical debates and public discourses on Buddhist doctrine. Devotees offer white silk Khada scarves, butter lamps, and prayers for global peace in the vast central assembly hall.',
      monastery: 'ralang',
      monasteryName: 'Ralang Monastery'
    },
    {
      id: 'buddha-jayanti-dodrul',
      name: 'Buddha Jayanti Celebration',
      emoji: '🕯️',
      month: 5,
      day: 12,
      type: 'other',
      isFestival: true,
      duration: '1 Day',
      description: 'Joyous celebration of Lord Buddha’s life featuring sacred mantra recitations, prayer flags hoisting, and food distribution.',
      longDesc: 'Buddha Jayanti transforms Do-Drul Chorten into an ocean of prayer flags and butter lamps. The lamas initiate early dawn meditation sessions followed by extensive public blessings with holy water and sacred texts. Pilgrims walk three times around the entire hill, releasing caged birds and practicing deep mindfulness to honor Lord Buddha’s message of universal compassion and non-violence.',
      monastery: 'dodrul',
      monasteryName: 'Do-Drul Chorten'
    },
    {
      id: 'lhabab-duchen-phensang',
      name: 'Lhabab Duchen Descent from Heaven',
      emoji: '🌌',
      month: 11,
      day: 15,
      type: 'other',
      isFestival: true,
      duration: '1 Day',
      description: 'Honoring Buddha’s return to earth from the realm of the Thirty-Three Gods after delivering teachings to his mother.',
      longDesc: 'Lhabab Duchen celebrates Lord Buddha’s descent from Trayastrimsha heaven back to earth on a triple staircase of lapis, gold, and crystal after teaching the Dharma to his mother Mayadevi. At Phensang Gompa in North Sikkim, monastery facades are freshly painted and illuminated with thousands of oil lamps after twilight. Devotees dedicate positive deeds, chant the refuge vows, and offer community service.',
      monastery: 'phensang',
      monasteryName: 'Phensang Monastery'
    },
    {
      id: 'guru-rinpoche-tashiding',
      name: 'Guru Rinpoche Birthday (Tsechu)',
      emoji: '📿',
      month: 7,
      day: 10,
      type: 'other',
      isFestival: true,
      duration: '1 Day',
      description: 'Birth anniversary of Padmasambhava, the Lotus-Born second Buddha who introduced Tantric Buddhism to Sikkim.',
      longDesc: 'Guru Padmasambhava is revered throughout Sikkim as the supreme patron saint who consecrated its hidden sacred lands (Beyul Demazong). On the tenth day of the fifth lunar month, Tashiding Monastery conducts the auspicious Tsechu rituals. Rare antique scroll thangkas of the Eight Manifestations of Guru Rinpoche are unfurled, and lamas perform sacred Cham dances invoking the master’s wisdom and miraculous protection.',
      monastery: 'tashiding',
      monasteryName: 'Tashiding Monastery'
    },
    {
      id: 'losoong-enchey',
      name: 'Losoong & Namsoong Harvest Festival',
      emoji: '🌾',
      month: 12,
      day: 15,
      type: 'losar',
      isFestival: true,
      duration: '4 Days',
      description: 'The beloved Sikkimese harvest festival celebrating agricultural abundance with Cham archery, food, and folk dances.',
      longDesc: 'Losoong marks the culmination of the harvest season and the traditional Sikkimese new year for the Bhutia and Lepcha communities. At Enchey Monastery, monks perform the iconic Black Hat Dance (Zhabdrung Cham) alongside dances dramatizing the victory of enlightened forces over ignorance. Visitors can witness traditional archery tournaments, taste indigenous delicacies like thukpa and momos, and experience the warm hospitality of Sikkim.',
      monastery: 'enchey',
      monasteryName: 'Enchey Monastery'
    },
    {
      id: 'pang-lhabsol-tashiding',
      name: 'Pang Lhabsol Pilgrimage Gathering',
      emoji: '⛰️',
      month: 9,
      day: 12,
      type: 'pang',
      isFestival: true,
      duration: '1 Day',
      description: 'Mountain reverence ceremonies at the holy confluence where prayers are offered for the health and harmony of all sentient beings.',
      longDesc: 'Complementing the Enchey rites, Tashiding’s Pang Lhabsol celebration focuses on serene contemplative pujas and sacred water rituals overlooking the holy river valleys. Lamas chant long-life invocations to the mountain deities while villagers plant vibrant lungta prayer flags across the hill crest to send prayers riding on the Himalayan winds across the four corners of the world.',
      monastery: 'tashiding',
      monasteryName: 'Tashiding Monastery'
    }
  ],

  // ──────────────────────────────────────────────
  // 🆕 TO ADD A NEW EVENT:
  // Copy one of the objects above and append to events.
  // ──────────────────────────────────────────────

  // ───────────────────────────────────────────────────────────────────────────
  // HOTELS & ACCOMMODATIONS
  // ───────────────────────────────────────────────────────────────────────────
  hotels: [
    {
      id: 'mayfair',
      name: 'Mayfair Spa Resort & Casino',
      img: 'images/mayfair.png',
      location: 'Gangtok, East Sikkim',
      lat: 27.3299,
      lng: 88.6069,
      category: 'luxury',
      rating: 4.7,
      priceMin: 8500,
      priceMax: 18000,
      distance: '3 km to Rumtek route / 10 km to Rumtek',
      desc: 'Set amidst 48 acres of lush forested mountain valley, this award-winning luxury retreat combines traditional Sikkim monastic architecture with world-class five-star amenities, serene wellness spas, and exceptional hospitality.',
      amenities: ['🏊 Pool', '💆 Spa', '🍽️ Restaurant', '📶 WiFi', '🅿️ Parking', '🍸 Casino'],
      badge: '✨ Top Pick'
    },
    {
      id: 'elgin-nor-khill',
      name: 'The Elgin Nor-Khill',
      img: 'images/elgin_nor_khill.png',
      location: 'Gangtok, East Sikkim',
      lat: 27.3325,
      lng: 88.6140,
      category: 'heritage',
      rating: 4.8,
      priceMin: 9000,
      priceMax: 17500,
      distance: '1.5 km from MG Marg · 2.5 km from Enchey',
      desc: 'Originally built in 1932 as the royal guesthouse for the King of Sikkim (Chogyal), The Elgin Nor-Khill boasts royal Burmese teak floors, authentic period artwork, grand fireplaces, and majestic garden views of Mount Kanchenjunga.',
      amenities: ['☕ Royal Lounge', '🍽️ Fine Dining', '📶 WiFi', '🅿️ Parking', '🌿 Garden Terrace'],
      badge: '👑 Royal Heritage'
    },
    {
      id: 'orange-village',
      name: 'Orange Village Resort',
      img: 'images/orange_village.png',
      location: 'Gangtok, East Sikkim',
      lat: 27.3105,
      lng: 88.5980,
      category: 'boutique',
      rating: 4.5,
      priceMin: 5500,
      priceMax: 10500,
      distance: '4 km from Gangtok · Convenient for Rumtek',
      desc: 'Perched along gentle hillside terraces flanked by orange orchards and river valleys, this eco-boutique resort offers peaceful cottage accommodations, Himalayan cuisine, and guided monastery excursions.',
      amenities: ['🍽️ Organic Cafe', '📶 WiFi', '🅿️ Parking', '🌸 Orchid Garden', '🌄 Valley Views'],
      badge: '🌿 Eco Friendly'
    },
    {
      id: 'denzong-regency',
      name: 'Hotel Denzong Regency',
      img: 'images/denzong_regency.png',
      location: 'Gangtok, East Sikkim',
      lat: 27.3350,
      lng: 88.6180,
      category: 'budget',
      rating: 4.4,
      priceMin: 3200,
      priceMax: 6800,
      distance: '1 km from Gangtok Center',
      desc: 'A comfortable, centrally located mountain hotel offering tastefully decorated rooms with individual balconies overlooking snow peaks, an attentive travel desk, and authentic local Sikkimese dining options.',
      amenities: ['🍽️ Restaurant', '📶 Free WiFi', '🅿️ Parking', '🛎️ 24/7 Desk', '☕ Coffee Shop'],
      badge: '👍 Best Value'
    },
    {
      id: 'elgin-mount-pandim',
      name: 'The Elgin Mount Pandim',
      img: 'images/elgin_mount_pandim.png',
      location: 'Pelling, West Sikkim',
      lat: 27.3015,
      lng: 88.2435,
      category: 'heritage',
      rating: 4.8,
      priceMin: 8000,
      priceMax: 16000,
      distance: 'Walking distance (300m) to Pemayangtse Monastery',
      desc: 'Spanning eight secluded acres of virgin oak forest directly beside Pemayangtse Monastery, this heritage manor offers front-row views of Mt. Kanchenjunga, birdwatching trails, and imperial tea ceremonies in the Gazebo.',
      amenities: ['🌄 Peak Panorama', '🍽️ Restaurant', '☕ Tea Lounge', '📶 WiFi', '🅿️ Parking', '🚶 Forest Trail'],
      badge: '🏔️ Kanchenjunga View'
    },
    {
      id: 'norbu-ghang',
      name: 'Norbu Ghang Resort',
      img: 'images/norbu_ghang.png',
      location: 'Pelling, West Sikkim',
      lat: 27.3050,
      lng: 88.2390,
      category: 'boutique',
      rating: 4.6,
      priceMin: 5200,
      priceMax: 11000,
      distance: '2 km to Pemayangtse · 28 km to Tashiding',
      desc: 'A charming boutique property modeled after a Sikkimese village hamlet, featuring standalone stone cottages, manicured gardens, traditional hot stone baths, and a cozy central hearth for evenings.',
      amenities: ['♨️ Stone Bath', '🍽️ Silver Fir Restaurant', '📶 WiFi', '🅿️ Parking', '🔥 Campfire Hearth'],
      badge: '🏡 Cottage Charm'
    },
    {
      id: 'hotel-tashiding',
      name: 'Hotel Tashiding Valley View',
      img: 'images/hotel_tashiding.jpg',
      location: 'Tashiding, West Sikkim',
      lat: 27.3180,
      lng: 88.3140,
      category: 'budget',
      rating: 4.2,
      priceMin: 1800,
      priceMax: 3500,
      distance: '800 m to Tashiding Monastery Steps',
      desc: 'A humble, family-run guest haven situated near the base of Tashiding Hill, catering to pilgrims and mindful trekkers seeking peaceful homestyle hospitality and healthy organic Himalayan home-cooked food.',
      amenities: ['🍽️ Home Cooking', '📶 WiFi', '🅿️ Parking', '🥾 Trek Guides', '🌄 River Valley View'],
      badge: '🙏 Pilgrim Choice'
    },
    {
      id: 'yangsum-farm',
      name: 'Yangsum Heritage Farm',
      img: 'images/yangsum_farm.jpg',
      location: 'Rinchenpong, West Sikkim',
      lat: 27.2340,
      lng: 88.2670,
      category: 'boutique',
      rating: 4.9,
      priceMin: 7200,
      priceMax: 12500,
      distance: '25 km to Pemayangtse · 35 km to Tashiding',
      desc: 'Nestled in a 44-acre working farm of cardamom, avocado, and bamboo forests dating back to 1833. Guests experience authentic sustainable farm life, Bhutanese-Tibetan architecture, and delicious farm-to-table organic feasts.',
      amenities: ['🥦 Organic Farm Table', '📶 WiFi', '🚶 Nature Walks', '🅿️ Parking', '📚 Library'],
      badge: '🌱 Organic Farmstay'
    }
  ],

  // ──────────────────────────────────────────────
  // 🆕 TO ADD A NEW HOTEL:
  // Copy one of the objects above and append to hotels.
  // ──────────────────────────────────────────────

  // ───────────────────────────────────────────────────────────────────────────
  // PHOTO & ART GALLERY
  // ───────────────────────────────────────────────────────────────────────────
  gallery: [
    {
      id: 'g1',
      title: 'Rumtek Golden Stupa',
      monastery: 'Rumtek',
      category: 'architecture',
      img: 'images/rumtek.jpg',
      desc: 'The magnificent 13-foot golden stupa encrusted with turquoise and coral, enshrining the bone relics of the 16th Gyalwang Karmapa Rangjung Rigpe Dorje.'
    },
    {
      id: 'g2',
      title: 'Kagyu Lineage Silk Thangka',
      monastery: 'Rumtek',
      category: 'art',
      img: 'images/mural1.png',
      desc: 'Sacred centuries-old appliqué silk thangka depicting the lineage masters of the Black Hat Karmapas, exhibited during major prayer convocations.'
    },
    {
      id: 'g3',
      title: 'Rumtek Main Assembly Hall',
      monastery: 'Rumtek',
      category: 'architecture',
      img: 'images/rumtek_pano.png',
      desc: 'The grand prayer hall (Lhakhang) adorned with hand-carved pillars, thousands of miniature Buddha statues, and the central throne of the Karmapa.'
    },
    {
      id: 'g4',
      title: 'Sangthokpalri Wooden Palace',
      monastery: 'Pemayangtse',
      category: 'art',
      img: 'images/pemayangtse.jpg',
      desc: 'The world-renowned seven-tiered wooden sculpture meticulously hand-carved over five years by Dungzin Rinpoche, portraying Guru Rinpoche’s celestial paradise.'
    },
    {
      id: 'g5',
      title: 'Pemayangtse Ancient Wall Murals',
      monastery: 'Pemayangtse',
      category: 'history',
      img: 'images/mural1.png',
      desc: 'Original 18th-century vegetable-dye murals detailing the Tantric deities of the Nyingmapa Mahayoga cycle and historical Tibetan royal patrons.'
    },
    {
      id: 'g6',
      title: 'Thongwa Rangdol Chorten',
      monastery: 'Tashiding',
      category: 'architecture',
      img: 'images/tashiding.jpg',
      desc: 'The sacred white chorten believed to instantly cleanse spiritual impurities and negative karma of anyone who gazes upon its sanctified structure.'
    },
    {
      id: 'g7',
      title: 'Sacred Inscribed Mani Stones',
      monastery: 'Tashiding',
      category: 'history',
      img: 'images/dubdi.png',
      desc: 'Thousands of slate and granite stones lovingly chiseled with holy Om Mani Padme Hum mantras, stacked by centuries of pilgrims along the river ridge.'
    },
    {
      id: 'g8',
      title: 'Bumchu Holy Water Shrine',
      monastery: 'Tashiding',
      category: 'history',
      img: 'images/tashiding.jpg',
      desc: 'The mystical inner shrine chamber where the miraculous 8th-century holy water vase is safeguarded under strict religious seals and round-the-clock monk guards.'
    },
    {
      id: 'g9',
      title: 'Do-Drul Chorten Prayer Wheels',
      monastery: 'Gangtok',
      category: 'architecture',
      img: 'images/dodrul.jpg',
      desc: 'The outer circumambulation gallery housing 108 polished brass prayer wheels continually turned by devotees beneath the golden stupa pinnacle.'
    },
    {
      id: 'g10',
      title: 'Enchey Monastery Pagoda Roof',
      monastery: 'Gangtok',
      category: 'architecture',
      img: 'images/enchey.jpg',
      desc: 'Distinctive Chinese-influenced layered tier eaves crowned by the gilded golden spire, framing breathtaking panoramas over the Gangtok valley.'
    },
    {
      id: 'g11',
      title: 'Tantric Cham Mask Collection',
      monastery: 'Gangtok',
      category: 'art',
      img: 'images/mural1.png',
      desc: 'Hand-carved cedarwood ritual masks representing Mahakala, Wrathful Deities, and animal spirit messengers used during the annual Enchey Detor Cham.'
    },
    {
      id: 'g12',
      title: 'Yuksom Norbugang Throne & Dubdi Relics',
      monastery: 'Pemayangtse',
      category: 'history',
      img: 'images/dubdi.png',
      desc: 'Sacred stone throne and foundational footprint relics marking the 1642 coronation of Phuntsog Namgyal as first Dharma King of Sikkim.'
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────────
// FAVORITES PERSISTENCE HELPER
// ─────────────────────────────────────────────────────────────────────────────
window.M360Favorites = (function() {
  const KEY = 'm360_favorites';
  function load() {
    try {
      return new Set(JSON.parse(localStorage.getItem(KEY) || '[]'));
    } catch (e) {
      return new Set();
    }
  }
  function save(s) {
    try {
      localStorage.setItem(KEY, JSON.stringify([...s]));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  }
  let favs = load();
  return {
    has(id) {
      return favs.has(id);
    },
    toggle(id) {
      if (favs.has(id)) {
        favs.delete(id);
      } else {
        favs.add(id);
      }
      save(favs);
      return favs.has(id);
    },
    getAll() {
      return [...favs];
    }
  };
})();
