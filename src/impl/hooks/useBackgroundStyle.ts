import colors from '../styles/pageBody.module.css';
import { PageColorName } from '../types/PageColor';

export default function useBackgroundStyle(color: PageColorName): string {
	switch (color) {
		case 'Obsidian':
			return colors.obsidian;
		case 'Baby pink':
			return colors.babypink;
		case 'Royal blue':
			return colors.royalblue;
		case 'Phoenix scarlet':
			return colors.phoenixscarlet;
		case 'Grape jelly':
			return colors.grapejelly;
		case 'Ogre green':
			return colors.ogregreen;
	}
}
