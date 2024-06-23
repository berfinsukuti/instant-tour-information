const tourGroups = [
    {
      name: "JAPONYA KORE TURLARI NRT 12 GÜN HER ŞEY DAHİL",
      guide: "Kadriye Uyak",
      capacity: 27,
      duration: 12,
      startDate: "2024-06-21",
      endDate: "2024-07-03",
      itinerary: [
        { city: "Tokyo", country: "Japonya", day: 1, lat: 35.6895, lng: 139.6917},
        { city: "Tokyo", country: "Japonya", day: 2, lat: 35.6895, lng: 139.6917},
        { city: "Tokyo", country: "Japonya", day: 3, lat: 35.6895, lng: 139.6917},
        { city: "Tokyo", country: "Japonya", day: 4, lat: 35.6895, lng: 139.6917},          
        { city: "Tokyo", country: "Japonya", day: 5, lat: 35.6895, lng: 139.6917},
        { city: "Osaka", country: "Japonya", day: 6, lat: 34.6937, lng: 135.5023 },
        { city: "Osaka", country: "Japonya", day: 7, lat: 34.6937, lng: 135.5023 },
        { city: "Osaka", country: "Japonya", day: 8, lat: 34.6937, lng: 135.5023 },
        { city: "Seul", country: "Güney Kore", day: 9, lat: 37.5665, lng: 126.9780  },
        { city: "Seul", country: "Güney Kore", day: 10, lat: 37.5665, lng: 126.9780  },
        { city: "Seul", country: "Güney Kore", day: 11, lat: 37.5665, lng: 126.9780  },
        { city: "İstanbul", country: "Türkiye", day: 12, lat: 41.0082, lng: 28.9784  },

      ],
      image: "images/japonyakore.jpeg", // Görsel dosyasının yolu
    },
    {
        name: "BÜYÜK AFRİKA TURU - GÜNEY AFRİKA ZAMBİYA ZİMBABWE BOTSWANA",
        guide: "Barbaros Kotoğlu",
        capacity: 23,
        duration: 12,
        startDate: "2024-06-14",
        endDate: "2024-06-26",
        itinerary: [
          { city: "Cape Town", country: "Güney Afrika", day: 1, lat: -33.9249, lng: 18.4241 },
          { city: "Hout Bay", country: "Güney Afrika", day: 2, lat: -34.0433, lng: 18.3513 },
          { city: "Cape Town", country: "Güney Afrika", day: 3, lat: -33.9249, lng: 18.4241 },
          { city: "Johannesburg", country: "Güney Afrika", day: 4, lat: -26.2041, lng: 28.0473 },
          { city: "Johannesburg", country: "Güney Afrika", day: 5, lat: -26.2041, lng: 28.0473 },
          { city: "Lesedi Köyü", country: "Güney Afrika", day: 6, lat: -25.7559, lng: 28.2336 },
          { city: "Victorya Falls", country: "Zimbabwe", day: 7, lat: -17.9243, lng: 25.8572 },
          { city: "Chobe National Park", country: "Botswana", day: 8, lat: -18.6580, lng: 24.6848 },
          { city: "Livingstone", country: "Zambiya", day: 9, lat: -17.8419, lng: 25.8543 },
          { city: "Johannesburg", country: "Güney Afrika", day: 10, lat: -26.2041, lng: 28.0473 },
          { city: "Johannesburg", country: "Güney Afrika", day: 11, lat: -26.2041, lng: 28.0473 },
          { city: "İstanbul", country: "Türkiye", day: 12, lat: 41.0082, lng: 28.9784 },
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Büyük Japonya Kore Turu – SQ ICN FUQ",
        guide: "Hakan Özen",
        capacity: 15,
        duration: 15,
        startDate: "2024-06-03",
        endDate: "2024-06-18",
        itinerary: [
          { city: "Seul", country: "Güney Kore", day: 1, lat: 37.5665, lng: 126.9780 },
          { city: "Seul", country: "Güney Kore", day: 2, lat: 37.5665, lng: 126.9780 },
          { city: "Seul", country: "Güney Kore", day: 3, lat: 37.5665, lng: 126.9780 },
          { city: "Seul", country: "Güney Kore", day: 4, lat: 37.5665, lng: 126.9780 },
          { city: "Tokyo", country: "Japonya", day: 5, lat: 35.6895, lng: 139.6917 },
          { city: "Hakone", country: "Japonya", day: 6, lat: 35.2329, lng: 139.1062 },
          { city: "Tokyo", country: "Japonya", day: 7, lat: 35.6895, lng: 139.6917 },
          { city: "Tokyo", country: "Japonya", day: 8, lat: 35.6895, lng: 139.6917 },
          { city: "Osaka", country: "Japonya", day: 9, lat: 34.6937, lng: 135.5023 },
          { city: "Kyoto", country: "Japonya", day: 10, lat: 35.0116, lng: 135.7681 },
          { city: "Hiroşima", country: "Japonya", day: 11, lat: 34.3853, lng: 132.4553 },
          { city: "Kitakyuşu", country: "Japonya", day: 11, lat: 33.8833, lng: 130.8750 },
          { city: "Hakata", country: "Japonya", day: 12, lat: 33.5904, lng: 130.4017 },
          { city: "Hakata", country: "Japonya", day: 13, lat: 33.5904, lng: 130.4017 },
          { city: "Hakata", country: "Japonya", day: 14, lat: 33.5904, lng: 130.4017 },
          { city: "İstanbul", country: "Türkiye", day: 15, lat: 41.0082, lng: 28.9784 },
        ],
        image: "images/japonyakore.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Büyük İpek Yolu Turları THY",
        guide: "Utku Alçın",
        capacity: 20,
        duration: 14,
        startDate: "2024-06-07",
        endDate: "2024-06-21",
        itinerary: [
          { city: "Semerkand", country: "Özbekistan", day: 1, lat: 39.6542, lng: 66.9597 },
          { city: "Buhara", country: "Özbekistan", day: 2, lat: 39.7747, lng: 64.4191 },
          { city: "Hiva", country: "Özbekistan", day: 3, lat: 41.3783, lng: 60.3584 },
          { city: "Hiva", country: "Özbekistan", day: 4, lat: 41.3783, lng: 60.3584 },
          { city: "Buhara", country: "Özbekistan", day: 5, lat: 39.7747, lng: 64.4191 },
          { city: "Semerkand", country: "Özbekistan", day: 6, lat: 39.6542, lng: 66.9597 },
          { city: "Taşkent", country: "Özbekistan", day: 7, lat: 41.2995, lng: 69.2401 },
          { city: "Almata", country: "Kazakistan", day: 8, lat: 43.2220, lng: 76.8512 },
          { city: "Almata", country: "Kazakistan", day: 9, lat: 43.2220, lng: 76.8512 },
          { city: "Bişek", country: "Kırgızistan", day: 10, lat: 42.8746, lng: 74.5698 },
          { city: "Bişek", country: "Kırgızistan", day: 11, lat: 42.8746, lng: 74.5698 },
          { city: "Bişkek", country: "Kırgızistan", day: 12, lat: 42.8746, lng: 74.5698 },
          { city: "Bişkek", country: "Kırgızistan", day: 13, lat: 42.8746, lng: 74.5698 },
          { city: "İstanbul", country: "Türkiye", day: 14, lat: 41.0082, lng: 28.9784 },
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Moğolistan Turu Miat",
        guide: "Batuhan Bakır",
        capacity: 13,
        duration: 8,
        startDate: "2024-06-11",
        endDate: "2024-06-19",
        itinerary: [
          { city: "Ulan Batur", country: "Moğolistan", day: 1, lat: 47.8864, lng: 106.9057 },
          { city: "Ulan Batur", country: "Moğolistan", day: 2, lat: 47.8864, lng: 106.9057 },
          { city: "Karakorum", country: "Moğolistan", day: 3, lat: 47.1986, lng: 102.8255 },
          { city: "Karakorum", country: "Moğolistan", day: 4, lat: 47.1986, lng: 102.8255 },
          { city: "Karakorum", country: "Moğolistan", day: 5, lat: 47.1986, lng: 102.8255 },
          { city: "Ulan Batur", country: "Moğolistan", day: 6, lat: 47.8864, lng: 106.9057 },
          { city: "Ulan Batur", country: "Moğolistan", day: 7, lat: 47.8864, lng: 106.9057 },
          { city: "İstanbul", country: "Türkiye", day: 8, lat: 41.0082, lng: 28.9784 },
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Büyük Çin Turu",
        guide: "Ekin Canpaniniperes",
        capacity: 30,
        duration: 13,
        startDate: "2024-06-12",
        endDate: "2024-06-25",
        itinerary: [
          { city: "Pekin", country: "Çin", day: 1, lat: 39.9042, lng: 116.4074 },
          { city: "Pekin", country: "Çin", day: 2, lat: 39.9042, lng: 116.4074 },
          { city: "Pekin", country: "Çin", day: 3, lat: 39.9042, lng: 116.4074 },
          { city: "Xian", country: "Çin", day: 4, lat: 34.3416, lng: 108.9398 },
          { city: "Chengdu", country: "Çin", day: 5, lat: 30.5728, lng: 104.0668 },
          { city: "Chengdu", country: "Çin", day: 6, lat: 30.5728, lng: 104.0668 },
          { city: "Chengdu", country: "Çin", day: 7, lat: 30.5728, lng: 104.0668 },
          { city: "Shanghai", country: "Çin", day: 8, lat: 31.2304, lng: 121.4737 },
          { city: "Shanghai", country: "Çin", day: 9, lat: 31.2304, lng: 121.4737 },
          { city: "Shanghai", country: "Çin", day: 10, lat: 31.2304, lng: 121.4737 },
          { city: "Shanghai", country: "Çin", day: 11, lat: 31.2304, lng: 121.4737 },
          { city: "İstanbul", country: "Türkiye", day: 12, lat: 41.0082, lng: 28.9784 },
          { city: "İstanbul", country: "Türkiye", day: 13, lat: 41.0082, lng: 28.9784 },
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Küba Turları THY",
        guide: "Onur Barut",
        capacity: 35,
        duration: 9,
        startDate: "2024-06-12",
        endDate: "2024-06-21",
        itinerary: [
          { city: "Havana", country: "Küba", day: 1, lat: 23.1136, lng: -82.3666 },
          { city: "Pinar Del Rio", country: "Küba", day: 2, lat: 22.4175, lng: -83.6987 },
          { city: "Havana", country: "Küba", day: 3, lat: 23.1136, lng: -82.3666 },
          { city: "Trinidad", country: "Küba", day: 4, lat: 21.8052, lng: -79.9846 },
          { city: "Trinidad", country: "Küba", day: 5, lat: 21.8052, lng: -79.9846 },
          { city: "Varadero", country: "Küba", day: 6, lat: 23.1799, lng: -81.1890 },
          { city: "Havana", country: "Küba", day: 7, lat: 23.1136, lng: -82.3666 },
          { city: "Havana", country: "Küba", day: 8, lat: 23.1136, lng: -82.3666 },
          { city: "İstanbul", country: "Türkiye", day: 9, lat: 41.0082, lng: 28.9784 },
        ],
        image: "/images/kuba.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Büyük Güney Amerika Turu THY",
        guide: "Burak Okdar",
        capacity: 22,
        duration: 12,
        startDate: "2024-06-13",
        endDate: "2024-06-25",
        itinerary: [
          { city: "Sao Paulo", country: "Brezilya", day: 1, lat: -23.5505, lng: -46.6333 },
          { city: "Foz De Iguacu", country: "Brezilya", day: 2, lat: -25.5427, lng: -54.5827 },
          { city: "Rio De Janeiro", country: "Brezilya", day: 3, lat: -22.9068, lng: -43.1729 },
          { city: "Rio De Janeiro", country: "Brezilya", day: 4, lat: -22.9068, lng: -43.1729 },
          { city: "Rio De Janeiro", country: "Brezilya", day: 5, lat: -22.9068, lng: -43.1729 },
          { city: "Santiago", country: "Şili", day: 6, lat: -33.4489, lng: -70.6693 },
          { city: "Valparaiso", country: "Şili", day: 7, lat: -33.0472, lng: -71.6127 },
          { city: "Buenos Aires", country: "Arjantin", day: 8, lat: -34.6037, lng: -58.3816 },
          { city: "Buenos Aires", country: "Arjantin", day: 9, lat: -34.6037, lng: -58.3816 },
          { city: "Sacramento", country: "Uruguay", day: 10, lat: -34.4717, lng: -57.8444 },
          { city: "Buenos Aires", country: "Arjantin", day: 11, lat: -34.6037, lng: -58.3816 },
          { city: "İstanbul", country: "Türkiye", day: 12, lat: 41.0082, lng: 28.9784 },
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Grand Güney Amerika Turları THY",
        guide: "Burak Özkara",
        capacity: 29,
        duration: 18,
        startDate: "2024-06-13",
        endDate: "2024-07-01",
        itinerary: [
          { city: "Bogota", country: "Kolombiya", day: 1, lat: 4.7110, lng: -74.0721 },
          { city: "Bogota", country: "Kolombiya", day: 2, lat: 4.7110, lng: -74.0721 },
          { city: "Lima", country: "Peru", day: 3, lat: -12.0464, lng: -77.0428 },
          { city: "Lima", country: "Peru", day: 4, lat: -12.0464, lng: -77.0428 },
          { city: "Cusco", country: "Peru", day: 5, lat: -13.5320, lng: -71.9675 },
          { city: "Cusco", country: "Peru", day: 6, lat: -13.5320, lng: -71.9675 },
          { city: "Machu Picchu", country: "Peru", day: 7, lat: -13.1631, lng: -72.5450 },
          { city: "Santiago de Chile", country: "Şili", day: 8, lat: -33.4489, lng: -70.6693 },
          { city: "Santiago de Chile", country: "Şili", day: 9, lat: -33.4489, lng: -70.6693 },
          { city: "Vina Del Mar", country: "Şili", day: 10, lat: -33.0245, lng: -71.5518 },
          { city: "Buenos Aires", country: "Arjantin", day: 11, lat: -34.6037, lng: -58.3816 },
          { city: "Sacremento", country: "Uruguay", day: 12, lat: -34.4717, lng: -57.8444 },
          { city: "Buenos Aires", country: "Arjantin", day: 13, lat: -34.6037, lng: -58.3816 },
          { city: "Buenos Aires", country: "Arjantin", day: 14, lat: -34.6037, lng: -58.3816 },
          { city: "Rio De Janeiro", country: "Brezilya", day: 15, lat: -22.9068, lng: -43.1729 },
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Baştan Başa Endonezya Turu THY",
        guide: "Özgür Bingöl",
        capacity: 29,
        duration: 11,
        startDate: "2024-06-14",
        endDate: "2024-06-25",
        itinerary: [
          { city: "Jakarta", country: "Endonezya", day: 1, lat: -6.2088, lng: 106.8456 },
          { city: "Bandung", country: "Endonezya", day: 2, lat: -6.9175, lng: 107.6191 },
          { city: "Bandung", country: "Endonezya", day: 3, lat: -6.9175, lng: 107.6191 },
          { city: "Bandung", country: "Endonezya", day: 4, lat: -6.9175, lng: 107.6191 },
          { city: "Yogyakarta", country: "Endonezya", day: 5, lat: -7.7975, lng: 110.3705 },
          { city: "Yogyakarta", country: "Endonezya", day: 6, lat: -7.7975, lng: 110.3705 },
          { city: "Bali", country: "Endonezya", day: 7, lat: -8.3405, lng: 115.0920 },
          { city: "Bali", country: "Endonezya", day: 8, lat: -8.3405, lng: 115.0920 },
          { city: "Bali", country: "Endonezya", day: 9, lat: -8.3405, lng: 115.0920 },
          { city: "Bali", country: "Endonezya", day: 10, lat: -8.3405, lng: 115.0920 },
          { city: "İstanbul", country: "Türkiye", day: 11, lat: 41.0082, lng: 28.9784 },
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Japonya Kore Turları THY – HND Her Şey Dahil",
        guide: "Ayşegül Kudunoğlu",
        capacity: 40,
        duration: 12,
        startDate: "2024-06-14",
        endDate: "2024-06-26",
        itinerary: [
          { city: "Tokyo", country: "Japonya", day: 1, lat: 35.6895, lng: 139.6917 },
          { city: "Tokyo", country: "Japonya", day: 2, lat: 35.6895, lng: 139.6917 },
          { city: "Hakone", country: "Japonya", day: 3, lat: 35.2329, lng: 139.1066 },
          { city: "Tokyo", country: "Japonya", day: 4, lat: 35.6895, lng: 139.6917 },
          { city: "Osaka", country: "Japonya", day: 5, lat: 34.6937, lng: 135.5023 },
          { city: "Kyoto", country: "Japonya", day: 6, lat: 35.0116, lng: 135.7681 },
          { city: "Osaka", country: "Japonya", day: 7, lat: 34.6937, lng: 135.5023 },
          { city: "Seul", country: "Güney Kore", day: 8, lat: 37.5665, lng: 126.9780 },
          { city: "Seul", country: "Güney Kore", day: 9, lat: 37.5665, lng: 126.9780 },
          { city: "Seul", country: "Güney Kore", day: 10, lat: 37.5665, lng: 126.9780 },
          { city: "Seul", country: "Güney Kore", day: 11, lat: 37.5665, lng: 126.9780 },
          { city: "İstanbul", country: "Türkiye", day: 12, lat: 41.0082, lng: 28.9784 },
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Ermenistan Turu / APEX Özel",
        guide: "Serdar Nazım Kölürbaşı",
        capacity: 20,
        duration: 6,
        startDate: "2024-06-15",
        endDate: "2024-06-21",
        itinerary: [
          { city: "Erivan", country: "Ermenistan", day: 1, lat: 40.1792, lng: 44.4991 },
          { city: "Erivan", country: "Ermenistan", day: 2, lat: 40.1792, lng: 44.4991 },
          { city: "Garni", country: "Ermenistan", day: 3, lat: 40.1114, lng: 44.7334 },
          { city: "Sevan", country: "Ermenistan", day: 4, lat: 40.5503, lng: 44.9582 },
          { city: "Erivan", country: "Ermenistan", day: 5, lat: 40.1792, lng: 44.4991 },
          { city: "Larnaka", country: "Kıbrıs", day: 6, lat: 34.9011, lng: 33.6232 }, 
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      },      
      {
        name: "Katmandu Nepal Turu JZ",
        guide: "Önder Onay",
        capacity: 35,
        duration: 7,
        startDate: "2024-06-15",
        endDate: "2024-06-22",
        itinerary: [
          { city: "Katmandu", country: "Nepal", day: 1, lat: 27.7172, lng: 85.3240 },
          { city: "Katmandu", country: "Nepal", day: 2, lat: 27.7172, lng: 85.3240 },
          { city: "Katmandu", country: "Nepal", day: 3, lat: 27.7172, lng: 85.3240 },
          { city: "Pokhara", country: "Nepal", day: 4, lat: 28.2096, lng: 83.9856 },
          { city: "Chitwan", country: "Nepal", day: 5, lat: 27.5291, lng: 84.3542 },
          { city: "Katmandu", country: "Nepal", day: 6, lat: 27.7172, lng: 85.3240 },
          { city: "İstanbul", country: "Türkiye", day: 7, lat: 41.0082, lng: 28.9784 },
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      },      
      {
        name: "Küba Turları THY",
        guide: "Haluk Işıkmen",
        capacity: 30,
        duration: 9,
        startDate: "2024-06-15",
        endDate: "2024-06-24",
        itinerary: [
          { city: "Havana", country: "Küba", day: 1, lat: 23.1136, lng: -82.3666 },
          { city: "Pinar Del Rio", country: "Küba", day: 2, lat: 22.4175, lng: -83.6987 },
          { city: "Havana", country: "Küba", day: 3, lat: 23.1136, lng: -82.3666 },
          { city: "Trinidad", country: "Küba", day: 4, lat: 21.8052, lng: -79.9846 },
          { city: "Trinidad", country: "Küba", day: 5, lat: 21.8052, lng: -79.9846 },
          { city: "Varadero", country: "Küba", day: 6, lat: 23.1799, lng: -81.1890 },
          { city: "Havana", country: "Küba", day: 7, lat: 23.1136, lng: -82.3666 },
          { city: "Havana", country: "Küba", day: 8, lat: 23.1136, lng: -82.3666 },
          { city: "İstanbul", country: "Türkiye", day: 9, lat: 41.0082, lng: 28.9784 },
        ],
        image: "/images/kuba.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Sri Lanka -Salam Air- SAW",
        guide: "Mehmet Yarangümeli",
        capacity: 41,
        duration: 8,
        startDate: "2024-06-16",
        endDate: "2024-06-24",
        itinerary: [
          { city: "Colombo", country: "Sri Lanka", day: 1, lat: 6.9271, lng: 79.8612 },
          { city: "Dambulla", country: "Sri Lanka", day: 2, lat: 7.8731, lng: 80.6513 },
          { city: "Sigiriya", country: "Sri Lanka", day: 3, lat: 7.9566, lng: 80.7607 },
          { city: "Kandy", country: "Sri Lanka", day: 4, lat: 7.2906, lng: 80.6337 },
          { city: "Colombo", country: "Sri Lanka", day: 5, lat: 6.9271, lng: 79.8612 },
          { city: "Colombo", country: "Sri Lanka", day: 6, lat: 6.9271, lng: 79.8612 },
          { city: "Negombo", country: "Sri Lanka", day: 7, lat: 7.2008, lng: 79.8737 },
          { city: "İstanbul", country: "Türkiye", day: 8, lat: 41.0082, lng: 28.9784 },
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Moğolistan Turu Miat",
        guide: "Ramig Zahirli",
        capacity: 32,
        duration: 8,
        startDate: "2024-06-16",
        endDate: "2024-06-24",
        itinerary: [
          { city: "Ulan Batur", country: "Moğolistan", day: 1, lat: 47.8864, lng: 106.9057 },
          { city: "Ulan Batur", country: "Moğolistan", day: 2, lat: 47.8864, lng: 106.9057 },
          { city: "Karakorum", country: "Moğolistan", day: 3, lat: 47.1986, lng: 102.8255 },
          { city: "Karakorum", country: "Moğolistan", day: 4, lat: 47.1986, lng: 102.8255 },
          { city: "Karakorum", country: "Moğolistan", day: 5, lat: 47.1986, lng: 102.8255 },
          { city: "Ulan Batur", country: "Moğolistan", day: 6, lat: 47.8864, lng: 106.9057 },
          { city: "Ulan Batur", country: "Moğolistan", day: 7, lat: 47.8864, lng: 106.9057 },
          { city: "İstanbul", country: "Türkiye", day: 8, lat: 41.0082, lng: 28.9784 },
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Peru Bolivya Şili Uyuni Arjantin Kolombiya THY",
        guide: "Mehmet Aydın",
        capacity: 33,
        duration: 13,
        startDate: "2024-06-17",
        endDate: "2024-06-30",
        itinerary: [
          { city: "Buenos Aires", country: "Arjantin", day: 1, lat: -34.6037, lng: -58.3816 },
          { city: "Santiago", country: "Şili", day: 2, lat: -33.4489, lng: -70.6693 },
          { city: "Vina Del Mar", country: "Şili", day: 3, lat: -33.0153, lng: -71.5505 },
          { city: "Calama", country: "Şili", day: 4, lat: -22.4567, lng: -68.9239 },
          { city: "Uyuni", country: "Bolivya", day: 5, lat: -20.4604, lng: -66.8261 },
          { city: "Lapaz", country: "Bolivya", day: 6, lat: -16.5074, lng: -68.1255 },
          { city: "Puno", country: "Peru", day: 7, lat: -15.8402, lng: -70.0219 },
          { city: "Cusco", country: "Peru", day: 8, lat: -13.5319, lng: -71.9675 },
          { city: "Machu Picchu", country: "Peru", day: 9, lat: -13.1631, lng: -72.5450 },
          { city: "Cusco", country: "Peru", day: 10, lat: -13.5319, lng: -71.9675 },
          { city: "Bogota", country: "Kolombiya", day: 11, lat: 4.7104, lng: -74.0721 },
          { city: "Bogoto", country: "Kolombiya", day: 12, lat: 4.7104, lng: -74.0721 },
          { city: "İstanbul", country: "Türkiye", day: 13, lat: 41.0082, lng: 28.9784 },
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Küba Turları THY",
        guide: "Kamil Verir",
        capacity: 30,
        duration: 9,
        startDate: "2024-06-17",
        endDate: "2024-06-26",
        itinerary: [
          { city: "Havana", country: "Küba", day: 1, lat: 23.1136, lng: -82.3666 },
          { city: "Pinar Del Rio", country: "Küba", day: 2, lat: 22.4175, lng: -83.6987 },
          { city: "Havana", country: "Küba", day: 3, lat: 23.1136, lng: -82.3666 },
          { city: "Trinidad", country: "Küba", day: 4, lat: 21.8052, lng: -79.9846 },
          { city: "Trinidad", country: "Küba", day: 5, lat: 21.8052, lng: -79.9846 },
          { city: "Varadero", country: "Küba", day: 6, lat: 23.1799, lng: -81.1890 },
          { city: "Havana", country: "Küba", day: 7, lat: 23.1136, lng: -82.3666 },
          { city: "Havana", country: "Küba", day: 8, lat: 23.1136, lng: -82.3666 },
          { city: "İstanbul", country: "Türkiye", day: 9, lat: 41.0082, lng: 28.9784 },
        ],
        image: "/images/kuba.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Sydney Avustralya Turu - BatikAir",
        guide: "Teoman Cimit",
        capacity: 18,
        duration: 11,
        startDate: "2024-06-18",
        endDate: "2024-06-29",
        itinerary: [
          { city: "Kuala Lamur", country: "Malezya", day: 1, lat: 3.139, lng: 101.6869 },
          { city: "Sydney", country: "Avustralya", day: 2, lat: -33.8688, lng: 151.2093 },
          { city: "Sydney", country: "Avustralya", day: 3, lat: -33.8688, lng: 151.2093 },
          { city: "Sydney", country: "Avustralya", day: 4, lat: -33.8688, lng: 151.2093 },
          { city: "Sydney", country: "Avustralya", day: 5, lat: -33.8688, lng: 151.2093 },
          { city: "Sydney", country: "Avustralya", day: 6, lat: -33.8688, lng: 151.2093 },
          { city: "Melbourne", country: "Avustralya", day: 7, lat: -37.8136, lng: 144.9631 },
          { city: "Sydney", country: "Avustralya", day: 8, lat: -33.8688, lng: 151.2093 },
          { city: "Sydney", country: "Avustralya", day: 9, lat: -33.8688, lng: 151.2093 },
          { city: "Sydney", country: "Avustralya", day: 10, lat: -33.8688, lng: 151.2093 },
          { city: "İstanbul", country: "Türkiye", day: 11, lat: 41.0082, lng: 28.9784 },
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Hong Kong Malezya Singapur – QR KUL RT",
        guide: "Mukaddes Şenol",
        capacity: 21,
        duration: 10,
        startDate: "2024-06-19",
        endDate: "2024-06-29",
        itinerary: [
          { city: "Kuala Lampur", country: "Malezya", day: 1, lat: 3.139, lng: 101.6869 },
          { city: "Kuala Lampur", country: "Malezya", day: 2, lat: 3.139, lng: 101.6869 },
          { city: "Kuala Lampur", country: "Malezya", day: 3, lat: 3.139, lng: 101.6869 },
          { city: "Chinetown", country: "Singapur", day: 4, lat: 1.2846, lng: 103.8455 },
          { city: "Sentosa Adası", country: "Singapur", day: 5, lat: 1.2494, lng: 103.8303 },
          { city: "Hong Kong", country: "Çin", day: 6, lat: 22.3193, lng: 114.1694 },
          { city: "Hong Kong", country: "Çin", day: 7, lat: 22.3193, lng: 114.1694 },
          { city: "Hong Kong", country: "Çin", day: 8, lat: 22.3193, lng: 114.1694 },
          { city: "Kuala Lampur", country: "Malezya", day: 9, lat: 3.139, lng: 101.6869 },
          { city: "İstanbul", country: "Türkiye", day: 10, lat: 41.0082, lng: 28.9784 },
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Küba Turları THY",
        guide: "Hakan Özen",
        capacity: 29,
        duration: 9,
        startDate: "2024-06-19",
        endDate: "2024-06-28",
        itinerary: [
          { city: "Havana", country: "Küba", day: 1, lat: 23.1136, lng: -82.3666 },
          { city: "Pinar Del Rio", country: "Küba", day: 2, lat: 22.4175, lng: -83.6987 },
          { city: "Havana", country: "Küba", day: 3, lat: 23.1136, lng: -82.3666 },
          { city: "Trinidad", country: "Küba", day: 4, lat: 21.8052, lng: -79.9846 },
          { city: "Trinidad", country: "Küba", day: 5, lat: 21.8052, lng: -79.9846 },
          { city: "Varadero", country: "Küba", day: 6, lat: 23.1799, lng: -81.1890 },
          { city: "Havana", country: "Küba", day: 7, lat: 23.1136, lng: -82.3666 },
          { city: "Havana", country: "Küba", day: 8, lat: 23.1136, lng: -82.3666 },
          { city: "İstanbul", country: "Türkiye", day: 9, lat: 41.0082, lng: 28.9784 },
        ],
        image: "/images/kuba.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "XL – Güney Amerika THY",
        guide: "İsmail Erkal",
        capacity: 10,
        duration: 20,
        startDate: "2024-06-24",
        endDate: "2024-07-14",
        itinerary: [
          { city: "Sao Paulo", country: "Brezilya", day: 1, lat: -23.5505, lng: -46.6333 },
          { city: "Lima", country: "Peru", day: 2, lat: -12.0464, lng: -77.0428 },
          { city: "Cusco", country: "Peru", day: 3, lat: -13.5319, lng: -71.9675 },
          { city: "Ollantaytambo", country: "Peru", day: 4, lat: -13.2584, lng: -72.2639 },
          { city: "Machu Picchu", country: "Peru", day: 5, lat: -13.1631, lng: -72.5450 },
          { city: "Cusco", country: "Peru", day: 6, lat: -13.5319, lng: -71.9675 },
          { city: "Lima", country: "Peru", day: 7, lat: -12.0464, lng: -77.0428 },
          { city: "Santiago De Chili", country: "Şili", day: 8, lat: -33.4489, lng: -70.6693 },
          { city: "Vina Del Mar", country: "Şili", day: 9, lat: -33.0246, lng: -71.5523 },
          { city: "Buenos Aires", country: "Arjantin", day: 10, lat: -34.6037, lng: -58.3816 },
          { city: "Buenos Aires", country: "Arjantin", day: 11, lat: -34.6037, lng: -58.3816 },
          { city: "Montevideo", country: "Uruguay", day: 12, lat: -34.9011, lng: -56.1645 },
          { city: "Colonia", country: "Arjantin", day: 13, lat: -34.4691, lng: -57.8584 },
          { city: "Iguassu", country: "Brezilya", day: 14, lat: -25.6953, lng: -54.4367 },
          { city: "Monday Şelalesi", country: "Paraguay", day: 15, lat: -25.6953, lng: -54.4367 },
          { city: "Rio De Jenerio", country: "Brezilya", day: 16, lat: -22.9068, lng: -43.1729 },
          { city: "Rio De Jenerio", country: "Brezilya", day: 17, lat: -22.9068, lng: -43.1729 },
          { city: "Rio De Jenerio", country: "Brezilya", day: 18, lat: -22.9068, lng: -43.1729 },
          { city: "Sao Paulo", country: "Brezilya", day: 19, lat: -23.5505, lng: -46.6333 },
          { city: "İstanbul", country: "Türkiye", day: 20, lat: 41.0082, lng: 28.9784 },
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Büyük Filipinler Turu THY",
        guide: "Ali Mert Özgün",
        capacity: 12,
        duration: 13,
        startDate: "2024-06-27",
        endDate: "2024-07-10",
        itinerary: [
          { city: "Manila", country: "Filipinler", day: 1, lat: 14.5995, lng: 120.9842 },
          { city: "Manila", country: "Filipinler", day: 2, lat: 14.5995, lng: 120.9842 },
          { city: "El Nido", country: "Filipinler", day: 3, lat: 11.1939, lng: 119.4173 },
          { city: "El Nido", country: "Filipinler", day: 4, lat: 11.1939, lng: 119.4173 },
          { city: "El Nido", country: "Filipinler", day: 5, lat: 11.1939, lng: 119.4173 },
          { city: "Bohol Adası", country: "Filipinler", day: 6, lat: 9.8433, lng: 124.1994 },
          { city: "Bohol Adası", country: "Filipinler", day: 7, lat: 9.8433, lng: 124.1994 },
          { city: "Boracay Adası", country: "Filipinler", day: 8, lat: 11.9674, lng: 121.9247 },
          { city: "Boracay Adası", country: "Filipinler", day: 9, lat: 11.9674, lng: 121.9247 },
          { city: "Boracay Adası", country: "Filipinler", day: 10, lat: 11.9674, lng: 121.9247 },
          { city: "Cebu Adası", country: "Filipinler", day: 11, lat: 10.3157, lng: 123.8854 },
          { city: "Cebu Adası", country: "Filipinler", day: 12, lat: 10.3157, lng: 123.8854 },
          { city: "İstanbul", country: "Türkiye", day: 13, lat: 41.0082, lng: 28.9784 },
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Orta Amerika Turu THY",
        guide: "Onur Barut",
        capacity: 12,
        duration: 13,
        startDate: "2024-06-28",
        endDate: "2024-07-11",
        itinerary: [
          { city: "Cancun", country: "Meksika", day: 1, lat: 21.1619, lng: -86.8515 },
          { city: "Guatemala City", country: "Guatemala", day: 2, lat: 14.6349, lng: -90.5069 },
          { city: "Antigua", country: "Guatemala", day: 3, lat: 14.5616, lng: -90.7347 },
          { city: "Guatemala City", country: "Guatemala", day: 4, lat: 14.6349, lng: -90.5069 },
          { city: "San Salvador", country: "El Salvador", day: 5, lat: 13.6929, lng: -89.2182 },
          { city: "Leon", country: "Nikaragua", day: 6, lat: 12.4316, lng: -86.872 },
          { city: "Granda", country: "Nikaragua", day: 7, lat: 11.9291, lng: -86.0634 },
          { city: "San Jose", country: "Kosta Rika", day: 8, lat: 9.9281, lng: -84.0907 },
          { city: "San Jose", country: "Kosta Rika", day: 9, lat: 9.9281, lng: -84.0907 },
          { city: "Panama City", country: "Panama", day: 10, lat: 8.9824, lng: -79.5199 },
          { city: "Panama Vieja", country: "Panama", day: 11, lat: 8.9685, lng: -79.5388 },
          { city: "Panama City", country: "Panama", day: 12, lat: 8.9824, lng: -79.5199 },
          { city: "İstanbul", country: "Türkiye", day: 13, lat: 41.0082, lng: 28.9784 },
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Endonezya Malezya Bali Turu THY",
        guide: "Onur Yarar",
        capacity: 27,
        duration: 11,
        startDate: "2024-06-28",
        endDate: "2024-07-09",
        itinerary: [
          { city: "Jakarta", country: "Endonezya", day: 1, lat: -6.2088, lng: 106.8456 },
          { city: "Bogor", country: "Endonezya", day: 2, lat: -6.5944, lng: 106.7892 },
          { city: "Yogyokarta", country: "Endonezya", day: 3, lat: -7.8012, lng: 110.3648 },
          { city: "Borobudur Tapınağı", country: "Endonezya", day: 4, lat: -7.6079, lng: 110.2031 },
          { city: "Kuala Lampur", country: "Malezya", day: 5, lat: 3.139, lng: 101.6869 },
          { city: "Kuala Lampur", country: "Malezya", day: 6, lat: 3.139, lng: 101.6869 },
          { city: "Bali", country: "Endonezya", day: 7, lat: -8.3405, lng: 115.0911 },
          { city: "Bali", country: "Endonezya", day: 8, lat: -8.3405, lng: 115.0911 },
          { city: "Bali", country: "Endonezya", day: 9, lat: -8.3405, lng: 115.0911 },
          { city: "Bali", country: "Endonezya", day: 10, lat: -8.3405, lng: 115.0911 },
          { city: "İstanbul", country: "Türkiye", day: 11, lat: 41.0082, lng: 28.9784 },
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Japonya Kore Turları THY – HND Her Şey Dahil",
        guide: "Ayşegül Kudunoğlu",
        capacity: 32,
        duration: 12,
        startDate: "2024-06-28",
        endDate: "2024-07-10",
        itinerary: [
          { city: "Tokyo", country: "Japonya", day: 1, lat: 35.6895, lng: 139.6917 },
          { city: "Tokyo", country: "Japonya", day: 2, lat: 35.6895, lng: 139.6917 },
          { city: "Hakone", country: "Japonya", day: 3, lat: 35.2329, lng: 139.1066 },
          { city: "Tokyo", country: "Japonya", day: 4, lat: 35.6895, lng: 139.6917 },
          { city: "Osaka", country: "Japonya", day: 5, lat: 34.6937, lng: 135.5023 },
          { city: "Kyoto", country: "Japonya", day: 6, lat: 35.0116, lng: 135.7681 },
          { city: "Osaka", country: "Japonya", day: 7, lat: 34.6937, lng: 135.5023 },
          { city: "Seul", country: "Güney Kore", day: 8, lat: 37.5665, lng: 126.9780 },
          { city: "Seul", country: "Güney Kore", day: 9, lat: 37.5665, lng: 126.9780 },
          { city: "Seul", country: "Güney Kore", day: 10, lat: 37.5665, lng: 126.9780 },
          { city: "Seul", country: "Güney Kore", day: 11, lat: 37.5665, lng: 126.9780 },
          { city: "İstanbul", country: "Türkiye", day: 12, lat: 41.0082, lng: 28.9784 },
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Küba Turları THY",
        guide: "Utku Alçın",
        capacity: 20,
        duration: 9,
        startDate: "2024-06-29",
        endDate: "2024-07-08",
        itinerary: [
          { city: "Havana", country: "Küba", day: 1, lat: 23.1136, lng: -82.3666 },
          { city: "Pinar Del Rio", country: "Küba", day: 2, lat: 22.4175, lng: -83.6987 },
          { city: "Havana", country: "Küba", day: 3, lat: 23.1136, lng: -82.3666 },
          { city: "Trinidad", country: "Küba", day: 4, lat: 21.8052, lng: -79.9846 },
          { city: "Trinidad", country: "Küba", day: 5, lat: 21.8052, lng: -79.9846 },
          { city: "Varadero", country: "Küba", day: 6, lat: 23.1799, lng: -81.1890 },
          { city: "Havana", country: "Küba", day: 7, lat: 23.1136, lng: -82.3666 },
          { city: "Havana", country: "Küba", day: 8, lat: 23.1136, lng: -82.3666 },
          { city: "İstanbul", country: "Türkiye", day: 9, lat: 41.0082, lng: 28.9784 },
        ],
        image: "/images/kuba.jpeg", // Görsel dosyasının yolu
      },
      {
        name: "Peru Bolivya Şili Amazon Kolombiya Turu",
        guide: "Mehmet Yarangümeli",
        capacity: 31,
        duration: 16,
        startDate: "2024-06-30",
        endDate: "2024-07-16",
        itinerary: [
          { city: "Bogota", country: "Kolombiya", day: 1, lat: 4.711, lng: -74.0721 },
          { city: "Lima", country: "Peru", day: 2, lat: -12.0464, lng: -77.0428 },
          { city: "Paracas", country: "Peru", day: 3, lat: -13.8322, lng: -76.2607 },
          { city: "Lima", country: "Peru", day: 4, lat: -12.0464, lng: -77.0428 },
          { city: "Puerto Maldonado", country: "Amazon", day: 5, lat: -12.592, lng: -69.1833 },
          { city: "Sandoval Gölü", country: "Amazon", day: 6, lat: -12.6651, lng: -69.2432 },
          { city: "Cusco", country: "Peru", day: 7, lat: -13.5319, lng: -71.9675 },
          { city: "Machu Picchu", country: "Peru", day: 8, lat: -13.1631, lng: -72.5449 },
          { city: "Puno", country: "Peru", day: 9, lat: -15.8402, lng: -70.0219 },
          { city: "La Paz", country: "Bolivya", day: 10, lat: -16.5003, lng: -68.1357 },
          { city: "La Paz", country: "Bolivya", day: 11, lat: -16.5003, lng: -68.1357 },
          { city: "Kaktüs Adası", country: "Uyuni", day: 12, lat: -20.133, lng: -67.4891 },
          { city: "Santiago", country: "Şili", day: 13, lat: -33.4489, lng: -70.6693 },
          { city: "Santiago De Chile", country: "Şili", day: 14, lat: -33.4489, lng: -70.6693 },
          { city: "Buenos Aires", country: "Arjantin", day: 15, lat: -34.6037, lng: -58.3816 },
          { city: "İstanbul", country: "Türkiye", day: 16, lat: 41.0082, lng: 28.9784 },
        ],
        image: "images/buyukafrika.jpeg", // Görsel dosyasının yolu
      }
      
  ];
  
  export default tourGroups;
  