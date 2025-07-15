const digimonStages = {
  "Punimon": {
    "stage": "Baby",
    "evolvesTo": [
      {
        "name": "Tsunomon",
        "stage": "In-Training",
        "stats": {
          "Item": "\u2014",
          "Time": "Any",
          "Requirements": [],
          "Bonus": ""
        },
        "evolvesTo": [
          {
            "name": "Gabumon",
            "stage": "Rookie",
            "stats": {
              "Item": "\u2014",
              "Time": "Any",
              "Requirements": [
                "HP > 100",
                "Discipline \u2265 50%"
              ],
              "Bonus": "Care mistakes \u2264 1"
            },
            "evolvesTo": [
              {
                "name": "Garurumon",
                "stage": "Champion",
                "stats": {
                  "Item": "Fur Pelt",
                  "Time": "Daytime (4:00\u201319:00)",
                  "Requirements": [
                    "HP > 1200",
                    "MP > 1000",
                    "Offense > 150",
                    "Speed > 100"
                  ],
                  "Bonus": "Battles \u2265 5"
                },
                "evolvesTo": [
                  {
                    "name": "MetalGarurumon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "Cool Chip",
                      "Time": "Any",
                      "Requirements": [
                        "HP > 3500",
                        "MP > 3500",
                        "Brains > 300"
                      ],
                      "Bonus": "Battles \u2265 15, Care mistakes \u2264 3"
                    }
                  }
                ]
              },
              {
                "name": "Frigimon",
                "stage": "Champion",
                "stats": {
                  "Item": "Snow Cube",
                  "Time": "Any",
                  "Requirements": [
                    "MP > 1500",
                    "Brains > 150",
                    "Weight > 20"
                  ],
                  "Bonus": "Battles \u2265 5"
                },
                "evolvesTo": [
                  {
                    "name": "Whamon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "Ocean Ring",
                      "Time": "Any",
                      "Requirements": [
                        "HP > 4000",
                        "MP > 3000",
                        "Brains > 200"
                      ],
                      "Bonus": "Care mistakes \u2264 2"
                    }
                  }
                ]
              },
              {
                "name": "Mojyamon",
                "stage": "Champion",
                "stats": {
                  "Item": "Hairy Banana",
                  "Time": "Any",
                  "Requirements": [
                    "HP > 1000",
                    "Brains > 150",
                    "Weight > 25"
                  ],
                  "Bonus": "Battles \u2265 5"
                },
                "evolvesTo": [
                  {
                    "name": "Giromon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "Hacker Chip",
                      "Time": "Any",
                      "Requirements": [
                        "Speed > 300",
                        "Brains > 300"
                      ],
                      "Bonus": "Care mistakes \u2264 3"
                    }
                  }
                ]
              },
              {
                "name": "Ogremon",
                "stage": "Champion",
                "stats": {
                  "Item": "Bone Club",
                  "Time": "Any",
                  "Requirements": [
                    "Offense > 200",
                    "Discipline < 30%",
                    "Weight > 35"
                  ],
                  "Bonus": "Battles \u2265 10, Care mistakes \u2265 5"
                },
                "evolvesTo": [
                  {
                    "name": "SkullGreymon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "Dark Bone",
                      "Time": "Any",
                      "Requirements": [
                        "HP > 2500",
                        "Offense > 250"
                      ],
                      "Bonus": "Care mistakes \u2265 15"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "name": "Punimon"
  },
  "Botamon": {
    "name": "Botamon",
    "stage": "Baby",
    "evolvesTo": [
      {
        "stage": "In-Training",
        "evolvesTo": [
          {
            "name": "Agumon",
            "stage": "Rookie",
            "stats": {
              "Item": "\u2014",
              "Time": "Any",
              "Requirements": [
                "HP > 100",
                "Discipline \u2265 50%"
              ],
              "Bonus": "Care mistakes \u2264 1"
            },
            "evolvesTo": [
              {
                "name": "Greymon",
                "stage": "Champion",
                "stats": {
                  "Item": "Grey Claws",
                  "Time": "Daytime (4:00\u201319:00)",
                  "Requirements": [
                    "HP > 1000",
                    "MP > 1000",
                    "Offense > 100",
                    "Weight > 30"
                  ],
                  "Bonus": "Battles \u2265 5"
                },
                "evolvesTo": [
                  {
                    "name": "MetalGreymon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "Metal Part",
                      "Time": "Any",
                      "Requirements": [
                        "HP > 3000",
                        "MP > 3000",
                        "Offense > 300",
                        "Brains > 200",
                        "Weight > 30"
                      ],
                      "Bonus": "Battles \u2265 15, Care mistakes \u2264 2"
                    }
                  },
                  {
                    "name": "SkullGreymon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "Dark Bone",
                      "Time": "Any",
                      "Requirements": [
                        "HP > 2500",
                        "Offense > 250"
                      ],
                      "Bonus": "Care mistakes \u2265 15"
                    }
                  }
                ]
              },
              {
                "name": "Meramon",
                "stage": "Champion",
                "stats": {
                  "Item": "Fireball",
                  "Time": "Nighttime (19:00\u20134:00)",
                  "Requirements": [
                    "MP > 1200",
                    "Brains > 100",
                    "Weight > 20"
                  ],
                  "Bonus": "Battles \u2265 5"
                },
                "evolvesTo": [
                  {
                    "name": "Phoenixmon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "Wing of Flame",
                      "Time": "Any",
                      "Requirements": [
                        "MP > 4000",
                        "Brains > 250",
                        "Weight > 25"
                      ],
                      "Bonus": "Care mistakes \u2264 1"
                    }
                  }
                ]
              },
              {
                "name": "Devimon",
                "stage": "Champion",
                "stats": {
                  "Item": "Black Feather",
                  "Time": "Nighttime (19:00\u20134:00)",
                  "Requirements": [
                    "Brains > 150",
                    "Discipline < 30%",
                    "Care mistakes \u2265 5"
                  ],
                  "Bonus": "Happiness < 50%"
                },
                "evolvesTo": [
                  {
                    "name": "Myotismon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "Dark Cloak",
                      "Time": "Any",
                      "Requirements": [
                        "MP > 3000",
                        "Brains > 300",
                        "Weight > 30"
                      ],
                      "Bonus": "Care mistakes \u2265 10"
                    }
                  }
                ]
              },
              {
                "name": "Numemon",
                "stage": "Champion",
                "stats": {
                  "Item": "Rotten Meat",
                  "Time": "Any",
                  "Requirements": [
                    "Multiple care mistakes",
                    "Poor discipline"
                  ],
                  "Bonus": "Happiness very low"
                },
                "evolvesTo": [
                  {
                    "name": "Monzaemon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "Teddy Bear Suit",
                      "Time": "Any",
                      "Requirements": [
                        "Fuse Numemon with the Monzaemon suit in Toy Town"
                      ],
                      "Bonus": "Trigger event"
                    }
                  }
                ]
              }
            ]
          }
        ],
        "name": "Koromon"
      }
    ]
  },
  "Poyomon": {
    "name": "Poyomon",
    "stage": "Baby",
    "evolvesTo": [
      {
        "name": "Tokomon",
        "stage": "In-Training",
        "stats": {
          "Item": "\u2014",
          "Time": "Any",
          "Requirements": [],
          "Bonus": ""
        },
        "evolvesTo": [
          {
            "name": "Patamon",
            "stage": "Rookie",
            "stats": {
              "Item": "\u2014",
              "Time": "Any",
              "Requirements": [
                "HP > 100",
                "Discipline \u2265 50%"
              ],
              "Bonus": "Care mistakes \u2264 1"
            },
            "evolvesTo": [
              {
                "name": "Angemon",
                "stage": "Champion",
                "stats": {
                  "Item": "Holy Ring",
                  "Time": "Daytime (4:00\u201319:00)",
                  "Requirements": [
                    "HP > 1200",
                    "MP > 1500",
                    "Brains > 150",
                    "Weight > 20"
                  ],
                  "Bonus": "Battles \u2265 5"
                },
                "evolvesTo": [
                  {
                    "name": "MagnaAngemon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "Sacred Spear",
                      "Time": "Any",
                      "Requirements": [
                        "HP > 3500",
                        "Brains > 300"
                      ],
                      "Bonus": "Care mistakes \u2264 3"
                    }
                  }
                ]
              },
              {
                "name": "Centarumon",
                "stage": "Champion",
                "stats": {
                  "Item": "Aim Scope",
                  "Time": "Any",
                  "Requirements": [
                    "Speed > 150",
                    "Brains > 150",
                    "Weight > 25"
                  ],
                  "Bonus": "Battles \u2265 5"
                },
                "evolvesTo": [
                  {
                    "name": "Andromon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "Mechanical Core",
                      "Time": "Any",
                      "Requirements": [
                        "MP > 3000",
                        "Brains > 250"
                      ],
                      "Bonus": "Care mistakes \u2264 2"
                    }
                  }
                ]
              },
              {
                "name": "Numemon",
                "stage": "Champion",
                "stats": {
                  "Item": "Rotten Meat",
                  "Time": "Any",
                  "Requirements": [
                    "Multiple care mistakes",
                    "Poor discipline"
                  ],
                  "Bonus": "Happiness very low"
                },
                "evolvesTo": [
                  {
                    "name": "Monzaemon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "Teddy Bear Suit",
                      "Time": "Any",
                      "Requirements": [
                        "Fuse Numemon with the Monzaemon suit in Toy Town"
                      ],
                      "Bonus": "Trigger event"
                    }
                  }
                ]
              },
              {
                "name": "Vegiemon",
                "stage": "Champion",
                "stats": {
                  "Item": "Moldy Veggies",
                  "Time": "Any",
                  "Requirements": [
                    "Weight > 30",
                    "Discipline < 30%"
                  ],
                  "Bonus": "Care mistakes \u2265 5"
                },
                "evolvesTo": [
                  {
                    "name": "Vademon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "UFO Disk",
                      "Time": "Any",
                      "Requirements": [
                        "MP > 3000",
                        "Brains > 300"
                      ],
                      "Bonus": "Care mistakes \u2264 3"
                    }
                  }
                ]
              },
              {
                "name": "Kuwagamon",
                "stage": "Champion",
                "stats": {
                  "Item": "Beetle Fang",
                  "Time": "Daytime (4:00\u201319:00)",
                  "Requirements": [
                    "Offense > 200",
                    "Speed > 200",
                    "Weight > 25"
                  ],
                  "Bonus": "Battles \u2265 10"
                },
                "evolvesTo": [
                  {
                    "name": "HerculesKabuterimon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "Jungle Antenna",
                      "Time": "Any",
                      "Requirements": [
                        "HP > 3500",
                        "Offense > 300",
                        "Speed > 300"
                      ],
                      "Bonus": "Care mistakes \u2264 2"
                    }
                  }
                ]
              },
              {
                "name": "Bakemon",
                "stage": "Champion",
                "stats": {
                  "Item": "Ghost Sheet",
                  "Time": "Nighttime (19:00\u20134:00)",
                  "Requirements": [
                    "Brains > 150",
                    "Discipline < 40%"
                  ],
                  "Bonus": "Care mistakes \u2265 5"
                },
                "evolvesTo": [
                  {
                    "name": "Myotismon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "Dark Cloak",
                      "Time": "Any",
                      "Requirements": [
                        "MP > 3000",
                        "Brains > 300",
                        "Weight > 30"
                      ],
                      "Bonus": "Care mistakes \u2265 10"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "Yuramon": {
    "name": "Yuramon",
    "stage": "Baby",
    "evolvesTo": [
      {
        "name": "Tanemon",
        "stage": "In-Training",
        "stats": {
          "Item": "\u2014",
          "Time": "Any",
          "Requirements": [],
          "Bonus": ""
        },
        "evolvesTo": [
          {
            "name": "Palmon",
            "stage": "Rookie",
            "stats": {
              "Item": "\u2014",
              "Time": "Any",
              "Requirements": [
                "HP > 100",
                "Discipline \u2265 50%"
              ],
              "Bonus": "Care mistakes \u2264 1"
            },
            "evolvesTo": [
              {
                "name": "Togemon",
                "stage": "Champion",
                "stats": {
                  "Item": "Cactus Leaf",
                  "Time": "Daytime (4:00\u201319:00)",
                  "Requirements": [
                    "HP > 1500",
                    "MP > 1000",
                    "Brains > 150"
                  ],
                  "Bonus": "Battles \u2265 5"
                },
                "evolvesTo": [
                  {
                    "name": "Lillymon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "Flower Ring",
                      "Time": "Any",
                      "Requirements": [
                        "MP > 3000",
                        "Brains > 300"
                      ],
                      "Bonus": "Care mistakes \u2264 2"
                    }
                  }
                ]
              },
              {
                "name": "Unimon",
                "stage": "Champion",
                "stats": {
                  "Item": "Wing Horn",
                  "Time": "Daytime (4:00\u201319:00)",
                  "Requirements": [
                    "Speed > 200",
                    "Brains > 150",
                    "Weight > 20"
                  ],
                  "Bonus": "Battles \u2265 5"
                },
                "evolvesTo": [
                  {
                    "name": "Phoenixmon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "Wing of Flame",
                      "Time": "Any",
                      "Requirements": [
                        "MP > 4000",
                        "Brains > 250",
                        "Weight > 25"
                      ],
                      "Bonus": "Care mistakes \u2264 1"
                    }
                  }
                ]
              },
              {
                "name": "Numemon",
                "stage": "Champion",
                "stats": {
                  "Item": "Rotten Meat",
                  "Time": "Any",
                  "Requirements": [
                    "Multiple care mistakes",
                    "Poor discipline"
                  ],
                  "Bonus": "Happiness very low"
                },
                "evolvesTo": [
                  {
                    "name": "Monzaemon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "Teddy Bear Suit",
                      "Time": "Any",
                      "Requirements": [
                        "Fuse Numemon with the Monzaemon suit in Toy Town"
                      ],
                      "Bonus": "Trigger event"
                    }
                  }
                ]
              },
              {
                "name": "Ninjamon",
                "stage": "Champion",
                "stats": {
                  "Item": "Ninja Blade",
                  "Time": "Any",
                  "Requirements": [
                    "Speed > 200",
                    "Brains > 200",
                    "Weight < 30"
                  ],
                  "Bonus": "Battles \u2265 10"
                },
                "evolvesTo": [
                  {
                    "name": "Giromon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "Hacker Chip",
                      "Time": "Any",
                      "Requirements": [
                        "Speed > 300",
                        "Brains > 300"
                      ],
                      "Bonus": "Care mistakes \u2264 3"
                    }
                  }
                ]
              },
              {
                "name": "Kuwagamon",
                "stage": "Champion",
                "stats": {
                  "Item": "Beetle Fang",
                  "Time": "Daytime (4:00\u201319:00)",
                  "Requirements": [
                    "Offense > 200",
                    "Speed > 200",
                    "Weight > 25"
                  ],
                  "Bonus": "Battles \u2265 10"
                },
                "evolvesTo": [
                  {
                    "name": "HerculesKabuterimon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "Jungle Antenna",
                      "Time": "Any",
                      "Requirements": [
                        "HP > 3500",
                        "Offense > 300",
                        "Speed > 300"
                      ],
                      "Bonus": "Care mistakes \u2264 2"
                    }
                  }
                ]
              },
              {
                "name": "Bakemon",
                "stage": "Champion",
                "stats": {
                  "Item": "Ghost Sheet",
                  "Time": "Nighttime (19:00\u20134:00)",
                  "Requirements": [
                    "Brains > 150",
                    "Discipline < 40%"
                  ],
                  "Bonus": "Care mistakes \u2265 5"
                },
                "evolvesTo": [
                  {
                    "name": "Myotismon",
                    "stage": "Ultimate",
                    "stats": {
                      "Item": "Dark Cloak",
                      "Time": "Any",
                      "Requirements": [
                        "MP > 3000",
                        "Brains > 300",
                        "Weight > 30"
                      ],
                      "Bonus": "Care mistakes \u2265 10"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};