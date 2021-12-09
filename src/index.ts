import '../css/style.css';
import View from '@/view/mainView';

const $navToggle = document.querySelector('.nav-toggle');

$navToggle?.addEventListener('change', (e) => {
	const target = e.target as HTMLInputElement;

	if (target.checked) document.body.style.overflow = 'hidden';
	else document.body.style.overflow = 'visible';
});

View.getInstance();
