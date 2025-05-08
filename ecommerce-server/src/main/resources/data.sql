INSERT INTO product (id, brand, category, description, image_url, name, price)
VALUES ('3fa85f64-5717-4562-b3fc-2c963f66afa6', 'TechBrand', 'ELECTRONICS',
        'The TechBrand Max Pro is a high-performance smartphone featuring a vibrant 6.5-inch OLED display, 128GB of internal storage, and a powerful 48MP rear camera. Ideal for gaming, streaming, and photography, with a sleek design and 5G connectivity for seamless performance.',
        'https://m.media-amazon.com/images/I/71kduvIxBVL._SL1500_.jpg',
        'TechBrand Max Pro 5G Smartphone with 128GB Storage, 48MP Camera, and OLED Display', 699.99),

       ('a6c9cb10-3b90-4c2e-9bc6-62ab573cd0d3', 'ComputeX', 'ELECTRONICS',
        'The ComputeX UltraBook is perfect for professionals and students who need portability without sacrificing performance. With a 13.3-inch Retina display, 16GB RAM, and 512GB SSD, this ultrabook combines lightness with power for an ideal computing experience.',
        'https://cdn.mos.cms.futurecdn.net/rcUbfkmZwvaBRfRAQZN9aM.jpg',
        'ComputeX UltraBook 13.3" Retina Display Laptop with 16GB RAM and 512GB SSD', 1299.00),

       ('d9b98b39-2916-4e4d-8232-3b6be1b9b7de', 'SoundWave', 'ELECTRONICS',
        'SoundWave Pro 2.0 wireless earbuds feature advanced active noise cancellation to deliver clear, immersive sound. With a 20-hour battery life, these earbuds are perfect for commutes, workouts, or travel, ensuring uninterrupted audio experience throughout the day.',
        'https://m.media-amazon.com/images/I/61k8s2-fKHL._AC_UF1000,1000_QL80_.jpg',
        'SoundWave Pro 2.0 Wireless Earbuds with Active Noise Cancellation and 20-Hour Battery Life', 149.99),

       ('b1f9e121-9e2f-4987-b91e-b8e5ae1cb1a1', 'FitTrack', 'ELECTRONICS',
        'FitTrack Fitness Smartwatch tracks your heart rate, provides GPS navigation, and monitors sleep to help you stay fit and healthy. Its sleek design is compatible with both iOS and Android devices, and it features a waterproof design for everyday wear.',
        'https://m.media-amazon.com/images/I/61SagNg1+aL.jpg',
        'FitTrack Fitness Smartwatch with Heart Rate Monitoring, GPS, and Sleep Tracking', 199.99),

-- FASHION
       ('e2c2d311-f64a-41f4-94d3-0b30908be1f4', 'UrbanStyle', 'FASHION',
        'UrbanStyle leather jacket crafted from genuine leather features a slim fit with multiple zippered pockets and a soft inner lining for ultimate comfort. It’s the perfect stylish layer for both casual and semi-formal occasions, combining durability and sophistication.',
        'https://m.media-amazon.com/images/I/61NllrFdSxL.jpg',
        'UrbanStyle Premium Genuine Leather Jacket with Multiple Zippered Pockets', 249.99),

       ('c35aa9ff-e184-4c99-93f1-e8c5d6905c44', 'DenimCo', 'FASHION',
        'DenimCo’s classic blue denim jeans come with a straight-leg cut, five-pocket styling, and mid-rise waist. Made from high-quality cotton, they offer all-day comfort and versatility, making them a staple in any wardrobe for casual or semi-casual wear.',
        'https://freakins.com/cdn/shop/files/PAL02846-Edit.jpg',
        'DenimCo Classic Straight-Leg Blue Denim Jeans with Five-Pocket Styling', 59.99),

       ('9d1d03d2-58d9-476c-b550-5f0c9082e2db', 'PrintWorks', 'FASHION',
        'This 100% cotton graphic t-shirt from PrintWorks features a bold design, perfect for adding a unique touch to any casual outfit. Soft and breathable, this shirt keeps you comfortable while showcasing your personality with its eye-catching print.',
        'https://cdn11.bigcommerce.com/s-i8lklasqiy/images/stencil/1280x1280/products/1231/2557/COMGO_Navy_2__48058.1737967107.jpg?c=1?imbypass=on',
        'PrintWorks Bold Graphic Print 100% Cotton T-Shirt for Casual Wear',
        19.99),

       ('519e6186-8053-4a48-bb34-2f71c7f7a1a2', 'StridePro', 'FASHION',
        'StridePro’s sneakers are designed for comfort with a breathable mesh upper and cushioned sole for ultimate support. Perfect for both athletic activities and casual wear, these sneakers are lightweight yet durable, making them ideal for any occasion.',
        'https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024',
        'StridePro Ultra Comfort Sneakers with Breathable Mesh Upper',
        89.99),

