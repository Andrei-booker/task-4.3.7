export class View {
  constructor() {
    this.app = document.querySelector('.app');

    this.searchLine = this.createElement('div', 'search-line');
    this.searchInput = this.createElement('input', 'search-input');
    this.searchInput.setAttribute('placeholder', 'Имя репозитория...');
    this.searchLine.append(this.searchInput);

    this.main = this.createElement('div', 'main');
    this.resultList = this.createElement('ul', 'resultList');
    this.selectedList = this.createElement('ul', 'selectedList');
    this.main.append(this.selectedList);
    this.main.append(this.resultList);
    

    this.app.append(this.searchLine);
    this.app.append(this.main);

  }

  createElement(elementTag, elementClass) {
    const element = document.createElement(elementTag);
    if (elementClass) element.classList.add(elementClass);
    return element;
  }

  searchedRepo(repoData) {
    const repoName = this.createElement('li', 'repoName');
    repoName.insertAdjacentHTML('beforeend', `${repoData.name}`);
    this.resultList.append(repoName);
  }

  selectedRepo(repoData) {
    const repoElement = this.createElement('li', 'repoElement');
    repoElement.insertAdjacentHTML('beforeend', `<span class="text">Name: ${repoData.name}</span><br>`);
    repoElement.insertAdjacentHTML('beforeend', `<span class="text">Owner: ${repoData.owner.login}</span><br>`);
    repoElement.insertAdjacentHTML('beforeend', `<span class="text">Stars: ${repoData.stargazers_count}</span><br>`);
    this.selectedList.append(repoElement);
  }
}