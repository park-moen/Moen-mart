export default abstract class Component<T extends HTMLElement> {
	templateEl: HTMLTemplateElement;
	targetEl: T;

	constructor(templateId: string) {
		this.templateEl = document.getElementById(templateId) as HTMLTemplateElement;

		const importedNode = document.importNode(this.templateEl.content, true);

		this.targetEl = importedNode.firstElementChild as T;
	}
}
