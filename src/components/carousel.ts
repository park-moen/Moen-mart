import Component from './frameComponent';

interface CarouselAction {
	prevBtn(item: string): void;
	backBtn(item: string): void;
}

export default class Carousel extends Component<HTMLElement> {
	constructor() {
		super('carousel');
	}
}
