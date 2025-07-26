import pizza from '../assets/images/pizza.jpg'
import burger from '../assets/images/burger.jpeg'
import turkey from '../assets/images/turkey-sandwich.jpeg'
import salad from '../assets/images/salad.jpg'
import eggSandwich from '../assets/images/egg-sandwich.jpeg'
import brownie from '../assets/images/brownie.jpeg'
import iceCream from '../assets/images/ice-cream.jpeg'
import omelette from '../assets/images/omelette.jpg'

export const menu = [
    {
        id: 1,
        img: pizza,
        name: 'Pizza',
        price: 20,
        category: 'dinner',
        description: 'A pizza is a baked good made with a dough and a sauce.',
    },
    {
        id: 2,
        img: burger,
        name: 'Burger',
        price: 12,
        category: 'dinner',
        description: 'A burger is a sandwich made with a patty of ground beef.',
    },
    {
        id: 3,
        img: turkey,
        name: 'Turkey',
        price: 10,
        category: 'lunch',
        description: 'A turkey sandwich is a sandwich made with turkey.',
    },
    {
        id: 4,
        img: salad,
        name: 'Salad',
        price: 10,
        description: 'A salad is a dish consisting of mixed, mostly vegetables.',
        category: 'lunch',
    },
    {
        id: 5,
        img: eggSandwich,
        name: 'Egg Sandwich',
        price: 10,
        description: 'A sandwich made with an egg and a slice of bread.',
        category: 'breakfast',
    },
    {
        id: 6,
        img: omelette,
        name: 'Omelette',
        price: 10,
        description: 'A dish made with eggs and vegetables.',
        category: 'breakfast',
    },
    {
        id: 7,
        img: brownie,
        name: 'Brownie',
        price: 7,
        description: 'A brownie is a chocolate baked good.',
        category: 'dessert',
    },
    {
        id: 8,
        img: iceCream,
        name: 'Ice Cream',
        price: 5,
        description: 'A scoop of ice cream.',
        category: 'dessert',
    },
]
export default menu