-- TOY
       ('f6a0e812-3cf9-4f6d-bc87-24d8f3e9e0ef', 'ToyMaster', 'TOY',
        'The ToyMaster 100-piece building block set encourages creativity and fine motor skills in children aged 3 and up. These colorful, non-toxic blocks can be used to build endless structures, enhancing imagination and problem-solving abilities.',
        'https://images-cdn.ubuy.co.in/65358fa7f445497ee638b141-prextex-classic-big-building-blocks.jpg',
        'ToyMaster 100-Piece Colorful Building Block Set for Creative Play',
        29.99),

       ('7e81b674-cf94-4375-8749-9d0b9a7f3c28', 'PlayPal', 'TOY',
        'The PlayPal wooden dollhouse offers 3 stories of movable furniture and miniature dolls, encouraging imaginative role-playing for children. Its sturdy construction and vibrant design make it an engaging toy for young kids to explore and create their own stories.',
        'https://m.media-amazon.com/images/I/6132aPnsJyL._AC_UF1000,1000_QL80_.jpg',
        'PlayPal 3-Story Wooden Dollhouse with Furniture and Dolls for Imaginative Play', 149.99),

       ('b1f9e121-9e2f-4987-b91e-b0e5ae1cb1a1', 'HeroToys', 'TOY',
        'This HeroToys action figure features poseable limbs, detailed paintwork, and multiple accessories. Perfect for collectors and young fans, this figure brings your favorite superhero to life with incredible detail and articulation.',
        'https://m.media-amazon.com/images/I/71i0Q+SJNGL._AC_UF1000,1000_QL80_.jpg',
        'HeroToys Poseable Action Figure with Detailed Paintwork and Accessories', 19.99),

       ('f6a0e812-3cf9-4f6d-bc87-20d8f3e9e1ef', 'PuzzleWorld', 'TOY',
        'PuzzleWorld’s 100-piece jigsaw puzzle provides an engaging activity for children, featuring a vibrant landscape scene. Made from high-quality, durable cardboard, this puzzle promotes problem-solving and cognitive development while being fun for all ages.',
        'https://m.media-amazon.com/images/I/912g9X822fL._AC_UF1000,1000_QL80_.jpg',
        'PuzzleWorld 100-Piece Jigsaw Puzzle Featuring a Beautiful Landscape Scene', 14.99),

-- WEARABLES
       ('7c5911b7-24aa-4e1e-953e-1cbd7e0a1dbe', 'HealthMate', 'WEARABLES',
        'HealthMate’s Smart Fitness Tracker offers features such as step counting, sleep monitoring, and calorie tracking. With its slim design and water resistance, it is suitable for daily wear, helping you stay on top of your fitness goals and overall wellness.',
        'https://m.media-amazon.com/images/I/61Bugm3Wo+L.jpg',
        'HealthMate Smart Fitness Tracker with Step Counting and Sleep Monitoring', 49.99),

       ('7e81b674-cf94-4375-8749-9d6b9a0f3c28', 'RingTech', 'WEARABLES',
        'The RingTech smart ring provides discreet notifications through vibrations and LED lights for calls, messages, and app alerts. Stylish and comfortable, it ensures you stay connected without needing to check your phone.',
        'https://m.media-amazon.com/images/I/71yQ-gPxFeL.jpg',
        'RingTech Smart Ring with LED Indicator for Notifications', 129.99),

       ('b1f9e121-9e2f-4987-b91e-b8e5ae0cb1a1', 'VisionX', 'WEARABLES',
        'The VisionX AR Smart Glasses enhance everyday life with augmented reality. Featuring voice control and navigation assistance, they let you interact with notifications, calls, and directions without touching your phone, making them perfect for professionals on the go.',
        'https://m.media-amazon.com/images/I/51PhwTpRMjL.jpg',
        'VisionX AR Smart Glasses with Voice Control and Navigation Assistance', 499.99),

