
  DROP TABLE coffee_items;

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
  
