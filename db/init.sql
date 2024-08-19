
  DROP TABLE IF EXISTS coffee_items;

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
    )
  
  DROP TABLE IF EXISTS deal_items;

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
  )