-- ACCESSORIES
       ('7c5911b7-24aa-4e1e-953e-1cbd7e0a7dbe', 'LeatherCraft', 'ACCESSORIES',
        'LeatherCraft’s classic genuine leather wallet features multiple card slots, a coin compartment, and a sleek design. This wallet is perfect for those who value durability and style, combining functionality with luxury in a compact size.',
        'https://craftandglory.in/cdn/shop/products/5_e3b77225-a7f4-4b9f-9262-27c91602255d.jpg',
        'LeatherCraft Classic Genuine Leather Wallet with Multiple Card Slots and Coin Compartment', 49.99),

       ('c35aa9ff-e184-4c99-93f1-e8c5d6005c44', 'WristFlex', 'ACCESSORIES',
        'WristFlex’s stainless steel watch band is adjustable to fit any wrist size, offering a sleek, modern design that complements any wristwatch. The durable and polished surface gives it a premium look, making it an ideal accessory for formal or casual attire.',
        'https://justintime.in/cdn/shop/products/T1274101104100.jpg',
        'WristFlex Stainless Steel Watch Band with Adjustable Fit', 39.99),

       ('1d443a6a-dabe-4c6a-8c90-c62b057d02e7', 'StoragePlus', 'ACCESSORIES',
        'StoragePlus external hard drive offers 1TB of storage space with fast data transfer speeds. This compact and portable device is perfect for backing up your files or carrying large amounts of data on the go, with a durable design to withstand daily use.',
        'https://m.media-amazon.com/images/I/61V12HUGZ7L.jpg', 'StoragePlus 1TB External Hard Drive with USB 3.0', 59.99),

       ('72bdfc91-5f07-41d1-8040-cf706ad9b0fe', 'ZipDrive', 'ACCESSORIES',
        'ZipDrive USB flash drive offers 64GB of fast and secure storage, ideal for transferring large files quickly. The sleek, compact design makes it portable and easy to use, compatible with all major operating systems.',
        'https://m.media-amazon.com/images/I/614KXVDykNL._AC_UF1000,1000_QL80_.jpg', 'ZipDrive 64GB USB Flash Drive with High-Speed Transfer', 19.99),
-- STORAGE
       ('01b37f15-e0e2-4c95-bc6b-1b2e5eaf3b38', 'AmazonBasics', 'STORAGE',
        'Foldable fabric storage cube for organizing shelves and closets.',
        'https://m.media-amazon.com/images/I/61c2YDcqO-L.jpg', 'Collapsible Storage Cubes (Set of 6)', 19.99),
       ('c1a4e2e0-25f5-4f01-9c5a-bbd1f8dbb234', 'IKEA', 'STORAGE',
        'A compact and customizable closet organizer with drawers and shelves.',
        'https://www.ikea.com/in/en/images/products/pax-wardrobe-white__0383291_pe557275_s5.jpg',
        'PAX Closet Organizer', 199.99),


-- COMPUTER
       ('ad9873bc-99de-4d51-9009-d2c8e4a08016', 'PCWorld', 'COMPUTERS',
        'PCWorld desktop computer comes with a powerful Intel i7 processor, 16GB RAM, and a 1TB SSD, perfect for multitasking, gaming, and content creation. This reliable machine will keep you productive and entertained for years to come.',
        'https://m.media-amazon.com/images/I/41UDX7yAwML._AC_UF1000,1000_QL80_.jpg',
        'PCWorld Desktop Computer with Intel i7 Processor, 16GB RAM, and 1TB SSD', 999.99),

       ('17e347b1-e144-4f1b-9104-7b0368d8f520', 'GigaTech', 'COMPUTERS',
        'GigaTech Gaming Laptop is designed for gamers who want high performance on the go. Equipped with a powerful NVIDIA GeForce RTX graphics card, Intel i9 processor, and 32GB RAM, it delivers smooth gameplay and immersive visuals.',
        'https://m.media-amazon.com/images/I/81GrCeuCzxL.jpg',
        'GigaTech Gaming Laptop with NVIDIA GeForce RTX and Intel i9 Processor', 1799.00),

       ('3c828cb3-d3bb-4c7f-29a0-168ed2b99d9b', 'ByteMaster', 'COMPUTERS',
        'ByteMaster 27-inch 4K monitor offers ultra-high-definition resolution, perfect for gaming, content creation, and productivity. The monitor features a thin bezel, great color accuracy, and adjustable settings for the most comfortable viewing experience.',
        'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08894694.png', 'ByteMaster 27-inch 4K Monitor with Ultra-HD Resolution', 349.99),
-- CAMERAS
       ('712f5b5e-85a6-4c82-bf2e-bcc0d1b12e19', 'SnapPro', 'CAMERAS',
        'SnapPro DSLR camera features a 24MP sensor and 4K video recording capabilities. Perfect for both beginners and professionals, it offers exceptional image quality, fast autofocus, and versatility for any shooting scenario.',
        'https://m.media-amazon.com/images/I/91mLupiNgFL.jpg', 'SnapPro DSLR Camera with 24MP Sensor and 4K Video Recording',
        899.99),

       ('e9bb8547-14db-4324-bb12-b51d68d91b36', 'VividShot', 'CAMERAS',
        'VividShot mirrorless camera combines cutting-edge technology with portability. Featuring a 20MP sensor, advanced autofocus system, and 4K video support, it’s perfect for capturing high-quality photos and videos on the go.',
        'https://m.media-amazon.com/images/I/713xBPyXC-L._AC_UF1000,1000_QL80_.jpg', 'VividShot Mirrorless Camera with 20MP Sensor and 4K Video',
        699.99),


