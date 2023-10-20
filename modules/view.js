export class View {
  constructor(api,) {
    this.app = document.querySelector('.app');
    this.api = api;

    this.searchLine = this.createElement('div', 'search-line');
    this.searchInput = this.createElement('input', 'search-input');
    this.searchInput.setAttribute('placeholder', 'Имя репозитория...');
    this.resultList = this.createElement('ul', 'resultList');
    this.searchLine.append(this.searchInput);
    this.searchLine.append(this.resultList);

    this.main = this.createElement('div', 'main');
    this.selectedList = this.createElement('ul', 'selectedList');
    this.main.append(this.selectedList);
    

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
    repoName.addEventListener('click', () => {
      this.selectedRepo(repoData.name, repoData.owner.login, repoData.stargazers_count);
      this.searchInput.value = '';
      this.resultList.innerHTML = '';
    });
    repoName.insertAdjacentHTML('beforeend', `${repoData.name}`);
    this.resultList.append(repoName);
  }

  selectedRepo(repoName, repoOwner, repoStars) {
    const selectBlock = this.createElement('li', 'select-block');
    const closeBtn = this.createElement('button', 'close-button');
    closeBtn.textContent = 'X'
    closeBtn.addEventListener('click', () => {
      selectBlock.remove();
    })
    selectBlock.insertAdjacentHTML('beforeend', `Name: ${repoName}<br>`);
    selectBlock.insertAdjacentHTML('beforeend', `Owner: ${repoOwner}<br>`);
    selectBlock.insertAdjacentHTML('beforeend', `Stars: ${repoStars}<br>`);
    selectBlock.insertAdjacentElement('beforeend', closeBtn)
    this.selectedList.append(selectBlock);
  }
}