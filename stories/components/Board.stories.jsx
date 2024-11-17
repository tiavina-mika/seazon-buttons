import React from "react";
import Board from "../../components/board/Board";

const meta = {
  title: 'New design system/components/Board',
  component: Board,
  parameters: {
    layout: 'centered',
  },
};
export default meta;

export const BoardExample = {
  args: {
   items: [
    {
      "name": "lipids",
      "label": "Lipides"
    },
    {
      "name": "saturatedFats",
      "label": "Dont acides gras saturés",
      "subContent": true
    },
    {
      "name": "carbohydrates",
      "label": "Glucides"
    },
    {
      "name": "sugars",
      "label": "Dont Sucres",
      "subContent": true
    },
    {
      "name": "sugarAdd",
      "label": "Dont Sucres ajoutés",
      "subContent": true
    },
    {
      "name": "proteins",
      "label": "Proteines"
    },
    {
      "name": "fibers",
      "label": "Fibres"
    },
    {
      "name": "salts",
      "label": "Sels"
    }
  ],
   meal: { "grams": 390 },
   nutritions: {
    "calories": 589,
    "lipids": 32.3,
    "saturatedFats": 5.4,
    "carbohydrates": 55.1,
    "proteins": 13.8,
    "fibers": 10.3,
    "sugars": 2.5,
    "salts": 4.5,
    "carboneScore": "B",
    "healthyRate": "B",
    "socialNote": "A",
    "glycemicLoad": 32.2,
    "per100": {
      "proteins": 13.8,
      "calcium": 135.818,
      "copper": 0.353,
      "iron": 4.242,
      "magnesium": 59.124,
      "manganese": 0.818,
      "phosphorus": 232.164,
      "potassium": 450.576,
      "selenium": 6.723,
      "zinc": 2.233,
      "vitaminD": 0.668,
      "vitaminC": 18.17,
      "vitaminA": 649.148,
      "omega6": 2.311,
      "omega3": 0.201,
      "sugarAdd": 0.5
    }
  },
   title: "Title",
  },
  withCalories: true,
};

BoardExample.storyName = 'Board';