-- LIGHTING
       ('a9dbdbb8-f6b5-16c0-8f4b-df5bc4a3d707', 'LightLuxe', 'LIGHTING',
        'LightLuxe LED floor lamp provides bright, energy-efficient illumination in any room. With adjustable brightness and a modern design, it’s perfect for reading, working, or setting the mood for relaxation.',
        'https://m.media-amazon.com/images/I/71EBY1-fGjL._AC_UF1000,1000_QL80_.jpg', 'LightLuxe LED Floor Lamp with Adjustable Brightness', 69.99),

       ('8fcbad4e-1e2f-15b7-bd26-15a574517d1e', 'GlowBright', 'LIGHTING',
        'GlowBright smart LED bulb connects with your Wi-Fi to provide remote control via a smartphone app. Change colors, set timers, and adjust brightness all with the touch of a button, creating the perfect lighting for any occasion.',
        'https://m.media-amazon.com/images/I/51yBOvORkPL.jpg',
        'GlowBright Smart LED Bulb with Wi-Fi Connectivity and Color Options', 29.99),

       ('1b09d987-5470-4670-b79d-8996c7393065', 'BeamLight', 'LIGHTING',
        'BeamLight modern pendant light fixture adds a sophisticated touch to any dining room or kitchen. Its sleek design and adjustable chain make it a versatile piece that provides both elegance and functionality.',
        'https://m.media-amazon.com/images/I/71v+LBDjZOL.jpg', 'BeamLight Modern Pendant Light Fixture for Dining Room',
        149.99),
--BOOKS
       ('34a57d6e-d28f-02fb-9aef-b8cb14a41811', 'BookMasters', 'BOOKS',
        'BookMasters presents "The Great Adventure", a thrilling tale of survival, courage, and discovery. A must-read for fans of action-packed novels, it takes readers on a journey through uncharted territories.',
        'https://m.media-amazon.com/images/I/910WZmI0jAL._UF1000,1000_QL80_.jpg', 'The Great Adventure - A Thrilling Survival Story', 19.99),

       ('4f9be243-d5d0-40ae-92c2-fbf12b598b56', 'EpicReads', 'BOOKS',
        'EpicReads presents "Culinary Secrets", an in-depth cookbook featuring over 200 recipes from top chefs around the world. From appetizers to desserts, this book is perfect for anyone looking to expand their culinary skills.',
        'https://m.media-amazon.com/images/I/81dHETwDcnL._AC_UF1000,1000_QL80_.jpg', 'Culinary Secrets - 200+ Recipes from Top Chefs', 29.99),

       ('94b33b45-efb9-4b1f-0e22-c053f563071a', 'NovelPress', 'BOOKS',
        'NovelPress presents "Mystery of the Lost Artifact", a captivating mystery novel full of twists and turns. Follow the protagonist as they uncover hidden truths and solve complex puzzles to discover an ancient artifact.',
        'https://m.media-amazon.com/images/I/81jCAa020KL._AC_UF1000,1000_QL80_.jpg', 'Mystery of the Lost Artifact - A Captivating Mystery Novel',
        14.99),
-- HOME_APPLIANCES
       ('f44d8759-35e4-0f5a-8c29-d0cc5f95b25e', 'HomePro', 'HOME_APPLIANCES',
        'HomePro air purifier features advanced HEPA filtration, removing 99.97% of airborne particles like dust, pollen, and smoke. With a quiet operation and sleek design, it’s ideal for improving indoor air quality in homes and offices.',
        'https://images-cdn.ubuy.co.in/67ba0027c73ca811c967adb2-alrocket-air-purifier-with-hepa-filter.jpg', 'HomePro Air Purifier with HEPA Filtration for Clean Air',
        129.99),

       ('d8fe3571-0973-05e1-9a60-bab36fc5f477', 'CleanTech', 'HOME_APPLIANCES',
        'CleanTech robotic vacuum cleaner uses smart mapping technology to efficiently clean your home. With automatic dirt detection and a self-charging feature, it offers hassle-free cleaning for all types of flooring.',
        'https://m.media-amazon.com/images/I/610l0gDkeGL._AC_UF894,1000_QL80_.jpg', 'CleanTech Robotic Vacuum Cleaner with Smart Mapping', 249.99);



