import Carousel from '../components/carousel';

export default class View {
	private static instance: View;
	private $main: HTMLElement;
	private $carousel: Carousel;
	private constructor() {
		this.$main = document.querySelector('.main') as HTMLElement;
		this.$carousel = new Carousel();
		this.render();
	}

	static getInstance() {
		return this.instance ? this.instance : (this.instance = new View());
	}

	render() {
		this.$main?.appendChild(this.$carousel.targetEl);
	}
}
