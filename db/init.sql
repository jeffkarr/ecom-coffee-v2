-- Active: 1725036593664@@127.0.0.1@5432@postgres

  -- DROP TABLE IF EXISTS coffee_items;

  CREATE TABLE IF NOT EXISTS coffee_items (
    id character(2) PRIMARY KEY,
    category character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    price numeric(4,2) NOT NULL,
    description character varying(255) NOT NULL,
    image character varying(255) NOT NULL
);
  INSERT INTO coffee_items VALUES 
    ( 'C1',
      'coffee',
      'Sumatra Coffee',
      12.00,
      'some of the finest arabica coffees',
      '../images/coffee/sumatra-coffee-cropped.png'
    ),
    ( 
      'C2',
      'coffee',
      'Java Coffee',
      10.00,
      'one of the most popular Indonesian coffees from the island of Java in Indonesia.',
      '../images/coffee/java-coffee-cropped.jpg'
    ),
    ( 
      'C3',
      'coffee',
      'Jamaican Blue Mountain Coffee',
      20.00,
      'from the Blue Mountain region of Jamaica.',
      '../images/coffee/jamaican-coffee-cropped.png'
    ),
    ( 
      'C4',
      'coffee',
      'Hawaiian Kona Coffee',
      16.00,
      'along the western side of the big island of Hawaii, Kona coffee farms.', 
      '../images/coffee/kona-coffee-cropped.jpg'
    ),
    ( 
      'C5',
      'coffee',
      'Costa Rican Coffee',
      14.00,
      'grown in the high mountain volcanic soils of Costa Ricas central valley.', 
      '../images/coffee/costa-rican-coffee-cropped.png'
    ),
    (
      'C6',
      'coffee',
      'Guatemalan Coffee',
      12.00,
      'from the north highland region, this coffee has distinctive but mild fruit.',
      '../images/coffee/guatemalan-coffee-cropped.jpg'
    );
  
  -- DROP TABLE IF EXISTS deal_items;

  CREATE TABLE IF NOT EXISTS deal_items (
      id character(2) PRIMARY KEY,
      category character varying(255) NOT NULL,
      name character varying(255) NOT NULL,
      price numeric(5,2) NOT NULL,
      description character varying(255) NOT NULL,
      image character varying(255) NOT NULL
  );

  INSERT INTO deal_items VALUES      
  (
    'D1',
    'deal',
    'Ceramic Tea Pot',
    8.00,
    'This fine ceramic teapot is suitable for everyday household use. It has a 32 ounce capacity. Dishwasher and microwave safe.',
    '../images/deal/ceramic-tea-kettle.jpg'
  ),
  (
    'D2',
    'deal',
    'Metal Tea Infuser',
    3.00,
    'A great gift for tea lovers! Steeps perfect cups of loose-leaf tea and features a press handle for easy cleanup.',
    '../images/deal/tea-infuser.jpg'
  ),
  (
    'D3',
    'deal',
    'Hand Coffee Grinder',
    15.00,
    'A modern, sleek look with a glass container.',
    '../images/deal/coffee-grinder.jpg'
  ),
  (
    'D4',
    'deal',
    '200 Count #4 Coffee Filters',
    3.00,
    'Microfine perforations allow the full coffee flavor to filter through for a rich, flavorful cup of coffee.',
    '../images/deal/coffee-filters.jpg'
  ),
  (
    'D5',
    'deal',
    'Stoneware Sugar Bowl and Creamer Set',
    20.00,
    'Microwave and dishwasher safe. Creamer holds 12 ounces; sugar bowl with lid holds 1 cup.',
    '../images/deal/sugar-bowl-creamer-set.jpg'
  ),
  (
    'D6',
    'deal',
    'Semi Automatic Espresso Machine',
    160.00,
    'This Espresso Machine brings the coffeehouse to your home. So simple to use!',
    '../images/deal/espresso-machine.jpg'
  );

  -- DROP TABLE IF EXISTS tea_items;

  CREATE TABLE IF NOT EXISTS tea_items (
      id character(2) PRIMARY KEY,
      category character varying(255) NOT NULL,
      name character varying(255) NOT NULL,
      price numeric(5,2) NOT NULL,
      description character varying(255) NOT NULL,
      image character varying(255) NOT NULL
  );

  INSERT INTO tea_items VALUES      
  (
    'T1',
    'tea',
    'Black Tea',
    7.00,
    'Typically more robust and pronounced flavors. And when brewed appropriately, a higher caffeine content compared to other teas.',
    '../images/tea/black-tea-tin-display.png'
  ),
  (
    'T2',
    'tea',
    'Green Tea',
    '9.00',
    'Green teas tend to have less caffeine (10-30% of coffee). Greens also tend to produce more subtle flavors with many undertones and accents that connoisseurs treasure.',
    '../images/tea/green-tea-tin-display.png'
  ),
  (
    'T3',
    'tea',
    'Earl Grey Tea',
    '6.00',
    'Earl Grey is one of the most recognized flavored teas in the world.',
    '../images/tea/earl-grey-tin-display.png'
  ),
  (
    'T4',
    'tea',
    'Chamomile Tea',
    '8.00',
    'Calming chamomile has been around for ages, dating back thousands of years, at least to ancient Egyptian times. It is most famously known as a relaxing herb.',
    '../images/tea/chamomile-tea-tin-display.png'
  ),
  (
    'T5',
    'tea',
    'Jasmine Tea',
    7.00,
    'The world soon fell in love with jasmine’s perfumed aroma and delicate flavor and has been craving the glorious blossom ever since.',
    '../images/tea/jasmine-tea-tin-display.png'
  ),
  (
    'T6',
    'tea',
    'Chai Tea',
    10.00,
    'The Hindi term chai means a mix of spices steeped into a tea-like beverage.',
    '../images/tea/chai-tea-tin-display.png'
  );

  -- DROP TABLE IF EXISTS accessory_items;

  CREATE TABLE IF NOT EXISTS accessory_items (
    id character(2) PRIMARY KEY,
    category character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    price numeric(5,2) NOT NULL,
    description character varying(255) NOT NULL,
    image character varying(255) NOT NULL
  );

  INSERT INTO accessory_items VALUES     
  (
    'A1',
    'accessory',
    'Coffee Mug',
    5.00,
    'Microwave and dishwasher-safe porcelain coffee mug for practical and functional use.',
    '../images/accessory/white-coffee-mug.jpg'
  ),
  (
    'A2',
    'accessory',
    'Antique French Press Coffee Pot',
    20.00,
    'Nothing beats this antique styled coffee press when it comes to delivering delicious, perfectly brewed hot coffee.',
    '../images/accessory/french-press-pot1.jpg'
  ),
  (
    'A3',
    'accessory',
    'French Press Coffee Pot',
    15.00,
    'This pot brings out the optimal extraction of the essential oils in the beans to develop their full flavor profile in just four minutes.',
    '../images/accessory/french-press-pot2.jpg'
  ),
  (
    'A4',
    'accessory',
    'Silver Stovetop Espresso Maker',
    25.00,
    'There are many ways to enjoy an espresso, but there is only one way to create the flavors of a traditional Italian stovetop espresso.',
    '../images/accessory/stovetop-espresso-maker-silver.jpg'
  ),
  (
    'A5',
    'accessory',
    'Black Stovetop Espresso Maker',
    30.00,
    'A stovetop espresso maker produces a richer and tastier coffee than your regular coffee machine.',
    '../images/accessory/stovetop-espresso-maker-black.jpg'
  ),
  (
    'A6',
    'accessory',
    'Standard Coffee Maker',
    40.00,
    'The classic coffee maker helps you make rich-tasting, expertly brewed coffee without stress or mess. ',
    '../images/accessory/coffeemaker1.png'
  ),
  (
    'A7',
    'accessory',
    'Stainless Coffee Maker',
    50.00,
    'Taste perfectly brewed coffee in every sip with this 10-cup coffee maker.',
    '../images/accessory/coffeemaker2.png'
  ),
  (
    'A8',
    'accessory',
    'Modern Stainless Coffee Maker',
    60.00,
    'If youre a coffee connoisseur, youll need this sleek and functional 12-Cup coffee maker.',
    '../images/accessory/coffeemaker3.png'
  );